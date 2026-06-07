export type DictionaryCategory =
  | "Core Teaching"
  | "The Ego & Self"
  | "The Five Tenets"
  | "The Six Principles"
  | "Practice"
  | "Integral Theory"
  | "Spiral Dynamics";

export const dictionaryCategoryOrder: DictionaryCategory[] = [
  "Core Teaching",
  "The Ego & Self",
  "The Five Tenets",
  "The Six Principles",
  "Practice",
  "Integral Theory",
  "Spiral Dynamics",
];

export interface DictionaryEntry {
  id: string;
  term: string;
  category: DictionaryCategory;
  definition: string;
  source: string;
  relatedHref?: string;
}

export const dictionaryEntries: DictionaryEntry[] = [
  // Core Teaching
  {
    id: "evolutionary-enlightenment",
    term: "Evolutionary Enlightenment",
    category: "Core Teaching",
    definition:
      "Andrew Cohen's teaching that the spiritual impulse and the evolutionary impulse are one and the same — the recognition that consciousness is evolving and that individual awakening is a participation in that process, not an escape from it.",
    source: "Evolutionary Enlightenment (2011), Prologue",
    relatedHref: "/teaching/evolutionary-enlightenment",
  },
  {
    id: "evolutionary-impulse",
    term: "Evolutionary Impulse",
    category: "Core Teaching",
    definition:
      "The energy and intelligence that initiated the creative process and is still driving it — experienced inwardly as spiritual aspiration, creative urgency, and the uncompromising desire to evolve. Cohen also names this Eros.",
    source: "Evolutionary Enlightenment (2011), Clarity of Intention; The Self: Relative and Absolute",
    relatedHref: "/teaching/eros-the-evolutionary-impulse",
  },
  {
    id: "eros",
    term: "Eros",
    category: "Core Teaching",
    definition:
      "The creative dimension of God — the burning intelligence and driving impulse ever-leaning forward toward the emergence of that which has not yet become manifest. When awakened as self, it is the Absolute as Becoming.",
    source: "Evolutionary Enlightenment (2011), Catalyzing Emergence; The Self: Relative and Absolute",
    relatedHref: "/teaching/eros-the-evolutionary-impulse",
  },
  {
    id: "spiritual-impulse",
    term: "Spiritual Impulse",
    category: "Core Teaching",
    definition:
      "The impulse to evolve at the level of consciousness — the same force that caused something to come from nothing at the beginning of time, expressing itself in the human heart as the desire for liberation and higher development.",
    source: "Evolutionary Enlightenment (2011), Prologue",
  },
  {
    id: "authentic-self",
    term: "Authentic Self",
    category: "Core Teaching",
    definition:
      "The evolutionary impulse manifest in and through an individual who has freely chosen to identify with that as self — always already spiritually motivated, fearless, and oriented toward the radical immediacy of now.",
    source: "Evolutionary Enlightenment (2011), The Self: Relative and Absolute",
    relatedHref: "/teaching/the-authentic-self",
  },
  {
    id: "the-absolute",
    term: "The Absolute",
    category: "Core Teaching",
    definition:
      "A non-relative dimension of self — infinite, without boundaries. In Cohen's teaching it is experienced as the timeless ground of Being and as the evolutionary impulse (Eros) in time and form.",
    source: "Evolutionary Enlightenment (2011), The Self: Relative and Absolute",
    relatedHref: "/teaching/the-absolute-the-true-self",
  },
  {
    id: "true-self",
    term: "True Self",
    category: "Core Teaching",
    definition:
      "Wholeness — the conscious experience of no limitation arising from resting in not knowing, rather than from the cynical conviction that one already knows what is not possible.",
    source: "The Challenge of Enlightenment (1992), Knowing Versus Not Knowing",
    relatedHref: "/teaching/the-absolute-the-true-self",
  },
  {
    id: "being",
    term: "Being",
    category: "Core Teaching",
    definition:
      "The timeless, formless ground of existence — radical, unconditional freedom from time, thought, and the separate self. The domain of traditional enlightenment and the foundation of Cohen's path.",
    source: "Evolutionary Enlightenment (2011), The Art and Science of Stillness",
    relatedHref: "/teaching/the-spiritual-path",
  },
  {
    id: "becoming",
    term: "Becoming",
    category: "Core Teaching",
    definition:
      "The domain of evolutionary development in time and form — the practice of the Five Tenets, conscious evolution, and collective emergence. Cohen holds Being and Becoming as one movement.",
    source: "Evolutionary Enlightenment (2011), Part III–IV",
    relatedHref: "/teaching/the-spiritual-path",
  },
  {
    id: "new-being",
    term: "The New Being",
    category: "Core Teaching",
    definition:
      "Cohen's metaphor for emergent cosmocentric cultural potential — when autonomous, evolving individuals consciously come together to give rise to a dynamic greater whole beyond ego boundaries.",
    source: "Evolutionary Enlightenment (2011), Catalyzing Emergence",
    relatedHref: "/teaching/the-new-being",
  },
  {
    id: "emergence",
    term: "Emergence",
    category: "Core Teaching",
    definition:
      "Something greater than the sum of its parts — a new order of relatedness, level of consciousness, or capacity that is unimaginable until it bursts into existence. Central to conscious evolution at the leading edge.",
    source: "Evolutionary Enlightenment (2011), Catalyzing Emergence",
  },
  {
    id: "nonduality",
    term: "Nonduality",
    category: "Core Teaching",
    definition:
      "The recognition that, at the deepest level, subject and object, self and other, are not ultimately separate — the bedrock realization of the Advaita tradition that Cohen extends into an evolutionary context.",
    source: "Evolutionary Enlightenment (2011), Nonduality",
  },
  {
    id: "freedom-has-no-history",
    term: "Freedom Has No History",
    category: "Core Teaching",
    definition:
      "The recognition that genuine liberation is timeless — it has no past, no duration, and no memory in time. The moment you fall back into time and thought, freedom is instantly forgotten, no matter how long you were immersed in it. Cohen's students celebrate this insight annually on the anniversary of his awakening.",
    source: "Enlightenment Is a Secret (1991), You Can Forget Everything in Less Than One-Billionth of a Second; Freedom Has No History (1997)",
  },
  {
    id: "ground-of-being",
    term: "The Ground of Being",
    category: "Core Teaching",
    definition:
      "The timeless, formless, primordial dimension of the Absolute — what remains when thought, feeling, mind, time, and world have been let go. Traditional enlightenment awakens to this ground; in Evolutionary Enlightenment it is held together with the evolutionary impulse as two expressions of one True Self.",
    source: "Evolutionary Enlightenment (2011), The Self: Relative and Absolute; The Art and Science of Stillness",
    relatedHref: "/teaching/the-absolute-the-true-self",
  },
  {
    id: "agape",
    term: "Agape",
    category: "Core Teaching",
    definition:
      "The horizontal manifestation of the Absolute — the nurturing, integrative force of love, care, and healing that reaches outward to embrace and include. In Cohen's mature teaching, Agape balances Eros (the vertical, evolutionary impulse); both are essential ingredients of a truly evolutionary dharma.",
    source: "Andrew Cohen, Open Letter (2015); Evolutionary Enlightenment teaching on love and Eros",
    relatedHref: "/teaching/enlightened-communication",
  },
  {
    id: "not-knowing",
    term: "Not Knowing",
    category: "Core Teaching",
    definition:
      "Abiding in the humility of one who does not already know — the opposite of cynicism's hardened conviction that liberation is impossible. \"If you don't know, everything is possible because there is no fundamental limitation.\" Resting in not knowing is the source of the True Self and an absolute relationship to life that is fundamentally positive.",
    source: "The Challenge of Enlightenment (1996), Knowing Versus Not Knowing",
    relatedHref: "/teaching/inquiry",
  },
  {
    id: "absolute-relationship-to-life",
    term: "Absolute Relationship to Life",
    category: "Core Teaching",
    definition:
      "A wholehearted orientation toward existence that is either fundamentally positive or fundamentally negative — rooted in not knowing or in the cynical conviction that one already knows what is not possible. To realize a perspective that is vast and potentially limitless, one must look into what it means to have an absolute relationship to life.",
    source: "The Challenge of Enlightenment (1996); An Unconditional Relationship to Life (1995)",
    relatedHref: "/teaching/an-unconditional-relationship-to-life",
  },
  {
    id: "path-and-the-goal-are-one",
    term: "The Path and the Goal Are One",
    category: "Core Teaching",
    definition:
      "The spiritual masters' insight that the means and the end of awakening are not separate. The very desire to embark on a spiritual path is already the dawning of spiritual freedom — that desire is the felt vibration of the Authentic Self. Noble effort on the path and the spontaneous arising of liberation are one movement.",
    source: "Evolutionary Enlightenment (2011), Introduction to Part III",
    relatedHref: "/teaching/the-spiritual-path",
  },
  {
    id: "noble-effort",
    term: "Noble Effort",
    category: "Core Teaching",
    definition:
      "The wholehearted spiritual striving through which one reaches the goal of freedom — not egoic striving for self-improvement, but the path's own expression of the evolutionary impulse. Through noble effort one transcends the obstacles to participating wholeheartedly in the life process.",
    source: "Evolutionary Enlightenment (2011), Introduction to Part III",
    relatedHref: "/teaching/the-spiritual-path",
  },
  {
    id: "minus-one-to-zero-to-plus-one",
    term: "Minus One to Zero to Plus One",
    category: "Core Teaching",
    definition:
      "Cohen's map of the whole spiritual journey — from minus one (ignorance and wrong relationship to experience: attachment, preference, and \"I like this / I don't like that\"), through zero (no relationship to anything that arises: the posture of unconditional inner freedom in meditation), to plus one (right relationship: awakened clarity, authenticity, and creative response in life). Zero is not an experience to chase but the practice of no relationship; plus one is realizing and responding from that freedom in the world of becoming.",
    source: "Evolutionary Enlightenment teaching; Andrew Cohen, Spiritual Liberation in Times of Uncertainty (retreat talk)",
    relatedHref: "/teaching/meditation",
  },
  {
    id: "willingness",
    term: "Willingness",
    category: "Core Teaching",
    definition:
      "The readiness to sacrifice everything that stands in the way of liberation — negative freedom, cherished ideas, comfort, and the pretense that there was ever another. \"Am I ready and willing to be Free, here and now?\" Without willingness to let go of everything one has ever known, awakening remains a distant ideal rather than an immediate possibility.",
    source: "Enlightenment Is a Secret (1991), Waking Up Is Not a Game; What Do I Really Want?",
    relatedHref: "/teaching/enlightenment-is-a-secret",
  },
  {
    id: "renunciation",
    term: "Renunciation",
    category: "Core Teaching",
    definition:
      "The very essence of the spiritual life — giving up everything that obscures perfect liberation, and refusing to accumulate anything that could dim it again. True renunciation is an inner matter: being more interested in seeing the way things are than in having things the way you want them to be. \"In the end the only path to Enlightenment is renunciation alone.\"",
    source: "Enlightenment Is a Secret (1991), What Is Renunciation?; See the Way Things Are",
    relatedHref: "/teaching/enlightenment-is-a-secret",
  },
  {
    id: "surrender",
    term: "Surrender",
    category: "Core Teaching",
    definition:
      "Ceasing to submit to that which is unreal — the ultimate challenge for mind and ego, reached when all strategies are abandoned. Surrender is not reminding yourself to let go; it is the realization that you were never attached in the first place. Perfect surrender is choicelessness — a free-fall beyond all shoulds and shouldn'ts.",
    source: "Enlightenment Is a Secret (1991), Surrender Is Liberation; Surrender Is Choicelessness; Realize You Were Never Attached",
    relatedHref: "/teaching/enlightenment-is-a-secret",
  },
  {
    id: "letting-go",
    term: "Letting Go",
    category: "Core Teaching",
    definition:
      "Not something the ego can do by trying — real letting go means the ego in its entirety is given up all at once, through recognition of a purity stronger than the mind. \"Seeing things as they are is letting go.\" The freedom of enlightenment is only won through letting go absolutely; unless in every moment you are letting go of everything, you are wasting your time.",
    source: "Enlightenment Is a Secret (1991), Seeing Things as They Are Is Letting Go; Evolutionary Enlightenment (2011), The Art and Science of Stillness",
    relatedHref: "/teaching/meditation",
  },
  {
    id: "allow-everything-to-be-as-it-is",
    term: "Allow Everything to Be As It Is",
    category: "Core Teaching",
    definition:
      "The multidimensional integrity of nonduality in practice — abandoning the process of overcoming the past and preparing for the future through the profound renunciation of time itself. When you allow everything to be as it is, unconditionally, you discover the blessedness that was always there and the shock of revelation that follows.",
    source: "Enlightenment Is a Secret (1991), Renounce Time; The Challenge of Enlightenment (1996)",
    relatedHref: "/teaching/the-challenge-of-enlightenment",
  },
  {
    id: "longing-for-liberation",
    term: "Longing for Liberation",
    category: "Core Teaching",
    definition:
      "The spiritual passion that must be obeyed above all other impulses — not followed intellectually but lived and surrendered to. \"Without passion for Liberation there is no hope for Liberation. Passion for Liberation is your Liberation.\" When you surrender to that passion, your fate is sealed.",
    source: "Enlightenment Is a Secret (1991), Longing for Liberation; Be Obedient to the Longing",
    relatedHref: "/teaching/enlightenment-is-a-secret",
  },
  {
    id: "detachment",
    term: "Detachment",
    category: "Core Teaching",
    definition:
      "Being completely involved and completely uninvolved simultaneously — the enlightened mind flourishes in detachment. In profound surrender there is detachment; perfect enlightenment is possible when there is no gap between involvement and uninvolvement. Detachment and unbearable love are synonymous.",
    source: "Enlightenment Is a Secret (1991), In Detachment Is Where the Enlightened Mind Flourishes; It Is Detachment That Allows Us to Realize What Love Is",
  },
  {
    id: "conscious-evolution",
    term: "Conscious Evolution",
    category: "Core Teaching",
    definition:
      "The deliberate participation of awakened human beings in the evolutionary process — not merely being moved by the evolutionary impulse unconsciously, but choosing to align with it and become its conscious agents. When clarity of intention is married with unconditional responsibility, conscious evolution becomes possible.",
    source: "Evolutionary Enlightenment (2011), The Power of Volition; Catalyzing Emergence",
    relatedHref: "/teaching/evolutionary-enlightenment",
  },
  {
    id: "evolutionary-agent",
    term: "Evolutionary Agent",
    category: "Core Teaching",
    definition:
      "One who has taken unconditional responsibility for the consequences of their own karma and aligned with the evolutionary impulse — becoming a conscious participant in the evolution of consciousness and culture rather than a passive occupant of the status quo.",
    source: "Evolutionary Enlightenment (2011), The Power of Volition",
    relatedHref: "/teaching/five-tenets",
  },
  {
    id: "leading-edge",
    term: "The Leading Edge",
    category: "Core Teaching",
    definition:
      "The frontier of cultural and consciousness development — where the most evolved individuals and communities stand, and where Cohen's teaching is primarily addressed. At the leading edge, postmodern sophistication without vertical spiritual context becomes a dead end; with awakening, it becomes the site of conscious evolution and creative emergence.",
    source: "Evolutionary Enlightenment (2011), The Postmodern Predicament; Creating the Future",
    relatedHref: "/teaching/evolutionary-enlightenment",
  },
  {
    id: "telos",
    term: "Telos",
    category: "Core Teaching",
    definition:
      "The directionality or purpose inherent in the evolutionary process — experienced inwardly when one feels the entire cosmic movement in and through one's own nervous system as a vertical impulse in consciousness.",
    source: "Evolutionary Enlightenment (2011), Clarity of Intention; Eros and the Evolutionary Impulse",
    relatedHref: "/teaching/eros-the-evolutionary-impulse",
  },
  {
    id: "radical-indeterminacy",
    term: "Radical Indeterminacy",
    category: "Core Teaching",
    definition:
      "The recognition that the life-process itself is open in every moment — that emergence is always possible because the future is not fixed. Awakening to the telos of evolution means directly experiencing this indeterminacy as room for the genuinely new to come into being.",
    source: "Evolutionary Enlightenment (2011), Catalyzing Emergence",
    relatedHref: "/teaching/eros-the-evolutionary-impulse",
  },
  {
    id: "verticality",
    term: "Verticality",
    category: "Core Teaching",
    definition:
      "Engaging with the spiritual process so that genuinely new qualities, abilities, or capacities emerge — transformation rather than self-improvement within the same structure. Verticality is the spiritual counterpart to horizontal change: the upward movement of consciousness and culture along the developmental spiral.",
    source: "Evolutionary Enlightenment (2011), Catalyzing Emergence",
    relatedHref: "/teaching/spiral-dynamics",
  },
  {
    id: "impersonal-enlightenment",
    term: "Impersonal Enlightenment",
    category: "Core Teaching",
    definition:
      "An approach to awakening in which individual liberation can never be separated from the awakening of the human race as a whole — contrasted with personal enlightenment, which over-emphasizes the emancipation of the individual. The desire for transcendence is the expression of an impersonal evolutionary impulse manifesting in the individual.",
    source: "An Unconditional Relationship to Life (1995), Impersonal Enlightenment",
    relatedHref: "/teaching/an-unconditional-relationship-to-life",
  },
  {
    id: "personal-enlightenment",
    term: "Personal Enlightenment",
    category: "Core Teaching",
    definition:
      "Approaches to spiritual liberation that stress the awakening of the individual alone — often pursued in a profoundly self-centered way, with the emancipation of the personal self as the final goal. Cohen distinguished this from impersonal enlightenment, in which individual awakening serves the evolution of the whole.",
    source: "An Unconditional Relationship to Life (1995), Impersonal Enlightenment",
    relatedHref: "/teaching/an-unconditional-relationship-to-life",
  },
  {
    id: "impersonality",
    term: "The Truth of Impersonality",
    category: "Core Teaching",
    definition:
      "The recognition that every aspect of personal experience is ultimately impersonal — fear, longing, and spiritual aspiration are shared human experiences, not uniquely one's own. The compulsive need to personalize is ego; clear perception arises when attachment to the personal burns away in the passion for liberation.",
    source: "Embracing Heaven & Earth (2000), The Truth of Impersonality; Evolutionary Enlightenment (2011), The Process Perspective",
    relatedHref: "/teaching/embracing-heaven-and-earth",
  },
  {
    id: "love-and-truth",
    term: "Love and Truth",
    category: "Core Teaching",
    definition:
      "The inseparable pair at the heart of Cohen's teaching on integrity — Truth as the intuitive recognition of the way itself, and Love as the emotional experience of profound surrender that is the ecstasy of transcendence. \"The discovery of Truth without Love is empty and the experience of Love without Truth is always superficial.\"",
    source: "An Unconditional Relationship to Life (1995), Introduction",
    relatedHref: "/teaching/an-unconditional-relationship-to-life",
  },
  {
    id: "unconditional-relationship-to-life",
    term: "Unconditional Relationship to Life",
    category: "Core Teaching",
    definition:
      "An absolute — not relative — orientation toward existence, free from the ego's constant evaluation of experience against what it wants and doesn't want. Contrasted with the conditional relationship that is the very structure of the ego; cultivated through letting everything be as it is.",
    source: "An Unconditional Relationship to Life (1995); The Challenge of Enlightenment (1996)",
    relatedHref: "/teaching/an-unconditional-relationship-to-life",
  },
  {
    id: "traditional-enlightenment",
    term: "Traditional Enlightenment",
    category: "Core Teaching",
    definition:
      "The experience of consciousness beyond ego that arises from awakening to the timeless ground of Being — infinite depth, overwhelming peace, and profound clarity. Cohen honors this as the foundation of the path while extending it through the evolutionary impulse into a new enlightenment focused on what could be.",
    source: "Evolutionary Enlightenment (2011), The Self: Relative and Absolute",
    relatedHref: "/teaching/the-absolute-the-true-self",
  },

  // The Ego & Self
  {
    id: "ego",
    term: "Ego",
    category: "The Ego & Self",
    definition:
      "A shorthand for all the ways we are consciously and unconsciously identified with and attached to relative dimensions of self that inhibit higher spiritual development — both the vehicle of individuation and the greatest obstacle on the path.",
    source: "Evolutionary Enlightenment (2011), The Postmodern Predicament; The Ego",
    relatedHref: "/teaching/the-ego",
  },
  {
    id: "positive-ego",
    term: "Positive Ego",
    category: "The Ego & Self",
    definition:
      "The capacity to individuate — to see oneself as a unique, autonomous entity and bear witness to one's experience with objectivity. What makes it possible to be a conscious agent of evolution.",
    source: "Evolutionary Enlightenment (2011), The Postmodern Predicament",
    relatedHref: "/teaching/the-ego",
  },
  {
    id: "negative-ego",
    term: "Negative Ego",
    category: "The Ego & Self",
    definition:
      "Over-identification with separate individuality that obscures deeper spiritual dimensions — including the irrational refusal to change and the defense mechanisms created by habitual avoidance.",
    source: "Evolutionary Enlightenment (2011), Clarity of Intention; Face Everything and Avoid Nothing",
    relatedHref: "/teaching/the-ego",
  },
  {
    id: "cultural-ego",
    term: "Cultural Ego",
    category: "The Ego & Self",
    definition:
      "The status quo living in conscious and unconscious minds — the deeply held images and conditioned beliefs that define what life is supposed to look like and what we believe is possible.",
    source: "Evolutionary Enlightenment (2011), Catalyzing Emergence",
  },
  {
    id: "postmodern-predicament",
    term: "The Postmodern Predicament",
    category: "The Ego & Self",
    definition:
      "The ironic condition of the most privileged and highly developed people on the planet — lost in personal worlds with little sense of cosmic purpose, despite unprecedented freedom, education, and cognitive capacity.",
    source: "Evolutionary Enlightenment (2011), The Postmodern Predicament",
  },
  {
    id: "irrational-refusal-to-change",
    term: "Irrational Refusal to Change",
    category: "The Ego & Self",
    definition:
      "An ancient face of the ego revealed only when one commits to something infinitely bigger than the personal self — a powerful inertia that blindly resists, defies, and denies unbridled positivity.",
    source: "Evolutionary Enlightenment (2011), Clarity of Intention",
  },
  {
    id: "relative-self",
    term: "Relative Self",
    category: "The Ego & Self",
    definition:
      "The dimension of self bound to time, form, thought, and personal history — the domain of ego, karma, and conditioned identity. Traditional enlightenment liberates us from the existential prison of the relative self by awakening to the Absolute; Evolutionary Enlightenment holds relative and absolute dimensions together.",
    source: "Evolutionary Enlightenment (2011), The Self: Relative and Absolute",
    relatedHref: "/teaching/the-absolute-the-true-self",
  },
  {
    id: "karma",
    term: "Karma",
    category: "The Ego & Self",
    definition:
      "The accumulated momentum of past action and conditioning within the self — not what was done to us, but the consequences we carry and take responsibility for. Karma is created when there is belief in the reality of thought; it ends when one is ready to disappear — to stay disappeared — and right action replaces mechanical reaction.",
    source: "Evolutionary Enlightenment (2011), The Power of Volition; Enlightenment Is a Secret (1991), Does Thought Create Karma?",
    relatedHref: "/teaching/five-tenets",
  },
  {
    id: "victim-position",
    term: "The Victim Position",
    category: "The Ego & Self",
    definition:
      "The refusal to take unconditional responsibility for the consequences of past events within oneself — confusing being responsible for what was done to us with taking responsibility for the accumulated momentum we carry. Renouncing the victim position is central to the Power of Volition and to becoming an evolutionary agent.",
    source: "Evolutionary Enlightenment (2011), The Power of Volition",
    relatedHref: "/teaching/five-tenets",
  },
  {
    id: "cynicism",
    term: "Cynicism",
    category: "The Ego & Self",
    definition:
      "The deep conviction that one already knows liberation is not possible — hardness, invulnerability, and coldness rooted in the belief that everything is limited. The opposite of genuine humility and not knowing; a defense mechanism of the ego that protects itself from the radical implications of authentic awakening.",
    source: "The Challenge of Enlightenment (1996), Knowing Versus Not Knowing",
    relatedHref: "/teaching/the-challenge-of-enlightenment",
  },
  {
    id: "negative-freedom",
    term: "Negative Freedom",
    category: "The Ego & Self",
    definition:
      "The freedom to be confused, vague, and do as one pleases — the liberty of the unawakened ego that must be sacrificed to embrace \"the bondage of Liberation.\" Only when the absolute choice to be awake is made, at the cost of negative freedom, can everything truly change.",
    source: "Enlightenment Is a Secret (1991), You Have to Be Willing to Sacrifice Negative Freedom",
    relatedHref: "/teaching/enlightenment-is-a-secret",
  },
  {
    id: "avoidance",
    term: "Avoidance",
    category: "The Ego & Self",
    definition:
      "The psychological self-protective habit of turning away from experience — literally what creates ego and builds the walls of separate selfhood. \"The moment we stop avoiding, those walls will begin to crumble.\" Facing everything and avoiding nothing is the antidote.",
    source: "Evolutionary Enlightenment (2011), Face Everything and Avoid Nothing",
    relatedHref: "/teaching/five-tenets",
  },

  // Five Tenets
  {
    id: "clarity-of-intention",
    term: "Clarity of Intention",
    category: "The Five Tenets",
    definition:
      "The first tenet: aligning with the evolutionary impulse so that the intention to evolve becomes more important than anything else. Crystallized in the question, \"What is most important to me?\"",
    source: "Evolutionary Enlightenment (2011), Clarity of Intention",
    relatedHref: "/teaching/five-tenets",
  },
  {
    id: "power-of-volition",
    term: "The Power of Volition",
    category: "The Five Tenets",
    definition:
      "The second tenet: taking unconditional responsibility for who you are — renouncing the victim position and becoming a conscious agent of evolution through noble spiritual effort.",
    source: "Evolutionary Enlightenment (2011), The Power of Volition",
    relatedHref: "/teaching/five-tenets",
  },
  {
    id: "face-everything-and-avoid-nothing",
    term: "Face Everything and Avoid Nothing",
    category: "The Five Tenets",
    definition:
      "The third tenet: cultivating awareness free from the psychological habit of avoidance. \"Avoidance literally creates ego… But the moment we stop avoiding, those walls will begin to crumble.\"",
    source: "Evolutionary Enlightenment (2011), Face Everything and Avoid Nothing",
    relatedHref: "/teaching/five-tenets",
  },
  {
    id: "process-perspective",
    term: "The Process Perspective",
    category: "The Five Tenets",
    definition:
      "The fourth tenet: seeing every aspect of human experience as part of the vast impersonal cosmic process — recognizing that \"life is not a personal drama but is in fact an impersonal process.\"",
    source: "Evolutionary Enlightenment (2011), The Process Perspective",
    relatedHref: "/teaching/five-tenets",
  },
  {
    id: "cosmic-conscience",
    term: "Cosmic Conscience",
    category: "The Five Tenets",
    definition:
      "The fifth tenet: the fundamental motive of the Authentic Self — wanting freedom not for one's own sake but for the sake of the whole. A tipping point that changes everything once crossed.",
    source: "Evolutionary Enlightenment (2011), Cosmic Conscience",
    relatedHref: "/teaching/five-tenets",
  },

  // Six Principles
  {
    id: "evolutionary-tension",
    term: "Evolutionary Tension",
    category: "The Six Principles",
    definition:
      "A creative, positive tension that makes you sit up straight and pay attention — the ground of genuine spiritual life. \"With no evolutionary tension there's no spiritual life.\"",
    source: "11 Days at the Edge (Andrew Cohen, spoken teaching)",
    relatedHref: "/teaching/six-principles",
  },
  {
    id: "autonomy",
    term: "Autonomy",
    category: "The Six Principles",
    definition:
      "Radical independence and spiritual authenticity — flowering in one's own potential without self-consciousness, arising simultaneously with ecstatic communion in intersubjective nonduality.",
    source: "Evolutionary Enlightenment (2011), Creating the Future; 11 Days at the Edge",
    relatedHref: "/teaching/six-principles",
  },
  {
    id: "communion",
    term: "Communion",
    category: "The Six Principles",
    definition:
      "Ecstatic communion is the blissful experience of no ego boundaries — boundaryless, radical intimacy at the level of consciousness, more profound than physical intimacy.",
    source: "11 Days at the Edge (Andrew Cohen, spoken teaching)",
    relatedHref: "/teaching/six-principles",
  },
  {
    id: "purity-of-motive",
    term: "Purity of Motive",
    category: "The Six Principles",
    definition:
      "Egoless caring — when you want the highest outcome and know it's not about you. The inner experience of pure motivation before action is taken.",
    source: "11 Days at the Edge (Andrew Cohen, spoken teaching)",
    relatedHref: "/teaching/six-principles",
  },
  {
    id: "integrity-of-action",
    term: "Integrity of Action",
    category: "The Six Principles",
    definition:
      "The willingness to follow through on pure motive even under pressure — tangible, visible action that proves transformation. \"The consistency is everything.\"",
    source: "11 Days at the Edge (Andrew Cohen, spoken teaching)",
    relatedHref: "/teaching/six-principles",
  },
  {
    id: "natural-hierarchy",
    term: "Natural Hierarchy",
    category: "The Six Principles",
    definition:
      "Each individual being absolutely true to their actual level of experience — not more, but nothing less than what is needed for the evolutionary process to move forward. Distinct from dominator hierarchy.",
    source: "11 Days at the Edge (Andrew Cohen, spoken teaching)",
    relatedHref: "/teaching/six-principles",
  },
  {
    id: "creative-friction",
    term: "Creative Friction",
    category: "The Six Principles",
    definition:
      "The engine of conscious evolution at the leading edge — the spiritual, moral, and philosophical friction that arises when sincere practitioners come together beyond ego. Authentic spiritual friendship requires creative conflict; without evolutionary tension and creative friction, higher development cannot occur.",
    source: "Evolutionary Enlightenment (2011), Creating the Future; 11 Days at the Edge",
    relatedHref: "/teaching/enlightened-communication",
  },

  // Practice
  {
    id: "meditation",
    term: "Meditation",
    category: "Practice",
    definition:
      "The art and science of stillness — an inner posture of assuming no relationship to anything that arises. \"Be still, relax, pay attention, and assume no relationship to anything that arises. That is the posture of freedom.\"",
    source: "Evolutionary Enlightenment (2011), The Art and Science of Stillness",
    relatedHref: "/teaching/meditation",
  },
  {
    id: "posture-of-freedom",
    term: "The Posture of Freedom",
    category: "Practice",
    definition:
      "The inner position of meditation — stillness in relationship to experience, having no relationship whatsoever to anything that is happening, has happened, or will ever happen. It is the enlightened relationship to one's own mind and emotions, and the portal to the ground of Being.",
    source: "Evolutionary Enlightenment (2011), The Art and Science of Stillness",
    relatedHref: "/teaching/meditation",
  },
  {
    id: "no-relationship-to-thought",
    term: "No Relationship to Thought",
    category: "Practice",
    definition:
      "Assuming no relationship to the content of consciousness — thought, feeling, memory, or sensation. When you learn to have no relationship to what arises, it doesn't matter whether the mind produces sublime revelations or frightening chaos; you remain disengaged and unmoved. This is the critical step in aligning with the Authentic Self rather than the ego.",
    source: "Evolutionary Enlightenment (2011), The Art and Science of Stillness",
    relatedHref: "/teaching/meditation",
  },
  {
    id: "inquiry",
    term: "Inquiry",
    category: "Practice",
    definition:
      "Directed cognition toward what matters most — including the practice of not knowing. \"The practice of inquiry is always learning how to be more interested in what we don't know than what we do know.\"",
    source: "Evolutionary Enlightenment (2011); The Challenge of Enlightenment (1992)",
    relatedHref: "/teaching/inquiry",
  },
  {
    id: "enlightened-communication",
    term: "Enlightened Communication",
    category: "Practice",
    definition:
      "Intersubjective nonduality in practice — coming together beyond ego so that collective intelligence and creative emergence become possible in a shared field of awakened consciousness.",
    source: "Evolutionary Enlightenment (2011), Part IV",
    relatedHref: "/teaching/enlightened-communication",
  },
  {
    id: "intersubjective-nonduality",
    term: "Intersubjective Nonduality",
    category: "Practice",
    definition:
      "Shared transcendent consciousness between subjects — a \"we-space\" in which the co-creative power of collective intelligence is unleashed and insights emerge that no one could reach alone.",
    source: "Evolutionary Enlightenment (2011), Creating the Future",
    relatedHref: "/teaching/enlightened-communication",
  },
  {
    id: "triple-gem",
    term: "The Triple Gem",
    category: "Practice",
    definition:
      "Buddha, Dharma, and Sangha — the three jewels Cohen recognized as the most profound structure for sustaining spiritual awakeness: exemplar, cosmic law, and community of like-minded practitioners.",
    source: "Evolutionary Enlightenment (2011); teachings on the Triple Gem",
    relatedHref: "/teaching/the-triple-gem",
  },
  {
    id: "sangha",
    term: "Sangha",
    category: "Practice",
    definition:
      "Spiritual fraternity — association with like-minded people for whom the shared value is unconditional enlightenment. The Buddha taught that this association is \"the whole of the holy life.\"",
    source: "Evolutionary Enlightenment (2011); Buddhist tradition",
    relatedHref: "/teaching/the-triple-gem",
  },
  {
    id: "guru-principle",
    term: "The Guru Principle",
    category: "Practice",
    definition:
      "The traditional recognition that spiritual realization can be transmitted through relationship with an enlightened teacher — one who serves as a living exemplar and perfect mirror, awakening the student to their own heart's yearning for liberation. Cohen insisted that teacher and liberation must be one and the same: the relationship can only liberate, and could not do anything else. It requires a worthy teacher whose life demonstrates the teaching, and a worthy student with total clarity of intention.",
    source: "In Defense of the Guru Principle (1999); Enlightenment Is a Secret (1991), The Teacher Is an Outward Manifestation of Your Own Heart; Evolutionary Enlightenment (2011), The Triple Gem",
    relatedHref: "/teaching/the-triple-gem",
  },
  {
    id: "dharma",
    term: "Dharma",
    category: "Practice",
    definition:
      "Cosmic law — the second jewel of the Triple Gem and the living answer to how shall I live. In Evolutionary Enlightenment, the Dharma meets evolutionary theory: we are the energy and intelligence that created the universe awakening to itself, and a moral imperative emerges to participate consciously in that process.",
    source: "Evolutionary Enlightenment (2011), teachings on the Triple Gem; Buddhist tradition",
    relatedHref: "/teaching/the-triple-gem",
  },
  {
    id: "we-space",
    term: "We-Space",
    category: "Practice",
    definition:
      "A shared field of intersubjective enlightened awareness — a creative vortex between inspired individuals in which collective intelligence is unleashed and insights emerge that no one could reach alone. The intersubjective context in which the Six Principles spontaneously arise and evolution occurs through relationship.",
    source: "Evolutionary Enlightenment (2011), Creating the Future",
    relatedHref: "/teaching/enlightened-communication",
  },
  {
    id: "sadhana",
    term: "Sadhana",
    category: "Practice",
    definition:
      "Spiritual practice — the means by which one reaches the goal of freedom. Cohen distinguishes practice performed by the ego for the ego from the recognition that, rightly understood, meditation and enlightenment are one and the same. Sadhana means time; enlightenment is the destruction of time.",
    source: "Enlightenment Is a Secret (1991), glossary; Are You Going to Jump or Not?",
    relatedHref: "/teaching/meditation",
  },
  {
    id: "transmission",
    term: "Transmission",
    category: "Practice",
    definition:
      "The living vibration of enlightened consciousness passed from teacher to student through satsang — association with truth. Enlightenment is not merely a mind trip but a living vibration that can be directly experienced in the presence of one who has stabilized doubtless awareness.",
    source: "Enlightenment Is a Secret (1991); Evolutionary Enlightenment (2011), The Triple Gem",
    relatedHref: "/teaching/the-triple-gem",
  },

  // Integral Theory
  {
    id: "integral-theory",
    term: "Integral Theory",
    category: "Integral Theory",
    definition:
      "Ken Wilber's framework for understanding reality through all quadrants, levels, lines, states, and types — holding interior and exterior, individual and collective perspectives together without reduction.",
    source: "Ken Wilber, A Brief History of Everything (1996); Sex, Ecology, Spirituality (1995)",
    relatedHref: "/teaching/integral-theory",
  },
  {
    id: "aqal",
    term: "AQAL",
    category: "Integral Theory",
    definition:
      "\"All quadrants, all levels, all lines, all states, all types\" — Wilber's shorthand for the Integral map. The four quadrants chart individual interior, individual exterior, collective interior, and collective exterior.",
    source: "Ken Wilber, Sex, Ecology, Spirituality (1995)",
    relatedHref: "/teaching/integral-theory",
  },
  {
    id: "four-quadrants",
    term: "Four Quadrants",
    category: "Integral Theory",
    definition:
      "The Integral map's four irreducible perspectives: subjective experience (I), behavior and biology (It), culture and shared meaning (We), and systems and structures (Its).",
    source: "Ken Wilber, Sex, Ecology, Spirituality (1995)",
    relatedHref: "/teaching/integral-theory",
  },
  {
    id: "kosmos",
    term: "Kosmos",
    category: "Integral Theory",
    definition:
      "The totality of manifest existence — interior and exterior, individual and collective — spelled with a K in Integral philosophy to distinguish it from \"cosmos,\" which usually means the physical universe alone. The Kosmos has an outside (matter, energy, systems) and an inside (consciousness, culture, meaning). Cohen situates Evolutionary Enlightenment in the interior of the Kosmos: \"The territory of Evolutionary Enlightenment is the interior of the cosmos.\"",
    source: "Ken Wilber, Sex, Ecology, Spirituality (1995); Evolutionary Enlightenment (2011), Introduction to Part II",
    relatedHref: "/teaching/integral-theory",
  },
  {
    id: "integral-cognition",
    term: "Integral Cognition",
    category: "Integral Theory",
    definition:
      "Cohen's term for a way of knowing that holds the primacy of Spirit while honoring the full spectrum of human development — neither collapsing awakening into psychology nor divorcing philosophy from lived realization.",
    source: "Andrew Cohen, Integral Cognition and the Primacy of Spirit (teaching)",
    relatedHref: "/teaching/integral-theory",
  },
  {
    id: "value-spheres",
    term: "Value Spheres",
    category: "Integral Theory",
    definition:
      "The traditional, modern, and postmodern structures of values and meaning that live within us — unless brought into awareness, higher potentials glimpsed in awakening cannot be actualized in real time.",
    source: "Evolutionary Enlightenment (2011), Catalyzing Emergence; Ken Wilber / Don Beck, developmental theory",
    relatedHref: "/teaching/integral-theory",
  },

  // Spiral Dynamics
  {
    id: "spiral-dynamics",
    term: "Spiral Dynamics",
    category: "Spiral Dynamics",
    definition:
      "A model of human value systems and cultural development rooted in Clare Graves's research and extended by Don Beck and Christopher Cowan — mapping how worldviews evolve through stages of increasing complexity.",
    source: "Don Beck & Christopher Cowan, Spiral Dynamics (1996)",
    relatedHref: "/teaching/spiral-dynamics",
  },
  {
    id: "vmeme",
    term: "vMeme",
    category: "Spiral Dynamics",
    definition:
      "A value-system meme — a coherent worldview with its own logic, strengths, and limitations on the developmental spiral (e.g., Purple, Blue, Orange, Green, Yellow, Turquoise in Beck and Cowan's color coding).",
    source: "Don Beck & Christopher Cowan, Spiral Dynamics (1996)",
    relatedHref: "/teaching/spiral-dynamics",
  },
  {
    id: "vertical-development",
    term: "Vertical Development",
    category: "Spiral Dynamics",
    definition:
      "The emergence of genuinely new capacities, values, and perspectives — not merely improving what already exists (horizontal change) but transforming the structure of consciousness itself.",
    source: "Evolutionary Enlightenment (2011), Catalyzing Emergence; Spiral Dynamics (1996)",
    relatedHref: "/teaching/spiral-dynamics",
  },
  {
    id: "horizontal-change",
    term: "Horizontal Change",
    category: "Spiral Dynamics",
    definition:
      "Modification or improvement within an existing worldview — better skills, strategies, or outcomes without a shift to a more complex value system or stage of consciousness.",
    source: "Evolutionary Enlightenment (2011), Catalyzing Emergence",
    relatedHref: "/teaching/spiral-dynamics",
  },
  {
    id: "clare-graves",
    term: "Clare W. Graves",
    category: "Spiral Dynamics",
    definition:
      "American psychologist whose emergent cyclical theory of adult human development forms the foundation of Spiral Dynamics — studying how people's worldviews and values systems change over time.",
    source: "Clare W. Graves; Don Beck & Christopher Cowan, Spiral Dynamics (1996)",
    relatedHref: "/teaching/spiral-dynamics",
  },
];

export function getDictionaryByCategory(): Map<
  DictionaryCategory,
  DictionaryEntry[]
> {
  const map = new Map<DictionaryCategory, DictionaryEntry[]>();
  for (const category of dictionaryCategoryOrder) {
    map.set(
      category,
      dictionaryEntries.filter((entry) => entry.category === category)
    );
  }
  return map;
}

export function getDictionaryEntry(id: string): DictionaryEntry | undefined {
  return dictionaryEntries.find((entry) => entry.id === id);
}
