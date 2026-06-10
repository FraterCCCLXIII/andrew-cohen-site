export interface RoadmapItem {
  id: string;
  title: string;
  description?: string;
}

export interface RoadmapCategory {
  id: string;
  title: string;
  description: string;
  items: RoadmapItem[];
}

export const roadmapCategories: RoadmapCategory[] = [
  {
    id: "preservation",
    title: "Preservation & Infrastructure",
    description:
      "Long-term stewardship of original media, reliable hosting, and the resources required to keep decades of teaching safe and accessible.",
    items: [
      {
        id: "digital-archive-tapes",
        title: "Digital archive project",
        description:
          "Migrating all magnetic tape and legacy physical media into a preserved digital collection.",
      },
      {
        id: "migrate-hosted-media",
        title: "Migrate hosted media to long-term storage",
        description:
          "Moving YouTube, Vimeo, and AWS-hosted content onto durable server storage under our control.",
      },
      {
        id: "fundraise-storage",
        title: "Fundraise for archive storage",
        description:
          "Building sustainable financial support for storage, backup, and ongoing preservation work.",
      },
    ],
  },
  {
    id: "catalog",
    title: "Content Discovery & Aggregation",
    description:
      "Bringing scattered collections together so practitioners can find what exists — audio, publications, photography, and historical context.",
    items: [
      {
        id: "unfulfilled-desires-audio",
        title: "Unfulfilled Desires audio",
        description:
          "Archiving and publishing the full catalog of Unfulfilled Desires recordings.",
      },
      {
        id: "wie-unbound",
        title: "WIE Unbound content",
        description:
          "Aggregating all What Is Enlightenment? Unbound material into the archive.",
      },
      {
        id: "notes-from-revolution",
        title: "Notes from the Revolution",
        description:
          "Collecting and publishing the Notes from the Revolution series.",
      },
      {
        id: "photo-library",
        title: "Photo library archive",
        description:
          "A searchable photo library spanning retreats, centers, community life, and teaching history.",
      },
      {
        id: "timeline",
        title: "Andrew Cohen & EnlightenNext timeline",
        description:
          "A more complete interactive timeline of Andrew Cohen's life, teaching, and the EnlightenNext era.",
      },
      {
        id: "transcripts",
        title: "Transcript library",
        description:
          "Searchable transcripts for archived video and audio teachings.",
      },
      {
        id: "magazine-complete",
        title: "Complete magazine archive",
        description:
          "Full digitization of every What Is Enlightenment? / EnlightenNext magazine issue and supplement.",
      },
      {
        id: "journal-complete",
        title: "Complete journal archive",
        description:
          "Full text and media for every Andrew Cohen journal article, integrated with the site search.",
      },
    ],
  },
  {
    id: "books",
    title: "Books & Reading",
    description:
      "Making Andrew Cohen's published work available in every form readers need — beautiful editions, online reading, and downloads.",
    items: [
      {
        id: "book-covers",
        title: "New edition book covers",
        description:
          "Updated cover artwork across the full catalog of published books.",
      },
      {
        id: "online-reader",
        title: "Online reader with downloads",
        description:
          "Complete book content available through an in-browser reader, with downloadable formats.",
      },
      {
        id: "print-on-demand",
        title: "Print-on-demand for all books",
        description:
          "Every title available through print-on-demand services worldwide.",
      },
    ],
  },
  {
    id: "access",
    title: "Access, Learning & Reach",
    description:
      "Helping more people find, understand, and engage with the teaching — wherever they are and however they learn best.",
    items: [
      {
        id: "site-search",
        title: "Site-wide search",
        description:
          "Unified search across books, magazine, journal, archive, teaching pages, and transcripts.",
      },
      {
        id: "translations",
        title: "Multilingual site & content",
        description:
          "Translating the site and core content into additional languages.",
      },
      {
        id: "courses-app",
        title: "Online & app-delivered courses",
        description:
          "Structured courses and teaching content delivered through the web and dedicated apps.",
      },
      {
        id: "podcast-feeds",
        title: "Podcast & RSS feeds",
        description:
          "Subscribe-friendly feeds for audio teachings, dialogues, and archive releases.",
      },
      {
        id: "accessibility",
        title: "Accessibility improvements",
        description:
          "Captions, transcripts, keyboard navigation, and screen reader support across media and reading experiences.",
      },
      {
        id: "topic-pages",
        title: "Thematic teaching indexes",
        description:
          "Curated topic pages linking related teachings across books, archive, magazine, and journal.",
      },
    ],
  },
];
