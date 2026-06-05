import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "Ramana Maharshi — The Sage of Arunachala",
    body: `Andrew Cohen's spiritual lineage reaches back to Ramana Maharshi (1879–1950), born in Tamil Nadu, South India, and widely regarded as the twentieth century's greatest master of Advaita Vedanta — the teaching of nonduality.

At sixteen, Ramana underwent a sudden, life-changing experience. A great fear arose in him that he was going to die, and rather than flee it he turned his attention keenly inward to discover what death might mean. What he found was deathless: "Untouched by death here I am still existing and shining. I am indestructible." Soon afterward he left home for the sacred mountain of Arunachala in Tiruvannamalai, where he remained for the rest of his life, pointing seekers again and again to the single question, "Who am I?"`,
  },
  {
    title: "H.W.L. Poonja — The Teacher",
    body: `Cohen's own teacher, H.W.L. Poonja — known to many as Poonjaji — was a direct disciple of Ramana Maharshi. As Cohen writes, "my own teacher had been a disciple of Ramana Maharshi," and through him the living transmission of that nondual realization reached a new generation.

Cohen met him in 1986: "It was then that I met a little-known teacher named H.W.L. Poonja in Lucknow in northern India." In a very short time, Cohen says, Poonja revealed the answers to the questions that had long plagued him — telling him that fullness and emptiness as the final experience of the goal "were ultimately one and the same." Poonja's essential message was uncompromising: "all effort and striving to become free is itself the main impediment to the direct realization of the fact that one has never been unfree."`,
  },
  {
    title: "Awakening and Divergence",
    body: `For Cohen, the encounter was transformative. The experiential revelation that only the Self exists, together with Poonja's emphasis on letting go of all effort and striving, "catapulted me beyond the chains of memory, fear and doubt." When Cohen began to teach, this same message was, at first, his own.

But over time a difficult question emerged. Across a five-year period, Cohen became "gradually more and more confused by the discrepancies" between his teacher's realization and his conduct. This compelled him to confront questions that would shape the rest of his work: "What is the relationship between Love and Truth? What is the relationship between spiritual awakening and human conduct?" The honest pursuit of those questions led him to diverge from his teacher and to seek a teaching "far more comprehensive" than the one he had received.`,
  },
  {
    title: "From Realization to Evolution",
    body: `The lineage Cohen inherited is one of timeless realization — the nondual recognition, at the heart of Advaita, that there is only the Self. His distinctive contribution was to carry that realization forward into the domain of time and becoming.

Where his teachers pointed to the changeless ground of Being, Cohen came to insist that liberation is not the end of the path but a foundation for conscious participation in the evolution of consciousness itself. In this way his teaching of Evolutionary Enlightenment stands in continuity with the lineage of Ramana and Poonja, while extending it toward an evolutionary, future-facing vision.`,
  },
];

const quotes = [
  {
    text: "Untouched by death here I am still existing and shining. I am indestructible.",
    source: "Ramana Maharshi, on his awakening at sixteen",
  },
  {
    text: "It was then that I met a little-known teacher named H.W.L. Poonja in Lucknow in northern India.",
    source: "An Unconditional Relationship to Life",
  },
  {
    text: "All effort and striving to become free is itself the main impediment to the direct realization of the fact that one has never been unfree.",
    source: "On H.W.L. Poonja's message — An Unconditional Relationship to Life",
  },
  {
    text: "My own teacher had been a disciple of Ramana Maharshi.",
    source: "An Unconditional Relationship to Life",
  },
  {
    text: "What is the relationship between Love and Truth? What is the relationship between spiritual awakening and human conduct?",
    source: "An Unconditional Relationship to Life",
  },
];

export default function LineagePage() {
  return (
    <InnerPageLayout
      title="Lineage"
      subtitle="From Ramana Maharshi to the Present"
      intro="Andrew Cohen's spiritual lineage traces through his teacher H.W.L. Poonja to the great Advaita sage Ramana Maharshi — a transmission of nondual realization that Cohen would carry forward into an evolutionary vision."
      sections={sections}
      quotes={quotes}
      heroImage="/images/lineage-hero.jpg"
      heroImageAlt="A young Andrew Cohen with his teacher H.W.L. Poonja (Poonjaji)"
      heroImageCaption="Andrew Cohen with his teacher, H.W.L. Poonja (Poonjaji)."
      bookSource="An Unconditional Relationship to Life (1995); biographical detail on Ramana Maharshi from 11 Days at the Edge by Michael Wombacher."
    />
  );
}
