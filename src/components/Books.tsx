"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import BookCarousel from "@/components/BookCarousel";

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
            More than three decades of teaching, from the first account of his
            awakening to his most recent reflections — each book a record of an
            evolving spiritual vision.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <BookCarousel />
        </motion.div>
      </div>
    </section>
  );
}
