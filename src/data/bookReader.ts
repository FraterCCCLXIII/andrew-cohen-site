export interface BookPart {
  id: string;
  label: string;
}

export interface BookChapterMeta {
  id: string;
  title: string;
  partId: string;
  printedPage?: number;
  contentFile: string;
}

export interface ReadableBook {
  slug: string;
  title: string;
  subtitle?: string;
  credits?: string;
  parts: BookPart[];
  chapters: BookChapterMeta[];
}

export interface BookChapter extends BookChapterMeta {
  body: string;
}

export function getChapterMeta(
  book: ReadableBook,
  chapterId: string
): BookChapterMeta | undefined {
  return book.chapters.find((chapter) => chapter.id === chapterId);
}

export function getAdjacentChapters(
  book: ReadableBook,
  chapterId: string
): { prev?: BookChapterMeta; next?: BookChapterMeta } {
  const index = book.chapters.findIndex((chapter) => chapter.id === chapterId);
  if (index === -1) return {};
  return {
    prev: index > 0 ? book.chapters[index - 1] : undefined,
    next:
      index < book.chapters.length - 1 ? book.chapters[index + 1] : undefined,
  };
}

export function groupChaptersByPart(book: ReadableBook) {
  return book.parts
    .map((part) => ({
      part,
      chapters: book.chapters.filter((chapter) => chapter.partId === part.id),
    }))
    .filter((group) => group.chapters.length > 0);
}
