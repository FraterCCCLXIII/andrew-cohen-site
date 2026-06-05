/** Supported locales — top global languages plus Hindi, Tamil, and Japanese. */
export const locales = [
  "en",
  "zh",
  "hi",
  "es",
  "fr",
  "ar",
  "bn",
  "pt",
  "ru",
  "ja",
  "de",
  "ko",
  "ta",
  "it",
  "tr",
  "vi",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Human-readable names shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  hi: "हिन्दी",
  es: "Español",
  fr: "Français",
  ar: "العربية",
  bn: "বাংলা",
  pt: "Português",
  ru: "Русский",
  ja: "日本語",
  de: "Deutsch",
  ko: "한국어",
  ta: "தமிழ்",
  it: "Italiano",
  tr: "Türkçe",
  vi: "Tiếng Việt",
};

export const rtlLocales: Locale[] = ["ar"];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleDirection(locale: Locale): "ltr" | "rtl" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

/** Locales with dedicated homepage routes (English uses `/`). */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale);
