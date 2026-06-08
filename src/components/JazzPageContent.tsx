"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Play } from "@phosphor-icons/react";
import Image from "@/components/FadeInImage";
import {
  formatDuration,
  getArchiveDetailHref,
} from "@/data/archive";
import {
  jazzAlbums,
  jazzBandMemberGroups,
  jazzBandMembers,
  jazzGalleryPhotos,
  jazzIntro,
  jazzLinks,
  jazzMediaCoverage,
  jazzMusicianDialogues,
  jazzPerformanceVideos,
  jazzReviews,
  jazzSections,
  jazzVenueRegions,
  jazzWebsiteVideos,
  resolveJazzVideos,
} from "@/data/jazz";

function ReviewGrid({
  reviews,
  reduce,
}: {
  reviews: typeof jazzReviews;
  reduce: boolean | null;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      {reviews.map((review, i) => (
        <motion.blockquote
          key={`${review.source}-${i}`}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: reduce ? 0 : (i % 2) * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="border-l-2 border-border pl-6"
        >
          <p className="text-base md:text-lg font-serif leading-relaxed text-foreground mb-3">
            &ldquo;{review.text}&rdquo;
          </p>
          <cite className="text-xs text-muted not-italic font-mono leading-relaxed">
            — {review.source}
          </cite>
        </motion.blockquote>
      ))}
    </div>
  );
}

function BandMemberList({
  groupId,
  reduce,
  startIndex,
}: {
  groupId: (typeof jazzBandMemberGroups)[number]["id"];
  reduce: boolean | null;
  startIndex: number;
}) {
  const members = jazzBandMembers.filter((member) => member.group === groupId);

  return (
    <div className="space-y-8">
      {members.map((member, i) => (
        <motion.div
          key={member.name}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.5,
            delay: reduce ? 0 : (startIndex + i) * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h4 className="text-base font-medium tracking-tight text-foreground leading-snug">
            {member.name}
            {member.guest && (
              <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                Guest
              </span>
            )}
          </h4>
          <p className="mt-1 font-mono text-[11px] text-muted">{member.role}</p>
          <p className="mt-3 text-sm text-muted leading-relaxed">{member.bio}</p>
        </motion.div>
      ))}
    </div>
  );
}

function AlbumTile({
  album,
  index,
  reduce,
}: {
  album: (typeof jazzAlbums)[number];
  index: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: reduce ? 0 : (index % 4) * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="group block">
        <div className="relative aspect-square overflow-hidden rounded-md border border-border bg-surface-elevated transition-transform duration-300 group-hover:-translate-y-1">
          {album.cover && (
            <Image
              src={album.cover}
              alt={album.coverAlt}
              fill
              sizes="(max-width: 640px) 50vw, 220px"
              className="object-cover"
            />
          )}
          <span className="absolute bottom-2 left-2 rounded bg-background/90 px-2 py-0.5 font-mono text-[10px] text-muted">
            Audio coming soon
          </span>
        </div>

        <div className="mt-4">
          <p className="font-mono text-[11px] text-muted mb-1">{album.year}</p>
          <h3 className="text-sm font-medium tracking-tight text-foreground leading-snug">
            {album.title}
          </h3>
          <p className="mt-2 text-xs text-muted leading-relaxed line-clamp-3">
            {album.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function VideoGrid({
  refs,
  reduce,
  startDelay = 0,
}: {
  refs: typeof jazzPerformanceVideos;
  reduce: boolean | null;
  startDelay?: number;
}) {
  const videos = resolveJazzVideos(refs);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((item, i) => (
        <motion.div
          key={item.archiveId}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.5,
            delay: reduce ? 0 : startDelay + (i % 3) * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Link
            href={getArchiveDetailHref(item.video)}
            className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface-elevated hover:bg-surface-elevated/80 transition-colors duration-300"
          >
            <div className="relative aspect-video overflow-hidden bg-surface-elevated">
              {item.video.thumbnail ? (
                <Image
                  src={item.video.thumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-muted">
                  <Play size={28} weight="regular" />
                </div>
              )}
              {item.video.duration && (
                <span className="absolute bottom-2 right-2 rounded bg-background/90 px-2 py-0.5 font-mono text-[10px] text-foreground">
                  {formatDuration(item.video.duration)}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-sm font-medium tracking-tight text-foreground leading-snug group-hover:text-accent transition-colors duration-200">
                {item.video.title}
              </h3>
              {item.description && (
                <p className="mt-2 text-xs text-muted leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              )}
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-muted group-hover:text-accent transition-colors duration-300">
                Watch in archive
                <ArrowUpRight size={13} weight="regular" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default function JazzPageContent() {
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
              {jazzIntro.subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-foreground mb-6">
              {jazzIntro.title}
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl mb-10">
              {jazzIntro.description}
            </p>

            <div className="relative aspect-[16/10] max-w-3xl overflow-hidden rounded-md border border-border bg-black">
              <Image
                src="/images/jazz/unfulfilled-desires-splash.png"
                alt="Unfulfilled Desires — original Flash website splash screen"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain object-center"
              />
            </div>
            <p className="mt-3 max-w-3xl text-xs text-muted leading-relaxed">
              Splash screen from the band&apos;s original Flash website, preserved
              via the{" "}
              <a
                href={jazzLinks.waybackFlashSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-200"
              >
                Internet Archive
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto space-y-10">
          {jazzSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h2 className="text-xl md:text-2xl font-serif tracking-tight text-foreground mb-4">
                {section.title}
              </h2>
              <div className="space-y-4 max-w-3xl">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-base text-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {i === jazzSections.length - 1 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={jazzLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-surface-elevated transition-colors duration-200"
                  >
                    Facebook photos
                    <ArrowUpRight size={14} weight="regular" />
                  </a>
                  <a
                    href={jazzLinks.waybackFlashSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-surface-elevated transition-colors duration-200"
                  >
                    Archived website
                    <ArrowUpRight size={14} weight="regular" />
                  </a>
                  <a
                    href={jazzLinks.youtubeChannel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-surface-elevated transition-colors duration-200"
                  >
                    YouTube channel
                    <ArrowUpRight size={14} weight="regular" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 border-t border-border pt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-2">
              The musicians
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              The revolving international lineup spans three continents — from
              Berkshires jam sessions to Paris, Hamburg, and Tel Aviv club
              dates.
            </p>
          </motion.div>

          <div className="space-y-16">
            {jazzBandMemberGroups.map((group, groupIndex) => (
              <motion.div
                key={group.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: reduce ? 0 : groupIndex * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h3 className="text-lg md:text-xl font-serif tracking-tight text-foreground mb-8 border-b border-border pb-4">
                  {group.label}
                </h3>
                <BandMemberList
                  groupId={group.id}
                  reduce={reduce}
                  startIndex={groupIndex * 3}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 border-t border-border pt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-2">
              Press & club reviews
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              Selected quotes from radio hosts, journalists, and the club
              managers and engineers who booked and mixed the band across the US
              and Europe.
            </p>
          </motion.div>

          <ReviewGrid reviews={jazzReviews} reduce={reduce} />
        </div>
      </section>

      <section className="px-6 pb-20 border-t border-border pt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-2">
              Performance history
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              Unfulfilled Desires has headlined at intimate and medium-size clubs
              and outdoor stages across the US, Europe, and Israel — from the
              Iron Horse in Northampton to Le Baiser Salé in Paris and the New
              Vortex in London.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {jazzVenueRegions.map((region, i) => (
              <motion.div
                key={region.region}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : (i % 3) * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground mb-3">
                  {region.region}
                </h3>
                <ul className="space-y-1.5">
                  {region.venues.map((venue) => (
                    <li key={venue} className="text-sm text-muted leading-snug">
                      {venue}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-border pt-12"
          >
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground mb-4">
                Radio airplay
              </h3>
              <ul className="space-y-1.5">
                {jazzMediaCoverage.radio.map((station) => (
                  <li key={station} className="text-sm text-muted leading-snug">
                    {station}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground mb-4">
                Print media
              </h3>
              <ul className="space-y-1.5">
                {jazzMediaCoverage.print.map((outlet) => (
                  <li key={outlet} className="text-sm text-muted leading-snug">
                    {outlet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20 border-t border-border pt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-2">
              Photos
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              Images recovered from the{" "}
              <a
                href={jazzLinks.waybackFlashSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-200"
              >
                archived Flash website
              </a>
              , the band&apos;s{" "}
              <a
                href={jazzLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-200"
              >
                Facebook page
              </a>
              , and YouTube performance recordings. Original CD artwork was not
              available in those archives; album tiles below use related
              archival images where needed.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {jazzGalleryPhotos.map((photo, i) => (
              <motion.figure
                key={photo.src}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : (i % 4) * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden rounded-md border border-border bg-surface-elevated"
              >
                <div className="relative aspect-[4/3] bg-black">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="object-cover"
                  />
                </div>
                {(photo.caption || photo.credit) && (
                  <figcaption className="p-3">
                    {photo.caption && (
                      <p className="text-xs text-foreground leading-snug">
                        {photo.caption}
                      </p>
                    )}
                    {photo.credit && (
                      <p className="mt-1 font-mono text-[10px] text-muted">
                        {photo.credit}
                      </p>
                    )}
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 border-t border-border pt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-2">
              Discography
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              Four CDs released between 2003 and 2010. Full album playback will
              be available here in a future update.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {jazzAlbums.map((album, i) => (
              <AlbumTile key={album.id} album={album} index={i} reduce={reduce} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 border-t border-border pt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-2">
              From the original website
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              Live recordings from the band&apos;s Flash-era site — recovered
              from the{" "}
              <a
                href={jazzLinks.waybackFlashSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-200"
              >
                Internet Archive
              </a>
              . Each video plays from the{" "}
              <Link
                href="/archive?tag=unfulfilled-desires"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-200"
              >
                archive
              </Link>
              .
            </p>
          </motion.div>

          <VideoGrid refs={jazzWebsiteVideos} reduce={reduce} />
        </div>
      </section>

      <section className="px-6 pb-20 border-t border-border pt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-2">
              Unfulfilled Desires on YouTube
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              Later live and archival recordings — linked to transcripts in the{" "}
              <Link
                href="/archive?tag=unfulfilled-desires"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-200"
              >
                archive
              </Link>
              where available.
            </p>
          </motion.div>

          <VideoGrid refs={jazzPerformanceVideos} reduce={reduce} />
        </div>
      </section>

      <section className="px-6 pb-24 border-t border-border pt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-2">
              Musician dialogues
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              Cohen&apos;s love of jazz extended into long conversations with
              master musicians — exploring improvisation, discipline, and the
              creative edge.
            </p>
          </motion.div>

          <VideoGrid refs={jazzMusicianDialogues} reduce={reduce} startDelay={0.05} />
        </div>
      </section>
    </div>
  );
}
