import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "Early Life and Awakening",
    body: `Andrew Cohen was born on October 23, 1955, and raised in a secular Jewish family in New York City. At the age of sixteen, he experienced a spontaneous revelation of cosmic consciousness — a sudden, unbidden opening of awareness that set him on a lifelong spiritual journey, and to which he would return again and again throughout his teaching.`,
  },
  {
    title: "A Fateful Encounter",
    body: `In March 1986, in Lucknow, northern India, a fateful encounter between Andrew Cohen and the revered master H.W.L. Poonja set in motion an extraordinary spiritual odyssey. Within days of this meeting, the friends Andrew had met on his travels had become followers.

From these quiet beginnings on the banks of the Ganges north of Rishikesh, Andrew Cohen's small band of seekers were to evolve into one of the most serious, motivated and committed spiritual communities in recent history.`,
  },
  {
    title: "A Different Kind of Teacher",
    body: `From the beginning, Andrew was a different kind of spiritual teacher. Young and fearless, he took aim at the sacred cows of the spiritual world, and swept aside trite New Age thinking.

Departing radically from traditional Eastern approaches, his teaching of Evolutionary Enlightenment called not for transcendence of the world, but for a deep and heroic responsibility toward its evolution. He grappled with the challenge of bringing the revelation of enlightenment to a contemporary Western audience, integrating postmodern cultural and scientific understanding with an original and sophisticated non-dual philosophy. Sophisticated westerners were drawn by his transmission, and sought to live by his evolving vision.`,
  },
  {
    title: "A Global Community",
    body: `Throughout the 1990s, Andrew and his growing community travelled from England to Holland to America, eventually settling in Marin County, California. He taught retreats in Bodhgaya, Kathmandu, Rishikesh and Bali, and toured France, Germany, Switzerland, Israel and Australia.

By the early 2000s, his organization had become international, with major centers in seven countries and a large ashram, Foxhollow, in Lenox, Massachusetts. From 1991 to 2010 Andrew served as editor-in-chief of the award-winning EnlightenNext magazine, a publication that explored profound spiritual questions with contributions from some of the world's most noted thought leaders.

His books and philosophy were widely praised by a range of high-profile academics, authors and thinkers, and his intensive retreats drew thousands of people. He forged a deep friendship with the integral philosopher Ken Wilber, and the two shared and expanded their mutual perspectives through the Guru & Pandit dialogues.

Andrew's teaching style divided opinion, attracting both adulation and intense criticism — some of it from former students. But the community continued to evolve in a high-pressure environment of intense spiritual practice and commitment.`,
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

As the organisation unravelled and the crisis deepened, a group of senior students took the unprecedented step of compelling their teacher and leader to step down. Estranged from the community that had formed around him over a period of 27 years, Andrew stepped away from public life.`,
  },
  {
    title: "Sabbatical and Return",
    body: `In 2013, Andrew went on sabbatical. His journey took him into the depths of his own shadow, revealing painful psychological and emotional truths about his own condition — and the complex reasons for the collapse of EnlightenNext.

His fall from grace also raised essential questions about the wider failings of the mythic guru tradition. The history of spiritual communities is replete with stories of abuse and failure, and more than ever before the guru principle was shown to be in need of intense re-evaluation.

At the end of 2016, following this period of introspection and deep enquiry, Andrew returned to public teaching — offering an unflinching examination of the flaws inherent in the traditional role of the guru, alongside an emerging new direction for spiritual practice in the twenty-first century and beyond. In 2019 he founded Manifest Nirvana (manifest-nirvana.com) together with some of his closest students, a platform dedicated to exploring and disseminating his teachings through ongoing dialogues, workshops, and courses designed to foster spiritual awakening and collective evolutionary consciousness.`,
  },
  {
    title: "In Memoriam",
    body: `Andrew Cohen passed away on March 25, 2025, in Tiruvannamalai, India — the town at the foot of Arunachala, the sacred mountain of Ramana Maharshi, the great sage at the root of his own lineage.

Over nearly four decades of teaching, he engaged with thousands of seekers worldwide, continuously evolving his teachings through direct dialogue with students, teachers, scholars, and philosophers. He leaves behind a body of work — and a community of those he taught — that continues to grapple with the questions to which he devoted his life.`,
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
      subtitle="Andrew Cohen · 1955 – 2025"
      intro="Andrew Cohen was an internationally respected spiritual teacher and the founder of Evolutionary Enlightenment — a vision that called not for transcendence of the world, but for a heroic responsibility toward its evolution. This is the story of his life, and of the community that rose and fell around him."
      sections={sections}
      quotes={quotes}
      heroImage="/images/lineage-hero.jpg"
      heroImageAlt="A young Andrew Cohen with his teacher H.W.L. Poonja in Lucknow, India"
      heroImageCaption="Andrew Cohen with H.W.L. Poonja in Lucknow, India, 1986 — where it began."
    />
  );
}
