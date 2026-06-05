import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "Intersubjective Nonduality",
    body: `One of Andrew Cohen's most original contributions is the practice of intersubjective nonduality — what he also called Enlightened Communication. Beyond individual realization lies the art of coming together in transcendent consciousness, communicating beyond ego and the games of positioning and competition it plays.

In these "we-spaces," the co-creative power of shared collective intelligence is unleashed, and insights emerge that no one could have reached alone. When individuals living the Five Tenets come together, the Six Principles spontaneously emerge: Evolutionary Tension, Autonomy, Communion, Purity of Motive, Integrity of Action, and Natural Hierarchy.

"The ultimate goal of Evolutionary Enlightenment is to come together with others in an egoless culture, free from all the usual obstructions to our higher creative potentials and capacities."`,
  },
  {
    title: "Autonomy and Communion",
    body: `At the heart of this new order of human relatedness lies the ongoing interplay of autonomy and communion — a paradox that can only be resolved in a context of intersubjective enlightened awareness.

When the barriers between self and other fall away, we experience a higher communion beyond ego boundaries. But among those awake to the evolutionary impulse, this communion does not erase individuality. Paradoxically, at the very same moment, the autonomy and creative potential of each individual emerges, free from self-consciousness.

"The simultaneous presence of liberated autonomy and ecstatic communion becomes the defining expression of one experience, one reality." For real vertical movement to be sustained, communion alone is not enough. Unity has to give rise to differentiation — each person stepping out as an individuated force of the Authentic Self.`,
  },
  {
    title: "Evolutionary Tension and Creative Friction",
    body: `Enlightened Communication is not merely peaceful harmony. When you come together with others committed to the evolution of consciousness and culture, you are choosing to associate with a spiritual intensity and demand that is excruciating for the ego — but ecstasy for the Authentic Self.

Evolutionary tension is the upward pull, the profound sense of urgency to bring into manifestation that which has not yet occurred. Creative friction is the engine of conscious evolution at the leading edge — the spiritual lifeblood of the new culture we need to create. Cohen is convinced that authentic spiritual friendship requires individuals to come together and conflict with each other in the most creative way possible.

"Without evolutionary tension and creative friction, higher development cannot and will not occur."`,
  },
  {
    title: "Creating the Future Together",
    body: `"At the leading edge of our evolving consciousness and culture, where we awaken to the power of intersubjective nonduality, creativity flourishes." When we share an enlightened cultural space in which the evolutionary impulse is emerging, we experience a vertical momentum that is inherently creative — the very source of evolution's relentless reaching toward the future becomes our shared location and self-sense.

The intersubjective we-space between inspired individuals becomes a creative vortex in which something is being born every moment out of spiritual, moral, intellectual, and philosophical friction. Together, practitioners become a portal through which evolution occurs.

"If you are truly dedicated to creating a more evolved world, the future is not some far-off fantasy realm but is something you forge in and through your relationships with other people right now."`,
  },
  {
    title: "Love as Becoming",
    body: `In an evolutionary worldview, the expression of the greatest love is an insistence on higher development. It is not the kind of love that accepts you as you are — it is a love that always wants more, and is therefore always challenging to the status quo of the personal ego and the culturally conditioned self.

"God is love, but love is a dynamic and dramatic will toward higher emergence." When God becomes the evolutionary impulse, or Eros, love is infused with evolutionary tension and generates creative friction. Discovering what God as Eros looks like and feels like within us and between us is the territory Enlightened Communication opens.`,
  },
];

const quotes = [
  {
    text: "The practice of inquiry is always learning how to be more interested in what we don't know than what we do know.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The simultaneous presence of liberated autonomy and ecstatic communion becomes the defining expression of one experience, one reality.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Without evolutionary tension and creative friction, higher development cannot and will not occur.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "If you are truly dedicated to creating a more evolved world, the future is something you forge in and through your relationships with other people right now.",
    source: "Evolutionary Enlightenment",
  },
];

export default function EnlightenedCommunicationPage() {
  return (
    <InnerPageLayout
      title="Enlightened Communication"
      subtitle="Collective Inquiry and Intersubjective Nonduality"
      intro="Enlightened Communication is Andrew Cohen's term for the practice of coming together beyond ego — a shared field of intersubjective nonduality in which collective intelligence and creative emergence become possible."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011), Part IV"
    />
  );
}
