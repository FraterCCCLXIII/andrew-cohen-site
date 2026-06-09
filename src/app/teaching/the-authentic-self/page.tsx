import InnerPageLayout from "@/components/InnerPageLayout";
import { getTeachingModel } from "@/data/teachingModels";

const authenticSelfModel = getTeachingModel("authentic-self")!;

const sections = [
  {
    title: "The Evolutionarily Enlightened Self",
    body: `At the center of Andrew Cohen's teaching is the Authentic Self. "The Authentic Self is the evolutionary impulse manifest in and through an individual who has freely, consciously chosen to identify with that as self. The Authentic Self is the evolutionarily enlightened self."

It is not the egoic self with its history and preferences, and it is not a higher version of the personality. It is the same impulse that "burst forth as the big bang" — the creative energy of the cosmos — awakening to itself within a human being and recognized as one's own deepest identity.`,
  },
  {
    title: "Its Nature",
    body: `Cohen describes the felt quality of the Authentic Self in vivid terms. "The nature of the Authentic Self is always already spiritually motivated, turned on, tuned in, ready to respond to the radical immediacy of now. It experiences no fear, no doubt, no hesitation, no procrastination."

When one is identified with it, he says, "it literally feels like anything is possible." This is what he calls a "new manifestation and expression of enlightened awareness" — distinct from traditional enlightenment, which is "the experience of consciousness beyond ego that is the natural result of awakening to the timeless ground of Being." The new enlightenment, by contrast, is "the experience of ego-transcendence carried on the wings of the evolutionary impulse."`,
  },
  {
    title: "There Is Only One",
    body: `Because the Authentic Self is the one evolutionary impulse expressing through many individuals, Cohen draws a radical conclusion about relationship. "There is only one Authentic Self. The ego can only have relationships with other separate individuals, but the Authentic Self can only have a relationship with itself."

When two people awaken to it together, "what you are drawn to is not the other individual's unique personal qualities. You are drawn to the very same evolutionary aspiration that is awakening within you." This insight is the bridge between the individual practice of the Five Tenets and the collective field described by the Six Principles.`,
  },
  {
    title: "The Shift of Identity",
    body: `The movement from ego to Authentic Self is, for Cohen, the pivot of the entire path. "The Authentic Self and the ego are two completely different worlds." Yet the Authentic Self is not somewhere else: it is "already perfectly free," experienced as aspiration only "because you are still divided."

He describes a threshold — "the magic number" of fifty-one percent — at which "the fearless, passionate, evolutionary idealism of the Authentic Self becomes the greater part of who you are, at a conscious and unconscious level." Crossing it, he says, is "not the end of the path — it is just the beginning."`,
  },
];

const quotes = [
  {
    text: "The Authentic Self is the evolutionary impulse manifest in and through an individual who has freely, consciously chosen to identify with that as self. The Authentic Self is the evolutionarily enlightened self.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The nature of the Authentic Self is always already spiritually motivated, turned on, tuned in, ready to respond to the radical immediacy of now. It experiences no fear, no doubt, no hesitation, no procrastination.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "There is only one Authentic Self. The ego can only have relationships with other separate individuals, but the Authentic Self can only have a relationship with itself.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The new enlightenment is the experience of ego-transcendence carried on the wings of the evolutionary impulse.",
    source: "Evolutionary Enlightenment",
  },
];

export default function TheAuthenticSelfPage() {
  return (
    <InnerPageLayout
      title="The Authentic Self"
      subtitle="The Evolutionary Impulse Awake"
      intro="The Authentic Self is the evolutionary impulse — the creative energy of the cosmos — awakening to itself within an individual and recognized as one's own deepest identity, beyond the separate ego."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011)"
      heroImage={authenticSelfModel.image}
      heroImageAlt={authenticSelfModel.imageAlt}
      heroImageFit="contain"
      heroImageCaption={`${authenticSelfModel.title} — ${authenticSelfModel.subtitle}. From ${authenticSelfModel.source}.`}
      links={[
        {
          label: "Download PDF",
          href: authenticSelfModel.pdfHref,
          download: authenticSelfModel.pdfDownloadName,
        },
      ]}
    />
  );
}
