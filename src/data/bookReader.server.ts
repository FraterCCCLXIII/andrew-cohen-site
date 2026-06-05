import { existsSync, readFileSync, readdirSync } from "fs";
import path from "path";
import type {
  BookChapter,
  BookChapterMeta,
  ReadableBook,
} from "@/data/bookReader";

function loadReadableBooks(): Record<string, ReadableBook> {
  const booksDir = path.join(process.cwd(), "src/data/books");
  const books: Record<string, ReadableBook> = {};

  if (!existsSync(booksDir)) return books;

  for (const entry of readdirSync(booksDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const indexPath = path.join(booksDir, entry.name, "index.json");
    if (!existsSync(indexPath)) continue;
    const index = JSON.parse(readFileSync(indexPath, "utf-8")) as ReadableBook;
    books[index.slug] = index;
  }

  return books;
}

const readableBooks = loadReadableBooks();

export function getReadableBook(slug: string): ReadableBook | undefined {
  return readableBooks[slug];
}

export function getReadableBookSlugs(): string[] {
  return Object.keys(readableBooks);
}

export function getChapterBody(slug: string, contentFile: string): string {
  const filePath = path.join(
    process.cwd(),
    "src/data/books",
    slug,
    contentFile
  );
  const data = JSON.parse(readFileSync(filePath, "utf-8")) as { body: string };
  return data.body;
}

export function getChapter(
  slug: string,
  chapterId: string
): BookChapter | undefined {
  const book = getReadableBook(slug);
  if (!book) return undefined;
  const meta = book.chapters.find((chapter) => chapter.id === chapterId);
  if (!meta) return undefined;
  return {
    ...meta,
    body: getChapterBody(slug, meta.contentFile),
  };
}

export type { BookChapterMeta, ReadableBook };
