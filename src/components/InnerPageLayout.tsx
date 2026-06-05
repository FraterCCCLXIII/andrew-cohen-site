"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft } from "@phosphor-icons/react";

interface PageSection {
  title: string;
  body: string;
}

interface Quote {
  text: string;
  source: string;
}

interface InnerPageLayoutProps {
  title: string;
  subtitle: string;
  intro: string;
  sections: PageSection[];
  quotes: Quote[];
  bookSource?: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
}

export default function InnerPageLayout({
  title,
  subtitle,
  intro,
  sections,
  quotes,
  bookSource,
  heroImage,
  heroImageAlt,
  heroImageCaption,
}: InnerPageLayoutProps) {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen pt-16">
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft size={14} weight="regular" />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {heroImage && (
            <motion.figure
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-surface-elevated">
                <Image
                  src={heroImage}
                  alt={heroImageAlt ?? title}
                  fill
                  priority
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
              {heroImageCaption && (
                <figcaption className="mt-3 text-xs text-muted/70 font-mono">
                  {heroImageCaption}
                </figcaption>
              )}
            </motion.figure>
          )}

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: reduce || !heroImage ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
              {subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-foreground mb-6">
              {title}
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              {intro}
            </p>
            {bookSource && (
              <p className="text-xs text-muted/60 font-mono mt-4">
                Source: {bookSource}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-8 px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, i) => (
            <motion.article
              key={section.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="prose-custom"
            >
              <h2 className="text-2xl md:text-3xl font-serif tracking-tight leading-[1.2] text-foreground mb-5">
                {section.title}
              </h2>
              <div className="text-base text-muted leading-[1.8] space-y-4">
                {section.body.split("\n\n").map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Quotes */}
      {quotes.length > 0 && (
        <section className="py-20 px-6 bg-surface-elevated">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-10"
            >
              Direct Quotes
            </motion.p>

            <div className="space-y-10">
              {quotes.map((quote, i) => (
                <motion.blockquote
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: reduce ? 0 : i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-l-2 border-border pl-6"
                >
                  <p className="text-lg md:text-xl font-serif leading-relaxed text-foreground mb-3">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <cite className="text-sm text-muted not-italic font-mono">
                    — {quote.source}
                  </cite>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to top */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft size={14} weight="regular" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
