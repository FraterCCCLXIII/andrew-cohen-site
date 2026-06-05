"use client";

import Image from "@/components/FadeInImage";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 pt-16 overflow-hidden">
      {/* Background photograph */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-stars.jpg"
          alt="The Milky Way in a starry night sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Legibility scrims — text sits on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/25" />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-foreground mb-8 max-w-4xl"
        >
          The injunction is to become
          <br className="hidden md:block" />
          {" "}a living expression of
          <br className="hidden md:block" />
          {" "}the future.
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl"
        >
          A spiritual vision rooted in the recognition that the evolutionary
          impulse and the spiritual impulse are one and the same force, calling
          each individual to authentic self-expression at the edge of human
          emergence.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#teaching"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm rounded-md hover:bg-foreground/85 transition-colors duration-300 active:scale-[0.98]"
          >
            Explore the Teaching
          </a>
          <a
            href="#books"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300 active:scale-[0.98]"
          >
            Read the Books
          </a>
        </motion.div>
      </div>
    </section>
  );
}
