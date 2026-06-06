#!/usr/bin/env python3
"""Download YouTube subtitles for all videos in youtube-videos.json."""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
import tempfile
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VIDEOS = ROOT / "src/data/youtube-videos.json"
OUT_DIR = ROOT / "src/data/transcripts"
MANIFEST = OUT_DIR / "manifest.json"


def parse_json3_text(data: dict) -> str:
    """Turn YouTube json3 captions into readable plain text."""
    parts: list[str] = []
    buffer = ""

    for event in data.get("events", []):
        segs = event.get("segs")
        if not segs:
            continue

        chunk = "".join(seg.get("utf8", "") for seg in segs)
        if event.get("aAppend") and parts:
            parts[-1] += chunk
        elif event.get("aAppend"):
            buffer += chunk
        else:
            if buffer:
                parts.append(buffer)
                buffer = ""
            parts.append(chunk)

    if buffer:
        parts.append(buffer)

    lines: list[str] = []
    for part in parts:
        cleaned = part.replace("\n", " ").strip()
        if cleaned:
            lines.append(cleaned)

    text = " ".join(lines)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def download_subtitle(youtube_id: str, tmp: Path) -> dict | None:
    url = f"https://www.youtube.com/watch?v={youtube_id}"
    out_template = str(tmp / "%(id)s")

    proc = subprocess.run(
        [
            "yt-dlp",
            "--write-auto-sub",
            "--write-sub",
            "--sub-langs",
            "en.*,en",
            "--skip-download",
            "--sub-format",
            "json3",
            "-o",
            out_template,
            url,
        ],
        capture_output=True,
        text=True,
    )

    if proc.returncode != 0:
        return None

    candidates = sorted(tmp.glob(f"{youtube_id}*.json3"))
    if not candidates:
        return None

    # Prefer manual English, then auto-generated English.
    preferred = None
    for path in candidates:
        name = path.name.lower()
        if name.endswith(".en.json3"):
            preferred = path
            break
        if ".en-" in name or name.endswith(".en-orig.json3"):
            preferred = path

    sub_path = preferred or candidates[0]
    data = json.loads(sub_path.read_text(encoding="utf-8"))
    text = parse_json3_text(data)
    if not text:
        return None

    lang_match = re.search(r"\.([a-z]{2}(?:-[a-z]+)?)\.json3$", sub_path.name, re.I)
    language = lang_match.group(1) if lang_match else "en"

    return {
        "language": language,
        "text": text,
        "charCount": len(text),
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--force",
        action="store_true",
        help="Re-download transcripts even if they already exist",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=0.35,
        help="Seconds to wait between videos (default: 0.35)",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="Only process the first N videos (0 = all)",
    )
    parser.add_argument(
        "--ids",
        nargs="+",
        metavar="YOUTUBE_ID",
        help="Only process videos with these YouTube IDs (e.g. dQw4w9WgXcQ)",
    )
    args = parser.parse_args()

    try:
        videos = json.loads(VIDEOS.read_text(encoding="utf-8"))
    except FileNotFoundError:
        print(f"Missing {VIDEOS}. Run sync-youtube-archive.py first.", file=sys.stderr)
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    all_videos = videos
    scraped_at = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())

    if MANIFEST.exists():
        manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
        manifest.setdefault("videos", {})
    else:
        manifest = {
            "scrapedAt": scraped_at,
            "total": len(all_videos),
            "withTranscript": 0,
            "missing": [],
            "videos": {},
        }

    manifest["scrapedAt"] = scraped_at
    manifest["total"] = len(all_videos)

    if args.limit > 0:
        videos = videos[: args.limit]

    if args.ids:
        id_set = set(args.ids)
        videos = [
            video
            for video in videos
            if (video.get("youtubeId") or video["id"].removeprefix("yt-")) in id_set
        ]
        if not videos:
            print("No matching videos for --ids", file=sys.stderr)
            return 1

    ok = 0
    skipped = 0
    failed: list[str] = []

    for index, video in enumerate(videos, start=1):
        video_id = video["id"]
        youtube_id = video.get("youtubeId") or video_id.removeprefix("yt-")
        out_file = OUT_DIR / f"{video_id}.json"

        if out_file.exists() and not args.force:
            existing = json.loads(out_file.read_text(encoding="utf-8"))
            manifest["videos"][video_id] = {
                "youtubeId": youtube_id,
                "language": existing.get("language", "en"),
                "charCount": existing.get("charCount", len(existing.get("text", ""))),
                "status": "cached",
            }
            ok += 1
            skipped += 1
            print(f"[{index}/{len(videos)}] skip {video_id}")
            continue

        print(f"[{index}/{len(videos)}] fetch {video_id} …", flush=True)
        with tempfile.TemporaryDirectory() as tmp_name:
            tmp = Path(tmp_name)
            result = download_subtitle(youtube_id, tmp)

        if not result:
            failed.append(video_id)
            manifest["videos"][video_id] = {
                "youtubeId": youtube_id,
                "status": "missing",
            }
            print(f"  no transcript")
        else:
            payload = {
                "id": video_id,
                "youtubeId": youtube_id,
                "title": video.get("title", ""),
                "language": result["language"],
                "text": result["text"],
                "charCount": result["charCount"],
                "scrapedAt": scraped_at,
            }
            out_file.write_text(
                json.dumps(payload, indent=2, ensure_ascii=False) + "\n",
                encoding="utf-8",
            )
            manifest["videos"][video_id] = {
                "youtubeId": youtube_id,
                "language": result["language"],
                "charCount": result["charCount"],
                "status": "ok",
            }
            ok += 1
            print(f"  saved ({result['charCount']:,} chars)")

        if index < len(videos) and args.delay > 0:
            time.sleep(args.delay)

    manifest["withTranscript"] = sum(
        1
        for entry in manifest["videos"].values()
        if entry.get("status") in {"ok", "cached"}
    )
    manifest["missing"] = [
        video["id"]
        for video in all_videos
        if manifest["videos"].get(video["id"], {}).get("status") == "missing"
    ]
    MANIFEST.write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )

    print(
        f"\nDone: {ok} with transcript ({skipped} cached), "
        f"{len(failed)} missing → {OUT_DIR}"
    )
    return 0 if not failed or ok > 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
