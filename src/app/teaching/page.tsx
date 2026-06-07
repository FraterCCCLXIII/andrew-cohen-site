"use client";

import Image from "@/components/FadeInImage";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

interface TeachingLink {
  title: string;
  description: string;
  href: string;
}

interface TeachingGroup {
  label: string;
  blurb: string;
  items: TeachingLink[];
}

const groups: TeachingGroup[] = [
  {
    label: "The Core Teaching",
    blurb:
      "The foundational vision that binds spiritual awakening to the evolutionary process.",
    items: [
      {
        title: "Evolutionary Enlightenment",
        description:
          "The recognition that the spiritual impulse and the evolutionary impulse are one and the same.",
        href: "/teaching/evolutionary-enlightenment",
      },
      {
        title: "The Authentic Self",
        description:
          "The evolutionary impulse awakening to itself within an individual, beyond the separate ego.",
        href: "/teaching/the-authentic-self",
      },
      {
        title: "The Absolute: The True Self",
        description:
          "The non-relative dimension of self — experienced as the timeless ground of Being and as Eros, the evolutionary impulse.",
        href: "/teaching/the-absolute-the-true-self",
      },
      {
        title: "Eros: The Evolutionary Impulse",
        description:
          "The burning intelligence and driving force of the cosmos — the Absolute as Becoming.",
        href: "/teaching/eros-the-evolutionary-impulse",
      },
      {
        title: "The New Being",
        description:
          "The emergent cosmocentric potential that arises when evolutionarily enlightened individuals create the conditions for collective emergence.",
        href: "/teaching/the-new-being",
      },
      {
        title: "The Ego",
        description:
          "The structure of attachment and identification — positive individuation and the negative ego that resists evolution.",
        href: "/teaching/the-ego",
      },
      {
        title: "The Spiritual Path",
        description:
          "Being and Becoming, the art of stillness, and why the path and the goal are one.",
        href: "/teaching/the-spiritual-path",
      },
      {
        title: "The Triple Gem",
        description:
          "Buddha, Dharma, and Sangha — exemplar, cosmic law, and community as the ultimate vehicle for staying awake.",
        href: "/teaching/the-triple-gem",
      },
    ],
  },
  {
    label: "The Practice",
    blurb:
      "The architecture of the teaching — individual disciplines and the collective field they make possible.",
    items: [
      {
        title: "Meditation",
        description:
          "The art and science of stillness — assuming no relationship to the content of consciousness.",
        href: "/teaching/meditation",
      },
      {
        title: "Inquiry",
        description:
          "Directed cognition and the practice of not knowing — illuminating intention and revealing the ego's resistance.",
        href: "/teaching/inquiry",
      },
      {
        title: "Enlightened Communication",
        description:
          "Collective inquiry and intersubjective nonduality — creating the future together beyond ego.",
        href: "/teaching/enlightened-communication",
      },
      {
        title: "The Five Tenets",
        description:
          "Clarity of Intention, The Power of Volition, Face Everything and Avoid Nothing, The Process Perspective, and Cosmic Conscience.",
        href: "/teaching/five-tenets",
      },
      {
        title: "The Six Principles",
        description:
          "Evolutionary Tension, Autonomy, Communion, Purity of Motive, Integrity of Action, and Natural Hierarchy.",
        href: "/teaching/six-principles",
      },
    ],
  },
  {
    label: "Reference",
    blurb:
      "Definitions of core terms with cited sources from the books and developmental frameworks.",
    items: [
      {
        title: "Dictionary of Awakening",
        description:
          "An indexed glossary of teaching concepts — from Evolutionary Enlightenment, Integral theory, and Spiral Dynamics — with definitions and sources.",
        href: "/dictionary",
      },
    ],
  },
  {
    label: "Integral Framework",
    blurb:
      "The developmental maps — from Ken Wilber and Don Beck — that situate Evolutionary Enlightenment within the evolution of culture and consciousness.",
    items: [
      {
        title: "Integral Theory",
        description:
          "Ken Wilber's AQAL framework — interior and exterior, individual and collective — and its role in Cohen's evolutionary spirituality.",
        href: "/teaching/integral-theory",
      },
      {
        title: "Spiral Dynamics",
        description:
          "Clare Graves, Don Beck, and the color-coded spiral of evolving value systems — vertical development and the evolution of culture.",
        href: "/teaching/spiral-dynamics",
      },
    ],
  },
  {
    label: "From the Books",
    blurb: "Themes drawn from across the written work.",
    items: [
      {
        title: "An Unconditional Relationship to Life",
        description:
          "Embracing life itself as the path, rather than seeking enlightenment as escape from it.",
        href: "/teaching/an-unconditional-relationship-to-life",
      },
      {
        title: "Embracing Heaven and Earth",
        description:
          "The integration of spiritual realization with embodied, worldly existence.",
        href: "/teaching/embracing-heaven-and-earth",
      },
      {
        title: "The Challenge of Enlightenment",
        description:
          "The demands of authentic spiritual life in the modern world.",
        href: "/teaching/the-challenge-of-enlightenment",
      },
      {
        title: "Enlightenment Is a Secret",
        description:
          "The paradox at the heart of awakening — that what is most obvious is often most hidden.",
        href: "/teaching/enlightenment-is-a-secret",
      },
    ],
  },
];

export default function TeachingIndexPage() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[85dvh] flex flex-col justify-center px-6 pt-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/teaching-aurora-hero.png"
            alt="The northern lights and a starry night sky"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/45 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
              The Teaching
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-foreground mb-6 max-w-4xl">
              Evolutionary Enlightenment
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Andrew Cohen&apos;s teaching bridges the ancient enlightenment
              tradition with the recognition that consciousness is evolving — and
              that each individual is uniquely called to participate. Explore the
              core ideas, the practice, and the themes drawn from his books.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {groups.map((group, gi) => (
            <div key={group.label}>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-2">
                  {group.label}
                </h2>
                <p className="text-base text-muted leading-relaxed max-w-2xl">
                  {group.blurb}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: reduce ? 0 : i * 0.05 + gi * 0.02,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-start justify-between gap-4 border border-border p-8 h-full hover:bg-surface-elevated transition-colors duration-300"
                    >
                      <div className="min-w-0">
                        <h3 className="text-lg font-medium tracking-tight mb-2 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={18}
                        weight="regular"
                        className="flex-shrink-0 text-muted group-hover:text-accent transition-colors duration-300"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
