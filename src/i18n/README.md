# Homepage translations

The site uses **[next-intl](https://next-intl.dev)** with JSON message files — one file per locale in `messages/`.

## Supported locales (16)

| Code | Language |
|------|----------|
| `en` | English (default, `/`) |
| `zh` | 中文 |
| `hi` | हिन्दी |
| `es` | Español |
| `fr` | Français |
| `ar` | العربية (RTL) |
| `bn` | বাংলা |
| `pt` | Português |
| `ru` | Русский |
| `ja` | 日本語 |
| `de` | Deutsch |
| `ko` | 한국어 |
| `ta` | தமிழ் |
| `it` | Italiano |
| `tr` | Türkçe |
| `vi` | Tiếng Việt |

## Routing

- **English homepage:** `/`
- **Translated homepage:** `/{locale}` (e.g. `/hi`, `/ja`, `/ta`)
- **Other pages:** remain English-only at their existing paths (`/teaching`, `/books`, …)

The language switcher in the nav sets a `NEXT_LOCALE` cookie and navigates to the localized homepage.

## Adding translations

1. Copy `messages/en.json` as the source of truth for keys.
2. Edit `messages/{locale}.json` with translated strings.
3. Book titles in quote sources may stay in English.
4. Run `npm run build` to verify all locales load.

## Architecture

- `src/i18n/config.ts` — locale list and display names
- `src/i18n/get-messages.ts` — loads and merges messages (falls back to English for missing keys)
- `src/middleware.ts` — sets locale cookie and `x-site-locale` header
- Homepage components use `useTranslations()` from `src/i18n/locale-provider.tsx`

To regenerate homepage translations from English:

```bash
npm run i18n:seed          # all locales
python3 scripts/generate-home-translations.py vi  # single locale
```

Requires `pip install deep-translator`. Book titles in quote sources remain in English.
