#!/usr/bin/env python3
"""Move YouTube downloads into public/archive/media/youtube/ and refresh mirrors JSON.

Accepts files named like yt-dlp output: `Title [VIDEO_ID].ext`
Place downloads in archive/incoming/ (gitignored) or pass paths as arguments.
"""

from __future__ import annotations

import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INCOMING = ROOT / "archive" / "incoming"
DEST = ROOT / "public" / "archive" / "media" / "youtube"
MIRRORS = ROOT / "src" / "data" / "youtube-mirrors.json"

MIME = {
    ".mp4": "video/mp4",
    ".mkv": "video/x-matroska",
    ".webm": "video/webm",
    ".mov": "video/quicktime",
    ".mpg": "video/mpeg",
}

YOUTUBE_ID_RE = re.compile(r"\[([A-Za-z0-9_-]{11})\]")


def load_mirrors() -> dict[str, dict[str, str]]:
    if MIRRORS.exists():
        data = json.loads(MIRRORS.read_text(encoding="utf-8"))
        return dict(data.get("mirrors", {}))
    return {}


def save_mirrors(mirrors: dict[str, dict[str, str]]) -> None:
    payload = {"schema": "youtube-mirrors/v1", "mirrors": mirrors}
    MIRRORS.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")


def ingest_file(path: Path, mirrors: dict[str, dict[str, str]]) -> bool:
    ext = path.suffix.lower()
    if ext not in MIME:
        print(f"skip unsupported type: {path.name}", file=sys.stderr)
        return False

    match = YOUTUBE_ID_RE.search(path.name)
    if not match:
        print(f"skip (no [youtubeId] in name): {path.name}", file=sys.stderr)
        return False

    youtube_id = match.group(1)
    dest = DEST / f"{youtube_id}{ext}"
    DEST.mkdir(parents=True, exist_ok=True)

    if path.resolve() != dest.resolve():
        if dest.exists():
            dest.unlink()
        shutil.move(str(path), str(dest))
        print(f"moved -> {dest.relative_to(ROOT)}")

    mirrors[youtube_id] = {
        "mediaPath": f"/archive/media/youtube/{youtube_id}{ext}",
        "mimeType": MIME[ext],
    }
    return True


def main(argv: list[str]) -> int:
    paths: list[Path] = []
    if argv:
        paths.extend(Path(arg) for arg in argv)
    elif INCOMING.exists():
        paths.extend(
            p for p in sorted(INCOMING.iterdir()) if p.is_file() and p.name != ".gitkeep"
        )

    if not paths:
        print("No files to ingest. Drop downloads in archive/incoming/ or pass paths.")
        return 0

    mirrors = load_mirrors()
    ingested = 0
    for path in paths:
        if ingest_file(path, mirrors):
            ingested += 1

    if ingested:
        save_mirrors(mirrors)
        print(f"Updated {MIRRORS.relative_to(ROOT)} ({len(mirrors)} mirrors)")

    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
