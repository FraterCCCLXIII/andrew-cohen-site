import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "Beyond the Personal",
    body: `Traditional enlightenment has often been framed as a personal liberation — freedom from suffering, from the cycle of birth and death, from the illusion of the separate self. While Cohen does not dismiss this, he insists it is only half the picture. The other half is the recognition that consciousness itself is evolving, and that the individual's awakening is not an escape from the world but a transformation of it.

"The spiritual impulse and the evolutionary impulse are one and the same," Cohen writes. This is the foundational insight: the same force that drives the cosmos toward greater complexity, beauty, and awareness is the force that draws the individual toward liberation. They are not two separate movements but one impulse expressing itself at different scales.`,
  },
  {
    title: "The Evolutionary Context",
    body: `Cohen places the spiritual endeavor within a vast evolutionary context. The universe has been unfolding for billions of years — from the Big Bang to the emergence of life, from single cells to complex organisms, from primitive awareness to human consciousness. This process has not been random. It has been driven by an inherent impulse toward greater complexity, greater awareness, greater freedom.

Human beings, in Cohen's view, are the leading edge of this evolutionary process. We are the universe becoming conscious of itself. But this process is not complete. It is still unfolding, and each individual is called to participate in it consciously. Enlightenment, then, is not a static state achieved once and for all. It is a dynamic, ongoing process of creative emergence.

"The same force that created the galaxies is creating you, and it is not finished yet."`,
  },
  {
    title: "The Authentic Self",
    body: `At the heart of Evolutionary Enlightenment is the concept of the Authentic Self — not the egoic self with its preferences, history, and identity, but the deeper Self that is an expression of the evolutionary impulse itself. This Self is not personal. It is not "mine." It is the creative force of the universe expressing itself through this particular life.

To discover the Authentic Self, one must let go of all fixed ideas about who one is. This is not a psychological process of self-improvement. It is a radical death — the death of the separate self-sense. What remains is not emptiness in the nihilistic sense, but a vast, creative fullness that is the source of genuine authenticity.

"True authenticity is not the expression of who you think you are. It is the expression of what is emerging through you."`,
  },
  {
    title: "Heaven on Earth",
    body: `The ultimate vision of Evolutionary Enlightenment is nothing less than the manifestation of heaven on earth — not as a utopian fantasy, but as the natural consequence of individuals who have awakened to their evolutionary role. When enough individuals respond to the call to authentic self-expression, a cultural transformation becomes possible.

This is not about creating a perfect society through political means. It is about a shift in consciousness that changes the way human beings relate to each other and to the world. The individual and the collective are not separate. The transformation of one is the transformation of all.

"The injunction is to become a living expression of the future."`,
  },
];

const quotes = [
  {
    text: "The spiritual impulse and the evolutionary impulse are one and the same.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The same force that created the galaxies is creating you, and it is not finished yet.",
    source: "Embracing Heaven and Earth",
  },
  {
    text: "True authenticity is not the expression of who you think you are. It is the expression of what is emerging through you.",
    source: "The Challenge of Enlightenment",
  },
  {
    text: "The injunction is to become a living expression of the future.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Enlightenment is not about transcending the human condition. It is about fully embracing it.",
    source: "An Unconditional Relationship to Life",
  },
  {
    text: "For the evolutionary leap to occur en masse in the human race, the attainment of right view is essential. Without it, any and all attempts to manifest heaven on earth, no matter how well intentioned, can never truly succeed.",
    source: "An Unconditional Relationship to Life",
  },
];

export default function EvolutionaryEnlightenmentPage() {
  return (
    <InnerPageLayout
      title="Evolutionary Enlightenment"
      subtitle="The Core Teaching"
      intro="A vision of spiritual awakening inseparable from the evolutionary process — the recognition that consciousness is evolving and each individual is called to participate."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011), Embracing Heaven and Earth (2000)"
    />
  );
}
