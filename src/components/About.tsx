"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslations } from "@/i18n/locale-provider";

export default function About() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section id="about" className="py-32 px-6 bg-surface-elevated">
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
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.15] mb-8">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-3"
          >
            <div className="space-y-5 text-base text-muted leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-2"
          >
            <div className="border border-border rounded-lg p-6 bg-surface">
              <h3 className="text-sm uppercase tracking-[0.14em] text-muted font-mono mb-5">
                {t("keyFacts")}
              </h3>
              <dl className="space-y-4">
                {(["born", "teaching", "lineage", "books", "publication"] as const).map(
                  (factKey, index) => (
                    <div
                      key={factKey}
                      className={index > 0 ? "border-t border-border pt-4" : undefined}
                    >
                      <dt className="text-xs text-muted mb-1">
                        {t(`facts.${factKey}.label`)}
                      </dt>
                      <dd className="text-sm text-foreground">
                        {t(`facts.${factKey}.value`)}
                      </dd>
                    </div>
                  )
                )}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
