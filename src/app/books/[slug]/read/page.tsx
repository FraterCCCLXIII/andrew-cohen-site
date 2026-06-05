import { redirect } from "next/navigation";
import { getReadableBook } from "@/data/bookReader.server";

export default async function BookReadIndexPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getReadableBook(slug);
  if (!book || book.chapters.length === 0) {
    redirect(`/books/${slug}`);
  }
  redirect(`/books/${slug}/read/${book.chapters[0].id}`);
}
