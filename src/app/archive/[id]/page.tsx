import Image from "@/components/FadeInImage";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import JournalArticleBody from "@/components/JournalArticleBody";
import MediaEmbed from "@/components/MediaEmbed";
import {
  archiveTypeLabels,
  formatDuration,
  getArchiveDetailParams,
  getArchiveItemById,
  getArchiveSiblings,
  getArticleSlugFromArchiveId,
  parseItemYear,
} from "@/data/archive";
import { getJournalArticle } from "@/data/journal";
import { getListenItem } from "@/data/listen";
import { getSiteVideo } from "@/data/site-videos";
import { getJournalArticleContent } from "@/lib/journalContent";
import { getVideoTranscript } from "@/lib/transcripts";

export function generateStaticParams() {
  return getArchiveDetailParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = getArchiveItemById(id);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.title} — Andrew Cohen Archive`,
    description: item.description ?? item.title,
  };
}

export default async function ArchiveDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getArchiveItemById(id);
  if (!item) notFound();

  if (item.type === "book" || item.type === "magazine") {
    redirect(item.href);
  }

  const { prev, next } = getArchiveSiblings(id, item.type);

  if (item.type === "article") {
    const slug = getArticleSlugFromArchiveId(id);
    const article = slug ? getJournalArticle(slug) : undefined;
    if (!article) notFound();

    const content = getJournalArticleContent(slug!);

    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-6 pt-10">
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft size={14} weight="regular" />
            Archive
          </Link>
        </div>

        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            {article.thumbnail && (
              <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-md border border-border bg-surface-elevated">
                <Image
                  src={article.thumbnail}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            )}

            <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
              {archiveTypeLabels.article}
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
              <span>{article.author}</span>
              <span>·</span>
              <span>{article.date}</span>
              {article.categories.map((category) => (
                <span
                  key={category}
                  className="rounded border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]"
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.1] text-foreground mb-8">
              {article.title}
            </h1>

            <JournalArticleBody html={content?.contentHtml ?? ""} />

            <p className="mt-10 font-mono text-xs text-muted/80">
              Originally published {article.date} on{" "}
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                andrewcohen.com
              </a>
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {next && (
              <Link
                href={`/archive/${next.id}`}
                className="group flex flex-col gap-1 border border-border p-6 hover:bg-surface-elevated transition-colors duration-300"
              >
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted">
                  <ArrowLeft size={12} weight="regular" /> Newer
                </span>
                <span className="text-base font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 line-clamp-2">
                  {next.title}
                </span>
              </Link>
            )}

            {prev && (
              <Link
                href={`/archive/${prev.id}`}
                className="group flex flex-col gap-1 border border-border p-6 hover:bg-surface-elevated transition-colors duration-300 sm:ml-auto"
              >
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted sm:justify-end">
                  Older <ArrowUpRight size={12} weight="regular" className="rotate-90" />
                </span>
                <span className="text-base font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 line-clamp-2 sm:text-right">
                  {prev.title}
                </span>
              </Link>
            )}
          </div>
        </section>
      </div>
    );
  }
  const listenItem = item.type === "media" ? getListenItem(item.id) : null;
  const siteVideo =
    item.type === "video" && item.id.startsWith("video-")
      ? getSiteVideo(item.id)
      : null;
  const transcript =
    item.type === "video" && item.id.startsWith("yt-")
      ? getVideoTranscript(item.id)
      : null;
  const year = parseItemYear(item);
  const duration = formatDuration(item.duration);
  const primaryEmbed = siteVideo?.embeds[0];
  const externalUrl = item.youtubeId
    ? `https://www.youtube.com/watch?v=${item.youtubeId}`
    : item.vimeoId
      ? `https://vimeo.com/${item.vimeoId}`
      : primaryEmbed?.href ?? item.sourceUrl ?? item.href;
  const isYoutubeChannelVideo =
    item.type === "video" && item.id.startsWith("yt-") && item.youtubeId;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <Link
          href="/archive"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft size={14} weight="regular" />
          Archive
        </Link>
      </div>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
            {archiveTypeLabels[item.type]}
            {year ? ` · ${year}` : ""}
            {duration ? ` · ${duration}` : ""}
          </p>
          <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.1] text-foreground mb-8">
            {item.title}
          </h1>

          {item.description && (
            <p className="text-lg text-muted leading-relaxed max-w-3xl mb-8">
              {item.description}
            </p>
          )}

          {listenItem && listenItem.media.length > 0 ? (
            <div className="space-y-8">
              {listenItem.media.map((asset, index) => (
                <MediaEmbed
                  key={`${asset.provider}-${asset.trackId ?? asset.vimeoId ?? asset.episodeId ?? index}`}
                  asset={asset}
                  title={item.title}
                  label={
                    listenItem.media.length > 1
                      ? `${asset.format === "video" ? "Video" : "Audio"} ${index + 1}`
                      : undefined
                  }
                />
              ))}
            </div>
          ) : siteVideo && siteVideo.embeds.length > 0 ? (
            <div className="space-y-8">
              {siteVideo.embeds.map((embed, index) => (
                <MediaEmbed
                  key={`${embed.provider}-${embed.youtubeId ?? embed.vimeoId ?? index}`}
                  asset={{
                    format: "video",
                    provider: embed.provider,
                    embedUrl: embed.embedUrl,
                    href: embed.href,
                  }}
                  title={item.title}
                  label={
                    siteVideo.embeds.length > 1
                      ? `Video ${index + 1}`
                      : undefined
                  }
                />
              ))}
            </div>
          ) : isYoutubeChannelVideo ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-surface-elevated">
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          ) : item.thumbnail ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-surface-elevated">
              <Image
                src={item.thumbnail}
                alt=""
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm rounded-md hover:bg-foreground/85 transition-colors duration-300 active:scale-[0.98]"
            >
              {item.type === "video" && item.youtubeId
                ? "Watch on YouTube"
                : item.type === "video" && item.vimeoId
                  ? "Watch on Vimeo"
                  : item.type === "media"
                    ? "View on andrewcohen.com"
                    : "View original"}
              <ArrowUpRight size={16} weight="regular" />
            </a>
            {listenItem &&
              [...new Map(listenItem.media.map((asset) => [asset.href, asset])).values()].map(
                (asset) => (
                  <a
                    key={asset.href}
                    href={asset.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm rounded-md hover:bg-surface-elevated transition-colors duration-300"
                  >
                    Open{" "}
                    {asset.provider === "soundcloud"
                      ? "on SoundCloud"
                      : asset.provider === "vimeo"
                        ? "on Vimeo"
                        : asset.provider === "libsyn"
                          ? "podcast episode"
                          : "source"}
                    <ArrowUpRight size={16} weight="regular" />
                  </a>
                )
              )}
          </div>

          {item.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {item.tags
                .filter(
                  (tag) =>
                    ![
                      "video",
                      "youtube",
                      "media",
                      "listen",
                      "audio",
                      "mixed",
                      "soundcloud",
                      "vimeo",
                      "libsyn",
                      "andrewcohen-com",
                    ].includes(tag)
                )
                .map((tag) => (
                  <Link
                    key={tag}
                    href={`/archive?tag=${encodeURIComponent(tag)}`}
                    className="rounded border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
                  >
                    {tag}
                  </Link>
                ))}
            </div>
          )}

          {transcript && (
            <div className="mt-12 border-t border-border pt-10">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-xl font-serif tracking-tight text-foreground">
                  Transcript
                </h2>
                <p className="font-mono text-xs text-muted">
                  {transcript.language.toUpperCase()} ·{" "}
                  {transcript.charCount.toLocaleString()} characters
                </p>
              </div>
              <div className="rounded-md border border-border bg-surface-elevated px-5 py-6 md:px-8 md:py-8">
                <p className="text-base leading-relaxed text-muted whitespace-pre-wrap">
                  {transcript.text}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {next && (
            <Link
              href={`/archive/${next.id}`}
              className="group flex flex-col gap-1 border border-border p-6 hover:bg-surface-elevated transition-colors duration-300"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted">
                <ArrowLeft size={12} weight="regular" /> Previous
              </span>
              <span className="text-base font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 line-clamp-2">
                {next.title}
              </span>
            </Link>
          )}

          {prev && (
            <Link
              href={`/archive/${prev.id}`}
              className="group flex flex-col gap-1 border border-border p-6 hover:bg-surface-elevated transition-colors duration-300 sm:ml-auto"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted sm:justify-end">
                Next <ArrowUpRight size={12} weight="regular" className="rotate-90" />
              </span>
              <span className="text-base font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 line-clamp-2 sm:text-right">
                {prev.title}
              </span>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
