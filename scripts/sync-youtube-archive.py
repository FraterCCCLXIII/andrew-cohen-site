#!/usr/bin/env python3
"""Sync YouTube videos into src/data/youtube-videos.json.

Fetches configured channels, playlists, and standalone video URLs, merges by
youtubeId (no duplicates), and writes a unified archive catalog.
"""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

CHANNELS: list[dict[str, object]] = [
    {
        "url": "https://www.youtube.com/@andrewcohen7010/videos",
        "tags": [],
    },
    {
        "url": "https://www.youtube.com/@enlightennext/videos",
        "tags": ["enlightennext", "legacy-channel"],
    },
    {
        "url": "https://www.youtube.com/@evolutionaryenlightenment3800/videos",
        "tags": ["evolutionary-enlightenment", "legacy-channel"],
    },
    {
        "url": "https://www.youtube.com/@EnlightenNextFrance/videos",
        "tags": ["enlightennext", "enlightennext-france", "legacy-channel"],
    },
    {
        "url": "https://www.youtube.com/unfulfilleddesires/videos",
        "tags": ["unfulfilled-desires", "legacy-channel"],
    },
]

PLAYLISTS: list[dict[str, object]] = [
    {
        "url": "https://www.youtube.com/playlist?list=PLG90tKxdMcCZxAdCvVMGCKTROhSnRTTbF",
        "name": "Conversations from the Heart: Honoring Andrew Cohen",
        "tags": ["conversations-from-the-heart", "honoring-andrew-cohen"],
    },
]

EXTRA_VIDEOS: list[dict[str, object]] = [
    {
        "url": "https://www.youtube.com/watch?v=DOT5vyryEdg",
        "tags": ["legacy-clip", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=Oy9v30Zj8V4",
        "tags": ["legacy-clip", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=rytFeEGWbl8",
        "tags": ["legacy-clip", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=BXbNaw7FlFA",
        "tags": ["legacy-clip", "spiritual", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=ojmJ5TalXCI",
        "tags": ["legacy-clip", "spiritual", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=M6xj3OFnaSg",
        "tags": ["legacy-clip", "spiritual", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=gCy0f49TUd4",
        "tags": ["legacy-clip", "spiritual", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=RNYj7zIfsJg",
        "tags": ["legacy-clip", "spiritual", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=MHM9tAisrbM",
        "tags": ["legacy-clip", "spiritual", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=xGs54RL6Ywc",
        "tags": ["legacy-clip", "spiritual", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=LVC1XyFU6ao",
        "tags": ["legacy-clip", "spiritual", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=RA9OUAEoD9k",
        "tags": ["legacy-clip", "spiritual", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=mlhBnlRbWaw",
        "tags": ["legacy-clip", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=ErNMd5znQNA",
        "tags": ["unfulfilled-desires", "legacy-clip", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=bDkhKMw7NkM",
        "tags": ["unfulfilled-desires", "legacy-clip", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=8me3pTg66cQ",
        "tags": ["unfulfilled-desires", "legacy-clip", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=NLhZ2ELnhT8",
        "tags": ["legacy-clip", "archival"],
    },
    {
        "url": "https://www.youtube.com/watch?v=Vada0zRfYEo",
        "tags": ["legacy-clip", "archival"],
    },
    # Andrew Cohen at LOHAS Forum — only related videos from @mrlohas channel
    {
        "url": "https://www.youtube.com/watch?v=hbh9UDvlP0I",
        "tags": ["mr-lohas", "legacy-channel", "talk-series"],
    },
    {
        "url": "https://www.youtube.com/watch?v=DWL7-I5yBIM",
        "tags": ["mr-lohas", "legacy-channel", "talk-series"],
    },
    {
        "url": "https://www.youtube.com/watch?v=hA40dejUjc0",
        "tags": ["mr-lohas", "legacy-channel", "talk-series"],
    },
    {
        "url": "https://www.youtube.com/watch?v=JXYUGd5WE3Y",
        "tags": ["mr-lohas", "legacy-channel", "talk-series"],
    },
    {
        "url": "https://www.youtube.com/watch?v=BpVQwyIox7M",
        "tags": ["mr-lohas", "legacy-channel", "talk-series"],
    },
    {
        "url": "https://www.youtube.com/watch?v=bn8f2NaDAUc",
        "tags": ["mr-lohas", "legacy-channel", "talk-series"],
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
    if "unfulfilled desire" in t:
        tags.append("unfulfilled-desires")

    return dedupe_tags(tags)


def dedupe_tags(tags: list[str]) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []
    for tag in tags:
        if tag not in seen:
            seen.add(tag)
            ordered.append(tag)
    return ordered


def run_yt_dlp(args: list[str], *, allow_failure: bool = False) -> subprocess.CompletedProcess[str] | None:
    try:
        return subprocess.run(
            ["yt-dlp", *args],
            capture_output=True,
            text=True,
            check=True,
        )
    except FileNotFoundError:
        print("yt-dlp is required. Install with: pip install yt-dlp", file=sys.stderr)
        raise SystemExit(1)
    except subprocess.CalledProcessError as exc:
        if allow_failure:
            print(exc.stderr or exc.stdout, file=sys.stderr)
            return None
        print(exc.stderr or exc.stdout, file=sys.stderr)
        raise SystemExit(exc.returncode)


def fetch_flat_playlist(url: str, *, allow_failure: bool = False) -> list[dict]:
    proc = run_yt_dlp(
        ["--flat-playlist", "--print-json", url],
        allow_failure=allow_failure,
    )
    if proc is None:
        return []
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


def fetch_video(url: str) -> dict | None:
    proc = run_yt_dlp(["--print-json", url], allow_failure=True)
    if proc and proc.stdout.strip():
        line = proc.stdout.strip().splitlines()[0]
        try:
            return json.loads(line)
        except json.JSONDecodeError:
            pass

    # Fall back to flat metadata when full extraction is blocked.
    rows = fetch_flat_playlist(url, allow_failure=True)
    return rows[0] if rows else None


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


def ingest_rows(
    rows: list[dict],
    extra_tags: list[str],
    by_youtube_id: dict[str, dict],
    source_order: list[str],
) -> tuple[int, int]:
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
    return len(rows), added


def main() -> int:
    by_youtube_id: dict[str, dict] = {}
    source_order: list[str] = []

    for channel in CHANNELS:
        url = str(channel["url"])
        extra_tags = list(channel.get("tags") or [])
        rows = fetch_flat_playlist(url)
        listed, added = ingest_rows(rows, extra_tags, by_youtube_id, source_order)
        print(f"{url}: {listed} listed, {added} new")

    for playlist in PLAYLISTS:
        url = str(playlist["url"])
        extra_tags = list(playlist.get("tags") or [])
        rows = fetch_flat_playlist(url)
        listed, added = ingest_rows(rows, extra_tags, by_youtube_id, source_order)
        print(f"{url}: {listed} listed, {added} new")

    for video in EXTRA_VIDEOS:
        url = str(video["url"])
        extra_tags = list(video.get("tags") or [])
        row = fetch_video(url)
        if not row:
            print(f"{url}: failed to fetch", file=sys.stderr)
            continue
        listed, added = ingest_rows([row], extra_tags, by_youtube_id, source_order)
        print(f"{url}: {listed} listed, {added} new")

    videos = [by_youtube_id[youtube_id] for youtube_id in source_order]
    OUT.write_text(json.dumps(videos, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(videos)} unique videos to {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
