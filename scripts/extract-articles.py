#!/usr/bin/env python3
"""Extract PDF articles into journal archive content."""

from __future__ import annotations

import html
import json
import re
import shutil
import sys
from datetime import UTC, datetime
from pathlib import Path

import fitz

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib.book_extract import clean_line, postprocess_text  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
INDEX_PATH = ROOT / "src/data/journal/index.json"
CONTENT_DIR = ROOT / "src/data/journal/content"
ARTICLE_PDF_DIR = ROOT / "public/downloads/articles"

ARTICLES = [
    {
        "slug": "declaration-of-integrity",
        "title": "A Declaration of Integrity",
        "subtitle": "An open letter from Andrew Cohen to his friends and foes",
        "posted_at": "2006-10-18T12:00:00",
        "date": "18/10/2006",
        "source_pdf": "Andrew Cohen declaration-of-integrity.pdf",
        "header_patterns": [
            r"^A Declaration of Integrity$",
            r"^An open letter from Andrew Cohen",
            r"^October 18, 2006$",
            r"^October 18, 2006 A Declaration of Integrity$",
        ],
    },
    {
        "slug": "i-just-called-to-say-i-love-you",
        "title": "I Just Called to Say I Love You",
        "subtitle": "Reflections on the Multiple Meanings of Love",
        "posted_at": "2010-01-01T12:00:00",
        "date": "01/01/2010",
        "source_pdf": "I Just Called to Say I Love You by Andrew Cohen.pdf",
        "header_patterns": [
            r"^I Just Called to",
            r"^Say I Love You",
            r"^Reflections on the Multiple Meanings of Love$",
            r"^by Andrew Cohen$",
            r'^["\u201c]I Just Called to Say I Love You["\u201d]$',
        ],
    },
    {
        "slug": "the-ever-unreasonable-nature-of-spirit",
        "title": "The Ever-Unreasonable Nature of Spirit",
        "subtitle": None,
        "posted_at": "2010-05-31T12:00:00",
        "date": "31/05/2010",
        "source_pdf": "The Ever-Unreasonable Nature of Spirit by Andrew Cohen.pdf",
        "header_patterns": [
            r"^The Ever-Unreasonable",
            r"^Nature of Spirit$",
            r"^by Andrew Cohen$",
        ],
    },
]

SECTION_HEADING_PATTERNS = [
    re.compile(r"^Part [IVXLC]+$", re.I),
    re.compile(r"^Part (One|Two|Three|Four|Five)$", re.I),
    re.compile(r"^About the Author$", re.I),
]


def normalize_text(text: str) -> str:
    text = text.replace("\u00a0", " ")
    text = re.sub(r"(\w)-\s+(\w)", r"\1\2", text)
    text = re.sub(r"(\w)-\n(\w)", r"\1\2", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def matches_any(text: str, patterns: list[str]) -> bool:
    return any(re.search(pattern, text, re.I) for pattern in patterns)


def is_page_chrome(text: str) -> bool:
    if not text:
        return True
    if text.startswith("© EnlightenNext"):
        return True
    if re.fullmatch(r"\d{1,3}", text):
        return True
    return False


def is_section_heading(text: str) -> bool:
    if not text or len(text) > 100:
        return False
    if text.endswith((".", "!", "?", ",", ";", ":")):
        return False
    if any(pattern.match(text) for pattern in SECTION_HEADING_PATTERNS):
        return True
    if text in {"Andrew Cohen"}:
        return False
    if text.startswith("http"):
        return False
    words = text.split()
    if 2 <= len(words) <= 12 and text[0].isupper():
        titleish = sum(
            1
            for w in words
            if w[0].isupper() or w.lower() in {"and", "of", "the", "a", "an", "in", "on", "to", "for", "with", "versus", "is"}
        )
        if titleish >= len(words) - 1 and not text.endswith("."):
            return True
    return False


def block_text(raw: str) -> str:
    lines = [clean_line(ln) for ln in raw.splitlines()]
    lines = [ln for ln in lines if ln and not is_page_chrome(ln)]
    if not lines:
        return ""
    return normalize_text(" ".join(lines))


def extract_blocks(doc: fitz.Document, header_patterns: list[str]) -> list[tuple[str, str]]:
    ordered: list[tuple[int, float, float, str, float]] = []

    for page_index, page in enumerate(doc):
        page_width = page.rect.width
        midpoint = page_width / 2
        page_blocks: list[tuple[float, float, str, float]] = []

        for block in page.get_text("blocks"):
            if block[6] != 0:
                continue
            text = block_text(block[4])
            if not text or text.lower() == "zzz":
                continue
            if matches_any(text, header_patterns):
                continue
            page_blocks.append((block[1], block[0], text, block[0]))

        left = sorted((b for b in page_blocks if b[3] < midpoint), key=lambda b: (b[0], b[1]))
        right = sorted((b for b in page_blocks if b[3] >= midpoint), key=lambda b: (b[0], b[1]))

        if left and right:
            for y, x, text, _ in left + right:
                ordered.append((page_index, y, x, text, x))
        else:
            for y, x, text, _ in sorted(page_blocks, key=lambda b: (b[0], b[1])):
                ordered.append((page_index, y, x, text, x))

    result: list[tuple[str, str]] = []
    for _, _, _, text, _ in ordered:
        if is_section_heading(text):
            result.append(("h2", text))
        else:
            result.append(("p", postprocess_text(text)))

    deduped: list[tuple[str, str]] = []
    for block in result:
        if deduped and deduped[-1] == block:
            continue
        deduped.append(block)
    return deduped


def blocks_to_html(blocks: list[tuple[str, str]], subtitle: str | None) -> str:
    parts: list[str] = []
    if subtitle:
        parts.append(f"<p><em>{html.escape(subtitle)}</em></p>")
    for kind, text in blocks:
        if not text.strip():
            continue
        escaped = html.escape(text)
        if kind == "h2":
            parts.append(f"<h2>{escaped}</h2>")
        else:
            parts.append(f"<p>{escaped}</p>")
    return "".join(parts)


def load_index() -> dict:
    return json.loads(INDEX_PATH.read_text(encoding="utf-8"))


def upsert_article(index: dict, article_meta: dict) -> None:
    articles = index.setdefault("articles", [])
    articles[:] = [a for a in articles if a.get("slug") != article_meta["slug"]]
    articles.append(article_meta)
    articles.sort(key=lambda a: a["postedAt"], reverse=True)
    index["count"] = len(articles)


def ingest_article(config: dict, source_dir: Path) -> None:
    slug = config["slug"]
    source_path = source_dir / config["source_pdf"]
    if not source_path.exists():
        raise FileNotFoundError(source_path)

    doc = fitz.open(source_path)
    blocks = extract_blocks(doc, config["header_patterns"])
    content_html = blocks_to_html(blocks, config.get("subtitle"))
    excerpt_source = next((text for kind, text in blocks if kind == "p"), config["title"])
    excerpt = excerpt_source[:220].rstrip() + ("…" if len(excerpt_source) > 220 else "")

    ARTICLE_PDF_DIR.mkdir(parents=True, exist_ok=True)
    pdf_dest = ARTICLE_PDF_DIR / f"{slug}.pdf"
    shutil.copy2(source_path, pdf_dest)

    scraped_at = datetime.now(UTC).strftime("%Y-%m-%dT%H:%M:%SZ")
    source_url = f"/downloads/articles/{slug}.pdf"

    CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    content_file = CONTENT_DIR / f"{slug}.json"
    content_file.write_text(
        json.dumps(
            {
                "slug": slug,
                "contentHtml": content_html,
                "scrapedAt": scraped_at,
                "sourceUrl": source_url,
            },
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )

    index = load_index()
    upsert_article(
        index,
        {
            "slug": slug,
            "title": config["title"],
            "author": "Andrew Cohen",
            "postedAt": config["posted_at"],
            "date": config["date"],
            "sourceUrl": source_url,
            "excerpt": excerpt,
            "categories": ["read", "archive"],
            "tags": ["article", "journal", "read", "archive"],
            "thumbnail": None,
            "hasContent": bool(content_html.strip()),
        },
    )
    index["scrapedAt"] = scraped_at
    INDEX_PATH.write_text(
        json.dumps(index, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )

    print(f"Added {slug}: {len(blocks)} blocks → {content_file.name}, {pdf_dest.name}")


def main() -> int:
    source_dir = Path("/Users/paulbloch/Downloads")
    for config in ARTICLES:
        ingest_article(config, source_dir)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
