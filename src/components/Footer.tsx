"use client";

import Link from "next/link";
import { localeHref } from "@/components/LanguageSwitcher";
import { useLocale } from "@/i18n/locale-provider";

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="border-t border-border px-6 py-12 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <Link
            href={localeHref(locale)}
            className="text-xl font-sans font-medium tracking-tight text-foreground"
          >
            Andrew Cohen
          </Link>
          <p className="mt-2 text-sm text-muted">
            A resource for those in search of freedom.
          </p>
        </div>
        <nav className="flex items-center gap-6">
          {[
            { label: "Life", href: "/life" },
            { label: "Lineage", href: "/lineage" },
            { label: "Teaching", href: "/teaching" },
            { label: "Practice", href: "/practice" },
            { label: "Books", href: "/books" },
            { label: "Magazine", href: "/magazine" },
            { label: "Archive", href: "/archive" },
            { label: "Ashram", href: "/ashram" },
            { label: "Quotes", href: "/quotes" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs text-muted hover:text-foreground transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
