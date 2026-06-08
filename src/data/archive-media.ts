import archiveMediaData from "@/data/archive-media.json";

/**
 * Self-hosted archive media catalog.
 *
 * File layout:
 *   public/archive/media/{collection}/{slug}.{ext}
 *   public/archive/media/{collection}/thumbnails/{slug}.jpg
 *
 * Related catalogs:
 *   youtube-videos.json — YouTube (yt-*)
 *   site-videos.json — scraped andrewcohen.com embeds (video-*)
 *   listen.json — audio / mixed embeds (media-*)
 */
export interface ArchiveMediaItem {
  id: string;
  slug: string;
  collection: string;
  title: string;
  description: string;
  location?: string | null;
  postedAt: string;
  date: string;
  sourceUrl: string;
  mediaPath: string;
  mimeType: string;
  thumbnail?: string;
  duration?: number;
  tags: string[];
}

const { items } = archiveMediaData as { items: ArchiveMediaItem[] };

export const archiveMediaItems: ArchiveMediaItem[] = [...items].sort(
  (a, b) => Date.parse(b.postedAt) - Date.parse(a.postedAt)
);

export function getArchiveMediaItem(id: string): ArchiveMediaItem | undefined {
  return archiveMediaItems.find((item) => item.id === id);
}

export function getArchiveMediaByCollection(
  collection: string
): ArchiveMediaItem[] {
  return archiveMediaItems.filter((item) => item.collection === collection);
}

export function isHostedArchiveVideoId(id: string): boolean {
  return id.startsWith("av-");
}
