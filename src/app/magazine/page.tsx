"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { magazineEras, magazineIssues } from "@/data/magazine";
import MagazineCover from "@/components/MagazineCover";

export default function MagazinePage() {
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
              Magazine
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-foreground mb-6">
              EnlightenNext
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl mb-4">
              The Magazine for Evolutionaries. Between 1992 and 2011, Andrew
              Cohen and the EnlightenNext community published what became
              internationally acknowledged as the leading spiritual periodical of
              the time.
            </p>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              The award-winning <em>EnlightenNext</em> (formerly{" "}
              <em>What Is Enlightenment?</em>) explored and defined a new
              approach to spirituality in the twenty-first century. Over nearly
              two decades of dialogue and enquiry with some of the
              world&apos;s greatest thought leaders, it redefined spirituality
              for a whole generation of seekers. The complete back catalogue —
              all 47 issues — is available to read free of charge.
            </p>
          </motion.div>
        </div>
      </section>

      {magazineEras.map((era, eraIndex) => {
        const issues = magazineIssues.filter(
          (item) => item.issue >= era.start && item.issue <= era.end
        );

        return (
          <section key={era.label} className="px-6 pb-20">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10"
              >
                <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-2">
                  {era.label}
                </h2>
                <p className="text-base text-muted leading-relaxed">
                  Published as <em>{era.name}</em>
                </p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-start gap-x-6 gap-y-10">
                {issues.map((item, i) => (
                  <motion.div
                    key={item.slug}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: reduce ? 0 : (i % 4) * 0.04 + eraIndex * 0.02,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link href={`/magazine/${item.slug}`} className="group block">
                      <MagazineCover
                        issue={item}
                        className="transition-transform duration-300 group-hover:-translate-y-1"
                      />
                      <div className="mt-4">
                        <p className="font-mono text-[11px] text-muted mb-1">
                          Issue {item.issue} · {item.date}
                        </p>
                        <h3 className="text-sm font-medium tracking-tight text-foreground leading-snug line-clamp-3">
                          {item.tagline}
                        </h3>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted group-hover:text-accent transition-colors duration-300">
                          Read issue
                          <ArrowUpRight size={13} weight="regular" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
