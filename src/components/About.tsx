"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";

export default function About() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

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
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.15] mb-8">
            The Man Behind the Teaching
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
              <p>
                Andrew Cohen is a spiritual teacher and author who has spent over
                three decades articulating a vision of enlightenment that is
                inseparable from the evolutionary process itself. Born in 1954 in
                New York City, he began his spiritual journey as a young man and
                was deeply influenced by the Indian sage H.W.L. Poonja, a direct
                disciple of Ramana Maharshi.
              </p>
              <p>
                Cohen&apos;s teaching, which he calls &ldquo;Evolutionary
                Enlightenment,&rdquo; represents a significant departure from
                traditional enlightenment narratives. Rather than liberation from
                the world, he envisions the world transformed through individuals
                who have awakened to their role as conscious participants in the
                ongoing creation of the cosmos.
              </p>
              <p>
                Through his books, retreats, and the online publication
                &ldquo;What is Enlightenment?&rdquo; (later &ldquo;EnlightenNext&rdquo;),
                Cohen has influenced a global community of seekers who share his
                conviction that spiritual practice must be inseparable from
                creative engagement with the world.
              </p>
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
                Key Facts
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs text-muted mb-1">Born</dt>
                  <dd className="text-sm text-foreground">1954, New York City</dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-xs text-muted mb-1">Teaching</dt>
                  <dd className="text-sm text-foreground">Evolutionary Enlightenment</dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-xs text-muted mb-1">Lineage</dt>
                  <dd className="text-sm text-foreground">H.W.L. Poonja (Papaji)</dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-xs text-muted mb-1">Books</dt>
                  <dd className="text-sm text-foreground">5 published works</dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-xs text-muted mb-1">Publication</dt>
                  <dd className="text-sm text-foreground">What is Enlightenment?</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
