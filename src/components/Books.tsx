"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen } from "@phosphor-icons/react";

const books = [
  {
    title: "Evolutionary Enlightenment",
    description:
      "A comprehensive map of the spiritual journey for the twenty-first century, arguing that the evolutionary impulse and the enlightenment impulse are one.",
    year: "2011",
  },
  {
    title: "An Unconditional Relationship to Life",
    description:
      "Exploring the radical shift from seeking enlightenment as escape from life to embracing life itself as the path.",
    year: "2016",
  },
  {
    title: "Embracing Heaven and Earth",
    description:
      "Essays on the integration of spiritual realization with embodied, worldly existence.",
    year: "2009",
  },
  {
    title: "The Challenge of Enlightenment",
    description:
      "A collection of dialogues and teachings addressing the demands of authentic spiritual life in the modern world.",
    year: "2014",
  },
  {
    title: "Enlightenment is a Secret",
    description:
      "An intimate exploration of the paradox at the heart of spiritual awakening — that what is most obvious is often most hidden.",
    year: "2019",
  },
];

export default function Books() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="books" className="py-32 px-6 bg-surface-elevated">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-3">
            Books
          </p>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.15] mb-6">
            The Written Work
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mb-16">
            Five books spanning a decade of teaching, each exploring the
            intersection of spiritual awakening and evolutionary purpose.
          </p>
        </motion.div>

        <div className="divide-y divide-border">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : 0.2 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-start gap-5 py-8 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                <BookOpen size={18} weight="regular" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {book.title}
                  </h3>
                  <span className="text-xs text-muted font-mono">
                    {book.year}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {book.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
