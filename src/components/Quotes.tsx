"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslations } from "@/i18n/locale-provider";

export default function Quotes() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const t = useTranslations("quotes");
  const quotes = t.raw("items") as Array<{ text: string; source: string }>;

  return (
    <section id="quotes" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-3">
            {t("label")}
          </p>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.15] mb-16">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : 0.2 + i * 0.12,
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
      </div>
    </section>
  );
}
