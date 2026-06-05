import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "Directed Cognition",
    body: `Contemplation and inquiry, in Cohen's teaching, are not mindless thinking. They are directed cognition — using the mind constructively to facilitate freedom. Where meditation releases the grip on all content, contemplation and inquiry apply the mind with precision toward what matters most.

The cornerstone contemplation is Clarity of Intention: "What is most important to me? What is my intention? What do I really want? Do I want to be Free? Do I really want to be Free? Am I willing to sacrifice for that Freedom?" These are not rhetorical questions. They are meant to be lived, felt in the body and the heart, until the path and the goal become one lived position.`,
  },
  {
    title: "The Practice of Not Knowing",
    body: `In The Challenge of Enlightenment, Cohen draws a sharp distinction between two absolute relationships to life. Cynicism — the conviction that one already knows that liberation is not possible — breeds hardness, invulnerability, and a fundamental limitation. Genuine humility, by contrast, springs from abiding in not knowing.

"If you already know, there is limitation," he writes. "If you don't know, everything is possible because there is no fundamental limitation. There is infinite space if you don't know." Resting in not knowing is the conscious experience of the individual who has died unconditionally to the past — the source of an absolute relationship to life that is fundamentally positive.

"The practice of inquiry is always learning how to be more interested in what we don't know than what we do know." Inquiry is not debate. It is a shared orientation toward truth — a willingness to be corrected and to speak from a place beyond personal agenda.`,
  },
  {
    title: "Clarity of Intention as Inquiry",
    body: `"What is most important to me?" seems like a simple question, but its implications are profound. There is no more direct way to shine a light on your own spiritual predicament than to sincerely ask yourself what has the greatest value — and then to ask whether the life you are living is a clear reflection of that answer.

This contemplation reveals the dramatic difference between the Authentic Self's unbridled passion for spiritual evolution and the ego's conditioned hesitation or refusal to let go of the way things have been. It may bring to the surface deep and powerful forces in your own psyche that usually remain hidden — and make it possible to consciously take responsibility for the best part of who you are.

The Five Tenets themselves are a form of contemplation made daily practice. Each tenet asks us to examine our relationship to life from a particular angle until the path and the goal become one.`,
  },
  {
    title: "Calling the Dragon Out of the Cave",
    body: `Serious inquiry can trigger an inner storm of existential confusion, fear, and doubt. Asking a black-and-white question like "What is more important to me than anything else?" illuminates your deepest motivations with unusual clarity — and inadvertently shines a light on all the parts of yourself that don't want anything to do with higher evolution.

Cohen calls this "calling the dragon out of the cave." Only when you dare to consider saying yes to your highest spiritual aspiration will you become aware of what he refers to as the irrational refusal to change — the ego's ancient and insidious face that blindly resists, defies, and denies unbridled positivity.

Inquiry, pursued with sincerity, is how that face is revealed — and how the Authentic Self gains the upper hand.`,
  },
  {
    title: "Collective Inquiry",
    body: `Inquiry is not only an individual practice. When practitioners come together in earnest, what Cohen calls Enlightened Communication becomes possible — a shared field in which insights emerge that no one could have reached alone. Collective inquiry is the intersubjective extension of the same orientation: more interested in what we don't know than in what we do know.

On July 30th, 2001, Cohen and his students experienced a breakthrough into shared ecstatic oneness in which the mind of enlightenment itself seemed to speak through many at once — a glimpse of what becomes possible when individual inquiry moves into the collective field.`,
  },
];

const quotes = [
  {
    text: "What is most important to me? What is my intention? What do I really want? Do I want to be Free?",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The practice of inquiry is always learning how to be more interested in what we don't know than what we do know.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "If you don't know, everything is possible because there is no fundamental limitation.",
    source: "The Challenge of Enlightenment",
  },
  {
    text: "Resting in and abiding in not knowing is the conscious experience of the individual who has died unconditionally to the past.",
    source: "The Challenge of Enlightenment",
  },
];

export default function InquiryPage() {
  return (
    <InnerPageLayout
      title="Inquiry"
      subtitle="Directed Cognition and Not Knowing"
      intro="Inquiry in Andrew Cohen's teaching is the practice of directed cognition — using contemplation and questioning to illuminate intention, reveal the ego's resistance, and orient the self toward truth."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011), The Challenge of Enlightenment (1992)"
    />
  );
}
