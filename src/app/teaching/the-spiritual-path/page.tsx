import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Path and the Goal Are One",
    body: `Andrew Cohen returns again and again to a truth he says "some of the greatest spiritual masters and teachers throughout history have told us: the path and the goal are one."

"The very desire to embark on a spiritual path and to engage in spiritual practice is already the dawning of spiritual freedom, because that desire is the felt vibration and pulsation of the Authentic Self striving to awaken within us." The experience of freedom and the practice of freedom, in this teaching, "are one and the same."`,
  },
  {
    title: "Ego-Transcendence as a Means, Not an End",
    body: `"The path of Evolutionary Enlightenment, like all enlightenment teachings, is a path of ego-transcendence." But Cohen makes a decisive distinction from the traditional approach: "In Evolutionary Enlightenment, however, transcending ego is not an end in itself — it's a means to a higher end."

The purpose of transcending personal fears, desires, and conditioned values is "to open up some space within the self — space for evolution to occur." Inner freedom, which in traditional enlightenment is the goal, here "becomes the foundation from which to engage in conscious evolution."`,
  },
  {
    title: "Being and Becoming",
    body: `The practice has "two fundamental components that reflect the two domains of Being and Becoming." In the domain of Being, the practice is "the timeless art and science of meditative stillness." In the domain of Becoming, the practice is the living of the Five Tenets.

Stillness, Cohen says, is foundational "because stillness is the perennial portal that gives us access to the dimension of ourselves and of life itself that is the source of traditional enlightenment." It is the ground from which the active, world-engaging work of conscious evolution becomes possible.`,
  },
  {
    title: "The Art and Science of Stillness",
    body: `Cohen describes meditation not primarily as a physical posture but as "an inner posture in relationship to your experience." Inwardly, "being still means having no relationship whatsoever to anything that is happening, has happened, or will ever happen." He distills the whole practice into a single instruction: "Be still, relax, pay attention, and assume no relationship to anything that arises. That is the posture of freedom."

He is emphatic that this is not relaxation for its own sake. "Meditation only becomes real, powerful, authentic, and liberating when it is a practice of letting everything go. Otherwise it is reduced to little more than a psycho-spiritual relaxation technique. It may make you feel better, but it won't set you free."`,
  },
];

const quotes = [
  {
    text: "The path and the goal are one.",
    source: "Evolutionary Enlightenment, Part III",
  },
  {
    text: "Transcending ego is not an end in itself — it's a means to a higher end.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Be still, relax, pay attention, and assume no relationship to anything that arises. That is the posture of freedom.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Meditation only becomes real, powerful, authentic, and liberating when it is a practice of letting everything go.",
    source: "Evolutionary Enlightenment",
  },
];

export default function TheSpiritualPathPage() {
  return (
    <InnerPageLayout
      title="The Spiritual Path"
      subtitle="Being and Becoming"
      intro="In Evolutionary Enlightenment the path and the goal are one. Ego-transcendence is not the destination but the means — opening the space for conscious evolution through the art of stillness and the living of the tenets."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011), Part III: The Path and the Goal"
    />
  );
}
