/** WordPress users who posted on behalf of Andrew Cohen — not the actual author. */
const WORDPRESS_ADMIN_AUTHORS = new Set(["Daniela Bomatter"]);

export function normalizeAuthor(author: string): string {
  const trimmed = author.trim();
  if (WORDPRESS_ADMIN_AUTHORS.has(trimmed)) {
    return "Andrew Cohen";
  }
  return author;
}
