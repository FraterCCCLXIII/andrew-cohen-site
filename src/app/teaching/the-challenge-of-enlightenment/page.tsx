import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Multidimensional Integrity of Nonduality",
    body: `This teaching, given by Cohen at a retreat in Bodhgaya — the very site of the Buddha's awakening — addresses the challenge of living nonduality in the midst of ordinary human life. It is not enough to have a glimpse of the absolute. That glimpse must become the ground of one's existence, informing every action, every relationship, every moment.

"The genuine pursuit of spiritual liberation is the pursuit of unity and simplicity. Unity is not only the fact of our ultimate nature, but indeed, if there is any significance in spiritual attainment, unity must finally become the very essence of the expression of the individual who claims to have achieved the goal of unity itself."

The "multidimensional integrity" Cohen speaks of is the capacity to hold both the absolute and the relative simultaneously — to rest in the stillness of being while engaging fully in the activity of the world. This is not a compromise. It is the full expression of the human being.`,
  },
  {
    title: "Allowing Everything to Be as It Is",
    body: `The core practice Cohen presents is deceptively simple: let everything be as it is. But this simplicity is the most demanding practice there are. It requires the cessation of the ego's compulsive need to edit, judge, and control experience.

"Allowing everything to be as it is means to assume no relationship to our experience. This is to neither accept nor reject anything that occurs."

When we truly allow everything to be as it is, we discover something extraordinary: there is a place deep within us where nothing was ever wrong. Not because everything is good, but because at the deepest level, nothing ever happened. The events that seemed so significant, the dramas that consumed us, the identities we clung to — all of it arose and passed in a field of awareness that was never touched by any of it.

"If nothing at all had ever happened, how could anything be wrong? That's what Liberation is. In perfect death there is nothing wrong. That's the glory of it!"`,
  },
  {
    title: "The Two Halves of Wholeness",
    body: `Cohen teaches that life is made of two inseparable halves: stillness and activity, nothingness and volition, silence and expression. Most human beings are identified with only one half — the active, volitional half — and are therefore out of touch with the other half, the stillness that is the source of all peace and wisdom.

"That means on the surface there is endless activity, endless change. But at the core of all that activity, there is stillness. That stillness is the other half of the whole. And when we are out of touch with that half, we suffer!"

The spiritual journey, in Cohen's view, is the journey from confusion and fragmentation to wholeness. This wholeness is not achieved by rejecting activity in favor of stillness. It is achieved by embracing both halves — resting in the stillness of being while fully engaging in the world of action and relationship.

"Resting in stillness will solve a lot of problems for the individual because in profound stillness no problems exist. But stillness alone doesn't address the whole picture because what we are speaking about here is life, human life, which means being a human being."`,
  },
  {
    title: "The Fundamental Position: For or Against",
    body: `Each of us has a fundamental position toward life — either fundamentally positive or fundamentally negative. This position is not about mood or personality. It is about the deepest orientation of consciousness.

A fundamentally negative position says: "Something is wrong. Life is not what it should be. I know better." This position is rooted in the ego's conviction that it already knows — that it has the right to judge life and find it wanting.

A fundamentally positive position says: "Nothing is wrong. Everything is as it should be." This position is rooted in not-knowing — in the humility of one who does not presume to judge the whole of existence.

"When there is not knowing, there is no fundamental limitation. That means if we already know, everything that we think and feel, everything that occurs that can be measured, inner and outer, gross and subtle, all will occur within this very narrow or very small view."`,
  },
  {
    title: "The Unknown as the Source of Wisdom",
    body: `The willingness to not-know is, paradoxically, the source of all wisdom. When we release our grip on accumulated knowledge, opinions, and beliefs, we create space for the genuinely new to emerge. This is not anti-intellectualism. It is the recognition that the deepest truths cannot be captured by the mind.

"Wisdom is the ability to respond perfectly to what is occurring. This ability alone makes all things possible. In that perfect response, heaven can and does become manifest on earth."

Wisdom is not information. It is a quality of awareness — the quality that arises when the mind is still enough to perceive what is actually happening, rather than what we think is happening. This stillness is not passive. It is the most alert and responsive state available to a human being.`,
  },
  {
    title: "The Challenge",
    body: `Cohen's teaching is supremely challenging because it offers no comfort to the ego. There is no gradual path of self-improvement, no reassurance that we are "on the right track," no spiritual credentials to accumulate. There is only the absolute demand: Are you willing to die? Are you willing to let go of everything you think you know, everything you think you are, for the sake of what is real?

"This is not an easy teaching to keep a safe distance from. It meets the spiritual seeker head on, immediately bringing us face to face with exactly where we stand, here and now, in relationship to the possibility of going all the way."

The challenge is not to become something. It is to stop being what we are not. It is to let the false die so that the true can live. This is the challenge of enlightenment — and it is the most important challenge any human being can face.`,
  },
];

const quotes = [
  {
    text: "If one wants to be free, if one wants to realize a perspective on one's experience that is vast and potentially limitless, then one has to look into what it means to have an absolute relationship to life.",
    source: "The Challenge of Enlightenment",
  },
  {
    text: "Allowing everything to be as it is means to assume no relationship to our experience. This is to neither accept nor reject anything that occurs.",
    source: "The Challenge of Enlightenment",
  },
  {
    text: "If nothing at all had ever happened, how could anything be wrong? That's what Liberation is. In perfect death there is nothing wrong. That's the glory of it!",
    source: "The Challenge of Enlightenment",
  },
  {
    text: "Life is made up of two parts. One is inactive and the other is active. They are both part of and an expression of the very same thing. We cannot have one without the other when we are speaking about Life, which is, once again, what we all are.",
    source: "The Challenge of Enlightenment",
  },
  {
    text: "When there is not knowing, there is no fundamental limitation. That means if we already know, everything that we think and feel, everything that occurs that can be measured, inner and outer, gross and subtle, all will occur within this very narrow or very small view.",
    source: "The Challenge of Enlightenment",
  },
  {
    text: "Wisdom is the ability to respond perfectly to what is occurring. This ability alone makes all things possible. In that perfect response, heaven can and does become manifest on earth.",
    source: "The Challenge of Enlightenment",
  },
  {
    text: "Resting in stillness will solve a lot of problems for the individual because in profound stillness no problems exist. But stillness alone doesn't address the whole picture because what we are speaking about here is life, human life, which means being a human being.",
    source: "The Challenge of Enlightenment",
  },
];

export default function ChallengeOfEnlightenmentPage() {
  return (
    <InnerPageLayout
      title="The Challenge of Enlightenment"
      subtitle="Book · 1996"
      intro="A teaching given at Bodhgaya, the site of the Buddha's awakening — addressing the multidimensional integrity of nonduality and the absolute demand to let everything be as it is."
      sections={sections}
      quotes={quotes}
    />
  );
}
