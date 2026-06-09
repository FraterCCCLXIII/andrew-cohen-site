import InnerPageLayout from "@/components/InnerPageLayout";
import { getTeachingModel } from "@/data/teachingModels";

const egoModel = getTeachingModel("ego")!;

const sections = [
  {
    title: "What \u201CEgo\u201D Means in This Teaching",
    body: `Andrew Cohen uses the word "ego" in a precise way. In Evolutionary Enlightenment, "'ego' is a shorthand for all the ways in which we are consciously and unconsciously identified with and attached to relative dimensions of self that inhibit our higher spiritual development."

It is not simply self-esteem or personality. It is the structure of attachment and identification — personal and cultural — that resists evolution and "holds steadfastly to the way things have been." Understanding the ego, for Cohen, is inseparable from understanding what stands between us and our own higher potential.`,
  },
  {
    title: "The Positive Ego",
    body: `Cohen does not treat the ego as simply something to be destroyed. Defined as the individuated self, "the ego is both your best friend and your worst enemy."

"It is your best friend because, in the most positive sense, it represents your capacity to individuate — to see yourself as a unique, autonomous entity and to bear witness to your own experience with some measure of objectivity." This capacity, he says, "is what makes it possible for you to be a conscious agent of evolution."

Individuation is what makes it possible for you to be a vessel for Spirit in action. The more profound our individuation, the more powerfully Spirit can shine through us. As you develop and mature, you gain a greater capacity to differentiate between your internal experience and your external environment — and through you, the energy and intelligence that created the universe is able to see more and more of its own creation and engage consciously with it.

"The ego, in this sense, is the greatest achievement that the creative process has produced. That's why I say it's our best friend." Positive ego is the healthy capacity for autonomous self-reflection and conscious agency — without which evolution could not proceed through an individual life.`,
  },
  {
    title: "The Negative Ego",
    body: `Ego is also "our worst enemy," because "over-identification with our separate individuality obscures the deeper and higher spiritual dimensions of our being." When a highly developed ego lacks a spiritual context and a deeper sense of purpose, it inevitably turns in on itself — creating distortion in the personality and in the culture we build together.

Cohen describes several faces of the negative ego. The irrational refusal to change emerges when you make a genuine commitment to something "infinitely bigger than the fears and desires of [the] personal self" — a powerful inertia that blindly resists, defies, and denies unbridled positivity. "Only then will you understand why spiritual masters for millennia have referred to the ego as 'the enemy within.'"

In the context of the third tenet — Face Everything and Avoid Nothing — ego is also a defense mechanism, designed to protect the self from what it feels may be "too much" reality. It maintains a fixed self-image by filtering out whatever conflicts with it. "Avoidance literally creates ego... But the moment we stop avoiding, those walls will begin to crumble."`,
  },
  {
    title: "The Postmodern Predicament",
    body: `For the luckiest people who have ever been born — those with education, freedom, and leisure to pursue higher development — the ego has become the central reference point where God or Spirit once stood. "Evolution's great achievement — our capacity for individuation — has in many ways become a dead end."

Many of us have grown up in a secular context that recognizes no higher universal truth beyond the fears and desires of the personal self. The tragic irony is that the very capacity that makes conscious evolution possible — individuation — has become our prison when it is not oriented toward a spiritual context.

"There is no psychological solution to these problems. The only solution is spiritual. The solution is discovering the ego is not the center of the universe; it's but a small part of a very big picture."`,
  },
  {
    title: "Transcending Ego",
    body: `Transcendence, in this teaching, is not a single event but a shift in the balance of power within the self — what Cohen describes as crossing from fifty to fifty-one percent identification with the Authentic Self rather than the ego. The ego does not cease to exist altogether in this territory, but our conscious and unconscious investment in those dimensions of self that inhibit evolution has been released.

Strikingly, Cohen says ego is ultimately unseated not by recognizing one's insignificance but the opposite — one's cosmic significance: "There is no greater challenge to narcissism than awakening to Cosmic Conscience: to the fact that the evolution of the interior of the cosmos is depending on you."

Positive ego — the capacity to individuate — remains as the vehicle through which the evolutionary impulse can consciously engage with the world. Negative ego — over-identification, avoidance, and irrational refusal — is what must be seen clearly and transcended for the Authentic Self to come forward.`,
  },
];

const quotes = [
  {
    text: "'Ego' is a shorthand for all the ways in which we are consciously and unconsciously identified with and attached to relative dimensions of self that inhibit our higher spiritual development.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The ego is both your best friend and your worst enemy.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "It is your best friend because it represents your capacity to individuate — to see yourself as a unique, autonomous entity and to bear witness to your own experience with some measure of objectivity.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Ego, in this sense, is a defense mechanism, designed to protect the self from what it feels may be 'too much' reality.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "Avoidance literally creates ego, and the ego's ability to reinforce its own walls is quite extraordinary.",
    source: "Evolutionary Enlightenment",
  },
  {
    text: "The only solution is spiritual. The solution is discovering the ego is not the center of the universe; it's but a small part of a very big picture.",
    source: "Evolutionary Enlightenment",
  },
];

export default function TheEgoPage() {
  return (
    <InnerPageLayout
      title="The Ego"
      subtitle="The Obstacle Within"
      intro="In Andrew Cohen's teaching, the ego is the structure of attachment and identification that resists evolution — at once the vehicle of positive individuation and the greatest obstacle on the path to enlightenment."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011)"
      heroImage={egoModel.image}
      heroImageAlt={egoModel.imageAlt}
      heroImageFit="contain"
      heroImageCaption={`${egoModel.title} — ${egoModel.subtitle}. From ${egoModel.source}.`}
      links={[
        {
          label: "Download PDF",
          href: egoModel.pdfHref,
          download: egoModel.pdfDownloadName,
        },
      ]}
    />
  );
}
