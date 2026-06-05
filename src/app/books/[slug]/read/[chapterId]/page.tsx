import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookReader from "@/components/BookReader";
import {
  getAdjacentChapters,
  type ReadableBook,
} from "@/data/bookReader";
import {
  getChapter,
  getReadableBook,
  getReadableBookSlugs,
} from "@/data/bookReader.server";

export function generateStaticParams() {
  const slugs = getReadableBookSlugs();
  return slugs.flatMap((slug) => {
    const book = getReadableBook(slug);
    if (!book) return [];
    return book.chapters.map((chapter) => ({
      slug,
      chapterId: chapter.id,
    }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; chapterId: string }>;
}): Promise<Metadata> {
  const { slug, chapterId } = await params;
  const book = getReadableBook(slug);
  const chapter = getChapter(slug, chapterId);
  if (!book || !chapter) return { title: "Not Found" };
  return {
    title: `${chapter.title} — ${book.title}`,
    description: book.subtitle ?? book.title,
  };
}

export default async function BookReadChapterPage({
  params,
}: {
  params: Promise<{ slug: string; chapterId: string }>;
}) {
  const { slug, chapterId } = await params;
  const book = getReadableBook(slug);
  if (!book) notFound();

  const chapter = getChapter(slug, chapterId);
  if (!chapter) notFound();

  const { prev, next } = getAdjacentChapters(book, chapterId);

  return (
    <BookReader book={book} chapter={chapter} prev={prev} next={next} />
  );
}
