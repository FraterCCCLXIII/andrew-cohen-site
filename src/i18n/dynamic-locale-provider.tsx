"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getLocaleFromPath } from "@/components/LanguageSwitcher";
import {
  getLocaleDirection,
  type Locale,
} from "@/i18n/config";
import type { HomeMessages } from "@/i18n/get-messages";
import { LocaleProvider } from "@/i18n/locale-provider";

const messageLoaders: Record<
  Locale,
  () => Promise<{ default: HomeMessages }>
> = {
  en: () => import("../../messages/en.json"),
  zh: () => import("../../messages/zh.json"),
  hi: () => import("../../messages/hi.json"),
  es: () => import("../../messages/es.json"),
  fr: () => import("../../messages/fr.json"),
  ar: () => import("../../messages/ar.json"),
  bn: () => import("../../messages/bn.json"),
  pt: () => import("../../messages/pt.json"),
  ru: () => import("../../messages/ru.json"),
  ja: () => import("../../messages/ja.json"),
  de: () => import("../../messages/de.json"),
  ko: () => import("../../messages/ko.json"),
  ta: () => import("../../messages/ta.json"),
  it: () => import("../../messages/it.json"),
  tr: () => import("../../messages/tr.json"),
  vi: () => import("../../messages/vi.json"),
};

interface LocaleState {
  locale: Locale;
  messages: HomeMessages;
}

export default function DynamicLocaleProvider({
  initialLocale,
  initialMessages,
  children,
}: {
  initialLocale: Locale;
  initialMessages: HomeMessages;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathLocale = getLocaleFromPath(pathname);
  const [state, setState] = useState<LocaleState>({
    locale: initialLocale,
    messages: initialMessages,
  });
  const loadedLocaleRef = useRef(initialLocale);

  useEffect(() => {
    if (pathLocale === loadedLocaleRef.current) return;

    let cancelled = false;
    messageLoaders[pathLocale]().then((module) => {
      if (cancelled) return;
      loadedLocaleRef.current = pathLocale;
      setState({ locale: pathLocale, messages: module.default });
      document.documentElement.lang = pathLocale;
      document.documentElement.dir = getLocaleDirection(pathLocale);
    });

    return () => {
      cancelled = true;
    };
  }, [pathLocale]);

  return (
    <LocaleProvider
      key={state.locale}
      locale={state.locale}
      messages={state.messages}
    >
      {children}
    </LocaleProvider>
  );
}
