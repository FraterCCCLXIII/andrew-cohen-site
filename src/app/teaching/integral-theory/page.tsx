import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "A Map Big Enough for Awakening",
    body: `Integral theory, developed most comprehensively by the American philosopher Ken Wilber, is a framework for understanding human knowledge, culture, and consciousness without reducing any dimension of life to another. Where traditional religion often emphasized Spirit alone, and modern science emphasized matter alone, Integral thought insists that interior and exterior, individual and collective, must be held together.

Wilber's AQAL model — "all quadrants, all levels, all lines, all states, all types" — maps reality along four irreducible perspectives: the individual interior (subjective experience), the individual exterior (behavior and biology), the collective interior (culture and shared meaning), and the collective exterior (systems and structures). Spiritual awakening, in this view, is not complete if it ignores the body, culture, or the world.

Andrew Cohen credited Wilber, along with Brian Swimme and Don Beck, with helping to "deepen and refine" the thinking behind Evolutionary Enlightenment. Where nondual realization gave Cohen direct experience of liberation, Integral theory gave him a cognitive framework large enough to situate that realization within cosmic, biological, and cultural evolution.`,
    images: [
      {
        src: "/images/teaching/integral-quadrants-concentric.png",
        alt: "Integral four quadrants — Body, Mind, Spirit; Gross, Subtle, Causal; Me, Us, All of Us; Group, Nation, Global",
        wide: true,
        caption: "The four quadrants at increasing depth — Ken Wilber, Integral theory (AQAL).",
      },
    ],
  },
  {
    title: "Interior and Exterior Evolution",
    body: `A central insight Integral philosophy brings to Cohen's teaching is that the universe has an outside and an inside — an exterior of matter and energy, and an interior of consciousness and subjectivity. Western science has trained us to see evolution primarily in the exterior domain: galaxies, ecosystems, bodies, brains.

But if the material universe is evolving, the interior of the universe is evolving too. Consciousness, culture, and values are not static backdrop; they are part of the same creative process. Cohen's Evolutionary Enlightenment depends on this recognition: the evolutionary impulse is not only driving complexity in nature but awakening within human interiors as spiritual aspiration, moral urgency, and the call to create the future.

Each quadrant unfolds through developmental levels — from prehension and atoms in the earliest stages to vision-logic and planetary systems at the leading edge. Evolution moves simultaneously in all four perspectives.

"When you literally begin to feel the telos, or directionality, of the entire process moving in and through your own nervous system, that is when you directly experience that movement as a vertical impulse in your own consciousness."`,
  },
  {
    title: "Ken Wilber and the Guru & Pandit Dialogues",
    body: `Cohen and Wilber became close collaborators, carrying on a sustained public exchange — the Guru and Pandit dialogues — that explored the frontier where enlightenment meets evolution. Cohen dedicated Evolutionary Enlightenment to Wilber, and Wilber, in turn, placed Cohen among the evolutionary pathfinders reaching back to Sri Aurobindo.

For Cohen, Wilber's Integral vision answered a question his nondual lineage alone could not fully address: how does timeless realization relate to the evolutionary process unfolding in history? Integral theory provided the map; Cohen's teaching provided one response to what it might mean to live that map at the leading edge of culture.`,
    images: [
      {
        src: "/images/teaching/ken-wilber-integral.jpg",
        alt: "Ken Wilber",
        caption: "Ken Wilber",
      },
      {
        src: "/images/lineage/ken-wilber.jpg",
        alt: "Ken Wilber portrait",
        caption: "Ken Wilber",
      },
    ],
  },
  {
    title: "Traditional, Modern, and Postmodern Value Spheres",
    body: `Cohen drew directly on Integral and developmental language when describing what Wilber and Beck would call the evolution of value spheres. In Evolutionary Enlightenment he writes that unless "the limitations of our traditional, modern, and postmodern value spheres are brought into the light of awareness and penetrated with the eye of contemplation," higher potentials glimpsed in awakening will not be actualizable in real time.

Traditional cultures orient around mythic order, sacred authority, and belonging. Modern culture emphasizes rationality, individual achievement, and scientific progress. Postmodern culture critiques universal claims, honors pluralism, and elevates personal authenticity — yet often leaves the self without a deeper spiritual reference point. Cohen's "postmodern predicament" names what happens when highly individuated people at the leading edge of culture lose touch with cosmic purpose: evolution's greatest achievement becomes a dead end.

Integral theory helps locate this predicament — and points toward the vertical development required to move beyond it.`,
    images: [
      {
        src: "/images/teaching/integral-levels-of-consciousness.png",
        alt: "Levels of consciousness — Piaget, Spiral Dynamics, Kegan, Loevinger, Gebser, and Fowler aligned by altitude",
        wide: true,
        caption:
          "Levels of consciousness across developmental models — Ken Wilber, Integral theory (AQAL).",
      },
    ],
  },
  {
    title: "Integral Cognition and Evolutionary Enlightenment",
    body: `Cohen used the phrase "integral cognition" to describe a way of knowing that does not collapse the mystery of Spirit into any single perspective — neither naive realism, nor mere psychological subjectivity, nor abstract philosophy divorced from lived awakening. Integral cognition holds the primacy of Spirit while honoring the full spectrum of human development.

Evolutionary Enlightenment, in this sense, is an Integral spirituality: it preserves the depth of nondual Being while insisting on the dynamism of Becoming; it takes individual liberation seriously while aiming at the evolution of culture; it recognizes that the Authentic Self is not a private attainment but a vehicle for the cosmos knowing itself.

The teaching does not ask us to choose between Ramana Maharshi's timeless Self and Wilber's evolutionary map. It asks us to live both — and to participate consciously in the process they describe.`,
    links: [
      { label: "Lineage", href: "/lineage" },
      { label: "Evolutionary Enlightenment", href: "/teaching/evolutionary-enlightenment" },
      { label: "Spiral Dynamics", href: "/teaching/spiral-dynamics" },
      {
        label: "Integral Cognition (video)",
        href: "/archive/yt-5IE49ep0UbA",
      },
    ],
  },
];

const quotes = [
  {
    text: "I also want to extend my gratitude for the profound influence of contemporary evolutionary and integral pioneers, especially Brian Swimme, Don Beck, and Ken Wilber, along with many others, who have helped enormously to deepen and refine my thinking and understanding.",
    source: "Evolutionary Enlightenment — Acknowledgments",
  },
  {
    text: "Unless the limitations of our traditional, modern, and postmodern value spheres are brought into the light of awareness and penetrated with the eye of contemplation, it won't matter what thrilling new potentials we have glimpsed in higher states of consciousness; we won't be able to actualize them in real time.",
    source: "Evolutionary Enlightenment — Catalyzing Emergence",
  },
  {
    text: "This state of affairs is what I often call 'the postmodern predicament.' And it's not your predicament—it's our predicament. It's not a personal problem; it's a cultural, cosmic, and evolutionary problem.",
    source: "Evolutionary Enlightenment — The Postmodern Predicament",
  },
  {
    text: "Transformative spirituality is inherently radical by its nature.",
    source: "Ken Wilber, cited in Andrew Cohen's teaching",
  },
];

export default function IntegralTheoryPage() {
  return (
    <InnerPageLayout
      title="Integral Theory"
      subtitle="The Integral Framework"
      intro="Integral theory maps the full spectrum of human development — interior and exterior, individual and collective — providing the framework within which Andrew Cohen situated Evolutionary Enlightenment alongside the work of Ken Wilber and Don Beck."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011); Ken Wilber, A Brief History of Everything (1996) and Sex, Ecology, Spirituality (1995)"
      heroImage="/images/teaching/integral-four-quadrants-levels.png"
      heroImageAlt="AQAL four quadrants with developmental levels in each perspective"
      heroImageFit="contain"
      heroImageCaption="Developmental levels across the four quadrants — Ken Wilber, Integral theory (AQAL)."
    />
  );
}
