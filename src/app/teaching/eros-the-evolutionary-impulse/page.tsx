import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Spiritual Impulse",
    body: `"That vibration is none other than the spiritual impulse, the impulse to evolve at the level of consciousness," Cohen writes in the prologue to Evolutionary Enlightenment. It is the same impulse that caused something to come from nothing fourteen billion years ago — "a great and mysterious energy and intelligence with enormous power driving this entire evolutionary process forward in every moment."

Our own direct personal experience of spiritual inspiration is the most tangible expression of that very same drive. When we feel compelled to improve ourselves — not only for our own sake but for the sake of a higher cause we can sense yet barely see — we are encountering Eros: the evolutionary impulse awakening within us.`,
  },
  {
    title: "Eros as the Absolute",
    body: `In Evolutionary Enlightenment, there are two ways to awaken to a dimension of self that is absolute. The first is the timeless, formless ground of Being — radical, unconditional freedom from time and form. The second is equally profound: the evolutionary impulse, or urge to Become, recognized as an absolute, non-relative dimension of who and what we are.

"That impulse is nothing less than the energy and intelligence that initiated the creative process and is still driving it right now." Its character is relentless ecstatic urgency — the non-relative Absolute expressed as an energetic compulsion to become. When you awaken to the Absolute as Eros, the ego falls into the background and what comes to the fore is liberated passion, fearlessness, courage, joy, and inspired readiness to evolve now.`,
  },
  {
    title: "Clarity of Intention",
    body: `The first tenet of Evolutionary Enlightenment, Clarity of Intention, points directly to the essential nature of the evolutionary impulse: the wholehearted, passionate intention to exist, to develop, to become, to evolve. That impulse is the same uninhibited YES that burst forth as the big bang, that compels the body to procreate and the mind to innovate.

To have Clarity of Intention means to align oneself with the clear and single-pointed purpose of that impulse itself. The intention to evolve becomes more important than anything else in this world. "In that impulse, fear, doubt, hesitation, and obstacles do not exist." When you experience that desire to go all the way, you taste a joy and fearless confidence that doesn't come from the ego.`,
  },
  {
    title: "The Burning Intelligence",
    body: `"Eros, or the creative dimension of God, is that burning intelligence and driving impulse that is ever-leaning forward, reaching toward the emergence of that which has not yet become manifest." Evolutionary Enlightenment is about unapologetically becoming a living embodiment of those values that create the conditions for unself-conscious creativity at the very edge of the possible.

When you literally begin to feel the telos, or directionality, of the entire process moving in and through your own nervous system, you directly experience that movement as a vertical impulse in your own consciousness. You awaken to what Cohen calls the "radical indeterminacy" of the life-process itself — in every moment, there is room for emergence.`,
  },
  {
    title: "Living for Change",
    body: `The evolutionary impulse calls us toward perpetual vertical development rather than the security and stasis the conditioned self craves. "For those of us who are awake to the evolutionary impulse, change becomes home. That feels more like home than any particular place in this world or any relationship with another human being."

What feels like home is that sense of movement — vertical movement. The evolutionarily enlightened soul lives for change. This is a fundamental shift: not merely freeing the mind from fixed ideas, but liberating ourselves from a static orientation to life — a deep cultural change in the human psyche as a whole.`,
  },
];

const quotes = [
  {
    text: "That vibration is none other than the spiritual impulse, the impulse to evolve at the level of consciousness.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Eros, or the creative dimension of God, is that burning intelligence and driving impulse that is ever-leaning forward.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "When you awaken to the Absolute as Eros, you directly experience your own self becoming a manifest expression of Eros in human form.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "For those of us who are awake to the evolutionary impulse, change becomes home.",
    source: "Evolutionary Enlightenment",
  },
];

export default function ErosPage() {
  return (
    <InnerPageLayout
      title="Eros: The Evolutionary Impulse"
      subtitle="The Absolute as Becoming"
      intro="Eros is Andrew Cohen's name for the evolutionary impulse — the burning intelligence and driving force of the cosmos, recognized as an absolute dimension of self and the source of conscious evolution."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011)"
    />
  );
}
