#!/usr/bin/env python3
"""Sync YouTube videos from @andrewcohen7010 into src/data/youtube-videos.json."""

import json
import subprocess
import sys
from pathlib import Path

CHANNEL = "https://www.youtube.com/@andrewcohen7010/videos"
OUT = Path(__file__).resolve().parents[1] / "src/data/youtube-videos.json"


def infer_tags(title: str) -> list[str]:
    t = title.lower()
    tags = ["video", "youtube"]
    if "meditation" in t:
        tags.extend(["meditation", "guided-meditation"])
    if "last retreat" in t:
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

    seen: set[str] = set()
    ordered: list[str] = []
    for tag in tags:
        if tag not in seen:
            seen.add(tag)
            ordered.append(tag)
    return ordered


def main() -> int:
    try:
        proc = subprocess.run(
            ["yt-dlp", "--flat-playlist", "--print-json", CHANNEL],
            capture_output=True,
            text=True,
            check=True,
        )
    except FileNotFoundError:
        print("yt-dlp is required. Install with: pip install yt-dlp", file=sys.stderr)
        return 1
    except subprocess.CalledProcessError as exc:
        print(exc.stderr or exc.stdout, file=sys.stderr)
        return exc.returncode

    videos = []
    for line in proc.stdout.splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            data = json.loads(line)
        except json.JSONDecodeError:
            continue

        vid = data.get("id")
        title = data.get("title", "")
        if not vid or not title or title == "[Private video]":
            continue

        upload = data.get("upload_date") or ""
        date = ""
        if upload and upload != "NA" and len(upload) == 8:
            date = f"{upload[:4]}-{upload[4:6]}-{upload[6:8]}"

        duration = data.get("duration")
        videos.append(
            {
                "id": f"yt-{vid}",
                "type": "video",
                "title": title,
                "date": date,
                "tags": infer_tags(title),
                "href": f"https://www.youtube.com/watch?v={vid}",
                "external": True,
                "thumbnail": f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg",
                "duration": int(duration) if duration else None,
                "youtubeId": vid,
            }
        )

    OUT.write_text(json.dumps(videos, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(videos)} videos to {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
