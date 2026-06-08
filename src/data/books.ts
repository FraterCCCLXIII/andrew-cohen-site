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
  /** Optional path to real cover artwork. Falls back to a generated placeholder. */
  cover?: string;
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
    cover: "/images/books/my-master-is-my-self.jpg",
  },
  {
    slug: "enlightenment-is-a-secret",
    title: "Enlightenment Is a Secret",
    year: "1991",
    tagline: "Teachings on the paradox of awakening.",
    description:
      "An early collection of teachings and dialogues exploring the paradox at the heart of spiritual awakening — that what is most obvious is often most hidden.",
    teachingHref: "/teaching/enlightenment-is-a-secret",
    cover: "/images/books/enlightenment-is-a-secret.jpg",
  },
  {
    slug: "autobiography-of-an-awakening",
    title: "Autobiography of An Awakening",
    year: "1992",
    tagline: "A first-person account of liberation.",
    description:
      "Andrew Cohen's personal account of his spiritual awakening and the formative early years of his teaching work, tracing the events and realizations that set the course of his life.",
    cover: "/images/books/autobiography-of-an-awakening.gif",
  },
  {
    slug: "letters-of-love",
    title: "Letters of Love",
    year: "1992",
    tagline: "Declarations of freedom, ecstasy, intimacy, and revelation.",
    description:
      "A collection of writings by students of Andrew Cohen — intimate letters and reflections on freedom, ecstasy, intimacy, and revelation from the early years of his teaching community. Published by Moksha Press.",
    cover: "/images/books/letters-of-love.png",
  },
  {
    slug: "an-unconditional-relationship-to-life",
    title: "An Unconditional Relationship to Life",
    year: "1995",
    tagline: "Life itself as the path.",
    description:
      "Exploring the radical shift from seeking enlightenment as escape from life to embracing life itself as the path, and the right view required for any genuine transformation.",
    teachingHref: "/teaching/an-unconditional-relationship-to-life",
    cover: "/images/books/an-unconditional-relationship-to-life.jpg",
  },
  {
    slug: "the-challenge-of-enlightenment",
    title: "The Challenge of Enlightenment",
    year: "1996",
    tagline: "The demands of authentic spiritual life.",
    description:
      "A teaching given at Bodhgaya, the site of the Buddha's awakening, addressing the multidimensional integrity of nonduality and the absolute demand to let everything be as it is.",
    teachingHref: "/teaching/the-challenge-of-enlightenment",
    cover: "/images/books/the-challenge-of-enlightenment.png",
  },
  {
    slug: "freedom-has-no-history",
    title: "Freedom Has No History",
    year: "1997",
    tagline: "Liberation beyond the personal past.",
    description:
      "A collection of teachings on the timeless nature of freedom — the recognition that genuine liberation is found beyond the weight and momentum of personal history.",
    cover: "/images/books/freedom-has-no-history.jpg",
  },
  {
    slug: "an-absolute-relationship-to-life",
    title: "An Absolute Relationship to Life",
    year: "1997",
    tagline: "A talk on enlightenment and the human condition.",
    description:
      "What would it mean to have an absolute relationship to the entire experience of being alive? In this teaching, Andrew Cohen divides our experience into its three most fundamental aspects — our relationship to time, to thought, and to feeling — and asks what it would mean to give ourselves completely to life, to know that thought has no inherent significance, and to discover that no feeling defines who we really are.",
    cover: "/images/books/an-absolute-relationship-to-life.jpg",
  },
  {
    slug: "who-am-i-and-how-shall-i-live",
    title: "Who Am I? and How Shall I Live?",
    year: "1998",
    tagline: "Two questions at the root of a spiritual life.",
    description:
      "An exploration of the two fundamental questions that orient an authentic spiritual life: the inquiry into the nature of the self, and the inquiry into how that realization should be lived.",
    cover: "/images/books/who-am-i-and-how-shall-i-live.png",
  },
  {
    slug: "the-promise-of-perfection",
    title: "The Promise of Perfection",
    year: "1998",
    tagline: "On wanting, possession, and the spiritual life.",
    description:
      "Based on a talk delivered at Harvard Divinity School in October 1997, this teaching examines the nature of wanting, the endless craving for material things, and the suffering and confusion that arise when desire is left unexamined — offering a clarity that has the power to liberate.",
    cover: "/images/books/the-promise-of-perfection.png",
  },
  {
    slug: "in-defense-of-the-guru-principle",
    title: "In Defense of the Guru Principle",
    year: "1999",
    tagline: "On the teacher–student relationship.",
    description:
      "An examination and defense of the traditional relationship between teacher and student, and the role of the guru principle in the transmission of spiritual realization.",
    cover: "/images/books/in-defense-of-the-guru-principle.png",
  },
  {
    slug: "embracing-heaven-and-earth",
    title: "Embracing Heaven & Earth",
    year: "2000",
    tagline: "Spirit realized in embodied life.",
    description:
      "Essays and teachings on the integration of spiritual realization with embodied, worldly existence — the meeting of the absolute and the relative in a human life.",
    teachingHref: "/teaching/embracing-heaven-and-earth",
    cover: "/images/books/embracing-heaven-and-earth.jpg",
  },
  {
    slug: "living-enlightenment",
    title: "Living Enlightenment: A Call for Evolution Beyond Ego",
    year: "2002",
    tagline: "A call for evolution beyond ego.",
    description:
      "A call to move beyond the personal ego toward a collective, evolving expression of enlightenment — an early articulation of the evolutionary vision that would come to define Cohen's teaching.",
    cover: "/images/books/living-enlightenment.jpg",
  },
  {
    slug: "being-and-becoming",
    title: "Being & Becoming",
    year: "2010",
    tagline: "Exploring the teachings of Evolutionary Enlightenment.",
    description:
      "A revised edition exploring the two inseparable dimensions at the heart of Evolutionary Enlightenment — the timeless ground of Being and the ecstatic urgency of Becoming — and why both are essential for authentic spiritual awakening in the twenty-first century.",
    cover: "/images/books/being-and-becoming.png",
  },
  {
    slug: "evolutionary-enlightenment",
    title: "Evolutionary Enlightenment: A New Path to Spiritual Awakening",
    year: "2011",
    tagline: "A new path to spiritual awakening.",
    description:
      "A comprehensive map of the spiritual journey for the twenty-first century, arguing that the evolutionary impulse and the enlightenment impulse are one and the same.",
    teachingHref: "/teaching/evolutionary-enlightenment",
    cover: "/images/books/evolutionary-enlightenment.png",
  },
  {
    slug: "when-shadow-meets-the-bodhisattva",
    title: "When Shadow Meets the Bodhisattva",
    year: "2023",
    tagline: "The Challenging Transformation of a Modern Guru",
    description:
      "An unflinching exploration of the rise and fall of EnlightenNext, in which Cohen details his own responsibility for its failure and the lessons he learned — including the need to deal thoroughly with one's shadow for continued spiritual growth.",
    cover: "/images/books/when-shadow-meets-the-bodhisattva.png",
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}
