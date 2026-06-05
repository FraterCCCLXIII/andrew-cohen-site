import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "A Fateful Encounter",
    body: `In March 1986, in Lucknow, northern India, a fateful encounter between Andrew Cohen and the revered master H.W.L. Poonja set in motion an extraordinary spiritual odyssey. Within days of this meeting, the friends Andrew had met on his travels had become followers.

From these quiet beginnings on the banks of the Ganges north of Rishikesh, Andrew Cohen's small band of seekers were to evolve into one of the most serious, motivated and committed spiritual communities in recent history.`,
  },
  {
    title: "A Different Kind of Teacher",
    body: `From the beginning, Andrew was a different kind of spiritual teacher. Young and fearless, he took aim at the sacred cows of the spiritual world, and swept aside trite New Age thinking.

His integration of postmodern cultural and scientific understanding with non-dual Advaita teachings had instant appeal to sophisticated westerners. They were drawn by his transmission, and sought to live by his evolving philosophy.`,
  },
  {
    title: "A Global Community",
    body: `Throughout the 1990s, Andrew and his growing community travelled from England to Holland to America, eventually settling in Marin County, California. He taught retreats in Bodhgaya, Kathmandu, Rishikesh and Bali, and toured France, Germany, Switzerland, Israel and Australia.

By the early 2000s, his organization had become international, with major centers in seven countries and a large ashram, Foxhollow, in Lenox, Massachusetts. Its critically acclaimed quarterly magazine — What Is Enlightenment?, later EnlightenNext — published dialogues and interviews with some of the greatest thinkers of the age.

Andrew's books and philosophy were widely praised by a range of high-profile academics, authors and thinkers, and his intensive retreats drew thousands of people. He forged a deep friendship with the integral philosopher Ken Wilber, and the two shared and expanded their mutual perspectives through the Guru & Pandit dialogues.

Andrew's teaching style still divided opinion, attracting both adulation and intense criticism — some of it from former students who insist that he is nothing but a pathological narcissist. But the community continued to evolve in a high-pressure environment of intense spiritual practice and commitment.`,
  },
  {
    title: "The Breakthrough — July 30th, 2001",
    body: `The most significant breakthrough came on July 30th, 2001, when a group of students at Foxhollow experienced a collective awakening to spirit — a mysterious context of seamless autonomy and communion that arose simultaneously, and was shared and expressed by all present.

The group had broken through a glass ceiling, and the shockwaves were felt throughout the community. They described an intersubjective field of consciousness that Andrew had insisted was not only possible, but essential if enlightenment were to have any real impact on the evolution of culture. This was the distillation of fifteen years of enquiry that, over the next decade, he would forge into his most acclaimed work, Evolutionary Enlightenment.`,
  },
  {
    title: "Foundering and Collapse",
    body: `But while Andrew's fame and influence, along with his notoriety, seemed to be growing, EnlightenNext was foundering. As a looming financial crisis took hold, disharmony and distrust were spreading rapidly at the core of the community, and flaws in Andrew's teaching and methods began to be revealed.

By the time of its collapse in 2013, EnlightenNext had become an audacious experiment in consciousness that facilitated remarkable leaps in collective maturity. Yet simultaneously it was caught in a vortex of cultish behaviours that ultimately led to its downfall.

As the organisation unravelled and the crisis deepened, a group of senior students took the unprecedented step of compelling their teacher and leader to step down. Estranged from the community that had formed around him over a period of 27 years, Andrew Cohen disappeared without trace.`,
  },
  {
    title: "Exile and Return",
    body: `Following a three-year self-imposed exile, Andrew reported back from a place to which very few have travelled, and from which even fewer have returned. His journey took him into the depths of his own shadow, revealing painful psychological and emotional truths about his own condition — and the complex reasons for the collapse of EnlightenNext.

But his spectacular fall from grace also raises essential questions about the wider failings of the mythic guru tradition. The history of spiritual communities is replete with stories of abuse and failure, and more than ever before the guru principle is in need of intense re-evaluation.

Andrew broke his long silence to step forward and share both an unflinching examination of the flaws inherent in the traditional role of the guru, and an emerging new direction for spiritual practice in the twenty-first century and beyond.`,
  },
];

const quotes = [
  {
    text: "We were all in love with each other, and there was a sense of innocence and sweetness. It was like being on a honeymoon together. The love we were feeling for each other was unbelievable, spellbinding. We were having the experience of a lifetime. People around the scene started to realise that something was happening with our little group. That was it — that was the beginning.",
    source: "Andrew Cohen, on the earliest days in India",
  },
];

export default function HisLifePage() {
  return (
    <InnerPageLayout
      title="His Life"
      subtitle="The Rise and Fall of a Spiritual Community"
      intro="From a fateful meeting in India, through the audacious experiment of EnlightenNext and a collective awakening, to a fall from grace, exile, and return — the life of Andrew Cohen and the community that formed around him."
      sections={sections}
      quotes={quotes}
      heroImage="/images/lineage-hero.jpg"
      heroImageAlt="A young Andrew Cohen with his teacher H.W.L. Poonja in Lucknow, India"
      heroImageCaption="Andrew Cohen with H.W.L. Poonja in Lucknow, India, 1986 — where it began."
    />
  );
}
