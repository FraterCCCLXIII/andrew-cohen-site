#!/usr/bin/env python3
"""Extract Vimeo/YouTube teaching videos from andrewcohen.com watch posts."""

from __future__ import annotations

import json
import re
import sys
import urllib.error
import urllib.request
from datetime import UTC, datetime
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/site-videos.json"
JOURNAL_INDEX = ROOT / "src/data/journal/index.json"
LISTEN = ROOT / "src/data/listen.json"
API = "https://andrewcohen.com/wp-json/wp/v2"

# Real articles that also have an embedded video — keep in journal.
KEEP_IN_JOURNAL = {"30th-july-2001"}


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=45) as response:
        return response.read().decode("utf-8", errors="replace")


def fetch_json(url: str) -> object:
    return json.loads(fetch(url))


def strip_html(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text)
    return re.sub(r"\s+", " ", unescape(text)).strip()


def format_date(iso_date: str) -> str:
    return datetime.fromisoformat(iso_date).strftime("%d/%m/%Y")


def extract_thumbnail(html: str) -> str | None:
    for pattern in (
        r"(https://andrewcohen\.com/wp-content/uploads/[^\"'\s]+-1200x\d+\.jpg)",
        r"(https://andrewcohen\.com/wp-content/uploads/[^\"'\s]+\.jpg)",
    ):
        match = re.search(pattern, html)
        if match:
            return match.group(1)
    return None


def extract_description(html: str, excerpt: str) -> str:
    paragraphs: list[str] = []
    for match in re.finditer(r"<p[^>]*>(.*?)</p>", html, re.I | re.S):
        text = strip_html(match.group(1))
        if len(text) < 20 or text in {"Share this Post", "Read More"}:
            continue
        paragraphs.append(text)
    if paragraphs:
        return " ".join(paragraphs[:2])
    return re.sub(r"\s*(Share this Post|Read More)\s*", "", strip_html(excerpt)).strip()


def extract_embeds(html: str) -> list[dict]:
    embeds: list[dict] = []

    for match in re.finditer(
        r"youtube\.com/embed/?/?([a-zA-Z0-9_-]{6,})", html
    ):
        youtube_id = match.group(1)
        embeds.append(
            {
                "provider": "youtube",
                "youtubeId": youtube_id,
                "embedUrl": f"https://www.youtube.com/embed/{youtube_id}",
                "href": f"https://www.youtube.com/watch?v={youtube_id}",
            }
        )

    for match in re.finditer(
        r"(?:youtube\.com/watch\?v=|youtu\.be/)([a-zA-Z0-9_-]+)", html
    ):
        youtube_id = match.group(1)
        embeds.append(
            {
                "provider": "youtube",
                "youtubeId": youtube_id,
                "embedUrl": f"https://www.youtube.com/embed/{youtube_id}",
                "href": f"https://www.youtube.com/watch?v={youtube_id}",
            }
        )

    for match in re.finditer(r"player\.vimeo\.com/video/(\d+)", html):
        vimeo_id = match.group(1)
        embeds.append(
            {
                "provider": "vimeo",
                "vimeoId": vimeo_id,
                "embedUrl": f"https://player.vimeo.com/video/{vimeo_id}",
                "href": f"https://vimeo.com/{vimeo_id}",
            }
        )

    seen: set[tuple] = set()
    unique: list[dict] = []
    for item in embeds:
        key = (
            item["provider"],
            item.get("youtubeId"),
            item.get("vimeoId"),
        )
        if key not in seen:
            seen.add(key)
            unique.append(item)
    return unique


def infer_tags(provider: str) -> list[str]:
    return ["video", "teaching", provider, "andrewcohen-com"]


def main() -> int:
    try:
        journal = json.loads(JOURNAL_INDEX.read_text(encoding="utf-8"))
        listen_slugs = {
            item["slug"] for item in json.loads(LISTEN.read_text(encoding="utf-8"))["items"]
        }
    except FileNotFoundError as exc:
        print(f"Missing input data: {exc}", file=sys.stderr)
        return 1

    scraped_at = datetime.now(UTC).strftime("%Y-%m-%dT%H:%M:%SZ")
    items: list[dict] = []

    for article in journal["articles"]:
        slug = article["slug"]
        if slug in KEEP_IN_JOURNAL:
            continue
        if "watch" not in article.get("categories", []):
            continue
        if slug in listen_slugs:
            continue

        source_url = article["sourceUrl"]
        print(f"fetch {slug}")

        try:
            html = fetch(source_url)
        except urllib.error.URLError as exc:
            print(f"  failed: {exc}", file=sys.stderr)
            continue

        embeds = extract_embeds(html)
        if not embeds:
            print(f"  no embeds found", file=sys.stderr)
            continue

        primary = embeds[0]
        description = extract_description(html, article.get("excerpt", ""))
        if not description:
            description = strip_html(article["title"])

        items.append(
            {
                "id": f"video-{slug}",
                "slug": slug,
                "title": strip_html(article["title"]),
                "description": description,
                "postedAt": article["postedAt"],
                "date": article["date"],
                "sourceUrl": source_url,
                "thumbnail": article.get("thumbnail") or extract_thumbnail(html),
                "youtubeId": primary.get("youtubeId"),
                "vimeoId": primary.get("vimeoId"),
                "embeds": embeds,
                "tags": infer_tags(primary["provider"]),
            }
        )

    items.sort(key=lambda item: item["postedAt"], reverse=True)

    OUT.write_text(
        json.dumps(
            {
                "scrapedAt": scraped_at,
                "count": len(items),
                "items": items,
            },
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )

    print(f"\nWrote {len(items)} site videos → {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
