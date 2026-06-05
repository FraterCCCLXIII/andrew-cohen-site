import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Five Fundamental Tenets",
    body: `Embracing Heaven and Earth is organized around what Cohen calls the Five Fundamental Tenets of Enlightenment. These are not abstract principles to be believed. They are lived realities to be embodied — the natural expression of one who has awakened.

The five tenets are: Clarity of Intention, The Law of Volitionality, Face Everything and Avoid Nothing, The Truth of Impersonality, and For the Sake of the Whole. Together, they define what an enlightened relationship to the human experience looks like in practice.

"These five tenets define what an enlightened relationship to the human experience is. They describe simply and clearly how to live what is discovered in the spiritual revelation — how to embody the absolute nature of that revelation in the life that we are living here and now."`,
  },
  {
    title: "Clarity of Intention",
    body: `The first tenet is the foundation. Without absolute clarity of intention, nothing else is possible. The seeker must know — without any ambiguity — that they want liberation more than anything else.

"When our attention is primarily focused upon the material world — on what we want from it, how we feel about it and what we think about it — all things are no longer possible because we have given our attention entirely to that which is inherently limited."

The intention must be one-pointed. When it is, the entire field of experience shifts. What was previously experienced as limitation begins to reveal its boundless nature. This is not magic. It is the natural consequence of directing attention toward that which has no limit.`,
  },
  {
    title: "The Law of Volitionality",
    body: `Every moment presents a choice: toward freedom or toward limitation, toward the evolutionary impulse or toward the ego's demand for security. This is the law of volitionality — the recognition that we are always choosing, whether we know it or not.

The karmic consequences of these choices are real and cumulative. When we consistently choose selfishness and separation, we build a momentum that becomes self-generating. Eventually, it appears as if we "couldn't help it" — but this is only because of the accumulated momentum behind our choices.

"To be a truly liberated individual, this momentum must be completely destroyed, utterly and perfectly extinguished forever. Only when this momentum has been destroyed will one have realized a state of permanent Liberation."`,
  },
  {
    title: "Face Everything and Avoid Nothing",
    body: `This is perhaps the most challenging of the tenets. It demands that we stop avoiding, denying, or suppressing any aspect of our experience. The ego's primary strategy is avoidance — anything that challenges its separate identity is pushed away.

"Without being aware of it, we are in the grip of a fear-driven habit, a habit of avoidance and denial. That habit is the movement of ego."

To face everything and avoid nothing means to stop choosing. Not in the sense of passivity, but in the sense of allowing experience to be as it is without the interference of the ego's preferences and rejections. This is not resignation. It is the most profound act of courage available to a human being.`,
  },
  {
    title: "The Truth of Impersonality",
    body: `The deep recognition that there is no separate self — that what we call "I" is a construction of thought and memory — is central to all authentic spiritual traditions. Cohen calls this the truth of impersonality.

"Indeed, to succeed in liberating ourselves from ignorance and delusion, we have to get to that point where we're able to directly perceive the impersonal nature of every aspect of our own personal experience."

This is not a philosophical position to be debated. It is a lived recognition that transforms the entire field of experience. When the separate self-sense dissolves, what remains is not emptiness but a vast, compassionate awareness that includes all of life.`,
  },
  {
    title: "For the Sake of the Whole",
    body: `The final tenet moves beyond the personal altogether. Enlightenment is not for oneself. It is for the whole of humanity, for the whole of life. This is what distinguishes Evolutionary Enlightenment from mere personal liberation.

"When we choose freedom, when we choose liberation from ignorance and selfishness, we experience that freedom for ourselves. But we also experience that freedom as being for the sake of all."

The individual who has awakened has a responsibility — not imposed from outside, but arising naturally from the recognition of shared existence — to contribute to the evolution of consciousness. This is not optional. It is the very purpose of awakening.`,
  },
];

const quotes = [
  {
    text: "These five tenets define what an enlightened relationship to the human experience is. If we are truly sincere in our desire to manifest the precious jewel of Liberation in this life, then these five tenets must be lived without conditions, at all times, in all places, through all circumstances.",
    source: "Embracing Heaven and Earth",
  },
  {
    text: "Very few of us face anything. Without being aware of it, we are in the grip of a fear-driven habit, a habit of avoidance and denial. That habit is the movement of ego.",
    source: "Embracing Heaven and Earth",
  },
  {
    text: "When our attention has been given entirely to that which is inherently limited, very little is possible. You see, there is no room for that depth that has no limit when life is lived without any knowledge or experience of a miraculous possibility.",
    source: "Embracing Heaven and Earth",
  },
  {
    text: "To be a truly liberated individual, this momentum must be completely destroyed, utterly and perfectly extinguished forever.",
    source: "Embracing Heaven and Earth",
  },
  {
    text: "Andrew Cohen is a dangerous man, and this is a dangerous book. Dangerous to our cynicism, dangerous to despair and hopelessness, dangerous to any willingness to compromise what we know to be right or true.",
    source: "Embracing Heaven and Earth — Introduction by Elizabeth Debold",
  },
  {
    text: "Look into simplicity. Look deeply into it. And when you find a simplicity that is so simple that it is absolute, keep your attention there. It is in that absolute simplicity that the truth is found.",
    source: "Embracing Heaven and Earth",
  },
];

export default function EmbracingHeavenAndEarthPage() {
  return (
    <InnerPageLayout
      title="Embracing Heaven and Earth"
      subtitle="Book · 2000"
      intro="The five fundamental tenets of Liberation — a practical blueprint for living the enlightened life, from the clarity of intention that ignites the journey to the impersonal recognition that completes it."
      sections={sections}
      quotes={quotes}
    />
  );
}
