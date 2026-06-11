"use client";

import Link from "next/link";
import { localeHref } from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import { useNewsletter } from "@/components/NewsletterProvider";
import { NEWSLETTER_COPY } from "@/lib/newsletter";
import { useLocale } from "@/i18n/locale-provider";

export default function Footer() {
  const locale = useLocale();
  const { openNewsletter } = useNewsletter();

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
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => openNewsletter("footer")}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {NEWSLETTER_COPY.footerLink}
            </button>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-6">
          {[
            { label: "Life", href: "/life" },
            { label: "Lineage", href: "/lineage" },
            { label: "Legacy", href: "/legacy" },
            { label: "Jazz", href: "/jazz" },
            { label: "Teaching", href: "/teaching" },
            { label: "Dictionary", href: "/dictionary" },
            { label: "Practice", href: "/practice" },
            { label: "Books", href: "/books" },
            { label: "Magazine", href: "/magazine" },
            { label: "Archive", href: "/archive" },
            { label: "Ashram", href: "/ashram" },
            { label: "Quotes", href: "/quotes" },
            { label: "Responding to Critics", href: "/responding-to-critics" },
            { label: "Roadmap", href: "/roadmap" },
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
