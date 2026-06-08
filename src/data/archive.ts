import { archiveMediaItems } from "@/data/archive-media";
import { getYoutubeMirror } from "@/data/youtube-mirrors";
import { books } from "@/data/books";
import { journalArticles } from "@/data/journal";
import { listenItems } from "@/data/listen";
import { magazineIssues, magazineSupplements } from "@/data/magazine";
import { siteVideos } from "@/data/site-videos";
import youtubeVideos from "@/data/youtube-videos.json";

export type ArchiveType = "video" | "book" | "magazine" | "article" | "media";

export type ArchiveSort = "newest" | "oldest" | "title-asc" | "title-desc";

export const archiveSortLabels: Record<ArchiveSort, string> = {
  newest: "Newest first",
  oldest: "Oldest first",
  "title-asc": "Title A–Z",
  "title-desc": "Title Z–A",
};

export const archiveSortOptions: ArchiveSort[] = [
  "newest",
  "oldest",
  "title-asc",
  "title-desc",
];

export interface ArchiveItem {
  id: string;
  type: ArchiveType;
  title: string;
  description?: string;
  date?: string;
  tags: string[];
  href: string;
  external?: boolean;
  thumbnail?: string;
  duration?: number;
  youtubeId?: string;
  vimeoId?: string;
  sourceUrl?: string;
  mediaPath?: string;
}

const typeLabels: Record<ArchiveType, string> = {
  video: "Video",
  book: "Book",
  magazine: "Magazine",
  article: "Article",
  media: "Listen",
};

export const archiveTypeLabels = typeLabels;

export const archiveTypes: ArchiveType[] = [
  "video",
  "book",
  "magazine",
  "article",
  "media",
];

function bookItems(): ArchiveItem[] {
  return books.map((book) => ({
    id: `book-${book.slug}`,
    type: "book" as const,
    title: book.title,
    description: book.tagline,
    date: book.year,
    tags: ["book", "published-work", ...(book.teachingHref ? ["teaching"] : [])],
    href: `/books/${book.slug}`,
    thumbnail: book.cover,
  }));
}

function magazineItems(): ArchiveItem[] {
  return magazineIssues.map((issue) => ({
    id: `magazine-${issue.slug}`,
    type: "magazine" as const,
    title: `${issue.magazine} · Issue ${issue.issue}`,
    description: issue.tagline,
    date: issue.date,
    tags: [
      "magazine",
      "enlightennext",
      issue.magazine === "EnlightenNext" ? "enlightennext-era" : "wie-era",
    ],
    href: `/magazine/${issue.slug}`,
    thumbnail: issue.cover,
  }));
}

function magazineSupplementItems(): ArchiveItem[] {
  return magazineSupplements.map((item) => ({
    id: `magazine-${item.slug}`,
    type: "magazine" as const,
    title: item.title,
    description: `${item.tagline} · By ${item.author}. Unpublished from Issue ${item.issue}.`,
    date: item.date,
    tags: [
      "magazine",
      "enlightennext",
      item.magazine === "EnlightenNext" ? "enlightennext-era" : "wie-era",
      "unpublished",
      `issue-${item.issue}`,
    ],
    href: `/magazine/${item.slug}`,
    thumbnail: item.cover,
  }));
}

function youtubeChannelItems(): ArchiveItem[] {
  return (youtubeVideos as ArchiveItem[]).map((item) => {
    const mirror =
      item.youtubeId && getYoutubeMirror(item.youtubeId);
    return {
      ...item,
      type: "video" as const,
      href: `/archive/${item.id}`,
      ...(mirror
        ? {
            mediaPath: mirror.mediaPath,
            tags: [...new Set([...item.tags, "hosted-media"])],
          }
        : {}),
    };
  });
}

function siteVideoItems(): ArchiveItem[] {
  return siteVideos.map((video) => ({
    id: video.id,
    type: "video" as const,
    title: video.title,
    description: video.description,
    date: video.date,
    tags: video.tags,
    href: `/archive/${video.id}`,
    thumbnail: video.thumbnail ?? undefined,
    sourceUrl: video.sourceUrl,
    youtubeId: video.youtubeId ?? undefined,
    vimeoId: video.vimeoId ?? undefined,
  }));
}

function hostedMediaItems(): ArchiveItem[] {
  return archiveMediaItems.map((item) => ({
    id: item.id,
    type: "video" as const,
    title: item.title,
    description: item.description,
    date: item.date,
    tags: item.tags,
    href: `/archive/${item.id}`,
    thumbnail: item.thumbnail,
    duration: item.duration,
    sourceUrl: item.sourceUrl,
    mediaPath: item.mediaPath,
  }));
}

function videoItems(): ArchiveItem[] {
  return [
    ...hostedMediaItems(),
    ...siteVideoItems(),
    ...youtubeChannelItems(),
  ];
}

function articleItems(): ArchiveItem[] {
  return journalArticles.map((article) => ({
    id: `article-${article.slug}`,
    type: "article" as const,
    title: article.title,
    description: article.excerpt,
    date: article.date,
    tags: article.tags,
    href: `/archive/article-${article.slug}`,
    thumbnail: article.thumbnail ?? undefined,
    sourceUrl: article.sourceUrl,
  }));
}

function mediaItems(): ArchiveItem[] {
  return listenItems.map((item) => ({
    id: item.id,
    type: "media" as const,
    title: item.title,
    description: item.description,
    date: item.date,
    tags: item.tags,
    href: `/archive/${item.id}`,
    thumbnail: item.thumbnail ?? undefined,
    sourceUrl: item.sourceUrl,
  }));
}

/** Unified catalog — extend with additional media as it is added. */
export function getArchiveCatalog(): ArchiveItem[] {
  return [
    ...videoItems(),
    ...mediaItems(),
    ...articleItems(),
    ...bookItems(),
    ...magazineItems(),
    ...magazineSupplementItems(),
  ];
}

export function getArchiveItemById(id: string): ArchiveItem | undefined {
  return getArchiveCatalog().find((item) => item.id === id);
}

/** Detail page route — books and magazines use their custom pages. */
export function getArchiveDetailHref(item: ArchiveItem): string {
  if (item.type === "book" || item.type === "magazine") {
    return item.href;
  }
  return `/archive/${item.id}`;
}

export function getArticleSlugFromArchiveId(id: string): string | null {
  if (!id.startsWith("article-")) return null;
  return id.slice("article-".length);
}

export function getArchiveDetailParams(): { id: string }[] {
  return getArchiveCatalog()
    .filter(
      (item) =>
        item.type === "video" ||
        item.type === "article" ||
        item.type === "media"
    )
    .map((item) => ({ id: item.id }));
}

export function getArchiveSiblings(
  id: string,
  type?: ArchiveType
): { prev?: ArchiveItem; next?: ArchiveItem } {
  const items = getArchiveCatalog().filter(
    (item) => !type || item.type === type
  );
  const index = items.findIndex((item) => item.id === id);
  if (index < 0) return {};
  return {
    prev: index > 0 ? items[index - 1] : undefined,
    next: index < items.length - 1 ? items[index + 1] : undefined,
  };
}

export function getArchiveTags(items: ArchiveItem[] = getArchiveCatalog()): string[] {
  const counts = new Map<string, number>();
  for (const item of items) {
    for (const tag of item.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag]) => tag);
}

/** Extract a four-digit year from an item's date or title, if present. */
export function parseItemYear(item: ArchiveItem): number | null {
  if (item.date) {
    if (/^\d{4}$/.test(item.date)) {
      return Number(item.date);
    }
    const match = item.date.match(/\b(19|20)\d{2}\b/);
    if (match) return Number(match[0]);
  }

  const titleMatch = item.title.match(/\b(19|20)\d{2}\b/);
  if (titleMatch) return Number(titleMatch[0]);

  return null;
}

export function getArchiveYearBounds(
  items: ArchiveItem[] = getArchiveCatalog()
): { min: number; max: number } {
  const years = items
    .map(parseItemYear)
    .filter((year): year is number => year !== null);

  if (years.length === 0) {
    return { min: 1990, max: new Date().getFullYear() };
  }

  return {
    min: Math.min(...years),
    max: Math.max(...years),
  };
}

export function isYearFilterActive(
  yearMin: number,
  yearMax: number,
  bounds: { min: number; max: number }
): boolean {
  return yearMin > bounds.min || yearMax < bounds.max;
}

export function formatDuration(seconds?: number): string | undefined {
  if (!seconds) return undefined;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}

function compareByYear(
  a: ArchiveItem,
  b: ArchiveItem,
  direction: "asc" | "desc"
): number {
  const yearA = parseItemYear(a);
  const yearB = parseItemYear(b);

  if (yearA !== yearB) {
    if (yearA === null) return 1;
    if (yearB === null) return -1;
    return direction === "desc" ? yearB - yearA : yearA - yearB;
  }

  return a.title.localeCompare(b.title);
}

export function sortArchive(
  items: ArchiveItem[],
  sort: ArchiveSort = "newest"
): ArchiveItem[] {
  const sorted = [...items];

  sorted.sort((a, b) => {
    switch (sort) {
      case "newest":
        return compareByYear(a, b, "desc");
      case "oldest":
        return compareByYear(a, b, "asc");
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
    }
  });

  return sorted;
}

export function filterArchive(
  items: ArchiveItem[],
  {
    query = "",
    type = "all",
    tag = "all",
    yearMin,
    yearMax,
    yearBounds,
  }: {
    query?: string;
    type?: ArchiveType | "all";
    tag?: string;
    yearMin?: number;
    yearMax?: number;
    yearBounds?: { min: number; max: number };
  }
): ArchiveItem[] {
  const q = query.trim().toLowerCase();
  const bounds = yearBounds ?? getArchiveYearBounds(items);
  const minYear = yearMin ?? bounds.min;
  const maxYear = yearMax ?? bounds.max;
  const yearFilterActive = isYearFilterActive(minYear, maxYear, bounds);

  return items.filter((item) => {
    if (type !== "all" && item.type !== type) return false;
    if (tag !== "all" && !item.tags.includes(tag)) return false;

    if (yearFilterActive) {
      const year = parseItemYear(item);
      if (year === null || year < minYear || year > maxYear) return false;
    }

    if (!q) return true;

    const haystack = [
      item.title,
      item.description ?? "",
      item.date ?? "",
      ...item.tags,
      typeLabels[item.type],
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(q);
  });
}

export function getArchiveCounts(items: ArchiveItem[] = getArchiveCatalog()) {
  return archiveTypes.reduce(
    (acc, type) => {
      acc[type] = items.filter((item) => item.type === type).length;
      return acc;
    },
    {} as Record<ArchiveType, number>
  );
}
