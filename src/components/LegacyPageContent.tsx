"use client";

import Image from "@/components/FadeInImage";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { legacyIntro, legacyProfiles, type LegacyProject } from "@/data/legacy";

function ProjectCard({
  project,
  delay,
}: {
  project: LegacyProject;
  delay: number;
}) {
  const reduce = useReducedMotion();
  const imageFit = project.imageFit ?? "cover";

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface hover:bg-surface-elevated transition-colors duration-300"
    >
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden ${
          project.imageBackground === "white" ? "bg-white" : "bg-surface-elevated"
        }`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className={
            imageFit === "contain"
              ? "object-contain p-6"
              : "object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          }
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h4 className="text-base font-medium tracking-tight text-foreground leading-snug">
            {project.title}
          </h4>
          <ArrowUpRight
            size={16}
            weight="regular"
            className="mt-0.5 shrink-0 text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </div>
        <p className="text-sm leading-relaxed text-muted line-clamp-4">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
}

export default function LegacyPageContent() {
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
              {legacyIntro.subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-foreground mb-6">
              {legacyIntro.title}
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              {legacyIntro.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-20">
          {legacyProfiles.filter((profile) => !profile.hidden).map((profile, profileIndex) => (
            <motion.article
              key={profile.id}
              id={profile.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : profileIndex * 0.03,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="scroll-mt-24 border-t border-border pt-12 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
                {profile.portrait && (
                  <div className="shrink-0 md:w-36">
                    <div className="relative aspect-[3/4] w-28 md:w-36 overflow-hidden rounded-lg border border-border bg-surface-elevated">
                      <Image
                        src={profile.portrait}
                        alt={profile.portraitAlt ?? profile.names}
                        fill
                        sizes="144px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-foreground mb-4">
                    {profile.names}
                  </h2>
                  <p className="text-base text-muted leading-[1.8] max-w-3xl mb-8">
                    {profile.bio}
                  </p>

                  <div
                    className={`grid gap-5 ${
                      profile.projects.length > 1
                        ? "sm:grid-cols-2"
                        : "max-w-md"
                    }`}
                  >
                    {profile.projects.map((project, projectIndex) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        delay={projectIndex * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
