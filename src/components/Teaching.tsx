"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

const principles = [
  {
    title: "The Five Tenets",
    body: "Clarity of Intention, The Power of Volition, Face Everything and Avoid Nothing, The Process Perspective, and Cosmic Conscience — the practice of conscious evolution, where the path and the goal are one.",
    href: "/teaching/five-tenets",
  },
  {
    title: "The Six Principles",
    body: "Evolutionary Tension, Autonomy, Communion, Purity of Motive, Integrity of Action, and Natural Hierarchy — what emerges between people when individuals living the tenets come together.",
    href: "/teaching/six-principles",
  },
  {
    title: "The Authentic Self",
    body: "The evolutionary impulse — the creative energy of the cosmos — awakening to itself within an individual and recognized as one's own deepest identity, beyond the separate ego.",
    href: "/teaching/the-authentic-self",
  },
  {
    title: "The Ego",
    body: "The structure of attachment and identification that resists evolution: at once the vehicle of individuation and the greatest obstacle on the path to enlightenment.",
    href: "/teaching/the-ego",
  },
];

export default function Teaching() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

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
            The Teaching
          </p>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.15] mb-6">
            Evolutionary Enlightenment
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mb-16">
            Andrew Cohen&apos;s teaching bridges the ancient enlightenment tradition
            with the recognition that consciousness is evolving — and that each
            individual is uniquely called to participate in that evolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
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
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    weight="regular"
                    className="flex-shrink-0 text-muted group-hover:text-accent transition-colors duration-300"
                  />
                </div>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
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
            Explore all teachings
            <ArrowUpRight size={16} weight="regular" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
