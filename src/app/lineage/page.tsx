import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "Ramana Maharshi — The Sage of Arunachala",
    body: `Andrew Cohen's spiritual lineage reaches back to Ramana Maharshi (1879–1950), born in Tamil Nadu, South India, and widely regarded as the twentieth century's greatest master of Advaita Vedanta — the teaching of nonduality.

At sixteen, Ramana underwent a sudden, life-changing experience. A great fear arose in him that he was going to die, and rather than flee it he turned his attention keenly inward to discover what death might mean. What he found was deathless: "Untouched by death here I am still existing and shining. I am indestructible." Soon afterward he left home for the sacred mountain of Arunachala in Tiruvannamalai, where he remained for the rest of his life, pointing seekers again and again to the single question, "Who am I?"`,
    images: [
      {
        src: "/images/lineage/ramana-maharshi.jpg",
        alt: "Ramana Maharshi seated in meditation",
        caption: "Ramana Maharshi (1879–1950)",
      },
    ],
  },
  {
    title: "H.W.L. Poonja — The Teacher",
    body: `Cohen's own teacher, H.W.L. Poonja — known to many as Poonjaji — was a direct disciple of Ramana Maharshi. As Cohen writes, "my own teacher had been a disciple of Ramana Maharshi," and through him the living transmission of that nondual realization reached a new generation.

Cohen met him in 1986: "It was then that I met a little-known teacher named H.W.L. Poonja in Lucknow in northern India." In a very short time, Cohen says, Poonja revealed the answers to the questions that had long plagued him — telling him that fullness and emptiness as the final experience of the goal "were ultimately one and the same." Poonja's essential message was uncompromising: "all effort and striving to become free is itself the main impediment to the direct realization of the fact that one has never been unfree."`,
    images: [
      {
        src: "/images/lineage/poonja.jpg",
        alt: "H.W.L. Poonja (Poonjaji)",
        caption: "H.W.L. Poonja (1910–1997)",
      },
    ],
  },
  {
    title: "Awakening and Divergence",
    body: `For Cohen, the encounter was transformative. The experiential revelation that only the Self exists, together with Poonja's emphasis on letting go of all effort and striving, "catapulted me beyond the chains of memory, fear and doubt." When Cohen began to teach, this same message was, at first, his own.

But over time a difficult question emerged. Across a five-year period, Cohen became "gradually more and more confused by the discrepancies" between his teacher's realization and his conduct. This compelled him to confront questions that would shape the rest of his work: "What is the relationship between Love and Truth? What is the relationship between spiritual awakening and human conduct?" The honest pursuit of those questions led him to diverge from his teacher and to seek a teaching "far more comprehensive" than the one he had received.`,
  },
  {
    title: "Ken Wilber and the Integral Vision",
    body: `As Cohen's teaching matured, it was profoundly shaped by his engagement with the American philosopher Ken Wilber, the foremost architect of Integral theory. Where the nondual tradition had given Cohen the experience of liberation, Integral thought gave him a framework large enough to hold it — one that situates spiritual realization within the vast arc of cosmic, biological, and cultural evolution, integrating body, mind, soul, and Spirit with self, culture, and nature.

The two became close collaborators and friends, carrying on a sustained public exchange — the Guru and Pandit dialogues — that probed the frontier where enlightenment meets evolution. Cohen dedicated Evolutionary Enlightenment to Wilber, and credited "contemporary evolutionary and integral pioneers, especially Brian Swimme, Don Beck, and Ken Wilber" with helping to deepen and refine his thinking. Wilber, in turn, placed Cohen in a lineage of evolutionary pathfinders reaching back to Sri Aurobindo.`,
    images: [
      {
        src: "/images/lineage/ken-wilber.jpg",
        alt: "Ken Wilber",
        caption: "Ken Wilber",
      },
    ],
  },
  {
    title: "Sri Aurobindo, the Mother, and Integral Yoga",
    body: `If Integral theory gave Cohen a contemporary map, the early-twentieth-century sage Sri Aurobindo gave him a spiritual ancestor. Aurobindo — together with his collaborator Mirra Alfassa, known as the Mother — taught that the aim of spiritual life is not escape from the world but the descent of a higher consciousness into it: the divinization of matter, life, and mind.

Their Integral Yoga held that evolution itself is a spiritual process, and that humanity stands at the threshold of a new, supramental stage of consciousness. In this evolutionary mysticism Cohen recognized a vision close to his own. By his own account, he finds "more in common with the great evolutionary visionaries of the last century, such as Sri Aurobindo and Pierre Teilhard de Chardin, than he does with the ancient Eastern enlightenment tradition in which his own awakening occurred."`,
    images: [
      {
        src: "/images/lineage/sri-aurobindo.jpg",
        alt: "Sri Aurobindo",
        caption: "Sri Aurobindo (1872–1950)",
      },
      {
        src: "/images/lineage/the-mother.jpg",
        alt: "Mirra Alfassa, known as the Mother",
        caption: "The Mother (1878–1973)",
      },
    ],
  },
  {
    title: "A Synthesis of Realization and Evolution",
    body: `Out of these streams Cohen forged Evolutionary Enlightenment as a deliberate synthesis. From Ramana Maharshi and Papaji he inherited the bedrock realization of the timeless Self — the direct, liberating recognition that, at the deepest level, one has never been anything other than free. From Aurobindo, the Mother, Teilhard, and the integral pioneers he took the conviction that this realization is not the end of the story: that the same impulse which awakens as the Self in the individual is also driving the evolution of the collective and the cosmos toward ever-greater consciousness.

Cohen's distinctive contribution was to hold these together — the depth of Being and the dynamism of Becoming. Where his own teachers pointed to the changeless ground of Being, he came to insist that liberation is not the destination but the foundation for conscious participation in the evolutionary process. In this way his work remains faithful to the nondual tradition that liberated him, while answering the radical evolutionary potential for the collective and the cosmos that visionaries like Aurobindo had glimpsed.`,
    images: [
      {
        src: "/images/lineage/andrew-cohen-teaching.jpg",
        alt: "Andrew Cohen teaching",
        caption: "Andrew Cohen",
      },
    ],
  },
];

export default function LineagePage() {
  return (
    <InnerPageLayout
      title="Lineage"
      subtitle="From Ramana Maharshi to the Present"
      intro="Andrew Cohen's spiritual lineage traces through his teacher H.W.L. Poonja to the great Advaita sage Ramana Maharshi — a transmission of nondual realization that Cohen would carry forward into an evolutionary vision."
      sections={sections}
      quotes={[]}
      heroImage="/images/lineage-hero.jpg"
      heroImageAlt="A young Andrew Cohen with his teacher H.W.L. Poonja (Poonjaji)"
      heroImageCaption="Andrew Cohen with his teacher, H.W.L. Poonja (Poonjaji)."
      heroVariant="full"
    />
  );
}
