import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "Relative and Absolute",
    body: `Spiritual awakening is and always has been about self-discovery — learning to master the challenging art of differentiating between the many dimensions of your own self. Teachings of enlightenment present a unique way of understanding who we are by emphasizing those dimensions of self that are non-relative, or "absolute."

For most of us, almost every way we are accustomed to thinking about ourselves is relative — personality, psychology, culture, gender, talents, and shortcomings. But there is another dimension altogether upon which we can base our sense of identity: one that is infinite, without boundaries, radically different from all partial definitions because its very nature is absolute.`,
  },
  {
    title: "The Self Absolute — Being",
    body: `In traditional enlightenment teachings, awakening to that which is absolute is what liberates us from the existential prison of the relative self, or ego. The first absolute dimension is the timeless, formless, primordial ground of Being — what we discover when we have let go of thought, feeling, mind, time, and world.

"That is where we always were before the beginning, before the universe was born." The nature of the self as timeless, formless Being is experienced as radical, unconditional freedom — freedom from being trapped in time and form, freedom from the mind and personality, freedom from everything that is relative.

When you awaken to your absolute identity in the depths of pure Being, there is always a distinctive quality of radical immediacy to its liberating nature. Because there is no time there, you don't have to work anything out before you can access its glory.`,
  },
  {
    title: "The True Self",
    body: `"The conscious experience of the true self, of wholeness, springs from resting in not knowing." In The Challenge of Enlightenment, Cohen connects the True Self to the discovery of no limitation — the glorious fact that everything is possible when we release the cynical conviction that we already know what is not possible.

The True Self is not a higher version of the personality. It is wholeness itself — the recognition that who you are is not separate from the energy and intelligence that created the universe. When Cohen speaks of the Authentic Self in Evolutionary Enlightenment, he is naming the same absolute dimension as it expresses itself not only as Being but as Becoming — the evolutionary impulse manifest in and through an individual who has freely chosen to identify with that as self.`,
  },
  {
    title: "The Absolute as Eros",
    body: `Evolutionary Enlightenment does not stop at the ground of Being. It asks you to take another leap — to embrace a shift of identity equally profound but more relevant to the life-conditions we face today. The evolutionary impulse, or urge to Become, is also an absolute, non-relative dimension of who and what we are.

"There is nothing relative or partial or less than infinite about the cosmic desire to exist in and through time and form." When that impulse manifests in the human experience, it temporarily becomes who you are — what Cohen calls the Authentic Self. The goal is for that creative impulse to become internalized, so that it is not just a temporary experience but your primary sense of self.

Traditional mystics declared "I Am That." In Evolutionary Enlightenment, the "That" is not only the eternal ground of Being but also the evolutionary impulse.`,
  },
  {
    title: "Two Faces of Enlightenment",
    body: `"Traditional enlightenment is the experience of consciousness beyond ego that is the natural result of awakening to the timeless ground of Being. The new enlightenment is the experience of ego-transcendence carried on the wings of the evolutionary impulse."

When the Absolute as Being emerges, the ego falls into the background and what comes to the fore is infinite depth, overwhelming peace, and profound clarity. When the Absolute as Eros emerges, the ego also falls into the background, but now what comes to the front is liberated passion, fearlessness, courage, joy, and inspired readiness to evolve.

Both are absolute. Both displace the ego. Together, they constitute the full portrait of the True Self in Evolutionary Enlightenment — Being and Becoming recognized as one and the same force.`,
  },
];

const quotes = [
  {
    text: "Absolute is a metaphor for that which is infinite, that which has no boundaries.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The conscious experience of the true self, of wholeness, springs from resting in not knowing.",
    source: "The Challenge of Enlightenment",
  },
  {
    text: "In Evolutionary Enlightenment, the 'That' is not only the eternal ground of Being but also the evolutionary impulse.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The new enlightenment is the experience of ego-transcendence carried on the wings of the evolutionary impulse.",
    source: "Evolutionary Enlightenment",
  },
];

export default function TheAbsolutePage() {
  return (
    <InnerPageLayout
      title="The Absolute: The True Self"
      subtitle="Being and Becoming"
      intro="The Absolute is the non-relative dimension of self — experienced as the timeless ground of Being and as the evolutionary impulse, or Eros. Together they constitute the True Self at the heart of Andrew Cohen's teaching."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011), The Challenge of Enlightenment (1992)"
    />
  );
}
