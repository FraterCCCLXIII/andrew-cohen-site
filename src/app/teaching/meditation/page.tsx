import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Posture of Freedom",
    body: `On the path of Evolutionary Enlightenment, meditation is not primarily a physical posture but an inner posture in relationship to experience. Cohen describes it as "the art and science of stillness" — the traditional practice through which we assume the enlightened relationship to our own mind and emotions.

Inwardly, being still means having no relationship whatsoever to anything that is happening, has happened, or will ever happen. He distills the whole practice into a single instruction: "Be still, relax, pay attention, and assume no relationship to anything that arises. That is the posture of freedom."

Stillness is the perennial portal that gives access to the dimension of ourselves and of life that is the source of traditional enlightenment. By assuming this inner and outer position of stillness, we bear witness to the deepest part of ourselves in the world of time and space.`,
  },
  {
    title: "Meditation and Enlightenment Are One",
    body: `"Rightly understood, meditation and enlightenment are one and the same," Cohen writes. Meditation is the experience of a particular state of consciousness whose qualities are also the qualities of enlightened awareness — letting everything go, free from compulsive identification with fear and desire, with time, thought, memory, and feeling.

The freedom of enlightenment is only won through letting go absolutely. "Unless in every moment you are letting go of everything, you are wasting your time." Meditation only becomes real, powerful, authentic, and liberating when it is a practice of letting everything go. Otherwise it is reduced to little more than a psycho-spiritual relaxation technique. It may make you feel better, but it won't set you free.

Feeling better and being free don't necessarily mean the same thing. Feeling better is relative; being free is not.`,
  },
  {
    title: "Space for Evolution",
    body: `In Evolutionary Enlightenment, transcending ego through meditation is not an end in itself — it is a means to a higher end. The reason we want the liberating experience of transcending personal fears and desires is first and foremost to open up space within the self for evolution to occur.

Many people are moved by the notion of evolutionary becoming, but within themselves they are not free. They are trapped in psychological hang-ups and attachments, with little or no space for that which is new. Merely being inspired by the potential for conscious evolution does not automatically give us access to the fearless inner freedom to actualize that potential.

The purpose of meditation is to recognize, over and over again, that you are already free. If your practice has power, you will keep rediscovering that you are not a prisoner — until your conviction in your own freedom is unwavering.`,
  },
  {
    title: "Training for Life",
    body: `Meditation is training for life. Stillness is training for action. If you want to be a liberated vessel for the evolutionary impulse, you must learn how to directly experience the chaos and confusion of your own mind without being disturbed by any of it. Only if you can bear it will you be able to take responsibility for it.

When you assume no relationship to the content of consciousness, it doesn't matter what arises — sublime revelations, mundane chatter, or frightening thoughts. You remain disengaged and unmoved. Like the Buddha, when the storm passes, you experience a tremendous sense of exhilaration and realize that your own heart's conviction is more powerful than the chaos of your mind.

Learning what it means to assume no relationship to the content of consciousness is the critical step in making it possible to align yourself with the Authentic Self, rather than the ego.`,
  },
  {
    title: "From Stillness to Becoming",
    body: `On the path of Evolutionary Enlightenment, the posture of stillness is not an end in itself. To be an evolutionarily enlightened human being, you must cultivate dynamic and deeply creative relationships with time, with thought, with feeling, with others, and with the world — relationships constantly informed by conscious, liberated attention rather than by the unconscious conditioned assumptions of the personal and cultural ego.

Your attention becomes liberated by learning to assume the enlightened posture of no relationship. In this way, you discover what it means to have a completely fresh, ever-new beginning to your relationship with life. The experience of enlightened awareness is the perpetual knowing of that place within yourself where there is always an ever-new beginning — the ongoing revelation that anything is possible.`,
  },
];

const quotes = [
  {
    text: "Be still, relax, pay attention, and assume no relationship to anything that arises. That is the posture of freedom.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Meditation only becomes real, powerful, authentic, and liberating when it is a practice of letting everything go.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Meditation is training for life. Stillness is training for action.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The purpose of meditation is to recognize, over and over and over again, that you are already free.",
    source: "Evolutionary Enlightenment",
  },
];

export default function MeditationPage() {
  return (
    <InnerPageLayout
      title="Meditation"
      subtitle="The Art and Science of Stillness"
      intro="Meditation in Andrew Cohen's teaching is the practice of assuming no relationship to the content of consciousness — the inner posture of freedom that opens space within the self for conscious evolution."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011), Part III"
    />
  );
}
