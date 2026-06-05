"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { books } from "@/data/books";
import BookCover from "@/components/BookCover";

export default function BooksIndexPage() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
              Books
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-foreground mb-6">
              The Written Work
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              More than three decades of teaching, from the first account of his
              awakening to his most recent reflections — each book a record of an
              evolving spiritual vision. Select any title to read more.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {books.map((book, i) => (
            <motion.div
              key={book.slug}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : (i % 4) * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/books/${book.slug}`} className="group block">
                <BookCover
                  book={book}
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
                <div className="mt-4">
                  <p className="font-mono text-[11px] text-muted mb-1">
                    {book.year}
                  </p>
                  <h2 className="text-sm font-medium tracking-tight text-foreground leading-snug">
                    {book.title}
                  </h2>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted group-hover:text-accent transition-colors duration-300">
                    Read more
                    <ArrowUpRight size={13} weight="regular" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
