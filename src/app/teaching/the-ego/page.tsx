import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "What \u201CEgo\u201D Means in This Teaching",
    body: `Andrew Cohen uses the word "ego" in a precise way. In Evolutionary Enlightenment, "'ego' is a shorthand for all the ways in which we are consciously and unconsciously identified with and attached to relative dimensions of self that inhibit our higher spiritual development."

It is not simply self-esteem or personality. It is the structure of attachment and identification — personal and cultural — that resists evolution and "holds steadfastly to the way things have been." Understanding the ego, for Cohen, is inseparable from understanding what stands between us and our own higher potential.`,
  },
  {
    title: "Best Friend and Worst Enemy",
    body: `Cohen does not treat the ego as simply something to be destroyed. Defined as the individuated self, "the ego is both your best friend and your worst enemy."

"It is your best friend because, in the most positive sense, it represents your capacity to individuate — to see yourself as a unique, autonomous entity and to bear witness to your own experience with some measure of objectivity." This capacity, he says, "is what makes it possible for you to be a conscious agent of evolution." But ego is also "our worst enemy," because "over-identification with our separate individuality obscures the deeper and higher spiritual dimensions of our being."`,
  },
  {
    title: "The Irrational Refusal to Change",
    body: `When a person makes a genuine commitment to something "infinitely bigger than the fears and desires of [the] personal self," Cohen says a particular face of the ego is revealed — what he calls "the irrational refusal to change."

"Only then will you confront the force of a powerful inertia within, an ever-irrational position that blindly resists, defies, and denies that unbridled positivity. This is when you understand why spiritual masters for millennia have referred to the ego as 'the enemy within.'" Most people never see this face, he notes, because they rarely dare to put their highest aspiration first, "above all else."`,
  },
  {
    title: "Ego as a Defense Mechanism",
    body: `In the context of the third tenet — Face Everything and Avoid Nothing — Cohen describes the mechanics of ego with unusual clarity. "Ego, in this sense, is a defense mechanism, designed to protect the self from what it feels may be 'too much' reality."

It maintains a fixed self-image by filtering out whatever conflicts with it: "Like a camera lens, focusing and refocusing, we constantly frame our own perspective on reality to reflect the picture of ourselves that we want to see." And it is reinforced by the very act of avoidance: "Avoidance literally creates ego... But the moment we stop avoiding, those walls will begin to crumble."`,
  },
  {
    title: "Transcending Ego",
    body: `For Cohen there is "no psychological solution to these problems. The only solution is spiritual." That solution is "discovering the ego is not the center of the universe; it's but a small part of a very big picture."

Transcendence, in this teaching, is not a single event but a shift in the balance of power within the self — what he describes as crossing from fifty to fifty-one percent identification with the Authentic Self rather than the ego. Strikingly, Cohen says ego is ultimately unseated not by recognizing one's insignificance but the opposite — one's cosmic significance: "There is no greater challenge to narcissism than awakening to Cosmic Conscience: to the fact that the evolution of the interior of the cosmos is depending on you."`,
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
      intro="In Andrew Cohen's teaching, the ego is the structure of attachment and identification that resists evolution — at once the vehicle of individuation and the greatest obstacle on the path to enlightenment."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011)"
    />
  );
}
