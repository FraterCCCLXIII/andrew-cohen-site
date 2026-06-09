import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies, headers } from "next/headers";
import "./globals.css";
import Nav from "@/components/Nav";
import ConditionalFooter from "@/components/ConditionalFooter";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ThemeScript from "@/components/ThemeScript";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import DynamicLocaleProvider from "@/i18n/dynamic-locale-provider";
import NewsletterProvider from "@/components/NewsletterProvider";
import { getMessages } from "@/i18n/get-messages";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrew Cohen | Evolutionary Enlightenment",
  description:
    "The teaching of Andrew Cohen: Evolutionary Enlightenment, a vision of the human being as a vehicle for the evolution of consciousness.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

async function resolveLocale(): Promise<Locale> {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-site-locale");
  if (headerLocale && isLocale(headerLocale)) {
    return headerLocale;
  }

  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  return defaultLocale;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await resolveLocale();
  const messages = await getMessages(locale);

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="grain min-h-full flex flex-col bg-background text-foreground">
        <ThemeScript />
        <GoogleAnalytics />
        <DynamicLocaleProvider
          initialLocale={locale}
          initialMessages={messages}
        >
          <NewsletterProvider>
            <Nav />
            <main className="flex-1">{children}</main>
            <ConditionalFooter />
          </NewsletterProvider>
        </DynamicLocaleProvider>
      </body>
    </html>
  );
}
