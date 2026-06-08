"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { localeHref } from "@/components/LanguageSwitcher";
import { useLocale } from "@/i18n/locale-provider";

const navLinks = [
  { label: "Life", href: "/life" },
  { label: "Lineage", href: "/lineage" },
  { label: "Legacy", href: "/legacy" },
  { label: "Teaching", href: "/teaching" },
  { label: "Dictionary", href: "/dictionary" },
  { label: "Books", href: "/books" },
  { label: "Magazine", href: "/magazine" },
  { label: "Archive", href: "/archive" },
  { label: "Ashram", href: "/ashram" },
  { label: "Quotes", href: "/quotes" },
];

function NondualizerNavIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M8,0C3.581,0,0,3.583,0,8c0,4.419,3.581,8,8,8s8-3.581,8-8C16,3.583,12.419,0,8,0z M4.172,8.938c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V7.063c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V8.938z M6.336,9.734c0,0.275-0.224,0.5-0.5,0.5s-0.5-0.225-0.5-0.5V6.266c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V9.734z M8.5,11.125c0,0.275-0.224,0.5-0.5,0.5s-0.5-0.225-0.5-0.5v-6.25c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V11.125z M10.664,10.396c0,0.275-0.225,0.5-0.5,0.5s-0.5-0.225-0.5-0.5V5.604c0-0.276,0.225-0.5,0.5-0.5s0.5,0.224,0.5,0.5V10.396z M12.828,9.219c0,0.276-0.225,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V6.781c0-0.276,0.225-0.5,0.5-0.5s0.5,0.224,0.5,0.5V9.219z" />
    </svg>
  );
}

const nondualizerLinkClassName =
  "inline-flex items-center justify-center w-10 h-10 text-muted hover:text-foreground transition-colors duration-300 shrink-0";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="px-6 h-16 flex items-center justify-between">
        <Link
          href={localeHref(locale)}
          className="flex items-baseline gap-2 md:gap-3 min-w-0"
        >
          <span className="text-xl md:text-2xl font-sans font-medium tracking-tight text-foreground shrink-0">
            Andrew Cohen
          </span>
          <span className="text-xs md:text-sm text-muted font-sans tracking-wide">
            Nonduality for an Evolving World
          </span>
        </Link>

        {/* Desktop nav + contribute */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/nondualizer"
            className={nondualizerLinkClassName}
            aria-label="Nondualize"
          >
            <NondualizerNavIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/contribute"
            className="inline-flex items-center px-4 py-2 bg-foreground text-background text-sm rounded-md hover:bg-foreground/85 transition-colors duration-300 active:scale-[0.98] shrink-0"
          >
            Contribute
          </Link>
        </div>

        {/* Mobile: contribute + menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/nondualizer"
            className={nondualizerLinkClassName}
            aria-label="Nondualize"
          >
            <NondualizerNavIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/contribute"
            className="inline-flex items-center px-3 py-1.5 bg-foreground text-background text-xs rounded-md hover:bg-foreground/85 transition-colors duration-300 active:scale-[0.98]"
          >
            Contribute
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center w-10 h-10 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={reduce ? {} : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: reduce ? 0 : i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-foreground hover:text-muted transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
