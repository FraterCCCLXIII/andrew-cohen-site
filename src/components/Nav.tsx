"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Life", href: "/life" },
  { label: "Lineage", href: "/lineage" },
  { label: "Teaching", href: "/teaching" },
  { label: "Books", href: "/books" },
  { label: "Magazine", href: "/magazine" },
  { label: "Archive", href: "/archive" },
  { label: "Ashram", href: "/ashram" },
  { label: "Quotes", href: "/quotes" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-baseline gap-2 md:gap-3 min-w-0"
        >
          <span className="text-xl md:text-2xl font-sans font-medium tracking-tight text-foreground shrink-0">
            Andrew Cohen
          </span>
          <span className="text-xs md:text-sm text-muted font-sans tracking-wide">
            Nonduality Evolved
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
            href="/contribute"
            className="inline-flex items-center px-4 py-2 bg-foreground text-background text-sm rounded-md hover:bg-foreground/85 transition-colors duration-300 active:scale-[0.98] shrink-0"
          >
            Contribute
          </Link>
        </div>

        {/* Mobile: contribute + menu toggle */}
        <div className="md:hidden flex items-center gap-2">
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
