#!/usr/bin/env python3
"""Sync YouTube videos into src/data/youtube-videos.json.

Fetches the @andrewcohen7010 channel plus configured playlists, merges by
youtubeId (no duplicates), and writes a unified archive catalog.
"""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

CHANNEL = "https://www.youtube.com/@andrewcohen7010/videos"
PLAYLISTS: list[dict[str, object]] = [
    {
        "url": "https://www.youtube.com/playlist?list=PLG90tKxdMcCZxAdCvVMGCKTROhSnRTTbF",
        "name": "Conversations from the Heart: Honoring Andrew Cohen",
        "tags": ["conversations-from-the-heart", "honoring-andrew-cohen"],
    },
]
OUT = Path(__file__).resolve().parents[1] / "src/data/youtube-videos.json"


def infer_tags(title: str) -> list[str]:
    t = title.lower()
    tags = ["video", "youtube"]
    if "conversations from the heart" in t or "honouring andrew cohen" in t:
        tags.extend(
            ["dialogue", "conversations-from-the-heart", "honoring-andrew-cohen"]
        )
    elif "meditation" in t:
        tags.extend(["meditation", "guided-meditation"])
    elif "last retreat" in t:
        tags.extend(["retreat", "teaching"])
    elif "last teachings" in t:
        tags.extend(["teaching", "final-teachings"])
    elif "retreat" in t:
        tags.append("retreat")
    elif "dialogue" in t or "conversation" in t:
        tags.append("dialogue")
    elif "interview" in t:
        tags.append("interview")
    elif "teaching" in t or "teachings" in t:
        tags.append("teaching")
    else:
        tags.append("teaching")
    if "evolutionary" in t:
        tags.append("evolutionary-enlightenment")
    if "enlightennext" in t or "wie" in t:
        tags.append("enlightennext")

    return dedupe_tags(tags)


def dedupe_tags(tags: list[str]) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []
    for tag in tags:
        if tag not in seen:
            seen.add(tag)
            ordered.append(tag)
    return ordered


def fetch_flat_playlist(url: str) -> list[dict]:
    try:
        proc = subprocess.run(
            ["yt-dlp", "--flat-playlist", "--print-json", url],
            capture_output=True,
            text=True,
            check=True,
        )
    except FileNotFoundError:
        print("yt-dlp is required. Install with: pip install yt-dlp", file=sys.stderr)
        raise SystemExit(1)
    except subprocess.CalledProcessError as exc:
        print(exc.stderr or exc.stdout, file=sys.stderr)
        raise SystemExit(exc.returncode)

    rows: list[dict] = []
    for line in proc.stdout.splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            rows.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    return rows


def build_entry(data: dict, extra_tags: list[str] | None = None) -> dict | None:
    vid = data.get("id")
    title = data.get("title", "")
    if not vid or not title or title == "[Private video]":
        return None

    upload = data.get("upload_date") or ""
    date = ""
    if upload and upload != "NA" and len(upload) == 8:
        date = f"{upload[:4]}-{upload[4:6]}-{upload[6:8]}"

    duration = data.get("duration")
    tags = dedupe_tags(infer_tags(title) + (extra_tags or []))

    return {
        "id": f"yt-{vid}",
        "type": "video",
        "title": title,
        "date": date,
        "tags": tags,
        "href": f"https://www.youtube.com/watch?v={vid}",
        "external": True,
        "thumbnail": f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg",
        "duration": int(duration) if duration else None,
        "youtubeId": vid,
    }


def merge_entry(existing: dict, incoming: dict) -> dict:
    merged_tags = dedupe_tags([*existing.get("tags", []), *incoming.get("tags", [])])
    merged = {**existing, **incoming, "tags": merged_tags}
    if existing.get("date") and not incoming.get("date"):
        merged["date"] = existing["date"]
    if existing.get("duration") and not incoming.get("duration"):
        merged["duration"] = existing["duration"]
    return merged


def main() -> int:
    by_youtube_id: dict[str, dict] = {}
    source_order: list[str] = []

    sources: list[tuple[str, list[str]]] = [(CHANNEL, [])]
    for playlist in PLAYLISTS:
        sources.append(
            (
                str(playlist["url"]),
                list(playlist.get("tags") or []),
            )
        )

    for url, extra_tags in sources:
        rows = fetch_flat_playlist(url)
        added = 0
        for row in rows:
            entry = build_entry(row, extra_tags)
            if not entry:
                continue
            youtube_id = entry["youtubeId"]
            if youtube_id in by_youtube_id:
                by_youtube_id[youtube_id] = merge_entry(
                    by_youtube_id[youtube_id], entry
                )
            else:
                by_youtube_id[youtube_id] = entry
                source_order.append(youtube_id)
                added += 1
        print(f"{url}: {len(rows)} listed, {added} new")

    videos = [by_youtube_id[youtube_id] for youtube_id in source_order]
    OUT.write_text(json.dumps(videos, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(videos)} unique videos to {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
