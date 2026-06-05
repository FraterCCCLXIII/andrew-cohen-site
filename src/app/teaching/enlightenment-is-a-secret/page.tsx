import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Secret Nature of Liberation",
    body: `The title itself is a paradox. Enlightenment — the most sought-after human experience — is called a secret. Not because it is hidden deliberately, but because its very nature makes it impossible to grasp through the ordinary workings of the mind. The mind seeks objects, concepts, experiences. Enlightenment is none of these. It is the absence of the seeker.

"Enlightenment is a secret because the one who is looking for it is the very thing that prevents it from being found." The separate self-sense, the ego, the one who wants to become enlightened — this is the obstruction. And it cannot remove itself, because it is the obstruction. This is the secret that cannot be told, only realized.`,
  },
  {
    title: "Clarity of Intention",
    body: `One of the most demanding aspects of Cohen's teaching is his insistence on clarity of intention. Most seekers, he argues, are fundamentally divided. They want liberation, but they also want comfort, security, recognition, pleasure. This division is not a minor obstacle. It is the primary obstacle.

"What is my intention? What do I really want? Do I want to be Free? Do I really want to be Free? Am I willing to sacrifice for that Freedom?"

These are not rhetorical questions. They are meant to be lived, to be felt in the body and the heart. The seeker must come to a final reckoning: Do I want liberation more than anything else? If the answer is yes — and only if it is yes — then the path becomes clear.

"It's a very scary thing to say, 'I want to be Free.' It can be very terrifying. It means that the ground from under you can fall away at any moment."`,
  },
  {
    title: "The Willingness to Die",
    body: `Cohen speaks openly about the death that is required — not physical death, but the death of the separate self. This is not a metaphor. It is a lived experience in which everything one has identified as "I" and "mine" is willingly surrendered.

"I'm ready to die but I don't know how." This statement, which Cohen made to his teacher Poonja, was not a thought. It was a declaration that arose from the deepest place. It was the ego recognizing its own death — not as something imposed, but as something chosen.

When this death occurs, what remains is not nothing. It is everything. It is life without the filter of the separate self. It is what Cohen calls the True Self — not a personal self, but the Self that is all of life.`,
  },
  {
    title: "Be Obedient to the Longing",
    body: `The longing for liberation is itself the guide. Cohen insists that this longing must be obeyed above all other impulses. Not followed intellectually, but obeyed — lived, felt, surrendered to.

"Be obedient to the longing for Liberation. You must be obedient to that longing above all others. Always put that longing first — then you will be successful."

Real longing for liberation is something that burns. In that burning there is no mind, no age, no face, no history — there is only that longing. Force yourself to be obedient to that longing. If you cannot, then you will surely start looking in other places, because you will want to find some security in this very miserable world."`,
  },
  {
    title: "Spiritual Practice and the Ego",
    body: `Cohen is uncompromising in his critique of spiritual practice as a means to liberation. Practice, he argues, is always performed by the ego, for the ego. It is the ego's attempt to improve itself, to become something other than what it is. This is the fundamental paradox of practice: the one who practices is the one who must be surrendered.

"Devotion is not something that can be practiced. Devotion is a choiceless response to Self-recognition that is imposed from within."

This does not mean that practice is useless. It means that practice alone cannot produce liberation. Liberation is not produced. It is recognized. And recognition comes not from effort, but from grace — the grace of the Self revealing itself when the ego steps aside.`,
  },
];

const quotes = [
  {
    text: "It's a very scary thing to say, 'I want to be Free.' It can be very terrifying. It means that the ground from under you can fall away at any moment. When you say, 'I want to be Free,' and mean it, it's the same as saying, 'I'm ready to die.'",
    source: "Enlightenment is a Secret",
  },
  {
    text: "Coming to rest: it is relief. It is cessation. It is the end of becoming. It's the end of the struggle to become anyone or anything. It's coming finally to rest, here and now, in this life.",
    source: "Enlightenment is a Secret",
  },
  {
    text: "Be obedient to the longing for Liberation. You must be obedient to that longing above all others. Always put that longing first — then you will be successful. That longing will surely lead you home, but not necessarily in the way that you have in mind.",
    source: "Enlightenment is a Secret",
  },
  {
    text: "There is a place in all of us that has remained innocent, uncorrupted and untouched by the world. We have to locate that most delicate place. It is a very sensitive place, it's where we feel love — where tenderness and compassion arise, free from self-interest. This place is the hole we have to fall into — and disappear in forever.",
    source: "Enlightenment is a Secret",
  },
  {
    text: "Spiritual is the very nature of what you already are. There's nothing to do about it except to Realize it. Once you have made this discovery it's all over. Then there is literally nothing more to do.",
    source: "Enlightenment is a Secret",
  },
  {
    text: "Devotion is not something that can be practiced. Devotion is a choiceless response to Self-recognition that is imposed from within. Devotion is imposed from the unknown upon the ego and this cannot be done.",
    source: "Enlightenment is a Secret",
  },
];

export default function EnlightenmentIsASecretPage() {
  return (
    <InnerPageLayout
      title="Enlightenment is a Secret"
      subtitle="Book · 1995"
      intro="A collection of Cohen's earliest teachings, recorded between 1986 and 1990, addressing the fundamental nature of the spiritual path — the longing, the obstacle, and the secret that cannot be told."
      sections={sections}
      quotes={quotes}
    />
  );
}
