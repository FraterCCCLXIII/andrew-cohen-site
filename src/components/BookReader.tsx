"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, DownloadSimple, List } from "@phosphor-icons/react";
import { getBookDownload } from "@/data/bookDownloads";
import {
  groupChaptersByPart,
  type BookChapterMeta,
  type ReadableBook,
} from "@/data/bookReader";

interface BookReaderProps {
  book: ReadableBook;
  chapter: BookChapterMeta & { body: string };
  prev?: BookChapterMeta;
  next?: BookChapterMeta;
}

function ContentsNav({
  book,
  activeId,
  onNavigate,
}: {
  book: ReadableBook;
  activeId: string;
  onNavigate?: () => void;
}) {
  const activeRef = useRef<HTMLAnchorElement>(null);
  const groups = groupChaptersByPart(book);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest" });
  }, [activeId]);

  return (
    <nav aria-label="Table of contents" className="space-y-6">
      {groups.map(({ part, chapters }) => (
        <div key={part.id}>
          <p className="mb-2 px-3 text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
            {part.label}
          </p>
          <ul className="space-y-0.5">
            {chapters.map((item) => {
              const active = item.id === activeId;
              return (
                <li key={item.id}>
                  <Link
                    ref={active ? activeRef : undefined}
                    href={`/books/${book.slug}/read/${item.id}`}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 text-sm leading-snug transition-colors duration-200 ${
                      active
                        ? "bg-surface-elevated text-foreground font-medium"
                        : "text-muted hover:bg-surface-elevated hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function splitBlocks(body: string): string[] {
  return body.split("\n\n").flatMap((paragraph) => {
    const trimmed = paragraph.trim();
    if (!trimmed) return [];
    if (trimmed.includes(" A: ")) {
      return trimmed.split(/(?=\sA:\s)/).map((part) => part.trim());
    }
    return [trimmed];
  });
}

function ChapterBody({ body }: { body: string }) {
  return (
    <div className="space-y-5 text-base text-muted leading-[1.85]">
      {splitBlocks(body).map((paragraph, i) => {
        if (paragraph.startsWith("Q:") || paragraph.startsWith("A:")) {
          return (
            <p
              key={i}
              className={
                paragraph.startsWith("Q:")
                  ? "font-medium text-foreground"
                  : "pl-4 border-l-2 border-border"
              }
            >
              {paragraph}
            </p>
          );
        }

        return <p key={i}>{paragraph}</p>;
      })}
    </div>
  );
}

export default function BookReader({
  book,
  chapter,
  prev,
  next,
}: BookReaderProps) {
  const download = getBookDownload(book.slug);

  return (
    <div className="min-h-screen pt-16">
      <div className="lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]">
        {/* Desktop contents */}
        <aside className="hidden lg:block border-r border-border bg-background">
          <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col">
            <div className="border-b border-border px-5 py-4">
              <Link
                href={`/books/${book.slug}`}
                className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors"
              >
                <ArrowLeft size={12} weight="regular" />
                Back to book
              </Link>
              <p className="mt-3 text-sm font-medium text-foreground leading-snug">
                {book.title}
              </p>
              {book.subtitle && (
                <p className="mt-1 text-xs text-muted font-mono">
                  {book.subtitle}
                </p>
              )}
              {download && (
                <a
                  href={download.href}
                  download={download.downloadName}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors"
                >
                  <DownloadSimple size={12} weight="regular" />
                  Download {download.format === "pdf" ? "PDF" : "EPUB"}
                </a>
              )}
            </div>
            <div className="archive-scrollbar flex-1 overflow-y-auto px-3 py-4">
              <p className="mb-4 px-3 text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
                Contents
              </p>
              <ContentsNav book={book} activeId={chapter.id} />
            </div>
          </div>
        </aside>

        <main className="min-w-0">
          {/* Mobile header */}
          <div className="border-b border-border px-6 py-4 lg:hidden">
            <Link
              href={`/books/${book.slug}`}
              className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground"
            >
              <ArrowLeft size={12} weight="regular" />
              {book.title}
            </Link>
          </div>

          {/* Mobile contents toggle area - collapsible details */}
          <details className="border-b border-border lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 px-6 py-3 text-sm text-muted hover:text-foreground">
              <List size={16} weight="regular" />
              Contents
            </summary>
            <div className="archive-scrollbar max-h-72 overflow-y-auto border-t border-border px-3 py-4">
              <ContentsNav book={book} activeId={chapter.id} />
            </div>
          </details>

          <article className="mx-auto max-w-3xl px-6 py-10 md:py-14">
            <header className="mb-10 border-b border-border pb-8">
              <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-3">
                {book.parts.find((part) => part.id === chapter.partId)?.label}
              </p>
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight leading-[1.15] text-foreground">
                {chapter.title}
              </h1>
              {chapter.printedPage != null && (
                <p className="mt-3 text-xs text-muted font-mono">
                  p. {chapter.printedPage}
                </p>
              )}
            </header>

            <ChapterBody body={chapter.body} />

            <nav
              aria-label="Chapter navigation"
              className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-border pt-10"
            >
              {prev ? (
                <Link
                  href={`/books/${book.slug}/read/${prev.id}`}
                  className="group flex flex-col gap-1 rounded-md border border-border p-5 hover:bg-surface-elevated transition-colors"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-muted">
                    <ArrowLeft size={12} weight="regular" />
                    Previous
                  </span>
                  <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  href={`/books/${book.slug}/read/${next.id}`}
                  className="group flex flex-col gap-1 rounded-md border border-border p-5 hover:bg-surface-elevated transition-colors sm:text-right sm:items-end"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-muted">
                    Next
                    <ArrowRight size={12} weight="regular" />
                  </span>
                  <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {next.title}
                  </span>
                </Link>
              )}
            </nav>

            {book.credits && (
              <p className="mt-10 text-xs text-muted/70 font-mono">{book.credits}</p>
            )}
          </article>
        </main>
      </div>
    </div>
  );
}
