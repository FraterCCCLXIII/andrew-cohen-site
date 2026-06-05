export interface Book {
  slug: string;
  title: string;
  year: string;
  /** Short line shown in the carousel and on cards. */
  tagline: string;
  /** Longer description shown on the book detail page. */
  description: string;
  /** Optional link to a related in-depth teaching page. */
  teachingHref?: string;
}

// Single source of truth for Andrew Cohen's published books, ordered chronologically.
export const books: Book[] = [
  {
    slug: "my-master-is-my-self",
    title: "My Master Is My Self",
    year: "1989",
    tagline: "The birth of a spiritual teacher.",
    description:
      "Andrew Cohen's first book, drawn from his correspondence and journals during the period of his awakening and the beginning of his life as a teacher. It documents the intensity of his early relationship with his own teacher and the dawning of his independent voice.",
  },
  {
    slug: "enlightenment-is-a-secret",
    title: "Enlightenment Is a Secret",
    year: "1991",
    tagline: "Teachings on the paradox of awakening.",
    description:
      "An early collection of teachings and dialogues exploring the paradox at the heart of spiritual awakening — that what is most obvious is often most hidden.",
    teachingHref: "/teaching/enlightenment-is-a-secret",
  },
  {
    slug: "autobiography-of-an-awakening",
    title: "Autobiography of An Awakening",
    year: "1992",
    tagline: "A first-person account of liberation.",
    description:
      "Andrew Cohen's personal account of his spiritual awakening and the formative early years of his teaching work, tracing the events and realizations that set the course of his life.",
  },
  {
    slug: "an-unconditional-relationship-to-life",
    title: "An Unconditional Relationship to Life",
    year: "1995",
    tagline: "Life itself as the path.",
    description:
      "Exploring the radical shift from seeking enlightenment as escape from life to embracing life itself as the path, and the right view required for any genuine transformation.",
    teachingHref: "/teaching/an-unconditional-relationship-to-life",
  },
  {
    slug: "the-challenge-of-enlightenment",
    title: "The Challenge of Enlightenment",
    year: "1996",
    tagline: "The demands of authentic spiritual life.",
    description:
      "A teaching given at Bodhgaya, the site of the Buddha's awakening, addressing the multidimensional integrity of nonduality and the absolute demand to let everything be as it is.",
    teachingHref: "/teaching/the-challenge-of-enlightenment",
  },
  {
    slug: "freedom-has-no-history",
    title: "Freedom Has No History",
    year: "1997",
    tagline: "Liberation beyond the personal past.",
    description:
      "A collection of teachings on the timeless nature of freedom — the recognition that genuine liberation is found beyond the weight and momentum of personal history.",
  },
  {
    slug: "who-am-i-and-how-shall-i-live",
    title: "Who Am I? and How Shall I Live?",
    year: "1998",
    tagline: "Two questions at the root of a spiritual life.",
    description:
      "An exploration of the two fundamental questions that orient an authentic spiritual life: the inquiry into the nature of the self, and the inquiry into how that realization should be lived.",
  },
  {
    slug: "in-defense-of-the-guru-principle",
    title: "In Defense of the Guru Principle",
    year: "1999",
    tagline: "On the teacher–student relationship.",
    description:
      "An examination and defense of the traditional relationship between teacher and student, and the role of the guru principle in the transmission of spiritual realization.",
  },
  {
    slug: "embracing-heaven-and-earth",
    title: "Embracing Heaven & Earth",
    year: "2000",
    tagline: "Spirit realized in embodied life.",
    description:
      "Essays and teachings on the integration of spiritual realization with embodied, worldly existence — the meeting of the absolute and the relative in a human life.",
    teachingHref: "/teaching/embracing-heaven-and-earth",
  },
  {
    slug: "living-enlightenment",
    title: "Living Enlightenment: A Call for Evolution Beyond Ego",
    year: "2002",
    tagline: "A call for evolution beyond ego.",
    description:
      "A call to move beyond the personal ego toward a collective, evolving expression of enlightenment — an early articulation of the evolutionary vision that would come to define Cohen's teaching.",
  },
  {
    slug: "evolutionary-enlightenment",
    title: "Evolutionary Enlightenment: A New Path to Spiritual Awakening",
    year: "2011",
    tagline: "A new path to spiritual awakening.",
    description:
      "A comprehensive map of the spiritual journey for the twenty-first century, arguing that the evolutionary impulse and the enlightenment impulse are one and the same.",
    teachingHref: "/teaching/evolutionary-enlightenment",
  },
  {
    slug: "when-shadow-meets-the-bodhisattva",
    title: "When Shadow Meets the Bodhisattva",
    year: "2023",
    tagline: "Reflection, humility, and return.",
    description:
      "A later work reflecting on the shadow side of spiritual life and leadership, written after a period of stepping back — a candid reckoning with failure, humility, and renewal.",
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}
