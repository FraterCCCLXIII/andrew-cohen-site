import { notFound } from "next/navigation";
import HomePage from "@/components/HomePage";
import { isLocale, prefixedLocales } from "@/i18n/config";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale) || rawLocale === "en") notFound();

  return <HomePage />;
}
