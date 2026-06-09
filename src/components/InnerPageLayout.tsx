"use client";

import Link from "next/link";
import Image from "@/components/FadeInImage";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

interface SectionImage {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
}

interface PageSection {
  title: string;
  body: string;
  id?: string;
  images?: SectionImage[];
  links?: PageLink[];
}

interface Quote {
  text: string;
  source: string;
}

interface PageLink {
  label: string;
  href: string;
  external?: boolean;
  download?: string;
}

type HeroVariant = "card" | "full";

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
  heroImageFit?: "cover" | "contain";
  heroVariant?: HeroVariant;
  links?: PageLink[];
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
  heroImageFit = "cover",
  heroVariant = "card",
  links,
}: InnerPageLayoutProps) {
  const reduce = useReducedMotion();
  const useFullHero = heroVariant === "full" && !!heroImage;

  const heroContent = (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: useFullHero ? 0.8 : 0.7,
        delay: reduce || !heroImage || useFullHero ? 0 : 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
        {subtitle}
      </p>
      <h1
        className={`font-serif tracking-tight leading-[1.1] text-foreground mb-6 ${
          useFullHero
            ? "text-4xl md:text-6xl lg:text-7xl max-w-4xl"
            : "text-3xl md:text-5xl lg:text-6xl"
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-lg text-muted leading-relaxed ${
          useFullHero ? "max-w-2xl md:text-xl" : "max-w-3xl"
        }`}
      >
        {intro}
      </p>
      {heroImageCaption && useFullHero && (
        <p className="mt-4 text-xs text-muted/70 font-mono max-w-2xl">
          {heroImageCaption}
        </p>
      )}
      {bookSource && (
        <p className="text-xs text-muted/60 font-mono mt-4">
          Source: {bookSource}
        </p>
      )}

      {links && links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) =>
            link.download ? (
              <a
                key={link.href}
                href={link.href}
                download={link.download}
                className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300 active:scale-[0.98]"
              >
                {link.label}
                <ArrowUpRight size={15} weight="regular" />
              </a>
            ) : link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300 active:scale-[0.98]"
              >
                {link.label}
                <ArrowUpRight size={15} weight="regular" />
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300 active:scale-[0.98]"
              >
                {link.label}
                <ArrowUpRight size={15} weight="regular" />
              </Link>
            )
          )}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className={useFullHero ? "min-h-screen" : "min-h-screen pt-16"}>
      {useFullHero ? (
        <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 pt-16 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src={heroImage}
              alt={heroImageAlt ?? title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[28%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/80 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>

          <div className="max-w-5xl mx-auto w-full">{heroContent}</div>
        </section>
      ) : (
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
                    className={heroImageFit === "contain" ? "object-contain" : "object-cover"}
                  />
                </div>
                {heroImageCaption && (
                  <figcaption className="mt-3 text-xs text-muted/70 font-mono">
                    {heroImageCaption}
                  </figcaption>
                )}
              </motion.figure>
            )}

            {heroContent}
          </div>
        </section>
      )}

      {/* Sections */}
      <section className="py-8 px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, i) => (
            <motion.article
              key={section.title}
              id={section.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="prose-custom scroll-mt-24"
            >
              <h2 className="text-2xl md:text-3xl font-sans font-medium tracking-tight leading-[1.2] text-foreground mb-5">
                {section.title}
              </h2>

              <div
                className={
                  section.images?.length
                    ? section.images.some((image) => image.wide)
                      ? "flex flex-col gap-8"
                      : section.images.length >= 3
                        ? "flex flex-col gap-8"
                        : "flex flex-col gap-8 md:flex-row md:items-start"
                    : undefined
                }
              >
                {section.images && section.images.length > 0 && (
                  <figure
                    className={
                      section.images.some((image) => image.wide)
                        ? "w-full"
                        : section.images.length >= 3
                          ? "w-full"
                          : "shrink-0 md:w-52"
                    }
                  >
                    <div
                      className={
                        section.images.some((image) => image.wide)
                          ? "space-y-3"
                          : section.images.length >= 3
                            ? "grid grid-cols-3 gap-3 md:gap-4"
                            : section.images.length === 2
                              ? "grid grid-cols-2 gap-3"
                              : "space-y-3"
                      }
                    >
                      {section.images.map((image) => (
                        <div key={image.src}>
                          <div
                            className={`relative overflow-hidden rounded-lg border border-border bg-surface-elevated ${
                              image.wide ? "aspect-[4/3]" : "aspect-[3/4]"
                            }`}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              sizes={
                                image.wide
                                  ? "(max-width: 896px) 100vw, 896px"
                                  : section.images!.length >= 3
                                    ? "(max-width: 640px) 100vw, 33vw"
                                    : section.images!.length === 2
                                      ? "(max-width: 768px) 50vw, 140px"
                                      : "(max-width: 768px) 100vw, 208px"
                              }
                              className={
                                image.wide ? "object-contain" : "object-cover object-center"
                              }
                            />
                          </div>
                          {image.caption && (
                            <figcaption className="mt-2 text-xs text-muted/70 font-mono">
                              {image.caption}
                            </figcaption>
                          )}
                        </div>
                      ))}
                    </div>
                  </figure>
                )}

                <div className="min-w-0 flex-1 text-base text-muted leading-[1.8] space-y-4">
                  {section.body.split("\n\n").map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}

                  {section.links && section.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {section.links.map((link) =>
                        link.download ? (
                          <a
                            key={link.href}
                            href={link.href}
                            download={link.download}
                            className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300 active:scale-[0.98]"
                          >
                            {link.label}
                            <ArrowUpRight size={15} weight="regular" />
                          </a>
                        ) : link.external || link.href.startsWith("mailto:") ? (
                          <a
                            key={link.href}
                            href={link.href}
                            target={
                              link.external && !link.href.startsWith("mailto:")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              link.external && !link.href.startsWith("mailto:")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300 active:scale-[0.98]"
                          >
                            {link.label}
                            {!link.href.startsWith("mailto:") && (
                              <ArrowUpRight size={15} weight="regular" />
                            )}
                          </a>
                        ) : (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300 active:scale-[0.98]"
                          >
                            {link.label}
                            <ArrowUpRight size={15} weight="regular" />
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
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
    </div>
  );
}
