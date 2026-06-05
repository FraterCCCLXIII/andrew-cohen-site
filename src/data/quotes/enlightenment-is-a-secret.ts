export interface QuoteItem {
  id: string;
  /** Section or dialogue title from the book, when one exists. */
  title?: string;
  text: string;
  source: string;
  image: string;
  imageAlt: string;
}

export const enlightenmentQuotesSource = "Enlightenment Is a Secret";
export const enlightenmentQuotesAuthor = "Andrew Cohen";

const natureImages = [
  {
    image: "/images/quotes/nature-01.jpg",
    imageAlt: "Snow-covered mountains and a high alpine lake in the Himalayas",
  },
  {
    image: "/images/quotes/nature-02.jpg",
    imageAlt: "Mountain lake surrounded by rock formations in the Sayan Mountains",
  },
  {
    image: "/images/quotes/nature-03.jpg",
    imageAlt: "Mountain cirque and alpine lakes in the Caucasus Mountains",
  },
  {
    image: "/images/quotes/nature-05.jpg",
    imageAlt: "Hopetoun Falls flowing through a lush green forest",
  },
  {
    image: "/images/quotes/nature-06.jpg",
    imageAlt: "Forest landscape with trees and distant hills",
  },
  {
    image: "/images/quotes/nature-07.jpg",
    imageAlt: "Beech forest waterfall in Great Otway National Park",
  },
  {
    image: "/images/quotes/nature-08.jpg",
    imageAlt: "Forest landscape with mountains near the Mediterranean coast",
  },
] as const;

type QuoteEntry = Omit<QuoteItem, "image" | "imageAlt"> &
  Partial<Pick<QuoteItem, "image" | "imageAlt">>;

function withNatureImage(quote: QuoteEntry, index: number): QuoteItem {
  const fallback = natureImages[index % natureImages.length];
  return {
    ...quote,
    image: quote.image ?? fallback.image,
    imageAlt: quote.imageAlt ?? fallback.imageAlt,
  };
}

const quoteEntries: QuoteEntry[] = [
  {
    id: "the-secret",
    title: "The Secret Nature of Liberation",
    text: "Enlightenment is a secret because the one who is looking for it is the very thing that prevents it from being found. The separate self-sense, the ego, the one who wants to become enlightened — this is the obstruction.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "get-out-of-the-way",
    title: "Enlightenment Is a Secret",
    text: "There is a secret that is infinitely greater than anything you have ever known. It is real and it exists and if you make room for it — it will overwhelm you. You have got to get out of the way. You have to abandon everything you've been taught and everything you've been led to believe — all those limiting, confining, imprisoning, denying ideas and concepts that you have picked up along your way.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "realization-of-the-absolute",
    title: "Realization of the Absolute",
    text: "Realization of the Absolute is the most demanding and all-consuming form of meditation that a human being can pursue. Any trace of self-interest of any kind in any form instantly corrupts the most perfect purity and automatically, although usually imperceptibly, taints its reflection.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "clarity-of-intention",
    title: "Clarity of Intention",
    text: "What is my intention? What do I really want? Do I want to be Free? Do I really want to be Free? Am I willing to sacrifice for that Freedom?",
    source: enlightenmentQuotesSource,
    image: "/images/quotes/nature-08.jpg",
    imageAlt: "Forest landscape with mountains near the Mediterranean coast",
  },
  {
    id: "scary-to-be-free",
    title: "Clarity of Intention",
    text: "It's a very scary thing to say, 'I want to be Free.' It can be very terrifying. It means that the ground from under you can fall away at any moment. When you say, 'I want to be Free,' and mean it, it's the same as saying, 'I'm ready to die.'",
    source: enlightenmentQuotesSource,
  },
  {
    id: "ready-to-die",
    title: "The Willingness to Die",
    text: "I'm ready to die but I don't know how. When this death occurs, what remains is not nothing. It is everything. It is life without the filter of the separate self.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "obedient-to-longing",
    title: "Be Obedient to the Longing",
    text: "Be obedient to the longing for Liberation. You must be obedient to that longing above all others. Always put that longing first — then you will be successful. That longing will surely lead you home, but not necessarily in the way that you have in mind.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "longing-that-burns",
    title: "Be Obedient to the Longing",
    text: "Real longing for liberation is something that burns. In that burning there is no mind, no age, no face, no history — there is only that longing. Force yourself to be obedient to that longing. If you cannot, then you will surely start looking in other places, because you will want to find some security in this very miserable world.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "coming-to-rest",
    title: "Coming to Rest",
    text: "It is relief. It is cessation. It is the end of becoming. It's the end of the struggle to become anyone or anything. It's coming finally to rest, here and now, in this life.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "innocent-place",
    title: "A Place in All of Us",
    text: "There is a place in all of us that has remained innocent, uncorrupted and untouched by the world. We have to locate that most delicate place. It is a very sensitive place, it's where we feel love — where tenderness and compassion arise, free from self-interest. This place is the hole we have to fall into — and disappear in forever.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "spiritual-nature",
    title: "The Spiritual Nature",
    text: "Spiritual is the very nature of what you already are. There's nothing to do about it except to Realize it. Once you have made this discovery it's all over. Then there is literally nothing more to do.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "devotion",
    title: "Spiritual Practice and the Ego",
    text: "Devotion is not something that can be practiced. Devotion is a choiceless response to Self-recognition that is imposed from within. Devotion is imposed from the unknown upon the ego and this cannot be done.",
    source: enlightenmentQuotesSource,
    image: "/images/quotes/nature-07.jpg",
    imageAlt: "Beech forest waterfall in Great Otway National Park",
  },
  {
    id: "recognition-not-effort",
    title: "Spiritual Practice and the Ego",
    text: "Liberation is not produced. It is recognized. And recognition comes not from effort, but from grace — the grace of the Self revealing itself when the ego steps aside.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "relate-your-life",
    title: "How Do I Relate This Experience to My Life?",
    text: "Why do you need to be able to relate that experience to your life? You should relate your life to that experience! That experience is potentially much bigger than your life. If you are lucky that experience will destroy your life entirely. If you are lucky your whole life will dissolve into that blazing light. Then you will be truly Free.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "spiritual-experiences",
    title: "How Do I Relate This Experience to My Life?",
    text: "Spiritual experiences are for one purpose only. They enable you to realize the impersonal. If you are lucky your experience will be so profound that it will result in your complete destruction. Then you will see things very differently. Then questions like, 'Where does this fit in?' will fall away forever.",
    source: enlightenmentQuotesSource,
  },
  {
    id: "nobody-wants-to-change",
    title: "Everybody Wants to Get Enlightened",
    text: "Everybody wants to get Enlightened, but nobody wants to change.",
    source: enlightenmentQuotesSource,
  },
];

export const enlightenmentQuotes: QuoteItem[] = quoteEntries.map(withNatureImage);

export function formatQuoteShareText(quote: QuoteItem): string {
  const attribution = quote.title
    ? `${quote.title} · ${quote.source}`
    : quote.source;

  return `"${quote.text}"\n\n— ${enlightenmentQuotesAuthor}\n${attribution}`;
}
