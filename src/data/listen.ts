import listenData from "@/data/listen.json";
import { normalizeAuthor } from "@/lib/authors";

export type MediaFormat = "audio" | "video";
export type MediaProvider = "soundcloud" | "vimeo" | "libsyn" | "file" | "youtube";

export interface MediaAsset {
  format: MediaFormat;
  provider: MediaProvider;
  embedUrl: string;
  href: string;
  trackId?: string;
  vimeoId?: string;
  episodeId?: string;
}

export interface ListenItem {
  id: string;
  slug: string;
  title: string;
  author: string;
  postedAt: string;
  date: string;
  sourceUrl: string;
  description: string;
  thumbnail?: string | null;
  media: MediaAsset[];
  tags: string[];
}

const { items, source: listenSource } = listenData as {
  source: string;
  items: ListenItem[];
};

export const listenItems: ListenItem[] = [...items]
  .map((item) => ({ ...item, author: normalizeAuthor(item.author) }))
  .sort((a, b) => Date.parse(b.postedAt) - Date.parse(a.postedAt));

export const listenSourceUrl = listenSource;

export function getListenItem(id: string): ListenItem | undefined {
  return listenItems.find((item) => item.id === id);
}

export function getListenItemBySlug(slug: string): ListenItem | undefined {
  return listenItems.find((item) => item.slug === slug);
}
