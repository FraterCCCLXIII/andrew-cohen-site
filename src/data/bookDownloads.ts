export interface BookDownload {
  /** Public URL path to the downloadable file. */
  href: string;
  /** Suggested filename when the user saves the file. */
  downloadName: string;
  format: "pdf" | "epub";
}

const downloads: Record<string, BookDownload> = {
  "enlightenment-is-a-secret": {
    href: "/downloads/books/enlightenment-is-a-secret.pdf",
    downloadName: "Enlightenment-Is-a-Secret.pdf",
    format: "pdf",
  },
  "an-unconditional-relationship-to-life": {
    href: "/downloads/books/an-unconditional-relationship-to-life.pdf",
    downloadName: "An-Unconditional-Relationship-to-Life.pdf",
    format: "pdf",
  },
  "embracing-heaven-and-earth": {
    href: "/downloads/books/embracing-heaven-and-earth.pdf",
    downloadName: "Embracing-Heaven-and-Earth.pdf",
    format: "pdf",
  },
  "the-challenge-of-enlightenment": {
    href: "/downloads/books/the-challenge-of-enlightenment.pdf",
    downloadName: "The-Challenge-of-Enlightenment.pdf",
    format: "pdf",
  },
  "being-and-becoming": {
    href: "/downloads/books/being-and-becoming.pdf",
    downloadName: "Being-and-Becoming.pdf",
    format: "pdf",
  },
  "evolutionary-enlightenment": {
    href: "/downloads/books/evolutionary-enlightenment.epub",
    downloadName: "Evolutionary-Enlightenment.epub",
    format: "epub",
  },
};

export function getBookDownload(slug: string): BookDownload | undefined {
  return downloads[slug];
}
