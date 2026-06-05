import journalData from "@/data/journal/index.json";
import { listenItems } from "@/data/listen";
import { siteVideoSlugs } from "@/data/site-videos";

export interface JournalArticle {
  slug: string;
  title: string;
  author: string;
  postedAt: string;
  date: string;
  sourceUrl: string;
  excerpt: string;
  categories: string[];
  tags: string[];
  thumbnail?: string | null;
  hasContent: boolean;
}

const { articles, source: journalSource } = journalData as {
  source: string;
  articles: JournalArticle[];
};

const listenSlugs = new Set(listenItems.map((item) => item.slug));

/** Real articles that also include a video — stay in the journal. */
const journalVideoArticleSlugs = new Set(["30th-july-2001"]);

function isJournalArticle(article: JournalArticle): boolean {
  if (journalVideoArticleSlugs.has(article.slug)) {
    return true;
  }

  if (siteVideoSlugs.has(article.slug) || listenSlugs.has(article.slug)) {
    return false;
  }

  if (article.categories.includes("watch") || article.categories.includes("listen")) {
    return false;
  }

  return true;
}

export const journalArticles: JournalArticle[] = [...articles]
  .filter(isJournalArticle)
  .sort((a, b) => Date.parse(b.postedAt) - Date.parse(a.postedAt));

export const journalRedirectSlugs = [
  ...siteVideoSlugs,
  ...listenSlugs,
] as string[];

export const journalSourceUrl = journalSource;

export function getJournalArticle(slug: string): JournalArticle | undefined {
  return journalArticles.find((article) => article.slug === slug);
}

export function getJournalArticleArchiveId(slug: string): string {
  return `article-${slug}`;
}
