"use client";

import Image from "@/components/FadeInImage";
import Link from "next/link";
import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { useTranslations } from "@/i18n/locale-provider";

export default function Memoriam() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const t = useTranslations("memoriam");

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-xl border border-border bg-surface-elevated overflow-hidden md:min-h-[28rem]">
          <motion.figure
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hidden md:block absolute inset-y-0 right-0 z-0 w-[58%] lg:w-[54%]"
          >
            <div className="absolute inset-0 memoriam-portrait-mask">
              <Image
                src="/images/andrew-memoriam.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(max-width: 768px) 0px, 54vw"
                className="object-cover object-top"
              />
            </div>
          </motion.figure>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden md:block w-[82%] lg:w-[78%] memoriam-portrait-fade"
          />

          <div className="relative z-10 md:max-w-[58%]">
            <motion.div
              ref={ref}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 lg:p-14 pb-6 md:pb-8"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-3">
                {t("label")}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight leading-[1.15] text-foreground">
                {t("title")}
              </h2>
              <p className="mt-3 text-sm text-muted font-mono tracking-wide">
                {t("years")}
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="px-8 md:px-12 lg:px-14 pb-8 md:pb-12 lg:pb-14 md:pt-0"
            >
              <p className="text-base md:text-lg text-muted leading-relaxed mb-8">
                {t("body")}
              </p>
              <Link
                href="/obituary"
                className="inline-flex items-center gap-2 self-start px-5 py-3 border border-border text-sm rounded-md bg-surface-elevated/80 hover:bg-surface transition-colors duration-300 active:scale-[0.98]"
              >
                {t("readObituary")}
                <ArrowRight size={15} weight="regular" />
              </Link>
            </motion.div>
          </div>

          <motion.figure
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:hidden relative mx-8 mb-8 aspect-[4/5] overflow-hidden rounded-lg border border-border"
          >
            <div className="absolute inset-0 memoriam-portrait-mask">
              <Image
                src="/images/andrew-memoriam.jpg"
                alt={t("imageAlt")}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
            <div
              aria-hidden
              className="absolute inset-0 memoriam-portrait-fade memoriam-portrait-fade--mobile"
            />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
