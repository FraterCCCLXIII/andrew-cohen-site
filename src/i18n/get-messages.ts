import type { Locale } from "@/i18n/config";

export type HomeMessages = typeof import("../../messages/en.json");

export async function getMessages(locale: Locale): Promise<HomeMessages> {
  return (await import(`../../messages/${locale}.json`)).default as HomeMessages;
}
