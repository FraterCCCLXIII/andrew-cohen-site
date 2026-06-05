import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "Emergence at the Leading Edge",
    body: `"Emergent means that it is something greater than the sum of the parts — a new order of relatedness, a new level of consciousness, a deeper and higher perspective that is always unimaginable until the moment it explodes into existence." Evolutionary Enlightenment is about catalyzing the miracle of emergence in the interior of the cosmos, in and through our own selves.

Emergence is not simply the improvement of what already exists; it is the arising of something entirely new. Verticality means engaging with the spiritual process in such a way that the result is the emergence of some quality, ability, or capacity that was not there before — not horizontal modification of the self we already are, but genuine, authentic newness.`,
  },
  {
    title: "The New Being",
    body: `Cohen often uses the metaphor of a "New Being" to describe the emergent cosmocentric cultural potential at the leading edge of consciousness. Just as individual cells came together to make up a larger organism, autonomous, evolving individual human beings consciously come together to give rise to a dynamic greater whole.

"This emergent potential of Evolutionary Enlightenment is completely dependent upon those individual cells — those autonomous, evolving beings — making the effort to understand and be a living expression of the inconceivably delicate balance of conditions that make it possible for it to come into existence."

The New Being is not a fixed image of the future but the living possibility that bursts forth when the conditions are right — a new order of human relatedness beyond ego boundaries.`,
  },
  {
    title: "Creating the Conditions",
    body: `When emergence occurs in matter or biological life, it depends upon the conditions being just right. Cohen discovered that the same principle applies when we try to catalyze emergence at the level of consciousness and culture. The conditions are not merely external circumstances but our own core values, shared agreements, and culturally constructed beliefs.

"No matter what new and thrilling potentials we may have glimpsed in a higher state of consciousness, unless our core cultural values shift in a significant way as a result of what we have seen, the future that we may have been inspired to create will never appear."

Coming together beyond ego is much more than a spiritual exercise — it is a culturally creative act at the leading edge. The emergence of an enlightened we-space depends upon the right conditions being created and upheld by all individuals involved.`,
  },
  {
    title: "Beyond the Status Quo",
    body: `Evolutionary Enlightenment is always about the evolution of culture itself through our own transformation. To the degree you embody the evolutionary impulse, you inevitably challenge the cultural ego within your own self — the status quo that lives in both conscious and unconscious minds.

"Our shared values are not only pictures of what life should look like but also images of what's possible." Unless the limitations of our traditional, modern, and postmodern value spheres are brought into the light of awareness and penetrated with the eye of contemplation, the thrilling new potentials glimpsed in higher states will not be actualizable in real time.

The New Being emerges when individuals and communities free themselves from static orientation and embrace perpetual vertical ascent as home.`,
  },
  {
    title: "A Portal for Evolution",
    body: `"When we make the effort to identify more with the vertical energy of the impulse to evolve than with the horizontal pull of the personal ego and culturally conditioned self, we transcend the enormous weight of our own traditional, modern, and postmodern value spheres."

The intersubjective we-space between inspired individuals becomes a creative vortex — a portal through which evolution occurs. Together, practitioners become the stable structure through which new and higher expressions of meaning, purpose, and human potential can emerge in the evolving interior of the cosmos.

The New Being is what becomes possible when enough autonomous, evolutionarily enlightened individuals create those conditions together.`,
  },
];

const quotes = [
  {
    text: "I often use the metaphor of a 'New Being' to describe this emergent cosmocentric cultural potential.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Emergent means that it is something greater than the sum of the parts — a new order of relatedness, a new level of consciousness.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Evolutionary Enlightenment is about catalyzing the miracle of emergence in the interior of the cosmos, in and through our own selves.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The evolutionarily enlightened soul lives for change.",
    source: "Evolutionary Enlightenment",
  },
];

export default function TheNewBeingPage() {
  return (
    <InnerPageLayout
      title="The New Being"
      subtitle="Emergence at the Leading Edge"
      intro="The New Being is Andrew Cohen's metaphor for the emergent cosmocentric potential at the leading edge of consciousness — a new order of human relatedness that arises when autonomous, evolutionarily enlightened individuals create the conditions for collective emergence."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011), Part IV"
    />
  );
}
