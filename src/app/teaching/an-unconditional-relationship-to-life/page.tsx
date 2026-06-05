import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Conditional Relationship to Life",
    body: `Most people, Cohen argues, have a conditional relationship to life. They relate to experience through the filter of what they want and don't want, what pleases them and what threatens them. This conditional relationship is the very structure of the ego.

The problem is not that life is imperfect. The problem is that we are constantly evaluating life against an imagined standard of what it should be. This evaluation creates a gap — between what is and what we want — and this gap is the source of all suffering.

"Most people, of course, do not have an absolute relationship to life. Indeed, their relationship to all of their experience and to life as a whole is a very relative matter. There is a very simple way of understanding the difference between a relative relationship to life and one that is absolute. The first is very narrow and very limited, and the second is vast and unlimited."`,
  },
  {
    title: "Let Everything Be as It Is",
    body: `The path to an absolute relationship to life begins with a simple but terrifying practice: letting everything be as it is. Not because things are good or bad, but because the very act of evaluation — of making distinctions between what should be and what shouldn't be — is the movement of the ego.

"In order to find out for ourselves what an absolute relationship to life is all about, we have to be willing to let everything be as it is. If we really want to get to the crux of the matter, if we want to get to the very core of what it means to be alive, to know what it means to be, then all we have to do is let everything be as it is."

This does not mean passivity. It means the cessation of the ego's compulsive need to edit, control, and manage experience. When this compulsion stops, a deeper intelligence — what Cohen calls the evolutionary impulse — begins to operate.`,
  },
  {
    title: "Beyond Fullness and Emptiness",
    body: `One of Cohen's most penetrating insights concerns the spiritual debate between fullness and emptiness. Some traditions emphasize the fullness of being — the recognition of the divine presence in all things. Others emphasize emptiness — the recognition that all phenomena are devoid of inherent existence.

Cohen resolves this debate by pointing to their unity. Fullness and emptiness are not opposites. They are two aspects of the same reality. The experience of emptiness — of no self, no thing, no separation — is simultaneously the experience of fullness — of the boundless creative potential that flows when the separate self gets out of the way.

When he met his teacher Poonja in Lucknow, this question was resolved in a single moment: "His response to my question of fullness versus emptiness as final experience of the goal was simple and direct. He told me that they were ultimately one and the same."`,
  },
  {
    title: "The Crisis of Trust",
    body: `The spiritual path inevitably brings the seeker to a crisis of trust. The ego, facing its own dissolution, panics. It doubts. It questions whether liberation is even possible. This doubt is not a sign of failure. It is a sign that the process is working.

"The genuine pursuit of spiritual liberation is the pursuit of unity and simplicity. Unity is not only the fact of our ultimate nature, but indeed, if there is any significance in spiritual attainment, unity must finally become the very essence of the expression of the individual who claims to have achieved the goal of unity itself."

This crisis can only be resolved through direct experience, not through belief or philosophy. The seeker must go deep enough to discover, in their own experience, that unity is real — that the separation they have taken for granted is not the final truth.`,
  },
  {
    title: "The Modern Spiritual Predicament",
    body: `Cohen is critical of the modern spiritual marketplace, where traditions are mixed without understanding, where experiences are mistaken for realization, and where the ego's desire for comfort is dressed up as spiritual seeking.

"The word 'truth' has always been dangerous territory and continues to be in the modern world, even in spite of the seeming open-mindedness of the so-called new age."

The predicament is compounded by cynicism — the widespread belief that genuine transformation is not possible. This cynicism, Cohen argues, is itself a defense mechanism of the ego, protecting itself from the radical implications of authentic awakening.

"My insistence that a seeker's relationship to spiritual liberation was ultimately black or white, yes or no, was often not well received. This approach was perceived as being too absolute."`,
  },
  {
    title: "Impersonal Enlightenment",
    body: `The culmination of Cohen's teaching is what he calls Impersonal Enlightenment — the recognition that awakening is not a personal achievement but a cosmic event. The individual who awakens does not become special. They become transparent — a clear vehicle for the evolutionary impulse.

This is the most challenging teaching for the ego to accept. The ego wants enlightenment to be "mine" — a personal possession, a mark of superiority. But genuine enlightenment is the very death of this personal claim. What remains is not a person who has achieved something, but the evolutionary impulse expressing itself through a human form.

"Through the intensity of being together in the kind of intimacy that was constantly being shared, the fact of the impersonal nature of the entire experience of human life became more and more obvious."`,
  },
];

const quotes = [
  {
    text: "Most people, of course, do not have an absolute relationship to life. Indeed, their relationship to all of their experience and to life as a whole is a very relative matter.",
    source: "An Unconditional Relationship to Life",
  },
  {
    text: "In order to find out for ourselves what an absolute relationship to life is all about, we have to be willing to let everything be as it is. If we really want to get to the crux of the matter, if we want to get to the very core of what it means to be alive, to know what it means to be, then all we have to do is let everything be as it is.",
    source: "An Unconditional Relationship to Life",
  },
  {
    text: "The path is the goal and the goal is the path. When there is no distance between the seeker and the sought, when there is no gap between where you are and where you want to be, that is Liberation.",
    source: "An Unconditional Relationship to Life",
  },
  {
    text: "His response to my question of fullness versus emptiness as final experience of the goal was simple and direct. He told me that they were ultimately one and the same. Hearing this relieved me of the burden of doubt and confusion.",
    source: "An Unconditional Relationship to Life",
  },
  {
    text: "The genuine pursuit of spiritual liberation is the pursuit of unity and simplicity. Unity is not only the fact of our ultimate nature, but indeed, if there is any significance in spiritual attainment, unity must finally become the very essence of the expression of the individual.",
    source: "An Unconditional Relationship to Life",
  },
  {
    text: "The word 'truth' has always been dangerous territory and continues to be in the modern world, even in spite of the seeming open-mindedness of the so-called new age.",
    source: "An Unconditional Relationship to Life",
  },
];

export default function UnconditionalRelationshipPage() {
  return (
    <InnerPageLayout
      title="An Unconditional Relationship to Life"
      subtitle="Book · 1995"
      intro="Cohen's autobiography and teaching hybrid — the story of his awakening and the hard-won recognition that liberation demands an absolute, unconditional relationship to all of life."
      sections={sections}
      quotes={quotes}
    />
  );
}
