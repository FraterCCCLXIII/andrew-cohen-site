#!/usr/bin/env python3
"""Extract Enlightenment Is a Secret from PDF into structured JSON for the book reader."""

from __future__ import annotations

import json
import re
import unicodedata
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "public" / "downloads" / "books" / "enlightenment-is-a-secret.pdf"
OUT_DIR = ROOT / "src" / "data" / "books" / "enlightenment-is-a-secret"
OUT_INDEX = OUT_DIR / "index.json"

# Printed book page → PDF page index (0-based)
PRINTED_TO_PDF = 20

FRONT_MATTER = [
    {"id": "acknowledgements", "title": "Acknowledgements", "pdf_start": 9, "pdf_end": 10},
    {"id": "foreword", "title": "Foreword", "pdf_start": 11, "pdf_end": 16},
    {"id": "preface", "title": "Preface", "pdf_start": 17, "pdf_end": 18},
    {"id": "introduction", "title": "Introduction", "pdf_start": 19, "pdf_end": 19},
]

PARTS = [
    {"id": "i", "label": "I · Enlightenment", "min": 4, "max": 8},
    {"id": "ii", "label": "II · Longing for Liberation", "min": 9, "max": 42},
    {"id": "iii", "label": "III · Seeking", "min": 43, "max": 122},
    {"id": "iv", "label": "IV · Understanding", "min": 123, "max": 192},
    {"id": "v", "label": "V · Surrender Is Liberation", "min": 193, "max": 202},
    {"id": "vi", "label": "VI · Renunciation", "min": 203, "max": 232},
    {"id": "vii", "label": "VII · Vigilance", "min": 233, "max": 262},
    {"id": "viii", "label": "VIII · Not a Personal Matter", "min": 263, "max": 276},
]

BACK_MATTER = [
    {"id": "glossary", "title": "Glossary", "pdf_start": 297, "pdf_end": 297},
]


def slugify(title: str) -> str:
    s = title.lower()
    s = unicodedata.normalize("NFKD", s)
    s = s.encode("ascii", "ignore").decode("ascii")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or "section"


def normalize_title(title: str) -> str:
    title = title.replace("Ever)'", "Every").replace("aboui", "about")
    title = title.replace("Miser)'", "Misery").replace("Enlighienment", "Enlightenment")
    title = re.sub(r"\s+", " ", title).strip()
    # Index uses "The X" → prefer "The X" as-is
    return title


def clean_line(line: str) -> str:
    line = line.replace("\ufb01", "fi").replace("\ufb02", "fl")
    line = line.replace("ﬁ", "fi").replace("ﬂ", "fl")
    line = re.sub(r"\s+", " ", line).strip()
    return line


def pages_text(doc: fitz.Document, start: int, end: int) -> str:
    chunks: list[str] = []
    for i in range(start, min(end + 1, doc.page_count)):
        chunks.append(doc[i].get_text())
    return "\n".join(chunks)


def is_garbage_title(title: str) -> bool:
    if re.search(r"\d{2,}\s*$", title):
        return True
    # TOC lines with spaced letters: "R e n o u n c e T i m e"
    letters = [c for c in title if c.isalpha()]
    spaces = title.count(" ")
    if letters and spaces / max(len(letters), 1) > 0.8:
        return True
    if re.search(r"(\b\w\s){5,}", title):
        return True
    if title.count(" ") > len(title) * 0.45:
        return True
    return False


def postprocess_text(text: str) -> str:
    text = text.replace("Enlightenmeni", "Enlightenment")
    text = text.replace("gomg", "going")
    text = text.replace("warn", "want")
    text = text.replace("lo ", "to ")
    # Insert space before Q:/A: dialogue markers
    text = re.sub(r"(\S)(Q:)", r"\1 \2", text)
    text = re.sub(r"(\S)(A:)", r"\1 \2", text)
    # Space after sentence punctuation when missing
    text = re.sub(r"([.!?])([A-Z])", r"\1 \2", text)
    # Common glued articles (limited set to avoid over-correction)
    text = re.sub(
        r"\b(a|an|the|in|on|at|to|of|is|it|he|we|my|as|by|or|if|so|be|do|up|no|go|me|us|am|an)\b(?=[a-z]{3,})",
        r"\1 ",
        text,
        flags=re.IGNORECASE,
    )
    text = re.sub(r"\s+", " ", text)
    # Restore paragraph breaks
    return text


def finalize_body(text: str) -> str:
    paras = [postprocess_text(p) for p in text.split("\n\n")]
    return "\n\n".join(p for p in paras if len(p.strip()) > 20)


def extract_body(raw: str, title: str) -> str:
    lines = [clean_line(ln) for ln in raw.splitlines()]
    lines = [ln for ln in lines if ln]

    # Drop title line(s) at start
    norm_title = normalize_title(title).lower()
    while lines and lines[0].lower().replace("'", "'") in {
        norm_title,
        norm_title.replace("the ", ""),
    }:
        lines.pop(0)
    if lines and lines[0].lower() == title.split(":")[0].lower():
        lines.pop(0)

    # Drop trailing printed page numbers
    while lines and re.fullmatch(r"\d{1,3}", lines[-1]):
        lines.pop()

    paragraphs: list[str] = []
    current: list[str] = []

    for line in lines:
        if re.fullmatch(r"\d{1,3}", line):
            continue
        if len(line) <= 2 and not line.isalpha():
            continue
        # Section break: short all-caps or roman numeral only
        if re.fullmatch(r"[IVXLC]+", line):
            if current:
                paragraphs.append(" ".join(current))
                current = []
            continue

        if line.isupper() and len(line) < 40 and " " in line:
            if current:
                paragraphs.append(" ".join(current))
                current = []
            continue

        current.append(line)

    if current:
        paragraphs.append(" ".join(current))

    raw = "\n\n".join(p for p in paragraphs if len(p) > 20)
    return finalize_body(raw)


def parse_index(doc: fitz.Document) -> list[dict]:
    index_text = ""
    for i in range(299, min(305, doc.page_count)):
        index_text += doc[i].get_text() + "\n"

    # Join wrapped index lines
    merged: list[str] = []
    buffer = ""
    for line in index_text.splitlines():
        line = clean_line(line)
        if not line or line.lower() == "index":
            continue
        if re.search(r"\d{1,3}\s*$", line):
            buffer = f"{buffer} {line}".strip() if buffer else line
            merged.append(buffer)
            buffer = ""
        else:
            buffer = f"{buffer} {line}".strip() if buffer else line
    if buffer:
        merged.append(buffer)

    entries: list[dict] = []
    seen: set[str] = set()
    for line in merged:
        m = re.match(r"^(.+?)\s+(\d{1,3})\s*$", line)
        if not m:
            continue
        title = normalize_title(m.group(1))
        page = int(m.group(2))
        if page < 4 or page > 276:
            continue
        if len(title) < 8:
            continue
        if is_garbage_title(title):
            continue
        if re.search(r"\d{3,}", title):
            continue
        key = f"{page}:{title.lower()}"
        if key in seen:
            continue
        seen.add(key)
        entries.append({"title": title, "printed_page": page})

    entries.sort(key=lambda e: (e["printed_page"], e["title"]))
    return entries


def part_for_page(page: int) -> str:
    for part in PARTS:
        if part["min"] <= page <= part["max"]:
            return part["id"]
    return "other"


def main() -> None:
    doc = fitz.open(PDF)
    index_entries = parse_index(doc)

    # Build chapter ranges from index
    body_chapters: list[dict] = []
    for i, entry in enumerate(index_entries):
        pdf_start = entry["printed_page"] + PRINTED_TO_PDF
        if i + 1 < len(index_entries):
            next_page = index_entries[i + 1]["printed_page"]
            pdf_end = next_page + PRINTED_TO_PDF - 1
        else:
            pdf_end = 276 + PRINTED_TO_PDF
        pdf_end = max(pdf_start, pdf_end)

        raw = pages_text(doc, pdf_start, pdf_end)
        body = finalize_body(extract_body(raw, entry["title"]))
        if len(body) < 80:
            continue

        chapter_id = slugify(entry["title"])
        # Ensure unique ids
        base_id = chapter_id
        n = 2
        existing = {c["id"] for c in body_chapters}
        while chapter_id in existing:
            chapter_id = f"{base_id}-{n}"
            n += 1

        body_chapters.append(
            {
                "id": chapter_id,
                "title": entry["title"],
                "printedPage": entry["printed_page"],
                "partId": part_for_page(entry["printed_page"]),
                "body": body,
            }
        )

    # Front & back matter
    front: list[dict] = []
    for fm in FRONT_MATTER:
        raw = pages_text(doc, fm["pdf_start"], fm["pdf_end"])
        body = finalize_body(extract_body(raw, fm["title"]))
        front.append(
            {
                "id": fm["id"],
                "title": fm["title"],
                "partId": "front-matter",
                "body": body,
            }
        )

    back: list[dict] = []
    for bm in BACK_MATTER:
        raw = pages_text(doc, bm["pdf_start"], bm["pdf_end"])
        body = finalize_body(extract_body(raw, bm["title"]))
        back.append(
            {
                "id": bm["id"],
                "title": bm["title"],
                "partId": "back-matter",
                "body": body,
            }
        )

    all_chapters = front + body_chapters + back

    parts = [
        {"id": "front-matter", "label": "Front Matter"},
        *[{"id": p["id"], "label": p["label"]} for p in PARTS],
        {"id": "back-matter", "label": "Back Matter"},
    ]

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    # Write chapter bodies as separate files to keep index small
    chapter_meta: list[dict] = []
    for ch in all_chapters:
        content_path = f"chapters/{ch['id']}.json"
        chapter_file = OUT_DIR / content_path
        chapter_file.parent.mkdir(parents=True, exist_ok=True)
        chapter_file.write_text(
            json.dumps({"body": ch.pop("body")}, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        chapter_meta.append({**ch, "contentFile": content_path})

    index = {
        "slug": "enlightenment-is-a-secret",
        "title": "Enlightenment Is a Secret",
        "subtitle": "Teachings of Liberation",
        "credits": "Copyright © 1991, 1995 by Moksha Foundation, Inc. · ISBN 1-883929-08-3",
        "parts": parts,
        "chapters": chapter_meta,
    }

    OUT_INDEX.write_text(json.dumps(index, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(chapter_meta)} chapters to {OUT_DIR}")


if __name__ == "__main__":
    main()
