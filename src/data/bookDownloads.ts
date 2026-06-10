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
  "freedom-has-no-history": {
    href: "/downloads/books/freedom-has-no-history.pdf",
    downloadName: "Freedom-Has-No-History.pdf",
    format: "pdf",
  },
  "living-enlightenment": {
    href: "/downloads/books/living-enlightenment.pdf",
    downloadName: "Living-Enlightenment.pdf",
    format: "pdf",
  },
  "my-master-is-my-self": {
    href: "/downloads/books/my-master-is-my-self.pdf",
    downloadName: "My-Master-Is-My-Self.pdf",
    format: "pdf",
  },
  "the-three-jewels-of-the-new-enlightenment": {
    href: "/downloads/books/the-three-jewels-of-the-new-enlightenment.pdf",
    downloadName: "The-Three-Jewels-of-the-New-Enlightenment.pdf",
    format: "pdf",
  },
};

export function getBookDownload(slug: string): BookDownload | undefined {
  return downloads[slug];
}
