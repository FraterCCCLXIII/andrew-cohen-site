"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import ArchiveCard from "@/components/ArchiveCard";
import ArchiveListItem from "@/components/ArchiveListItem";
import ArchiveSidebar, {
  type ArchiveViewMode,
} from "@/components/ArchiveSidebar";
import {
  archiveTypeLabels,
  filterArchive,
  getArchiveCatalog,
  getArchiveCounts,
  getArchiveTags,
  getArchiveYearBounds,
  isYearFilterActive,
  type ArchiveType,
} from "@/data/archive";

const catalog = getArchiveCatalog();
const allTags = getArchiveTags(catalog);
const yearBounds = getArchiveYearBounds(catalog);

function ArchivePageContent() {
  const reduce = useReducedMotion();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [view, setView] = useState<ArchiveViewMode>("grid");
  const [type, setType] = useState<ArchiveType | "all">("all");
  const [tag, setTag] = useState("all");

  useEffect(() => {
    const tagParam = searchParams.get("tag");
    if (tagParam && allTags.includes(tagParam)) {
      setTag(tagParam);
    }
  }, [searchParams]);
  const [yearMin, setYearMin] = useState(yearBounds.min);
  const [yearMax, setYearMax] = useState(yearBounds.max);

  const filtered = useMemo(
    () =>
      filterArchive(catalog, {
        query,
        type,
        tag,
        yearMin,
        yearMax,
        yearBounds,
      }),
    [query, type, tag, yearMin, yearMax]
  );

  const counts = useMemo(() => getArchiveCounts(catalog), []);

  const activeLabel =
    type === "all" ? "All items" : archiveTypeLabels[type];
  const yearActive = isYearFilterActive(yearMin, yearMax, yearBounds);

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
              Archive
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-foreground mb-6">
              The Andrew Cohen Archive
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl mb-4">
              A searchable catalog of Andrew Cohen&apos;s teachings, articles,
              books, magazine issues, and videos — tagged and organized for
              discovery.
            </p>
            <p className="text-sm text-muted/80 font-mono">
              {catalog.length} items · {counts.video} videos · {counts.media}{" "}
              listen · {counts.article} articles · {counts.book} books ·{" "}
              {counts.magazine} magazine issues
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-10 pb-24 lg:min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:min-h-[calc(100vh-12rem)] gap-10 lg:gap-12">
          <aside className="flex shrink-0 flex-col lg:w-56 xl:w-64 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:pt-8 lg:self-start">
            <ArchiveSidebar
              view={view}
              type={type}
              tag={tag}
              tags={allTags}
              counts={counts}
              total={catalog.length}
              yearMin={yearMin}
              yearMax={yearMax}
              yearBounds={yearBounds}
              onViewChange={setView}
              onTypeChange={setType}
              onTagChange={setTag}
              onYearMinChange={setYearMin}
              onYearMaxChange={setYearMax}
              onYearReset={() => {
                setYearMin(yearBounds.min);
                setYearMax(yearBounds.max);
              }}
            />
          </aside>

          <main className="flex-1 min-w-0">
            <div className="relative mb-8">
              <MagnifyingGlass
                size={18}
                weight="regular"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, tag, or year…"
                aria-label="Search archive"
                className="w-full rounded-md border border-border bg-surface py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-2">
              <p className="font-mono text-xs text-muted">
                {filtered.length} result{filtered.length === 1 ? "" : "s"}
                {type === "article" || type === "media"
                  ? " — more content coming soon"
                  : ""}
              </p>
              {(type !== "all" || tag !== "all" || yearActive) && (
                <span className="font-mono text-xs text-muted/70">
                  · {activeLabel}
                  {tag !== "all" ? ` · ${tag}` : ""}
                  {yearActive ? ` · ${yearMin}–${yearMax}` : ""}
                </span>
              )}
            </div>

            {filtered.length > 0 ? (
              view === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: reduce ? 0 : Math.min(i * 0.02, 0.4),
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <ArchiveCard item={item} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div>
                  {filtered.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.45,
                        delay: reduce ? 0 : Math.min(i * 0.02, 0.3),
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="border-b border-border py-8 first:pt-0 last:border-b-0"
                    >
                      <ArchiveListItem item={item} />
                    </motion.div>
                  ))}
                </div>
              )
            ) : (
              <div className="rounded-md border border-border bg-surface-elevated px-6 py-16 text-center">
                <p className="text-base text-muted">
                  No items match your search. Try a different keyword, type, or
                  tag.
                </p>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}

export default function ArchivePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-16 flex items-center justify-center">
          <p className="text-sm text-muted font-mono">Loading archive…</p>
        </div>
      }
    >
      <ArchivePageContent />
    </Suspense>
  );
}
