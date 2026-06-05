import { notFound, redirect } from "next/navigation";
import {
  getJournalArticle,
  getJournalArticleArchiveId,
  journalArticles,
  journalRedirectSlugs,
} from "@/data/journal";
import { getListenItemBySlug } from "@/data/listen";
import { getSiteVideoBySlug } from "@/data/site-videos";

export function generateStaticParams() {
  const slugs = new Set([
    ...journalArticles.map((article) => article.slug),
    ...journalRedirectSlugs,
  ]);

  return [...slugs].map((slug) => ({ slug }));
}

export default async function JournalSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getJournalArticle(slug);
  if (article) {
    redirect(`/archive/${getJournalArticleArchiveId(slug)}`);
  }

  const siteVideo = getSiteVideoBySlug(slug);
  if (siteVideo) {
    redirect(`/archive/${siteVideo.id}`);
  }

  const listenItem = getListenItemBySlug(slug);
  if (listenItem) {
    redirect(`/archive/${listenItem.id}`);
  }

  notFound();
}
