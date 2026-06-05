"""Shared utilities for extracting books into JSON for the site reader."""

from __future__ import annotations

import json
import re
import unicodedata
from pathlib import Path
from typing import Any

import fitz

ROOT = Path(__file__).resolve().parents[2]
BOOK_SOURCES = ROOT / "public" / "downloads" / "books"


def slugify(title: str) -> str:
    s = title.lower()
    s = unicodedata.normalize("NFKD", s)
    s = s.encode("ascii", "ignore").decode("ascii")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or "section"


def clean_line(line: str) -> str:
    line = line.replace("\ufb01", "fi").replace("\ufb02", "fl")
    line = line.replace("ﬁ", "fi").replace("ﬂ", "fl")
    line = re.sub(r"\s+", " ", line).strip()
    return line


def normalize_title(title: str) -> str:
    title = title.replace("Ever)'", "Every").replace("aboui", "about")
    title = title.replace("Miser)'", "Misery").replace("Enlighienment", "Enlightenment")
    title = title.replace("Sake oe", "Sake of").replace("Discovery oe", "Discovery of")
    title = title.replace("Promise oj", "Promise of")
    title = title.replace("Its ", "It's ").replace("Its Black", "It's Black or White")
    title = re.sub(r"\s+", " ", title).strip()
    return title


def postprocess_text(text: str) -> str:
    text = text.replace("Enlightenmeni", "Enlightenment")
    text = text.replace("gomg", "going")
    text = text.replace("warn", "want")
    text = re.sub(r"(\S)(Q:)", r"\1 \2", text)
    text = re.sub(r"(\S)(A:)", r"\1 \2", text)
    text = re.sub(r"([.!?])([A-Z])", r"\1 \2", text)
    text = re.sub(
        r"\b(a|an|the|in|on|at|to|of|is|it|he|we|my|as|by|or|if|so|be|do|up|no|go|me|us|am|an)\b(?=[a-z]{3,})",
        r"\1 ",
        text,
        flags=re.IGNORECASE,
    )
    text = re.sub(r"\s+", " ", text)
    return text


def finalize_body(text: str) -> str:
    paras = [postprocess_text(p) for p in text.split("\n\n")]
    return "\n\n".join(p for p in paras if len(p.strip()) > 20)


def pages_text(doc: fitz.Document, start: int, end: int) -> str:
    chunks: list[str] = []
    for i in range(start, min(end + 1, doc.page_count)):
        chunks.append(doc[i].get_text())
    return "\n".join(chunks)


def extract_body(raw: str, title: str) -> str:
    lines = [clean_line(ln) for ln in raw.splitlines()]
    lines = [ln for ln in lines if ln]

    norm_title = normalize_title(title).lower()
    while lines and lines[0].lower().replace("'", "'") in {
        norm_title,
        norm_title.replace("the ", ""),
    }:
        lines.pop(0)
    if lines and lines[0].lower() == title.split(":")[0].lower():
        lines.pop(0)

    while lines and re.fullmatch(r"\d{1,3}", lines[-1]):
        lines.pop()

    paragraphs: list[str] = []
    current: list[str] = []

    for line in lines:
        if re.fullmatch(r"\d{1,3}", line):
            continue
        if len(line) <= 2 and not line.isalpha():
            continue
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
        if re.match(r"^Chapter\s+\d+$", line, re.I):
            continue
        if re.match(r"^the (first|second|third|fourth|fifth) tenet$", line, re.I):
            continue
        if line.upper() in {"PART ONE", "PART TWO", "PART I", "PART II", "PART III", "PART IV"}:
            continue

        current.append(line)

    if current:
        paragraphs.append(" ".join(current))

    raw = "\n\n".join(p for p in paragraphs if len(p) > 20)
    return finalize_body(raw)


def extract_txt_section(lines: list[str], start: int, end: int, title: str) -> str:
    chunk = lines[start:end]
    text = "\n".join(chunk)
    return extract_body(text, title)


def unique_id(base: str, existing: set[str]) -> str:
    chapter_id = slugify(base)
    if chapter_id not in existing:
        existing.add(chapter_id)
        return chapter_id
    n = 2
    while f"{chapter_id}-{n}" in existing:
        n += 1
    final = f"{chapter_id}-{n}"
    existing.add(final)
    return final


def write_book(
    slug: str,
    title: str,
    subtitle: str,
    credits: str,
    parts: list[dict[str, str]],
    chapters: list[dict[str, Any]],
) -> None:
    out_dir = ROOT / "src" / "data" / "books" / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    chapter_meta: list[dict[str, Any]] = []
    for ch in chapters:
        body = ch.pop("body")
        content_path = f"chapters/{ch['id']}.json"
        chapter_file = out_dir / content_path
        chapter_file.parent.mkdir(parents=True, exist_ok=True)
        chapter_file.write_text(
            json.dumps({"body": body}, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        chapter_meta.append({**ch, "contentFile": content_path})

    index = {
        "slug": slug,
        "title": title,
        "subtitle": subtitle,
        "credits": credits,
        "parts": parts,
        "chapters": chapter_meta,
    }
    (out_dir / "index.json").write_text(
        json.dumps(index, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"Wrote {len(chapter_meta)} chapters to {out_dir}")
