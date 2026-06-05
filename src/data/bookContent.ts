export interface BookSection {
  title: string;
  body: string;
}

export interface BookQuote {
  text: string;
  source: string;
}

export interface BookExtendedContent {
  slug: string;
  subtitle?: string;
  credits?: string;
  sections: BookSection[];
  quotes: BookQuote[];
  quotesHeading?: string;
}

// Content sourced from https://andrewcohen.com/when-shadow-meets-the-bodhisattva/
const whenShadowMeetsTheBodhisattva: BookExtendedContent = {
  slug: "when-shadow-meets-the-bodhisattva",
  subtitle: "The Challenging Transformation of a Modern Guru",
  credits: "By Andrew Cohen with Hans Plasqui · Foreword by Allan Combs · ISBN 9781644115909",
  sections: [
    {
      title: "About the Book",
      body: `When Shadow Meets the Bodhisattva is an unflinching exploration of the rise and fall of Cohen's organization EnlightenNext, in which the author details his own responsibility for its failure, and the lessons he learned, including the need to deal thoroughly with one's shadow for continued spiritual growth.

Cohen presents wisdom from his discussions with spiritual leaders including Ken Wilber, Diane Musho Hamilton Roshi, Steve McIntosh, Terry Patten, Doshin Roshi, Sally Kempton, Philip Goldberg, Jeffrey Kripal, and Patricia Albere.

Finally, he shares a new vision for a spirituality of tomorrow, and a modern understanding of the ancient Buddhist model for disseminating enlightened wisdom known as the Triple Gem.`,
    },
    {
      title: "After the Fall",
      body: `After his very public fall from grace in 2013, renowned spiritual teacher Andrew Cohen vanished from view and underwent a dark night of the soul.

After years of intense introspection and soul-searching, Cohen shares his insights into the failure of his organization EnlightenNext, including his own responsibility for its downfall, as well as a new vision for modern spirituality based on the wisdom of the lessons he learned.`,
    },
    {
      title: "The Rise and Collapse",
      body: `The author details his spiritual initiation, his rapid rise to guruhood, the explosive growth of his spiritual community worldwide, and then — right at the height of its spiritual and creative emergence — its dramatic collapse, which left his students lost, bitter, angry, and confused.

He shares his gripping spiritual odyssey from the heights of illumination, down into the existential ashes of failed aspirations, to the underworld of inner darkness, and back again into the light.`,
    },
    {
      title: "Shadow and the Guru",
      body: `Building upon the lessons he learned, including the need to deal thoroughly with one's own shadow, Cohen explains the necessity of the guru in spiritual practice, while also exposing the dysfunctions of the traditional guru-disciple model.

He shares insights from his discussions with spiritual leaders, including Ken Wilber, Diane Musho Hamilton, Doshin Roshi, Jeffrey Kripal, and Patricia Albere, revealing how the issues he faced are profoundly relevant to the spiritual community as a whole.`,
    },
    {
      title: "A New Vision",
      body: `Cohen also shares how his teachings have evolved and sheds light on the art of communicating beyond ego and unleashing the co-creative power of our shared collective intelligence — the key to initiating enlightened change in this world in crisis.`,
    },
    {
      title: "About the Authors",
      body: `Andrew Cohen is a spiritual teacher, cultural visionary, and founder of the global non-profit EnlightenNext and its award-winning publication EnlightenNext magazine. After the collapse of EnlightenNext in 2013, Cohen took several years off from public teaching. In 2020, he and a group of collaborators launched Manifest Nirvana, a sanctuary for deep transformation, where twenty-first century spiritual explorers and integral pioneers will find their home. The author of several books, including Evolutionary Enlightenment, he lived in India.

Hans Plasqui is a writer, scholar and spiritual practitioner who has studied with several teachers, including Saniel Bonder, Terry Patten and Ken Wilber. He has specialized in Wilber's Integral Theory, which he studied at JFK University. The author of Sincerity Uncompromised, he lives in Belgium.`,
    },
  ],
  quotesHeading: "Praise",
  quotes: [
    {
      text: "Whenever I perceived my students to be weak, failing to live up to the teachings, I instinctively treated them with impatience and intolerance. The reasonable psychological explanation for my edginess around any form of vulnerability, weakness, or ambiguity is that it was a sign that my own shadow had been triggered. I overreacted to parts within myself that I could not accept and didn't want to face. In these cases, my students' weaknesses were, in fact, my own.",
      source: "Andrew Cohen — When Shadow Meets the Bodhisattva",
    },
    {
      text: "A true spiritual odyssey by a modern master. The personal depth and descriptive brilliance of this remarkable journey carries us up to heights of illumination, down into earthly existential ashes of failed aspirations, into the underworld of inner darkness, and back. This story is unparalleled in today's spiritual literature.",
      source: "Allan Combs, Integral Philosopher and author",
    },
    {
      text: "This is an extremely important and highly recommended book. It's beautifully written and comes straight from the spiritual heart. Get it and read it—it will change your life.",
      source: "Ken Wilber, Integral Philosopher and author of The Religion of Tomorrow",
    },
    {
      text: "Andrew's book is a bravest testament to that new nonduality at the highest levels. His experiences are universal to all those who answer their transcendent calling in life: The rise to prominence, the wounding, and ultimately the reckoning that annihilates our former selves. It is in that place of surrender that we discover our authentic Self and begin our long journey to this new forbidden field.",
      source: "Said E. Dawlabani, Gravesian Developmentalist — author of MEMEnomics",
    },
    {
      text: "A brutally honest immersion into the creation and destruction of a spiritual group, and the crucifixion of its leader. A primal pattern of hierarchical systems is at work — the hierarchical systems that dominate our lives, and are even at work in spiritual movements which seem to preach the end of hierarchical leadership, but which embody the ecstasy of submission that only groups with leaders generate.",
      source: "Howard Bloom, author of The Lucifer Principle",
    },
    {
      text: "Andrew Cohen has boldly and courageously shared his deeply compelling journey into the core of the evolutionary impulse through emerging from the shadow of mythic absolutism into the realm of the Radical Spirit where breakthrough revelations, extreme transformation and the fire to catalyze collective transcendence for the benefit of the greater good resides.",
      source: "Diane Marie Williams, Founder, The Source of Synergy Foundation",
    },
    {
      text: "Andrew Cohen tells his story in these pages and explains both what went very, very right and very, very wrong. He takes responsibility for what happened and relates it to his own pride, authoritarianism, shaming techniques, and the traditional hierarchical role of the perfect mythical guru, but he also confesses those deeper evolutionary forces and absolute truths that have shone through his own Indian guru, himself as guru, and his gifted students all along. We need this book. We need this Andrew Cohen. We need this evolution.",
      source: "Jeffrey J. Kripal, author of The Superhumanities",
    },
    {
      text: "A marvellous and enlightening book for any teacher and practitioner on the edge of cultural and spiritual evolution who wants to make the world a better place.",
      source: "Martin Ucik, author and facilitator, Integral Relationship",
    },
    {
      text: "This is a book everyone who is sincerely on the spiritual journey should read. In every way, Andrew Cohen's rise, fall, atonement and the fruits of his journey manifested in new understanding and vision — this is truly the drama of an archetypal hero's journey.",
      source: "Ron Friedman, M.D., Co-founder of Vistar Foundation",
    },
  ],
};

const bookContentBySlug: Record<string, BookExtendedContent> = {
  [whenShadowMeetsTheBodhisattva.slug]: whenShadowMeetsTheBodhisattva,
};

export function getBookContent(slug: string): BookExtendedContent | undefined {
  return bookContentBySlug[slug];
}
