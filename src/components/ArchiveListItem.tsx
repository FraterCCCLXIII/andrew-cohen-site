import Image from "@/components/FadeInImage";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Play,
  Radio,
} from "@phosphor-icons/react";
import type { ArchiveItem } from "@/data/archive";
import {
  archiveTypeLabels,
  formatDuration,
  getArchiveDetailHref,
} from "@/data/archive";

const typeIcons = {
  video: Play,
  book: BookOpen,
  magazine: FileText,
  article: FileText,
  media: Radio,
} as const;

const hiddenTags = new Set([
  "video",
  "youtube",
  "book",
  "magazine",
  "article",
  "journal",
  "media",
  "listen",
  "audio",
  "mixed",
  "soundcloud",
  "vimeo",
  "libsyn",
  "andrewcohen-com",
  "hosted-media",
]);

interface ArchiveListItemProps {
  item: ArchiveItem;
}

export default function ArchiveListItem({ item }: ArchiveListItemProps) {
  const Icon = typeIcons[item.type];
  const duration = formatDuration(item.duration);
  const detailHref = getArchiveDetailHref(item);
  const visibleTags = item.tags.filter((tag) => !hiddenTags.has(tag)).slice(0, 3);

  return (
    <article className="group">
      <Link
        href={detailHref}
        className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-surface-elevated">
          {item.thumbnail ? (
            <Image
              src={item.thumbnail}
              alt=""
              fill
              sizes="180px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted">
              <Icon size={28} weight="regular" />
            </div>
          )}
          {item.type === "video" && duration && (
            <span className="absolute bottom-2 right-2 rounded bg-background/90 px-2 py-0.5 font-mono text-[10px] text-foreground">
              {duration}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
            <span>{archiveTypeLabels[item.type]}</span>
            {item.date && (
              <>
                <span>·</span>
                <span>{item.date}</span>
              </>
            )}
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl md:text-2xl font-serif tracking-tight leading-[1.2] text-foreground group-hover:text-accent transition-colors duration-200 mb-3">
            {item.title}
          </h2>
          {item.description && (
            <p className="text-sm text-muted leading-relaxed line-clamp-3">
              {item.description}
            </p>
          )}
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-muted group-hover:text-foreground transition-colors">
            View in archive
            <ArrowUpRight size={12} weight="regular" />
          </span>
        </div>
      </Link>
    </article>
  );
}
