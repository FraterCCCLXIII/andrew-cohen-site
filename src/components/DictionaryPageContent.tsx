"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MagnifyingGlass, ArrowUpRight } from "@phosphor-icons/react";
import {
  dictionaryCategoryOrder,
  dictionaryEntries,
  getDictionaryByCategory,
  type DictionaryCategory,
  type DictionaryEntry,
} from "@/data/dictionary";

function DictionaryNav({
  grouped,
  activeId,
  onSelect,
}: {
  grouped: Map<DictionaryCategory, DictionaryEntry[]>;
  activeId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <nav aria-label="Dictionary index" className="space-y-8">
      {dictionaryCategoryOrder.map((category) => {
        const entries = grouped.get(category) ?? [];
        if (entries.length === 0) return null;

        return (
          <div key={category}>
            <p className="mb-2 px-3 text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
              {category}
            </p>
            <ul className="space-y-0.5">
              {entries.map((entry) => {
                const active = entry.id === activeId;
                return (
                  <li key={entry.id}>
                    <a
                      href={`#${entry.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        onSelect(entry.id);
                      }}
                      aria-current={active ? "true" : undefined}
                      className={`block rounded-md px-3 py-2 text-sm leading-snug transition-colors duration-200 ${
                        active
                          ? "bg-surface-elevated text-foreground font-medium"
                          : "text-muted hover:bg-surface-elevated hover:text-foreground"
                      }`}
                    >
                      {entry.term}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}

function DictionaryEntryCard({ entry }: { entry: DictionaryEntry }) {
  return (
    <article
      id={entry.id}
      className="scroll-mt-28 border-b border-border pb-10 last:border-b-0"
    >
      <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
        {entry.category}
      </p>
      <h2 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-foreground mb-4">
        {entry.term}
      </h2>
      <p className="text-base text-muted leading-[1.8] mb-4">{entry.definition}</p>
      <p className="text-xs text-muted/80 font-mono leading-relaxed">
        Source: {entry.source}
      </p>
      {entry.relatedHref && (
        <Link
          href={entry.relatedHref}
          className="mt-4 inline-flex items-center gap-2 text-sm text-foreground hover:text-muted transition-colors duration-200"
        >
          Read more
          <ArrowUpRight size={15} weight="regular" />
        </Link>
      )}
    </article>
  );
}

export default function DictionaryPageContent() {
  const reduce = useReducedMotion();
  const grouped = useMemo(() => getDictionaryByCategory(), []);
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string | null>(
    dictionaryEntries[0]?.id ?? null
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return dictionaryEntries;
    return dictionaryEntries.filter(
      (entry) =>
        entry.term.toLowerCase().includes(q) ||
        entry.definition.toLowerCase().includes(q) ||
        entry.source.toLowerCase().includes(q) ||
        entry.category.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && dictionaryEntries.some((entry) => entry.id === hash)) {
      setActiveId(hash);
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ block: "start" });
      });
    }
  }, []);

  useEffect(() => {
    const ids = filtered.map((entry) => entry.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
              Reference
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-foreground mb-6">
              Dictionary of Awakening
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl mb-6">
              Core concepts and terms from Andrew Cohen&apos;s teaching,
              Evolutionary Enlightenment, and the Integral and Spiral Dynamics
              frameworks that inform it — with definitions and cited sources.
            </p>
            <div className="relative max-w-md">
              <MagnifyingGlass
                size={18}
                weight="regular"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search terms…"
                className="w-full rounded-md border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted/70 focus:outline-none focus:ring-1 focus:ring-border"
              />
            </div>
            <p className="mt-4 text-sm text-muted/80 font-mono">
              {filtered.length} of {dictionaryEntries.length} terms
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-10 pb-24 lg:min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-12">
          <aside className="lg:hidden mb-8 -mx-1 overflow-x-auto pb-2">
            <div className="flex gap-2 px-1 min-w-max">
              {filtered.map((entry) => (
                <a
                  key={entry.id}
                  href={`#${entry.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleSelect(entry.id);
                  }}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors duration-200 ${
                    activeId === entry.id
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted hover:text-foreground"
                  }`}
                >
                  {entry.term}
                </a>
              ))}
            </div>
          </aside>

          <aside className="hidden lg:block shrink-0 lg:w-56 xl:w-64 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:self-start">
            <div className="dictionary-nav-scroll h-full">
              <div className="dictionary-nav-scroll__track lg:pt-2">
                <DictionaryNav
                  grouped={grouped}
                  activeId={activeId}
                  onSelect={handleSelect}
                />
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1 max-w-3xl">
            {filtered.length === 0 ? (
              <p className="text-muted">No terms match your search.</p>
            ) : (
              <div className="space-y-10">
                {filtered.map((entry, index) => (
                  <motion.div
                    key={entry.id}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.5,
                      delay: reduce ? 0 : Math.min(index * 0.02, 0.2),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <DictionaryEntryCard entry={entry} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
