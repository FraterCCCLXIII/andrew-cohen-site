"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { books } from "@/data/books";
import BookCover from "@/components/BookCover";

export default function BookCarousel() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCards = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstItem = el.querySelector<HTMLElement>("[data-carousel-item]");
    const gap = 16;
    const step = firstItem ? firstItem.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction * 2, behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      {/* Controls */}
      <div className="mb-6 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          disabled={!canScrollPrev}
          aria-label="Previous books"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-200 hover:bg-surface-elevated disabled:cursor-not-allowed disabled:opacity-30"
        >
          <CaretLeft size={16} weight="regular" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          disabled={!canScrollNext}
          aria-label="Next books"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-200 hover:bg-surface-elevated disabled:cursor-not-allowed disabled:opacity-30"
        >
          <CaretRight size={16} weight="regular" />
        </button>
      </div>

      <ul
        ref={scrollerRef}
        tabIndex={0}
        aria-label="Books by Andrew Cohen"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-md"
      >
        {books.map((book) => (
          <li
            key={book.slug}
            data-carousel-item
            className="w-[200px] flex-shrink-0 snap-start sm:w-[220px]"
          >
            <Link href={`/books/${book.slug}`} className="group block">
              <BookCover
                book={book}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1"
              />
              <div className="mt-4">
                <h3 className="text-sm font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                  {book.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">{book.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {book.tagline}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
