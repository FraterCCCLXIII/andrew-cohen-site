"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { roadmapCategories } from "@/data/roadmap";

const githubNewIssueUrl =
  "https://github.com/FraterCCCLXIII/andrew-cohen-site/issues/new";
const githubIssuesUrl =
  "https://github.com/FraterCCCLXIII/andrew-cohen-site/issues";

export default function RoadmapPageContent() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
              What we are building toward
            </p>
            <h1 className="font-serif tracking-tight leading-[1.1] text-foreground mb-6 text-3xl md:text-5xl lg:text-6xl">
              Roadmap
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              This archive is a long-term project. The items below describe
              directions we are working toward — not commitments on timing or
              sequence. Priorities shift as materials surface, volunteers
              contribute, and resources allow.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed max-w-3xl">
              Have a bug to report or an idea for improving the site? Open an
              issue on{" "}
              <a
                href={githubIssuesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors duration-200"
              >
                GitHub
              </a>{" "}
              — no developer account required beyond a free GitHub login.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contribute"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300 active:scale-[0.98]"
              >
                Contribute
                <ArrowUpRight size={15} weight="regular" />
              </Link>
              <Link
                href="/archive"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300 active:scale-[0.98]"
              >
                Browse the archive
                <ArrowUpRight size={15} weight="regular" />
              </Link>
              <a
                href={githubNewIssueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300 active:scale-[0.98]"
              >
                Open an issue
                <ArrowUpRight size={15} weight="regular" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {roadmapCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.id}
              id={category.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : categoryIndex * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="scroll-mt-24"
            >
              <h2 className="text-2xl md:text-3xl font-sans font-medium tracking-tight leading-[1.2] text-foreground mb-3">
                {category.title}
              </h2>
              <p className="text-base text-muted leading-[1.8] mb-8 max-w-3xl">
                {category.description}
              </p>
              <ul className="space-y-6">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="border-l-2 border-border pl-5 md:pl-6"
                  >
                    <h3 className="text-base md:text-lg font-sans font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm md:text-base text-muted leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </section>
    </div>
  );
}
