"use client";

import { motion, useReducedMotion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const principles = [
  {
    title: "Evolutionary Enlightenment",
    body: "Not the liberation of the individual from the world, but the world transformed through the individual who has awakened to their role as a conscious participant in cosmic evolution.",
  },
  {
    title: "Authentic Self-Expression",
    body: "The unique creative contribution that each individual is called to make, emerging not from egoic preference but from the deepest recognition of what the evolutionary impulse demands through this particular life.",
  },
  {
    title: "The Impersonal Body of Humanity",
    body: "Beyond the separate self lies a shared field of awareness in which individual awakening serves the whole. The enlightenment of the individual and the transformation of culture are one process.",
  },
  {
    title: "The Edge of Emergence",
    body: "Spiritual growth occurs at the boundary of the known, where the individual must let go of all fixed positions and respond creatively to the genuinely new.",
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
            Conscious Evolution
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
              className="group border border-border p-8 md:p-10 hover:bg-surface-elevated transition-colors duration-300"
            >
              <h3 className="text-lg font-medium tracking-tight mb-3 text-foreground">
                {p.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
