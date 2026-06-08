#!/usr/bin/env python3
"""Generate full homepage translations from messages/en.json using Google Translate."""

from __future__ import annotations

import copy
import json
import time
from pathlib import Path

from deep_translator import GoogleTranslator

ROOT = Path(__file__).resolve().parents[1]
MESSAGES = ROOT / "messages"

LOCALES = {
    "zh": "zh-CN",
    "hi": "hi",
    "es": "es",
    "fr": "fr",
    "ar": "ar",
    "bn": "bn",
    "pt": "pt",
    "ru": "ru",
    "ja": "ja",
    "de": "de",
    "ko": "ko",
    "ta": "ta",
    "it": "it",
    "tr": "tr",
    "vi": "vi",
}

KEEP_ENGLISH = {
    "Evolutionary Enlightenment",
    "An Unconditional Relationship to Life",
    "The Challenge of Enlightenment",
    "Embracing Heaven and Earth",
    "What is Enlightenment?",
    "H.W.L. Poonja (Papaji)",
    "Andrew Cohen",
    "1955 – 2025",
    "23 October 1955, New York City",
    "EnlightenNext",
}


def should_skip(text: str, path: str) -> bool:
    if not text or not text.strip():
        return True
    if path.endswith(".source"):
        return True
    return text in KEEP_ENGLISH


def translate_obj(obj, translator, path: str = ""):
    if isinstance(obj, dict):
        return {
            k: translate_obj(v, translator, f"{path}.{k}" if path else k)
            for k, v in obj.items()
        }
    if isinstance(obj, list):
        return [
            translate_obj(v, translator, f"{path}[{i}]") for i, v in enumerate(obj)
        ]
    if isinstance(obj, str):
        if should_skip(obj, path):
            return obj
        try:
            time.sleep(0.05)
            return translator.translate(obj) or obj
        except Exception as exc:
            print(f"  skip {path}: {exc}")
            return obj
    return obj


def main() -> None:
    en = json.loads((MESSAGES / "en.json").read_text(encoding="utf-8"))
    targets = LOCALES
    if len(__import__("sys").argv) > 1:
        targets = {k: LOCALES[k] for k in __import__("sys").argv[1:] if k in LOCALES}

    for locale, target in targets.items():
        print(f"Translating {locale}...")
        translator = GoogleTranslator(source="en", target=target)
        data = translate_obj(copy.deepcopy(en), translator)
        (MESSAGES / f"{locale}.json").write_text(
            json.dumps(data, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        print(f"  wrote {locale}.json")


if __name__ == "__main__":
    main()
