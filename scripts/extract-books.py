#!/usr/bin/env python3
"""Extract all available Andrew Cohen books into structured JSON for the reader."""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path

import fitz

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib.book_extract import (  # noqa: E402
    BOOK_SOURCES,
    ROOT,
    extract_body,
    extract_txt_section,
    normalize_title,
    pages_text,
    slugify,
    unique_id,
    write_book,
)

CHAPTER_WORDS = {
    "ONE": 1,
    "TWO": 2,
    "THREE": 3,
    "FOUR": 4,
    "FIVE": 5,
    "SIX": 6,
    "SEVEN": 7,
    "EIGHT": 8,
    "NINE": 9,
    "TEN": 10,
    "ELEVEN": 11,
    "TWELVE": 12,
    "THIRTEEN": 13,
    "FOURTEEN": 14,
    "FIFTEEN": 15,
    "SIXTEEN": 16,
    "SEVENTEEN": 17,
    "EIGHTEEN": 18,
    "NINETEEN": 19,
    "TWENTY": 20,
}


def extract_secret() -> None:
    subprocess.run(
        [sys.executable, str(ROOT / "scripts/extract-enlightenment-is-a-secret.py")],
        check=True,
    )


def extract_unconditional() -> None:
    pdf = BOOK_SOURCES / "an-unconditional-relationship-to-life.pdf"
    doc = fitz.open(pdf)
    offset = 17  # printed page → PDF page index (0-based)

    toc_entries = [
        ("What Is It All About?", 3, "opening"),
        ("Odd Encounters", 7, "opening"),
        ("The Quality of Attention", 11, "opening"),
        ("Thought Does Not Create Karma", 17, "opening"),
        ("Impersonal Enlightenment", 25, "impersonal"),
        ("A State of Constant Revolution", 27, "impersonal"),
        ("Fullness or Emptiness?", 33, "impersonal"),
        ("Diverging Paths", 39, "impersonal"),
        ("A Crisis of Trust", 43, "impersonal"),
        ("The Modern Spiritual Predicament", 53, "predicament"),
        ("Meeting the Status Quo", 57, "predicament"),
        ("It's Black or White", 63, "predicament"),
        ("The Discovery of a Bigger View", 67, "discovery"),
        ("For the Sake of the Whole", 73, "discovery"),
        ("Right View Is the Discovery of the Holy Grail", 77, "discovery"),
        ("The Zen Master and the Yogi", 81, "visceral"),
        ("The Visceral Response", 91, "visceral"),
        ("The Law of Love", 99, "visceral"),
        ("Truth Is Stranger Than Fiction", 105, "visceral"),
        ("The Problem with Advaita", 115, "science"),
        ("Heaven, Earth and Creation", 125, "science"),
        ("Mother of the Universe", 133, "science"),
        ("The Science of Enlightenment", 139, "science"),
        ("The Unknown Can Only Be Unknown", 147, "unknown"),
        ("Is It Possible?", 157, "unknown"),
    ]

    parts = [
        {"id": "front-matter", "label": "Front Matter"},
        {"id": "opening", "label": "What Is It All About?"},
        {"id": "impersonal", "label": "Impersonal Enlightenment"},
        {"id": "predicament", "label": "The Modern Spiritual Predicament"},
        {"id": "discovery", "label": "The Discovery of a Bigger View"},
        {"id": "visceral", "label": "The Visceral Response"},
        {"id": "science", "label": "The Science of Enlightenment"},
        {"id": "unknown", "label": "The Unknown Can Only Be Unknown"},
    ]

    front = [
        {"id": "acknowledgements", "title": "Acknowledgements", "pdf_start": 12, "pdf_end": 13},
        {"id": "preface", "title": "Preface", "pdf_start": 14, "pdf_end": 15},
        {"id": "introduction", "title": "Introduction", "pdf_start": 16, "pdf_end": 19},
    ]

    existing: set[str] = set()
    chapters: list[dict] = []

    for fm in front:
        raw = pages_text(doc, fm["pdf_start"], fm["pdf_end"])
        body = extract_body(raw, fm["title"])
        chapters.append(
            {
                "id": fm["id"],
                "title": fm["title"],
                "partId": "front-matter",
                "body": body,
            }
        )
        existing.add(fm["id"])

    for i, (title, printed_page, part_id) in enumerate(toc_entries):
        pdf_start = printed_page + offset
        if i + 1 < len(toc_entries):
            pdf_end = toc_entries[i + 1][1] + offset - 1
        else:
            pdf_end = doc.page_count - 1
        pdf_end = max(pdf_start, pdf_end)

        raw = pages_text(doc, pdf_start, pdf_end)
        body = extract_body(raw, title)
        if len(body) < 80:
            continue

        chapter_id = unique_id(title, existing)
        chapters.append(
            {
                "id": chapter_id,
                "title": title,
                "printedPage": printed_page,
                "partId": part_id,
                "body": body,
            }
        )

    write_book(
        slug="an-unconditional-relationship-to-life",
        title="An Unconditional Relationship to Life",
        subtitle="The Odyssey of a Young American Spiritual Teacher",
        credits="Copyright © 1995 by Moksha Foundation, Inc. · ISBN 1-883929-12-1",
        parts=parts,
        chapters=chapters,
    )


def extract_embracing() -> None:
    pdf = BOOK_SOURCES / "embracing-heaven-and-earth.pdf"
    doc = fitz.open(pdf)

    parts = [
        {"id": "front-matter", "label": "Front Matter"},
        {"id": "tenets", "label": "The Five Fundamental Tenets of Enlightenment"},
        {"id": "desire", "label": "Desire: The Perennial Obstacle"},
        {"id": "psychology", "label": "The Psychology of Liberation"},
        {"id": "essays", "label": "Essays"},
    ]

    sections = [
        ("acknowledgements", "Acknowledgements", "front-matter", 8, 9),
        ("preface", "Preface", "front-matter", 10, 11),
        ("foreword", "Foreword", "front-matter", 12, 15),
        ("introduction", "Introduction", "front-matter", 16, 21),
        ("clarity-of-intention", "Clarity of Intention", "tenets", 26, 37),
        ("the-law-of-volitionality", "The Law of Volitionality", "tenets", 38, 49),
        ("face-everything-and-avoid-nothing", "Face Everything and Avoid Nothing", "tenets", 50, 55),
        ("the-truth-of-impersonality", "The Truth of Impersonality", "tenets", 56, 61),
        ("for-the-sake-of-the-whole", "For the Sake of the Whole", "tenets", 62, 69),
        ("the-promise-of-perfection", "The Promise of Perfection", "desire", 70, 79),
        ("an-absolute-relationship-to-life", "An Absolute Relationship to Life", "psychology", 80, 89),
        ("what-is-the-ultimate-truth", "What Is the Ultimate Truth?", "psychology", 90, 97),
        (
            "meditation-is-a-metaphor-for-enlightenment",
            "Meditation Is a Metaphor for Enlightenment",
            "essays",
            98,
            103,
        ),
        ("perils-of-the-path", "Perils of the Path", "essays", 104, 109),
        ("liberation-without-a-face", "Liberation without a Face", "essays", 110, 115),
        ("the-glory-of-god", "The Glory of God", "essays", 116, 119),
        ("the-call-of-the-absolute", "The Call of the Absolute", "essays", 120, doc.page_count - 1),
    ]

    chapters: list[dict] = []
    for chapter_id, title, part_id, start, end in sections:
        raw = pages_text(doc, start, end)
        body = extract_body(raw, title)
        if len(body) < 40 and chapter_id != "acknowledgements":
            print(f"Warning: short chapter {title} ({len(body)} chars)")
        chapters.append(
            {
                "id": chapter_id,
                "title": title,
                "partId": part_id,
                "body": body,
            }
        )

    write_book(
        slug="embracing-heaven-and-earth",
        title="Embracing Heaven & Earth",
        subtitle="The Liberation Teachings of Andrew Cohen",
        credits="Copyright © 2000 by Moksha Press · ISBN 0-965-3601-7-4",
        parts=parts,
        chapters=chapters,
    )


def extract_challenge() -> None:
    pdf = BOOK_SOURCES / "the-challenge-of-enlightenment.pdf"
    doc = fitz.open(pdf)

    parts = [
        {"id": "front-matter", "label": "Front Matter"},
        {"id": "part-one", "label": "Part One"},
        {"id": "part-two", "label": "Part Two"},
    ]

    sections = [
        ("foreword", "Foreword", "front-matter", 8, 11),
        ("context", "Context", "front-matter", 12, 13),
        ("let-everything-be-as-it-is", "Let Everything Be as It Is", "part-one", 18, 29),
        ("wholeness", "Wholeness", "part-one", 30, 37),
        ("for-or-against", "For or Against", "part-two", 40, 46),
        ("knowing-versus-not-knowing", "Knowing versus Not Knowing", "part-two", 47, 52),
        ("the-unknown", "The Unknown", "part-two", 53, 59),
    ]

    chapters: list[dict] = []
    for chapter_id, title, part_id, start, end in sections:
        raw = pages_text(doc, start, end)
        body = extract_body(raw, title)
        chapters.append(
            {
                "id": chapter_id,
                "title": title,
                "partId": part_id,
                "body": body,
            }
        )

    write_book(
        slug="the-challenge-of-enlightenment",
        title="The Challenge of Enlightenment",
        subtitle="A Voyage into the Multidimensional Integrity of Nonduality",
        credits="Copyright © 1996 by Moksha Foundation, Inc. · ISBN 1-883929-44-8",
        parts=parts,
        chapters=chapters,
    )


def extract_evolutionary() -> None:
    txt_path = ROOT / ".extract/text/[Andrew_Cohen]_Evolutionary_Enlightenment.txt"
    lines = txt_path.read_text(encoding="utf-8").splitlines()

    markers: list[tuple[int, str, str]] = []
    for i, line in enumerate(lines):
        s = line.strip()
        if s == "FOREWORD":
            markers.append((i, "foreword", "Foreword"))
        elif s == "ACKNOWLEDGMENTS":
            markers.append((i, "acknowledgments", "Acknowledgments"))
        elif s == "PART I":
            markers.append((i, "part-i", "Part I · A Cosmic Journey"))
        elif s == "PART II":
            markers.append((i, "part-ii", "Part II · Understanding the Territory"))
        elif s == "PART III":
            markers.append((i, "part-iii", "Part III · The Path and the Goal"))
        elif s == "PART IV":
            markers.append((i, "part-iv", "Part IV · Enlightenment and the Evolution of Culture"))
        elif s == "PROLOGUE":
            title = next((lines[j].strip() for j in range(i + 1, i + 5) if lines[j].strip()), "Prologue")
            markers.append((i, "prologue", f"Prologue · {title}"))
        elif s == "INTRODUCTION TO PART II":
            markers.append((i, "intro-part-ii", "Introduction to Part II"))
        elif s == "INTRODUCTION TO PART III":
            markers.append((i, "intro-part-iii", "Introduction to Part III"))
        elif s == "INTRODUCTION TO PART IV":
            markers.append((i, "intro-part-iv", "Introduction to Part IV"))
        elif m := re.match(r"^CHAPTER (ONE|TWO|THREE|FOUR|FIVE|SIX|SEVEN|EIGHT|NINE|TEN|ELEVEN|TWELVE|THIRTEEN|FOURTEEN|FIFTEEN|SIXTEEN|SEVENTEEN|EIGHTEEN|NINETEEN|TWENTY)$", s):
            title = next((lines[j].strip() for j in range(i + 1, i + 5) if lines[j].strip()), "")
            num = CHAPTER_WORDS[m.group(1)]
            markers.append((i, f"chapter-{num}", title or f"Chapter {num}"))

    part_for_marker = {
        "foreword": "front-matter",
        "acknowledgments": "front-matter",
        "part-i": "part-i",
        "prologue": "part-i",
        "intro-part-ii": "part-ii",
        "intro-part-iii": "part-iii",
        "intro-part-iv": "part-iv",
    }
    current_part = "front-matter"
    for n in range(1, 21):
        part_for_marker[f"chapter-{n}"] = (
            "part-i"
            if n <= 6
            else "part-ii"
            if n <= 10
            else "part-iii"
            if n <= 16
            else "part-iv"
        )

    parts = [
        {"id": "front-matter", "label": "Front Matter"},
        {"id": "part-i", "label": "Part I · A Cosmic Journey"},
        {"id": "part-ii", "label": "Part II · Understanding the Territory"},
        {"id": "part-iii", "label": "Part III · The Path and the Goal"},
        {"id": "part-iv", "label": "Part IV · Enlightenment and the Evolution of Culture"},
    ]

    existing: set[str] = set()
    chapters: list[dict] = []

    for idx, (start, key, title) in enumerate(markers):
        end = markers[idx + 1][0] if idx + 1 < len(markers) else len(lines)
        part_id = part_for_marker.get(key, current_part)
        if key.startswith("part-"):
            current_part = key
            continue

        body = extract_txt_section(lines, start, end, title)
        if len(body) < 80 and key not in {"foreword", "acknowledgments"}:
            continue

        chapter_id = key if key in {"foreword", "acknowledgments", "prologue"} else unique_id(title, existing)
        if key in {"foreword", "acknowledgments", "prologue"}:
            existing.add(chapter_id)
        elif key.startswith("intro-"):
            chapter_id = key

        display_title = normalize_title(title)
        chapters.append(
            {
                "id": chapter_id,
                "title": display_title,
                "partId": part_id,
                "body": body,
            }
        )

    write_book(
        slug="evolutionary-enlightenment",
        title="Evolutionary Enlightenment",
        subtitle="A New Path to Spiritual Awakening",
        credits="Copyright © 2011 by EnlightenNext · ISBN 978-1-59079-229-2",
        parts=parts,
        chapters=chapters,
    )


EXTRACTORS = {
    "enlightenment-is-a-secret": extract_secret,
    "an-unconditional-relationship-to-life": extract_unconditional,
    "embracing-heaven-and-earth": extract_embracing,
    "the-challenge-of-enlightenment": extract_challenge,
    "evolutionary-enlightenment": extract_evolutionary,
}


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract books for the online reader")
    parser.add_argument(
        "slug",
        nargs="?",
        help="Book slug to extract (default: all available)",
    )
    args = parser.parse_args()

    if args.slug:
        if args.slug not in EXTRACTORS:
            print(f"Unknown slug: {args.slug}")
            print(f"Available: {', '.join(EXTRACTORS)}")
            sys.exit(1)
        EXTRACTORS[args.slug]()
        return

    for slug, fn in EXTRACTORS.items():
        print(f"\n--- {slug} ---")
        fn()


if __name__ == "__main__":
    main()
