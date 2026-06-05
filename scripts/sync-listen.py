#!/usr/bin/env python3
"""Scrape audio and video from https://andrewcohen.com/listen/ into src/data/listen.json."""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import UTC, datetime
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/listen.json"
API = "https://andrewcohen.com/wp-json/wp/v2"
SOURCE = "https://andrewcohen.com/listen/"

LISTEN_DESCRIPTIONS = {
    "teaching-anahata-akademie-august-2016": (
        "A 30 minute excerpt from a teaching at the Anahata Ashram in August 2016."
    ),
    "doshin-andrew-cohen-2016-09-20": (
        "Video and audio recording of my meeting with Zen Master Doshin."
    ),
    "jen-mavros-cosmic-consciousness": (
        "Andrew Cohen talks with Jen Mavros on the Jen Mavros Show Podcast."
    ),
    "evolution-enlightenment-stamford-june-2018": (
        "Andrew speaks about Evolutionary Enlightenment with an emphasis on "
        "intersubjective non-duality."
    ),
    "intersubjective-nonduality-soundcloud": (
        "Andrew speaks about the theory and practice of Intersubjective Nonduality, "
        "the ultimate goal of Evolutionary Enlightenment."
    ),
    "death-is-not-an-escape-soundcloud": (
        "Audio recording from a January 2020 talk given during a seven day retreat "
        "in Bangalore, India."
    ),
    "thoughts-about-meditation": (
        "Audio recording from a Wednesday Conversation in Bangalore."
    ),
}


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=45) as response:
        return response.read().decode("utf-8", errors="replace")


def fetch_json(url: str) -> object:
    return json.loads(fetch(url))


def strip_html(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text)
    return re.sub(r"\s+", " ", unescape(text)).strip()


def format_posted_date(iso_date: str) -> str:
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


def extract_body_description(html: str) -> str:
    paragraphs: list[str] = []
    for match in re.finditer(r"<p[^>]*>(.*?)</p>", html, re.I | re.S):
        text = strip_html(match.group(1))
        if len(text) < 20:
            continue
        if text in {"Share this Post", "Read More"}:
            continue
        paragraphs.append(text)
    return " ".join(paragraphs[:2])


def extract_media(html: str) -> list[dict]:
    media: list[dict] = []

    for match in re.finditer(r"player\.vimeo\.com/video/(\d+)", html):
        vimeo_id = match.group(1)
        media.append(
            {
                "format": "video",
                "provider": "vimeo",
                "vimeoId": vimeo_id,
                "embedUrl": f"https://player.vimeo.com/video/{vimeo_id}",
                "href": f"https://vimeo.com/{vimeo_id}",
            }
        )

    for match in re.finditer(r"api\.soundcloud\.com/tracks/(\d+)", html):
        track_id = match.group(1)
        media.append(
            {
                "format": "audio",
                "provider": "soundcloud",
                "trackId": track_id,
                "embedUrl": (
                    "https://w.soundcloud.com/player/?url="
                    f"https%3A//api.soundcloud.com/tracks/{track_id}&color=%23ff5500"
                ),
                "href": "https://soundcloud.com/andrewzcohen",
            }
        )

    libsyn = re.search(r"libsyn\.com/embed/episode/id/(\d+)", html)
    if libsyn:
        episode_id = libsyn.group(1)
        media.append(
            {
                "format": "audio",
                "provider": "libsyn",
                "episodeId": episode_id,
                "embedUrl": (
                    "https://html5-player.libsyn.com/embed/episode/id/"
                    f"{episode_id}/height/90/theme/custom/autoplay/no/autonext/no/"
                    "thumbnail/yes/preload/no/no_addthis/no/direction/backward/"
                    "render-playlist/no/custom-color/460069/"
                ),
                "href": "https://www.jenmavros.com/podcastepisodes/2018/3/5/ep-57-andrew-cohen",
            }
        )

    for match in re.finditer(
        r"(https://andrewcohen\.com/wp-content/uploads/[^\"'\s<>]+\.(?:mp3|mp4|m4a))",
        html,
        re.I,
    ):
        url = match.group(1)
        media.append(
            {
                "format": "audio" if url.lower().endswith(("mp3", "m4a")) else "video",
                "provider": "file",
                "embedUrl": url,
                "href": url,
            }
        )

    seen: set[tuple] = set()
    unique: list[dict] = []
    for item in media:
        key = (
            item["provider"],
            item.get("trackId"),
            item.get("vimeoId"),
            item.get("episodeId"),
            item.get("href"),
        )
        if key not in seen:
            seen.add(key)
            unique.append(item)
    return unique


def infer_tags(media: list[dict]) -> list[str]:
    tags = ["media", "listen"]
    if not media:
        return tags
    formats = {item["format"] for item in media}
    if formats == {"audio"}:
        tags.append("audio")
    elif formats == {"video"}:
        tags.append("video")
    else:
        tags.append("audio")
        tags.append("video")
    providers = {item["provider"] for item in media}
    tags.extend(sorted(providers))
    return tags


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--delay", type=float, default=0.35)
    args = parser.parse_args()

    try:
        posts = fetch_json(
            f"{API}/posts?categories=11&per_page=100&_fields="
            "slug,title,date,link,excerpt,author"
        )
    except urllib.error.URLError as exc:
        print(f"Failed to fetch listen posts: {exc}", file=sys.stderr)
        return 1

    if not isinstance(posts, list):
        print("Unexpected API response", file=sys.stderr)
        return 1

    authors: dict[int, str] = {}
    items: list[dict] = []
    scraped_at = datetime.now(UTC).strftime("%Y-%m-%dT%H:%M:%SZ")

    for index, post in enumerate(posts, start=1):
        slug = post["slug"]
        source_url = post["link"]
        print(f"[{index}/{len(posts)}] {slug}")

        try:
            html = fetch(source_url)
        except urllib.error.URLError as exc:
            print(f"  failed: {exc}", file=sys.stderr)
            continue

        media = extract_media(html)
        if slug == "evolution-enlightenment-stamford-june-2018":
            filtered = [item for item in media if item.get("trackId") != "288961550"]
            if filtered:
                media = filtered

        author_id = post["author"]
        if author_id not in authors:
            try:
                authors[author_id] = fetch_json(f"{API}/users/{author_id}")["name"]
            except urllib.error.URLError:
                authors[author_id] = "Andrew Cohen"

        description = LISTEN_DESCRIPTIONS.get(slug) or extract_body_description(html)
        if not description:
            description = strip_html(post.get("excerpt", {}).get("rendered", ""))
        description = re.sub(r"\s*(Share this Post|Read More)\s*", "", description).strip()

        items.append(
            {
                "id": f"media-{slug}",
                "slug": slug,
                "title": strip_html(post["title"]["rendered"]),
                "author": authors[author_id],
                "postedAt": post["date"],
                "date": format_posted_date(post["date"]),
                "sourceUrl": source_url,
                "description": description,
                "thumbnail": extract_thumbnail(html),
                "media": media,
                "tags": infer_tags(media),
            }
        )

        if args.delay > 0 and index < len(posts):
            time.sleep(args.delay)

    items.sort(key=lambda item: item["postedAt"], reverse=True)

    OUT.write_text(
        json.dumps(
            {
                "scrapedAt": scraped_at,
                "source": SOURCE,
                "count": len(items),
                "items": items,
            },
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )

    with_media = sum(1 for item in items if item["media"])
    print(f"\nWrote {len(items)} listen items ({with_media} with media) → {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
