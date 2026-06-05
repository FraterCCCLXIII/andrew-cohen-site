import fs from "fs";
import path from "path";

export interface JournalArticleContent {
  slug: string;
  contentHtml: string;
  scrapedAt?: string;
  sourceUrl: string;
}

const CONTENT_DIR = path.join(process.cwd(), "src/data/journal/content");

export function getJournalArticleContent(
  slug: string
): JournalArticleContent | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    return JSON.parse(
      fs.readFileSync(filePath, "utf8")
    ) as JournalArticleContent;
  } catch {
    return null;
  }
}
