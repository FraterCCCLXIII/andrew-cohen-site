import siteVideoData from "@/data/site-videos.json";

export type SiteVideoProvider = "youtube" | "vimeo";

export interface SiteVideoEmbed {
  provider: SiteVideoProvider;
  embedUrl: string;
  href: string;
  youtubeId?: string;
  vimeoId?: string;
}

export interface SiteVideo {
  id: string;
  slug: string;
  title: string;
  description: string;
  postedAt: string;
  date: string;
  sourceUrl: string;
  thumbnail?: string | null;
  youtubeId?: string | null;
  vimeoId?: string | null;
  embeds: SiteVideoEmbed[];
  tags: string[];
}

const { items } = siteVideoData as unknown as { items: SiteVideo[] };

export const siteVideos: SiteVideo[] = [...items].sort(
  (a, b) => Date.parse(b.postedAt) - Date.parse(a.postedAt)
);

export const siteVideoSlugs = new Set(siteVideos.map((video) => video.slug));

export function getSiteVideo(id: string): SiteVideo | undefined {
  return siteVideos.find((video) => video.id === id);
}

export function getSiteVideoBySlug(slug: string): SiteVideo | undefined {
  return siteVideos.find((video) => video.slug === slug);
}
