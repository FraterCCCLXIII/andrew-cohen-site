#!/usr/bin/env python3
"""Scrape journal articles from https://andrewcohen.com/journal/ via WordPress API + HTML."""

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

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
INDEX_OUT = ROOT / "src/data/journal/index.json"
CONTENT_DIR = ROOT / "src/data/journal/content"
API = "https://andrewcohen.com/wp-json/wp/v2"
SOURCE = "https://andrewcohen.com/journal/"
WP_ADMIN_AUTHORS = {"Daniela Bomatter"}


def normalize_author(name: str) -> str:
    stripped = name.strip()
    if stripped in WP_ADMIN_AUTHORS:
        return "Andrew Cohen"
    return name

ALLOWED_TAGS = {
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "a",
    "img",
    "iframe",
    "blockquote",
    "ul",
    "ol",
    "li",
    "em",
    "strong",
    "br",
    "figure",
    "figcaption",
    "div",
    "span",
    "hr",
}


def fetch_json(url: str) -> object:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=45) as response:
        return json.loads(response.read().decode("utf-8"))


def fetch_html(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=45) as response:
        return response.read().decode("utf-8", errors="replace")


def strip_html(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text)
    text = unescape(re.sub(r"\s+", " ", text)).strip()
    return text


def format_posted_date(iso_date: str) -> str:
    dt = datetime.fromisoformat(iso_date)
    return dt.strftime("%d/%m/%Y")


def absolutize_url(url: str) -> str:
    if not url:
        return url
    if url.startswith("//"):
        return f"https:{url}"
    if url.startswith("/"):
        return f"https://andrewcohen.com{url}"
    return url


def sanitize_element(element) -> None:
    if element.name not in ALLOWED_TAGS:
        element.unwrap()
        return

    if element.name == "a":
        href = element.get("href")
        if href:
            element["href"] = absolutize_url(href)
        for attr in list(element.attrs):
            if attr not in {"href", "title", "class"}:
                del element[attr]
        return

    if element.name == "img":
        src = element.get("src") or element.get("data-src")
        if src:
            element["src"] = absolutize_url(src)
        for attr in list(element.attrs):
            if attr not in {"src", "alt", "title", "class", "loading"}:
                del element[attr]
        return

    if element.name == "iframe":
        src = element.get("src")
        if src:
            element["src"] = absolutize_url(src)
        for attr in list(element.attrs):
            if attr not in {"src", "title", "allow", "allowfullscreen", "class"}:
                del element[attr]
        return

    for attr in list(element.attrs):
        if attr not in {"class", "id"}:
            del element[attr]


def sanitize_tree(root) -> None:
    for tag in root.find_all(["script", "style", "form", "input", "button", "noscript"]):
        tag.decompose()

    for element in list(root.find_all(True)):
        sanitize_element(element)


def extract_content_html(html: str) -> str:
    soup = BeautifulSoup(html, "lxml")

    for tag in soup(["script", "style", "nav", "header", "footer", "noscript"]):
        tag.decompose()

    root = (
        soup.select_one("#cs-content")
        or soup.select_one(".entry-content")
        or soup.select_one("article")
    )
    if not root:
        return ""

    sanitize_tree(root)

    # Remove empty structural wrappers.
    changed = True
    while changed:
        changed = False
        for element in root.find_all(["div", "span"]):
            if element.get_text(strip=True) or element.find(["img", "iframe", "video"]):
                continue
            element.decompose()
            changed = True

    content = root.decode_contents().strip()
    content = re.sub(r"\n{3,}", "\n\n", content)
    return content


def infer_tags(categories: list[str]) -> list[str]:
    tags = ["article", "journal"]
    for category in categories:
        if category not in tags:
            tags.append(category)
    return tags


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--force", action="store_true", help="Re-scrape all articles")
    parser.add_argument("--delay", type=float, default=0.4, help="Delay between page fetches")
    parser.add_argument("--limit", type=int, default=0, help="Only process first N articles")
    args = parser.parse_args()

    try:
        posts = fetch_json(
            f"{API}/posts?per_page=100&_fields=id,slug,title,date,modified,link,"
            "categories,excerpt,content,featured_media,author"
        )
        categories = {
            item["id"]: item["slug"]
            for item in fetch_json(f"{API}/categories?per_page=100")
        }
    except urllib.error.URLError as exc:
        print(f"Failed to fetch WordPress API: {exc}", file=sys.stderr)
        return 1

    if not isinstance(posts, list):
        print("Unexpected API response", file=sys.stderr)
        return 1

    if args.limit > 0:
        posts = posts[: args.limit]

    authors: dict[int, str] = {}
    media_cache: dict[int, str | None] = {}
    CONTENT_DIR.mkdir(parents=True, exist_ok=True)

    scraped_at = datetime.now(UTC).strftime("%Y-%m-%dT%H:%M:%SZ")
    index: list[dict] = []

    for i, post in enumerate(posts, start=1):
        slug = post["slug"]
        source_url = post["link"]
        content_file = CONTENT_DIR / f"{slug}.json"
        posted_at = post["date"]
        date_label = format_posted_date(posted_at)

        if content_file.exists() and not args.force:
            existing = json.loads(content_file.read_text(encoding="utf-8"))
            content_html = existing.get("contentHtml", "")
            print(f"[{i}/{len(posts)}] skip {slug}")
        else:
            print(f"[{i}/{len(posts)}] scrape {slug} …", flush=True)
            try:
                page_html = fetch_html(source_url)
                content_html = extract_content_html(page_html)
            except urllib.error.URLError as exc:
                print(f"  failed: {exc}", file=sys.stderr)
                content_html = strip_html(post.get("content", {}).get("rendered", ""))

            content_file.write_text(
                json.dumps(
                    {
                        "slug": slug,
                        "contentHtml": content_html,
                        "scrapedAt": scraped_at,
                        "sourceUrl": source_url,
                    },
                    indent=2,
                    ensure_ascii=False,
                )
                + "\n",
                encoding="utf-8",
            )

            if args.delay > 0 and i < len(posts):
                time.sleep(args.delay)

        author_id = post["author"]
        if author_id not in authors:
            try:
                authors[author_id] = normalize_author(
                    fetch_json(f"{API}/users/{author_id}")["name"]
                )
            except urllib.error.URLError:
                authors[author_id] = "Andrew Cohen"

        featured_media = post.get("featured_media")
        if featured_media and featured_media not in media_cache:
            try:
                media = fetch_json(f"{API}/media/{featured_media}")
                media_cache[featured_media] = media.get("source_url")
            except urllib.error.URLError:
                media_cache[featured_media] = None

        category_slugs = [
            categories[cid]
            for cid in post.get("categories", [])
            if cid in categories
        ]
        excerpt = strip_html(post.get("excerpt", {}).get("rendered", ""))

        index.append(
            {
                "slug": slug,
                "title": strip_html(post["title"]["rendered"]),
                "author": authors[author_id],
                "postedAt": posted_at,
                "date": date_label,
                "sourceUrl": source_url,
                "excerpt": excerpt,
                "categories": category_slugs,
                "tags": infer_tags(category_slugs),
                "thumbnail": media_cache.get(featured_media),
                "hasContent": bool(content_html.strip()),
            }
        )

    INDEX_OUT.parent.mkdir(parents=True, exist_ok=True)
    INDEX_OUT.write_text(
        json.dumps(
            {
                "scrapedAt": scraped_at,
                "source": SOURCE,
                "count": len(index),
                "articles": index,
            },
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )

    with_content = sum(1 for item in index if item["hasContent"])
    print(
        f"\nWrote {len(index)} articles ({with_content} with body content) → {INDEX_OUT.parent}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
