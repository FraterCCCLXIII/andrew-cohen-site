import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "From Clare Graves to the Spiral",
    body: `Spiral Dynamics is a model of human value systems and cultural development rooted in decades of research by the psychologist Clare W. Graves. Graves studied how people's worldviews, motivations, and conceptions of maturity change over time — not merely as personal preferences, but as emergent systems that entire cultures express.

After Graves's death, Don Edward Beck and Christopher Cowan extended his work in their book Spiral Dynamics: Mastering Values, Leadership, and Change (1996), introducing the now-familiar color-coded spiral of value systems — or "vMemes" — that describe how human societies organize meaning at different stages of complexity.

Andrew Cohen explicitly credited Don Beck alongside Ken Wilber as one of the "evolutionary and integral pioneers" who shaped Evolutionary Enlightenment. Spiral Dynamics gave Cohen a precise language for a theme running throughout his teaching: cultures evolve, values evolve, and spiritual life must address the stage of development a person or community actually inhabits — not the stage we wish they did.`,
    images: [
      {
        src: "/images/teaching/spiral-of-development.jpg",
        alt: "Spiral diagram of human development stages",
        caption: "Spiral of development (Spiral Dynamics)",
      },
    ],
  },
  {
    title: "The Color-Coded Spiral",
    body: `In Beck and Cowan's formulation, each value system on the spiral reflects a coherent worldview with its own logic, strengths, and limitations. The sequence is not a ladder of moral superiority but an evolutionary unfolding of complexity:

Beige (survival), Purple (tribal safety and magic), Red (power and impulsive ego), Blue (order, truth, and purposeful authority), Orange (achievement, rationality, and progress), Green (pluralism, sensitivity, and community), Yellow (integrative systems thinking), and Turquoise (holistic, global consciousness). Graves himself theorized further stages beyond those Beck and Cowan codified.

The spiral helps explain why sincere people at different stages talk past one another — and why spiritual teachings that speak beautifully at one level may fail to land at another. It also clarifies Cohen's repeated insistence that the luckiest, most educated people on the planet can remain spiritually unavailable while believing themselves sophisticated: high Orange or Green development without a vertical spiritual context can deepen the postmodern predicament rather than resolve it.`,
    images: [
      {
        src: "/images/teaching/spiral-dynamics-colors.jpg",
        alt: "Spiral Dynamics color levels chart",
        caption: "Spiral Dynamics value-system colors",
      },
    ],
  },
  {
    title: "Vertical vs Horizontal Change",
    body: `One of Cohen's most important borrowings from developmental thinking is the distinction between horizontal and vertical change. Horizontal change improves what already exists — better skills, better relationships, better strategies within the same worldview. Vertical change brings forth capacities, values, and perspectives that did not exist before.

"In Evolutionary Enlightenment, verticality means we engage with the spiritual process in such a way that the result is the emergence of some quality, ability, or capacity that was not there before." This is the difference between self-improvement and transformation.

Spiral Dynamics maps vertical movement as shifts along the spiral — when conditions are right, a person or culture "tips" into a more complex value system. Cohen argued that catalyzing this vertical emergence at the level of consciousness and culture is the heart of Evolutionary Enlightenment, not merely personal peace or psychological adjustment.`,
  },
  {
    title: "Don Beck and Cultural Transformation",
    body: `Don Beck applied Spiral Dynamics far beyond the academy — from post-apartheid reconciliation in South Africa to organizational and geopolitical consulting — demonstrating that value-system awareness could be practically transformative. Beck's work showed that lasting change requires meeting people where they are on the spiral while creating conditions for vertical development.

Beck and Ken Wilber later collaborated on Spiral Dynamics Integral (SDi), integrating Graves's emergent value systems with Wilber's AQAL framework. Their partnership eventually diverged, but the underlying insight remained influential across the Integral world: human evolution is not uniform, and any credible spirituality for the twenty-first century must account for developmental depth.

Cohen's teaching assumes this insight throughout — especially when addressing the cultural ego, shared values, and the challenge of creating enlightened culture at the leading edge.`,
  },
  {
    title: "Value Spheres and the Authentic Self",
    body: `Cohen writes that "the most challenging aspect of vertical spiritual development is the evolution of our value spheres." Traditional, modern, and postmodern structures live inside us — often unconsciously — shaping what we think is possible. The cultural ego, in his language, is the status quo of those shared values.

When the Authentic Self awakens, it does not merely rearrange the furniture of the existing self. It demands a shift in what we value, what we serve, and what we are willing to sacrifice for. Spiral Dynamics provides a map of those shifts; Evolutionary Enlightenment provides the spiritual urgency that makes them matter cosmically.

Together, Integral theory and Spiral Dynamics help explain why Cohen's teaching is so demanding: it is addressed to those at the leading edge of cultural development, calling them to become conscious agents of vertical evolution rather than sophisticated occupants of the status quo.`,
    links: [
      { label: "Integral Theory", href: "/teaching/integral-theory" },
      { label: "The Ego", href: "/teaching/the-ego" },
      { label: "The New Being", href: "/teaching/the-new-being" },
      { label: "Lineage", href: "/lineage" },
      {
        label: "Manifest Nirvana (video)",
        href: "/archive/yt-JToHIXtH2C8",
      },
    ],
  },
];

const quotes = [
  {
    text: "I also want to extend my gratitude for the profound influence of contemporary evolutionary and integral pioneers, especially Brian Swimme, Don Beck, and Ken Wilber.",
    source: "Evolutionary Enlightenment — Acknowledgments",
  },
  {
    text: "Verticality, in Evolutionary Enlightenment, means we engage with the spiritual process in such a way that the result is the emergence of some quality, ability, or capacity that was not there before.",
    source: "Evolutionary Enlightenment — Catalyzing Emergence",
  },
  {
    text: "The most challenging aspect of vertical spiritual development is the evolution of our value spheres.",
    source: "Evolutionary Enlightenment — Catalyzing Emergence",
  },
  {
    text: "When we make the effort to identify more with the vertical energy of the impulse to evolve than with the horizontal pull of the personal ego and culturally conditioned self, we transcend the enormous weight of our own traditional, modern, and postmodern value spheres.",
    source: "Evolutionary Enlightenment — Catalyzing Emergence",
  },
];

export default function SpiralDynamicsPage() {
  return (
    <InnerPageLayout
      title="Spiral Dynamics"
      subtitle="The Evolution of Values"
      intro="Spiral Dynamics maps how human value systems and worldviews evolve through stages of increasing complexity — a developmental framework, rooted in Clare Graves's research and extended by Don Beck and Christopher Cowan, that deeply informed Andrew Cohen's teaching."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011); Don Beck & Christopher Cowan, Spiral Dynamics (1996); Clare W. Graves's emergent cyclical theory"
      heroImage="/images/teaching/spiral-dynamics-colors.jpg"
      heroImageAlt="Spiral Dynamics color levels"
      heroImageCaption="Spiral Dynamics value-system colors. Image: Wikimedia Commons (CC BY-SA)."
    />
  );
}
