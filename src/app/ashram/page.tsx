import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "A New Beginning",
    body: `In 2019, following his return to public teaching after a period of deep introspection, Andrew Cohen founded Manifest Nirvana — an innovative spiritual community dedicated to intersubjective awakening and collective evolution. Co-founded with his close student Daniela Bomatter, it was conceived not as a return to the old model of guru and organization, but as something new: a platform and a place where Evolutionary Enlightenment could be explored, practiced, and lived in the twenty-first century.

The name itself points in two directions at once. Nirvana — liberation, the timeless ground of Being. Manifest — to make visible, to bring forth, to participate in the becoming of the world. Together they express the heart of Cohen's mature teaching: that awakening is not escape from life, but wholehearted participation in its unfolding.`,
  },
  {
    title: "At the Foot of Arunachala",
    body: `Manifest Nirvana is rooted in Tiruvannamalai, Tamil Nadu — the sacred town at the foot of Arunachala, the mountain where Ramana Maharshi lived and taught for half a century. It was here, in this landscape of granite and silence, that Cohen's own lineage began. And it was here, in the serene embrace of this holy place, that he passed away on March 25, 2025 — exactly thirty-nine years to the day after his awakening upon meeting his teacher, Sri Poonja.

The ashram itself is a home: a place of gathering, retreat, and daily practice overlooking the hills and trees that surround Arunachala. Andrew Cohen lived here with his wife Alka and his devoted student Daniela Bomatter, who had worked closely with him since 2008 and co-founded the platform in 2019. Together they created a living environment where teaching, community, and the rhythms of ashram life could support the work of evolutionary spirituality.`,
  },
  {
    title: "Ashram and Platform",
    body: `Manifest Nirvana exists on two levels that mirror Cohen's teaching of Being and Becoming. In Tiruvannamalai, the ashram hosts in-person retreats and events — a sanctuary where seekers can sit in silence, engage in dialogue, and experience the field of intersubjective practice that Cohen pioneered. Online, the platform reaches a global community through live teachings, guided meditations, courses, and an extensive library of recorded dharma.

At its core is the insight of Evolutionary Enlightenment: that the spiritual impulse and the evolutionary impulse are one and the same force. Spiritual awakening is not only the recognition of stillness and freedom at the heart of existence — it is also a sensitivity to the movement of life as it unfolds through us, as us. What we are and what we are becoming are not separate.`,
  },
  {
    title: "Intersubjective Awakening",
    body: `One of Cohen's most original contributions — and central to the life of Manifest Nirvana — is the practice of intersubjective nonduality. Beyond individual realization lies the art of coming together in transcendent consciousness, communicating beyond ego and the games of positioning and competition it plays. In these "we-spaces," the co-creative power of shared collective intelligence is unleashed, and insights emerge that no one could have reached alone.

This practice shapes everything at Manifest Nirvana: weekly silent meditations, live dialogues, the Co-Creating the Third Attractor conversation series, and the ongoing work of building a transpersonal culture — one in which empowered souls are compelled by a call from the future to create an awakened way of life.`,
  },
  {
    title: "The Third Attractor",
    body: `A living inquiry at Manifest Nirvana asks how a new civilizational possibility can emerge — beyond collapse and control, through coherence, consciousness, and co-creation. The Third Attractor dialogue series brings together thinkers, practitioners, system designers, and cultural pioneers to explore what Daniela Bomatter calls the movement from meta-crisis to meta-coherence.

It is a vision Cohen held throughout his final years: that spirituality must engage the world, not retreat from it. That the world's crises are signs of something new struggling to be born. And that our own spiritual transformation is inextricably linked to the collective awakening of humanity.`,
  },
  {
    title: "Carrying the Work Forward",
    body: `Since Andrew Cohen's passing in March 2025, the community at Manifest Nirvana — led by Daniela Bomatter, Vincent Drouot, Annick Macher, Sara Topsoe, and others who studied with Cohen for nearly two decades — continues to carry this work forward. Daniela lives at the ashram in Tiruvannamalai, hosting retreats and events while extending the teaching through online gatherings, the Third Attractor series, and her own writing.

The ashram remains what it was always meant to be: not a monument to a teacher, but a living field — a place and a platform where the evolutionary impulse can be recognized, practiced, and shared.`,
  },
];

const quotes = [
  {
    text: "Spiritual awakening is not only the recognition of the stillness and freedom at the heart of existence. It is also a sensitivity to the movement of life as it unfolds through us, as us.",
    source: "Manifest Nirvana",
  },
  {
    text: "We are not here to transcend life, but to become conscious instruments of its evolution.",
    source: "Manifest Nirvana — About",
  },
  {
    text: "In 2019, Andrew founded Manifest Nirvana, an innovative online spiritual community dedicated to intersubjective awakening and collective evolution.",
    source: "Obituary, March 2025",
  },
  {
    text: "Imagine an emerging world of empowered souls compelled by a call from the future to create an awakened culture.",
    source: "Manifest Nirvana",
  },
];

export default function AshramPage() {
  return (
    <InnerPageLayout
      title="Manifest Nirvana"
      subtitle="Manifest Nirvana · Tiruvannamalai"
      intro="At the foot of the sacred mountain Arunachala, Andrew Cohen founded Manifest Nirvana — an ashram and online community dedicated to Evolutionary Enlightenment, intersubjective awakening, and the creation of an awakened culture for the twenty-first century."
      sections={sections}
      quotes={quotes}
      heroImage="/images/ashram-hero.jpg"
      heroImageAlt="Manifest Nirvana ashram at sunrise, Tiruvannamalai"
      heroImageCaption="Manifest Nirvana, Tiruvannamalai — at the foot of Arunachala."
      links={[
        {
          label: "Visit Manifest Nirvana",
          href: "https://www.manifest-nirvana.com/",
          external: true,
        },
      ]}
    />
  );
}
