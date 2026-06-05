import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Foundation of the Collective",
    body: `Where the Five Tenets describe the relationship to life that the individual must cultivate, the Six Principles describe what spontaneously emerges between people when individuals living those tenets come together. In Andrew Cohen's "Authentic Self" model, the lower half represents the individual and the upper half represents the collective — the intersubjective field of a shared, awakened consciousness.

"If the individuals are living the five tenets and come together," Cohen taught, "the six principles have to emerge. The five tenets create the foundation from which the six principles are going to emerge." The principles are not techniques to be performed but conditions that arise when a group is genuinely engaged in the evolution of consciousness "beyond the individual."`,
  },
  {
    title: "Evolutionary Tension",
    body: `The first principle is Evolutionary Tension — "a creative, positive tension." Cohen is careful to distinguish it from the usual negative connotation of the word: "Evolutionary tension is what makes you sit up straight and pay attention when you hear something important, when you care about something, when you experience respect for someone or when you experience awe."

It is, he says, the ground of a genuine spiritual life: "the spiritual life has to be pregnant with evolutionary tension. With no evolutionary tension there's no spiritual life. Then life is casual and self-indulgent." Its opposite is inertia — "when you don't care." Evolutionary tension "is what creates self-respect, respect for others, a sense of order and a context for right relationship."`,
  },
  {
    title: "Autonomy and Communion",
    body: `The next pair of principles — Autonomy and Communion — describe a paradoxical state in which radical intimacy and full individual integrity arise together. "Ecstatic communion is the blissful experience of no ego boundaries," Cohen taught. "It's boundaryless, radical intimacy. It's more profound than physical or sexual intimacy because it's not a physical event. It's the direct, ecstatic experience of no ego boundaries at the level of consciousness."

Crucially, communion does not dissolve the individual. "It's not losing touch with the implications of autonomy that's important for actual evolution to occur," he warned, "and that seems to be the most challenging part of this." Their distortions, on the model, are narcissism and collusion — the agreement "to pretend that you are who you think you are so long as you pretend that I am who I think I am."`,
  },
  {
    title: "Purity of Motive",
    body: `Purity of Motive arises "when you really care and when the caring is egoless. It's when you want the thing to happen and you know it's not about you. You care more about that than you do about yourself." Cohen describes it as "the egoless recognition of that purely felt impulse to create that which is new — in this case the evolution of consciousness."

It is the inner, conscious experience of wanting the highest outcome for its own sake, free from any personal agenda — the felt arising of pure motivation before any action is taken.`,
  },
  {
    title: "Integrity of Action",
    body: `Where purity of motive is an inner experience, Integrity of Action is its outward expression: "the willingness to follow through on that, even under pressure." Cohen emphasizes the gap that so often opens between the awakening of pure motive and the follow-through that proves it: "Life creates pressure and it's usually when we're under pressure that we'll back down on the follow through."

Integrity of action is visible and concrete: "Integrity of action is something that you can see. It's tangible. It's an action. It's not just an inner experience." And, he adds, "the consistency is everything" — the proof of real transformation is the ability to sustain pure motive and back it up through action "over and over and over again."`,
  },
  {
    title: "Natural Hierarchy",
    body: `Cohen called Natural Hierarchy "the most difficult one of the six principles to explain." It is "a law of how the Authentic Self works," and it "demands that in relationship to integrity of action each individual be willing to be absolutely true to their actual level of experience. Not more than that. But nothing less would be enough for the evolutionary process to be taken forward."

This is not the "dominator hierarchy" of pretense and self-importance. It is the true and right relationship that emerges spontaneously between people when everyone "authentically lived up to what they already knew." In such a context, Cohen taught, the unnatural hierarchies of ego dissolve, and a genuinely new way of being together becomes possible.`,
  },
];

const quotes = [
  {
    text: "But if the individuals are living the five tenets and come together the six principles have to emerge. The five tenets create the foundation from which the six principles are going to emerge.",
    source: "Andrew Cohen, in 11 Days at the Edge",
  },
  {
    text: "The spiritual life has to be pregnant with evolutionary tension. With no evolutionary tension there's no spiritual life. Then life is casual and self-indulgent.",
    source: "Andrew Cohen, in 11 Days at the Edge",
  },
  {
    text: "Ecstatic communion is the blissful experience of no ego boundaries. It's boundaryless, radical intimacy.",
    source: "Andrew Cohen, in 11 Days at the Edge",
  },
  {
    text: "Purity of motive is when you really care and when the caring is egoless. It's when you want the thing to happen and you know it's not about you.",
    source: "Andrew Cohen, in 11 Days at the Edge",
  },
  {
    text: "Integrity of action is something that you can see. It's tangible. It's an action. It's not just an inner experience.",
    source: "Andrew Cohen, in 11 Days at the Edge",
  },
  {
    text: "Natural hierarchy demands that each individual be willing to be absolutely true to their actual level of experience. Not more than that. But nothing less would be enough for the evolutionary process to be taken forward.",
    source: "Andrew Cohen, in 11 Days at the Edge",
  },
];

export default function SixPrinciplesPage() {
  return (
    <InnerPageLayout
      title="The Six Principles"
      subtitle="The Authentic Self in Relationship"
      intro="What emerges between people when individuals living the Five Tenets come together: Evolutionary Tension, Autonomy, Communion, Purity of Motive, Integrity of Action, and Natural Hierarchy — the principles of a shared, awakened consciousness."
      sections={sections}
      quotes={quotes}
      bookSource="11 Days at the Edge by Michael Wombacher — a firsthand account of an Andrew Cohen retreat; quotations are Andrew Cohen's spoken teaching on the upper half of the Authentic Self model."
    />
  );
}
