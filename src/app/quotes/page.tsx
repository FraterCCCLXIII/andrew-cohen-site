"use client";

import { motion, useReducedMotion } from "motion/react";

const quotes = [
  {
    text: "The spiritual impulse and the evolutionary impulse are one and the same.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Enlightenment is not about transcending the human condition. It is about fully embracing it.",
    source: "An Unconditional Relationship to Life",
  },
  {
    text: "True authenticity is not the expression of who you think you are. It is the expression of what is emerging through you.",
    source: "The Challenge of Enlightenment",
  },
  {
    text: "The same force that created the galaxies is creating you, and it is not finished yet.",
    source: "Embracing Heaven and Earth",
  },
];

export default function QuotesPage() {
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
              Quotes
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-foreground mb-6">
              Words to Carry
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              Lines drawn from across Andrew Cohen&apos;s teaching and written
              work — touchstones for the evolutionary path.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : (i % 2) * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-l-2 border-border pl-6"
            >
              <p className="text-lg font-serif leading-relaxed text-foreground mb-4">
                &ldquo;{q.text}&rdquo;
              </p>
              <cite className="text-sm text-muted not-italic">
                — {q.source}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
