export interface MagazineIssue {
  issue: number;
  slug: string;
  magazine: "What Is Enlightenment?" | "EnlightenNext";
  date: string;
  tagline: string;
  pdf: string;
  cover: string;
}

export interface MagazineSupplement {
  slug: string;
  issue: number;
  magazine: "What Is Enlightenment?" | "EnlightenNext";
  date: string;
  title: string;
  author: string;
  tagline: string;
  pdf: string;
  cover: string;
  unpublished: true;
}

// Scraped from https://andrewcohen.com/enlightennext-magazine/
// Issues published 1992–2011. Renamed from What Is Enlightenment? to EnlightenNext with Issue 24.
export const magazineIssues: MagazineIssue[] = [
  {
    issue: 47,
    slug: "issue-47",
    magazine: "EnlightenNext",
    date: "July 2011",
    tagline:
      "It's a New Era at EnlightenNext — A Message from Founder Andrew Cohen; Genius Is Collaborative; Evolutionary Enlightenment: The Book.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_47.pdf",
    cover: "/images/magazine/issue-47-cover-832x1024.png",
  },
  {
    issue: 46,
    slug: "issue-46",
    magazine: "EnlightenNext",
    date: "Spring/Summer 2010",
    tagline: "Quantum Dreams & other strange things: have scientists finally solved the mystery of consciousness?",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_46.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_46_cover-823x1024.jpg",
  },
  {
    issue: 45,
    slug: "issue-45",
    magazine: "EnlightenNext",
    date: "Sep-Nov 2009",
    tagline: "The Evolving Faces of God: new perspectives on the meaning of spirituality for our time.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_45.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_45_cover-830x1024.jpg",
  },
  {
    issue: 44,
    slug: "issue-44",
    magazine: "EnlightenNext",
    date: "June-Aug 2009",
    tagline: "Envisioning the future: what today\u2019s brightest minds have to say about the road ahead.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_44.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_44_cover-836x1024.jpg",
  },
  {
    issue: 43,
    slug: "issue-43",
    magazine: "EnlightenNext",
    date: "March-May 2009",
    tagline: "Sex: the good, the strange and the sacred. Parental Advisory: Explicit Content.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_43.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_43_cover-826x1024.jpg",
  },
  {
    issue: 42,
    slug: "issue-42",
    magazine: "EnlightenNext",
    date: "Dec 2008-Feb 2009",
    tagline: "Evolution, Consciousness, Enlightenment, Culture: what does the future look like to you?",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_42.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_42_cover-840x1024.jpg",
  },
  {
    issue: 41,
    slug: "issue-41",
    magazine: "EnlightenNext",
    date: "Aug-Oct 2008",
    tagline: "Constructing the New Man: 4 unique perspectives on masculinity in the 21st century",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_41.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_41_cover-829x1024.jpg",
  },
  {
    issue: 40,
    slug: "issue-40",
    magazine: "EnlightenNext",
    date: "May-July 2008",
    tagline: "Welcome to the Center of the Universe: science zeros in on the cosmic significance of consciousness",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_40.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_40_cover-824x1024.jpg",
  },
  {
    issue: 39,
    slug: "issue-39",
    magazine: "EnlightenNext",
    date: "Feb-Apr 2008",
    tagline: "The Cosmos, The Psyche & You: an evolutionary vision for spirituality & psychology in the 21st century.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_39.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_39_cover-822x1024.jpg",
  },
  {
    issue: 38,
    slug: "issue-38",
    magazine: "EnlightenNext",
    date: "Oct-Dec 2007",
    tagline: "Envisioning the Future of Ecology, Politics and Consciousness. The power of Integral Politics.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_38.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_38_cover-827x1024.jpg",
  },
  {
    issue: 37,
    slug: "issue-37",
    magazine: "EnlightenNext",
    date: "Jul-Sep 2007",
    tagline: "Woman: a cultural, philosophical and spiritual exploration. The emergence of Integral Feminism.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_37.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_37_cover-828x1024.jpg",
  },
  {
    issue: 36,
    slug: "issue-36",
    magazine: "EnlightenNext",
    date: "Apr-June 2007",
    tagline: "Searching for Utopia: Exploring Humanity's Timeless Quest for Heaven on Earth.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_36.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_36_cover-828x1024.jpg",
  },
  {
    issue: 35,
    slug: "issue-35",
    magazine: "EnlightenNext",
    date: "Jan-March 2007",
    tagline: "The Mystery of Evolution: An Exploration of Where We Are and Where We're Headed.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_35.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_35_cover-829x1024.jpg",
  },
  {
    issue: 34,
    slug: "issue-34",
    magazine: "EnlightenNext",
    date: "Sep-Dec 2006",
    tagline: "Fifteenth Anniversary Edition: Eckhart Tolle, Brian Swimme, Vimala Thakar and many more.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_34.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_34_cover-842x1024.jpg",
  },
  {
    issue: 33,
    slug: "issue-33",
    magazine: "EnlightenNext",
    date: "June-Aug 2006",
    tagline: "God's Next Move: Exploring the Next Spiritual Revolution with Ken Wilber. James N. Gardner: The Biocosm.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_33.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_33_cover-833x1024.jpg",
  },
  {
    issue: 32,
    slug: "issue-32",
    magazine: "EnlightenNext",
    date: "March-May 2006",
    tagline: "Death, Rebirth & Everything In Between. Mexico's Prison Saint. Do Animals Have Souls?",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_32.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_32_cover-827x1024.jpg",
  },
  {
    issue: 31,
    slug: "issue-31",
    magazine: "EnlightenNext",
    date: "Dec 2005-Feb 2006",
    tagline: "Spirituality vs Religion: Where do you stand. Reviving the Role of the Spiritual Master.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_31.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_31_cover-830x1024.jpg",
  },
  {
    issue: 30,
    slug: "issue-30",
    magazine: "EnlightenNext",
    date: "Sep-Nov 2005",
    tagline: "Do You Want To Live Forever? Grappling with the Science and Ethics of Immortality.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_30.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_30_cover-836x1024.jpg",
  },
  {
    issue: 29,
    slug: "issue-29",
    magazine: "EnlightenNext",
    date: "June-Aug 2005",
    tagline: "Who Are You? Science's Quest to Solve the Mystery of Consciousness. Plus Desmond Tutu interviewed.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_29.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_29_cover-830x1024.jpg",
  },
  {
    issue: 28,
    slug: "issue-28",
    magazine: "EnlightenNext",
    date: "March-May 2005",
    tagline: "Will Big Business Save the World? Meet the unlikely heroes struggling to evolve the corporate machine.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_28.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_28_cover-824x1024.jpg",
  },
  {
    issue: 27,
    slug: "issue-27",
    magazine: "EnlightenNext",
    date: "Nov 2004-Feb 2005",
    tagline: "Searching for Soul in Hollywood: The Celestine Prophecy and What the Bleep Do We Know?",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_27.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_27_cover-828x1024.jpg",
  },
  {
    issue: 26,
    slug: "issue-26",
    magazine: "EnlightenNext",
    date: "Aug-Oct 2004",
    tagline: "Is God a Pacifist? War vs Peace in a Post 9/11 World. Plus The Women Who Sleep With Gurus.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_26.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_26_cover-828x1024.jpg",
  },
  {
    issue: 25,
    slug: "issue-25",
    magazine: "EnlightenNext",
    date: "May-July 2004",
    tagline: "Come Together! The Power of Collective Intelligence. Plus Howard Bloom and Peter Senge.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_25.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_25_cover-839x1024.jpg",
  },
  {
    issue: 24,
    slug: "issue-24",
    magazine: "EnlightenNext",
    date: "Feb-Apr 2004",
    tagline: "Morality Bites! Searching for Ethics in a Postmodern Age.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_24.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_24_cover-822x1024.jpg",
  },
  {
    issue: 23,
    slug: "issue-23",
    magazine: "What Is Enlightenment?",
    date: "Spring/Summer 2003",
    tagline: "Can God Handle The 21st Century? Exploring the perils and potentials of the new millennium.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_23.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_23_cover-781x1024.jpg",
  },
  {
    issue: 22,
    slug: "issue-22",
    magazine: "What Is Enlightenment?",
    date: "Fall/Winter 2002",
    tagline: "Are You Ready To Change Now? Exploring the dynamics of human transformation.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_22.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_22_cover-780x1024.jpg",
  },
  {
    issue: 21,
    slug: "issue-21",
    magazine: "What Is Enlightenment?",
    date: "Spring/Summer 2002",
    tagline: "The Future of God: evolution and enlightenment for the 21st century.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_21.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_21_cover-784x1024.jpg",
  },
  {
    issue: 20,
    slug: "issue-20",
    magazine: "What Is Enlightenment?",
    date: "Fall/Winter 2001",
    tagline: "10th Anniversary Edition: celebrating 10 years of radical spiritual enquiry",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_20.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_20_cover-779x1024.jpg",
  },
  {
    issue: 19,
    slug: "issue-19",
    magazine: "What Is Enlightenment?",
    date: "Spring/Summer 2001",
    tagline: "Can Enlightenment Save The World? Bernie Glassman, Michael Lerner, Vimala Thakar and more.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_19.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_19_cover-778x1024.jpg",
  },
  {
    issue: 18,
    slug: "issue-18",
    magazine: "What Is Enlightenment?",
    date: "Fall/Winter 2000",
    tagline: "What does it mean to be IN THE WORLD but NOT OF IT?",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_18.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_18_cover-782x1024.jpg",
  },
  {
    issue: 17,
    slug: "issue-17",
    magazine: "What Is Enlightenment?",
    date: "Spring/Summer 2000",
    tagline: "What Is Ego? Friend or Foe...",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_17.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_17_cover-778x1024.jpg",
  },
  {
    issue: 16,
    slug: "issue-16",
    magazine: "What Is Enlightenment?",
    date: "Fall/Winter 1999",
    tagline: "Men's-Women's-Gay Liberation: how free do we really want to be?",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_16.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_16_cover-780x1024.jpg",
  },
  {
    issue: 15,
    slug: "issue-15",
    magazine: "What Is Enlightenment?",
    date: "Spring/Summer 1999",
    tagline: "The Self Masters: Are They Enlightened? Anthony Robbins, Jack LaLanne, Michael Murphy and more.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_15.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_15_cover-779x1024.jpg",
  },
  {
    issue: 14,
    slug: "issue-14",
    magazine: "What Is Enlightenment?",
    date: "Fall/Winter 1998",
    tagline: "What Is Enlightenment? Does anybody know what they're talking about?",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_14.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_14_cover-791x1024.jpg",
  },
  {
    issue: 13,
    slug: "issue-13",
    magazine: "What Is Enlightenment?",
    date: "Spring/Summer 1998",
    tagline: "What is the relationship between sex and spirituality? Tantra vs celibacy.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_13.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_13_cover-790x1024.jpg",
  },
  {
    issue: 12,
    slug: "issue-12",
    magazine: "What Is Enlightenment?",
    date: "Fall/Winter 1997",
    tagline: "The Modern Spiritual Predicament: an inquiry into the popularization of East-meets-West spirituality.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_12.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_12_cover-793x1024.jpg",
  },
  {
    issue: 11,
    slug: "issue-11",
    magazine: "What Is Enlightenment?",
    date: "Spring/Summer 1997",
    tagline: "Can Science Enlighten Us? Science, Spirituality and the Revelation of the Unknown.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_11.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_11_cover-792x1024.jpg",
  },
  {
    issue: 10,
    slug: "issue-10",
    magazine: "What Is Enlightenment?",
    date: "Fall/Winter 1996",
    tagline: "Women, Enlightenment and the Divine Mother: do women have the inside track on spirituality.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_10.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_10_cover-790x1024.jpg",
  },
  {
    issue: 9,
    slug: "issue-09",
    magazine: "What Is Enlightenment?",
    date: "Spring/Summer 1997",
    tagline: "Is The Guru Dead? Questioning the \"New Paradigm\": an exploration of purity and authority in spiritual life.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_issue_09.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_issue_09_cover-786x1024.jpg",
  },
  {
    issue: 8,
    slug: "issue-08",
    magazine: "What Is Enlightenment?",
    date: "Summer 1995",
    tagline: "A Revolutionary Change of Perspective: Impersonal Enlightenment.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_Vol04_02.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_Vol04_02_cover-794x1024.jpg",
  },
  {
    issue: 7,
    slug: "issue-07",
    magazine: "What Is Enlightenment?",
    date: "January 1995",
    tagline: "Beyond the Boundaries of Tradition: Conversations on the Nature of Truth.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_Vol04_01.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_Vol04_01_cover-798x1024.jpg",
  },
  {
    issue: 6,
    slug: "issue-06",
    magazine: "What Is Enlightenment?",
    date: "July 1994",
    tagline: "Come Together: Who Has the Courage to Stand Alone/Together in the Truth?",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_Vol03_02.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_Vol03_02_cover-785x1024.jpg",
  },
  {
    issue: 5,
    slug: "issue-05",
    magazine: "What Is Enlightenment?",
    date: "January 1994",
    tagline: "Cynicism: The Modern Spiritual Predicament.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_Vol03_01.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_Vol03_01_cover-788x1024.jpg",
  },
  {
    issue: 4,
    slug: "issue-04",
    magazine: "What Is Enlightenment?",
    date: "July 1993",
    tagline: "What is the Relationship Between Love and Truth?",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_Vol02_02.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_Vol02_02_cover-792x1024.jpg",
  },
  {
    issue: 3,
    slug: "issue-03",
    magazine: "What Is Enlightenment?",
    date: "January 1993",
    tagline: "Descent from Heaven: The Last Frontier.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_Vol02_01.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_Vol02_01_cover-786x1024.jpg",
  },
  {
    issue: 2,
    slug: "issue-02",
    magazine: "What Is Enlightenment?",
    date: "July 1992",
    tagline: "Corruption, Purity and Enlightenment: A Three-Part Article by Andrew Cohen.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_Vol01_02.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_Vol01_02_cover-782x1024.jpg",
  },
  {
    issue: 1,
    slug: "issue-01",
    magazine: "What Is Enlightenment?",
    date: "January 1992",
    tagline: "A Passion for Death: An Interview with Andrew Cohen.",
    pdf: "https://s3.eu-central-1.amazonaws.com/wieoldissues/wie_en_weboptimized/EN_Vol01_01.pdf",
    cover: "https://andrewcohen.com/wp-content/uploads/2017/01/EN_Vol01_01_cover-791x1024.jpg",
  },
];

/** Unpublished pieces prepared for a given issue but not included in the final edition. */
export const magazineSupplements: MagazineSupplement[] = [
  {
    slug: "integirl-explains-it-all",
    issue: 33,
    magazine: "EnlightenNext",
    date: "June-Aug 2006",
    title: "Integirl Explains It All",
    author: "Tom Huston",
    tagline:
      "The birth of an integral spirituality — Part 3: Not Just a Book Review of Integral Spirituality by Ken Wilber and A New Earth by Eckhart Tolle.",
    pdf: "/downloads/magazine/integirl.pdf",
    cover: "/images/magazine/integirl-cover.png",
    unpublished: true,
  },
];

export function getMagazineIssue(slug: string): MagazineIssue | undefined {
  return magazineIssues.find((item) => item.slug === slug);
}

export function getMagazineSupplement(
  slug: string
): MagazineSupplement | undefined {
  return magazineSupplements.find((item) => item.slug === slug);
}

export function getSupplementsForIssue(
  issue: number
): MagazineSupplement[] {
  return magazineSupplements.filter((item) => item.issue === issue);
}

export const magazineEras = [
  { label: "Issues 24–47 (2004–2011)", start: 24, end: 47, name: "EnlightenNext" },
  { label: "Issues 01–23 (1992–2003)", start: 1, end: 23, name: "What Is Enlightenment?" },
] as const;