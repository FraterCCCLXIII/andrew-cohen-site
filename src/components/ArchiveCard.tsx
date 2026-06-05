import Image from "@/components/FadeInImage";
import Link from "next/link";
import { ArrowUpRight, BookOpen, FileText, Play, Radio } from "@phosphor-icons/react";
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

interface ArchiveCardProps {
  item: ArchiveItem;
}

export default function ArchiveCard({ item }: ArchiveCardProps) {
  const Icon = typeIcons[item.type];
  const duration = formatDuration(item.duration);
  const detailHref = getArchiveDetailHref(item);

  const body = (
    <>
      <div className="relative aspect-video w-full overflow-hidden rounded-t-md bg-surface-elevated">
        {item.thumbnail ? (
          <Image
            src={item.thumbnail}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
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

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            {archiveTypeLabels[item.type]}
            {item.date ? ` · ${item.date}` : ""}
          </span>
          <ArrowUpRight
            size={14}
            weight="regular"
            className="text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </div>
        <h3 className="text-sm font-medium leading-snug tracking-tight text-foreground line-clamp-3">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2">
            {item.description}
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags
            .filter(
              (tag) =>
                ![
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
                ].includes(tag)
            )
            .slice(0, 3)
            .map((tag) => (
              <span
                key={tag}
                className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </>
  );

  return (
    <Link
      href={detailHref}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface hover:bg-surface-elevated transition-colors duration-300"
    >
      {body}
    </Link>
  );
}
