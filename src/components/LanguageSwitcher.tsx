"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, CaretDown, Check } from "@phosphor-icons/react";
import { useTranslations } from "@/i18n/locale-provider";
import {
  defaultLocale,
  isLocale,
  localeNames,
  locales,
  type Locale,
} from "@/i18n/config";

function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && isLocale(segment) && segment !== defaultLocale) {
    return segment;
  }
  return defaultLocale;
}

function localeHref(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const currentLocale = getLocaleFromPath(pathname);
  const t = useTranslations("languageSwitcher");

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function selectLocale(locale: Locale) {
    setOpen(false);
    router.push(localeHref(locale));
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted hover:text-foreground hover:bg-surface-elevated transition-colors duration-200"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("label")}
      >
        <Globe size={14} weight="regular" className="shrink-0" />
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
        <span className="sm:hidden uppercase">{currentLocale}</span>
        <CaretDown
          size={12}
          weight="bold"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t("label")}
          className="absolute right-0 z-50 mt-2 max-h-[min(24rem,calc(100dvh-6rem))] w-52 overflow-y-auto rounded-md border border-border bg-background py-1 shadow-lg"
        >
          {locales.map((locale) => {
            const active = locale === currentLocale;
            return (
              <button
                key={locale}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => selectLocale(locale)}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors duration-150 ${
                  active
                    ? "bg-surface-elevated text-foreground"
                    : "text-muted hover:bg-surface-elevated hover:text-foreground"
                }`}
              >
                <span>{localeNames[locale]}</span>
                {active && <Check size={14} weight="bold" className="shrink-0" />}
              </button>
            );
          })}
          <p className="border-t border-border px-3 py-2 text-[11px] leading-snug text-muted/80">
            {t("homepageOnly")}
          </p>
        </div>
      )}
    </div>
  );
}

export { getLocaleFromPath, localeHref };
