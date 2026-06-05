"use client";

import { createContext, useContext } from "react";
import { NextIntlClientProvider, useTranslations as useNextIntlTranslations } from "next-intl";
import type { Locale } from "@/i18n/config";
import type { HomeMessages } from "@/i18n/get-messages";

interface LocaleContextValue {
  locale: Locale;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: HomeMessages;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale }}>
      <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  const context = useContext(LocaleContext);
  if (!context) {
    return "en";
  }
  return context.locale;
}

export function useTranslations(namespace?: string) {
  return useNextIntlTranslations(namespace);
}
