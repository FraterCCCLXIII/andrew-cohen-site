import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Path and the Goal Are One",
    body: `In the practice of Evolutionary Enlightenment, Andrew Cohen describes two fundamental components that reflect what he calls the domains of Being and Becoming. In the domain of Being, the practice is "learning to master the timeless art and science of meditative stillness." In the domain of evolutionary Becoming, the practice is defined by Five Fundamental Tenets: Clarity of Intention, The Power of Volition, Face Everything and Avoid Nothing, The Process Perspective, and Cosmic Conscience.

Each tenet is described as being simultaneously the path and the goal. "It is already the nature of your Authentic Self," Cohen writes, "but it is also a position you can choose to take that will get you to the very same place." For those who aspire to walk this path in earnest, he insists, "these tenets must be lived at all times, in all places, under all circumstances."`,
  },
  {
    title: "First Tenet — Clarity of Intention",
    body: `The first tenet "points directly to the essential nature of the evolutionary impulse itself: the wholehearted, passionate intention to exist, to develop, to become, to evolve." To have Clarity of Intention means to align oneself with the single-pointed purpose of that impulse — and the way that alignment occurs "is that the intention to evolve becomes more important to us than anything else in this world."

Cohen frames this as a single, searching question: "What is most important to me?" Honestly confronting that question, he says, reveals the gap between the part of us that aspires to evolve and the part — the ego — that "tends to resist such higher potentials, and holds steadfastly to the way things have been." For Cohen this is the cornerstone of the entire teaching: "Your own Clarity of Intention is everything."`,
  },
  {
    title: "Second Tenet — The Power of Volition",
    body: `The second tenet "asks us to endeavor to be responsible for nothing less than the destiny of the evolutionary process, here and now, as ourselves." The way one embraces that task is "through first and foremost making the noble spiritual effort to take responsibility for all of what makes you who you are" — for one's past, present, and future.

Central to this tenet is the renunciation of the victim position. "No matter what has happened to you in the past," Cohen writes, "you cannot allow yourself to take the position of a victim." He distinguishes between being responsible for what was done to us and taking responsibility for the consequences of those events within ourselves — the accumulated momentum he calls karma. When the intention to evolve is married with this unconditional responsibility, "conscious evolution becomes possible," and, in his words, "You become the evolutionary agent."`,
  },
  {
    title: "Third Tenet — Face Everything and Avoid Nothing",
    body: `The third tenet "points us to our potential to experience unobstructed awareness — awareness that is free from the psychological self-protective habit of avoidance." Cohen calls it "the ultimate form of spiritual practice," because the cultivation of awareness has always been at the heart of the spiritual path.

He describes a direct link between avoidance and the hardening of the separate self: "Avoidance literally creates ego, and the ego's ability to reinforce its own walls is quite extraordinary. But the moment we stop avoiding, those walls will begin to crumble." The demand of this tenet is radical and immediate — it "always has to happen now." One is to practice it, in his words, "as if your life depended on it, because when your life is dedicated to the evolution of consciousness and culture, it does."`,
  },
  {
    title: "Fourth Tenet — The Process Perspective",
    body: `The fourth tenet "points us directly to the liberating viewpoint that emerges when we see every aspect of our human experience as part and parcel of the vast impersonal cosmic process." Through it, Cohen says, "we discover the liberating truth that life is not a personal drama but is in fact an impersonal process."

This is the perspective he once called "the impersonal view." Seeing "from the outside in," one recognizes the self "not [as] a unique entity but a process that is a very small part of a larger process, which is part of yet another larger process, and so on." Far from being cold, Cohen insists this shift "actually reveals a deeper potential for your own humanity." What it offers, ultimately, is "a bigger context" — a space around the arising of impulses in which appropriate choices, informed by a greater whole, become possible.`,
  },
  {
    title: "Fifth Tenet — Cosmic Conscience",
    body: `The fifth tenet "represents the fundamental motive or raison d'être of the evolutionary impulse or Authentic Self." It marks, in Cohen's words, "a tipping point in the path and practice of Evolutionary Enlightenment — an inner threshold that, once crossed, changes everything." It is the shift from a self-centered motive for liberation to one focused on the evolution of consciousness itself.

Cohen says this is the only tenet that "cannot really be practiced in and of itself" — it emerges naturally from sincere engagement with the other four. Its essence is captured in a single reversal of motive: "I want to be free not for my own sake but for the sake of the whole." On the spiritual path, he writes, the awakening of Cosmic Conscience turns everything upside down: "It's no longer 'I want that' but rather, 'That wants me.'"`,
  },
];

const quotes = [
  {
    text: "When you know you want to evolve more than anything else, you don't have to depend on the experience of higher states of consciousness; you don't have to wait for God to save you; you don't have to hope for grace to descend. If you remain true to that which matters most, nothing will be able to stop you.",
    source: "Evolutionary Enlightenment — Clarity of Intention",
  },
  {
    text: "No matter what has happened to you in the past, you cannot allow yourself to take the position of a victim.",
    source: "Evolutionary Enlightenment — The Power of Volition",
  },
  {
    text: "Avoidance literally creates ego, and the ego's ability to reinforce its own walls is quite extraordinary. But the moment we stop avoiding, those walls will begin to crumble.",
    source: "Evolutionary Enlightenment — Face Everything and Avoid Nothing",
  },
  {
    text: "Life is not a personal drama but is in fact an impersonal process.",
    source: "Evolutionary Enlightenment — The Process Perspective",
  },
  {
    text: "I want to be free not for my own sake but for the sake of the whole. That is the awakening of Cosmic Conscience.",
    source: "Evolutionary Enlightenment — Cosmic Conscience",
  },
  {
    text: "The path and the goal are one.",
    source: "Evolutionary Enlightenment, Part III",
  },
];

export default function FiveTenetsPage() {
  return (
    <InnerPageLayout
      title="The Five Tenets"
      subtitle="The Path and the Goal"
      intro="The five fundamental tenets of Evolutionary Enlightenment — Clarity of Intention, The Power of Volition, Face Everything and Avoid Nothing, The Process Perspective, and Cosmic Conscience — form the practice of conscious evolution in the domain of Becoming."
      sections={sections}
      quotes={quotes}
      bookSource="Evolutionary Enlightenment (2011), Part III: The Path and the Goal. In earlier teachings the tenets were also named Clarity of Intention, The Law of Volitionality, Face Everything and Avoid Nothing, The Truth of Impersonality, and For the Sake of the Whole."
    />
  );
}
