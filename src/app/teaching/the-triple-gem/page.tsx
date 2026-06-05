import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Three Jewels",
    body: `After decades of teaching, Andrew Cohen concluded that the Buddhist framework of the three jewels — Buddha, Dharma, and Sangha — is the most profound intersubjective structure human beings have devised for staying awake. Together, they form what he called the ultimate vehicle for maintaining our capacity for spiritual awakeness.

Most people go in and out of remembering; the Triple Gem exists so we do not forget. "If you remain true to that which matters most, nothing will be able to stop you." The three jewels are not abstract ideals but living relationships that anchor the spiritual life in exemplar, teaching, and community.`,
  },
  {
    title: "The Buddha — The Living Exemplar",
    body: `The first jewel is the Buddha — not only the historical figure but the living exemplar of stabilized enlightened awareness. Cohen taught that most of us need a relationship with someone who demonstrates, palpably and tangibly, the transformation we seek.

"A living Buddha can bring us face to face with the truth in ways that just sitting by ourselves rarely can do." The Buddha is not merely the human being; it is a field of awakened intelligence expressing itself through a human form. The teacher plays this role — awakening us to our own potential through relationship, challenge, and transmission.

Cohen was uncompromising about postmodern nuance as well. The teacher's role is not to be worshipped as flawless, but to serve as an exemplar whose stabilization in doubtless awareness inspires our own. "The difference between enlightenment and unenlightenment is doubt" — not the presence of any particular feeling state.`,
  },
  {
    title: "The Dharma — Cosmic Law",
    body: `The Dharma is cosmic law — the answer to how shall I live. It addresses the most appropriate relationship to body, mind, time, and world in light of awakening. In Evolutionary Enlightenment, the Dharma meets evolutionary theory: we realize we are the energy and intelligence that created the universe awakening to itself, and a moral imperative emerges to participate consciously in that process.

The Buddha is proof that enlightenment exists, is attainable, and can be stabilized in a human life. The Dharma is the living answer to what that realization means for how we live — individually and collectively — in the world of time and form.`,
  },
  {
    title: "The Sangha — Spiritual Fraternity",
    body: `When the Buddha was asked whether association with like-minded people is part of the holy life, his answer was: association with like-minded people is the whole of the holy life. Cohen felt this statement was shocking in its implications — and profoundly true.

Sangha means spiritual brothers and sisters with whom the shared value is unconditional enlightenment. Such relationships are utterly unique: "All that you really want for them is their own perfect Liberation without conditions, and all they want for you is your own perfect Liberation without conditions."

Cohen came to feel that without sangha — without spiritual family — he would not know which foot to put in front of the other. "Spiritual fraternity is more important than food and drink in order to feel grounded and safe." Among sincere practitioners who love us and see us clearly, we cannot lie to ourselves for long.`,
  },
  {
    title: "The Ultimate Vehicle",
    body: `The Triple Gem addresses a fundamental human predicament: we glimpse higher states, we are moved by spiritual inspiration, and then we forget. The three jewels exist to create stable structures that allow us to remain awake — not through willpower alone, but through relationship with exemplar, teaching, and community.

In Cohen's teaching, this framework is not separate from Evolutionary Enlightenment but its necessary foundation. Individual awakening opens space for evolution; the Triple Gem ensures that awakening is sustained, tested, and lived in the crucible of human relationship — where the evolutionary impulse can move from the individual to the collective field.`,
  },
];

const quotes = [
  {
    text: "Association with like-minded people is the whole of the holy life.",
    source: "Evolutionary Enlightenment / Buddhist tradition",
  },
  {
    text: "A living Buddha can bring us face to face with the truth in ways that just sitting by ourselves rarely can do.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Spiritual fraternity is more important than food and drink in order to feel grounded and safe.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "If you remain true to that which matters most, nothing will be able to stop you.",
    source: "Evolutionary Enlightenment",
  },
];

export default function TheTripleGemPage() {
  return (
    <InnerPageLayout
      title="The Triple Gem"
      subtitle="Buddha, Dharma, Sangha"
      intro="The Triple Gem — Buddha, Dharma, and Sangha — is the Buddhist framework Andrew Cohen recognized as the most profound structure for sustaining spiritual awakeness: exemplar, cosmic law, and community of like-minded practitioners."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011), teachings on the Triple Gem"
    />
  );
}
