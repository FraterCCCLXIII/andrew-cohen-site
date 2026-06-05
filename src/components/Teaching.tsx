"use client";

import Link from "next/link";
import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useTranslations } from "@/i18n/locale-provider";

const principleKeys = [
  { key: "fiveTenets", href: "/teaching/five-tenets" },
  { key: "sixPrinciples", href: "/teaching/six-principles" },
  { key: "authenticSelf", href: "/teaching/the-authentic-self" },
  { key: "ego", href: "/teaching/the-ego" },
] as const;

export default function Teaching() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const t = useTranslations("teaching");

  return (
    <section id="teaching" className="py-32 px-6">
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
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.15] mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mb-16">
            {t("intro")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {principleKeys.map((p, i) => (
            <motion.div
              key={p.key}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={p.href}
                className="group flex flex-col h-full border border-border p-8 md:p-10 hover:bg-surface-elevated transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {t(`principles.${p.key}.title`)}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    weight="regular"
                    className="flex-shrink-0 text-muted group-hover:text-accent transition-colors duration-300"
                  />
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {t(`principles.${p.key}.body`)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <Link
            href="/teaching"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors duration-200"
          >
            {t("exploreAll")}
            <ArrowUpRight size={16} weight="regular" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
