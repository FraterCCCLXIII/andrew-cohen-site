import InnerPageLayout from "@/components/InnerPageLayout";

const sections = [
  {
    title: "The Practice of Evolutionary Enlightenment",
    body: `Andrew Cohen returns again and again to a truth the greatest masters have told us: the path and the goal are one. "The very desire to embark on a spiritual path and to engage in spiritual practice is already the dawning of spiritual freedom, because that desire is the felt vibration and pulsation of the Authentic Self striving to awaken within us."

The practice has two fundamental components reflecting the domains of Being and Becoming. In the domain of Being, the practice is learning to master the timeless art and science of meditative stillness. In the domain of Becoming, the practice is defined by the Five Tenets — and, when individuals come together in earnest, by what spontaneously emerges between them as Enlightened Communication.

Transcending ego is not an end in itself. It is a means to a higher end: opening space within the self for evolution to occur. Inner freedom becomes the foundation from which to engage in conscious evolution.`,
  },
  {
    title: "A Daily Practice Guide",
    body: `Cohen's teaching does not prescribe a monastic rule, but it does demand consistency of intention. A daily rhythm might unfold along these lines:

Morning — Sit in stillness. Be still, relax, pay attention, and assume no relationship to whatever arises. Even twenty or thirty minutes of genuine letting-go meditation establishes the ground of the day.

Contemplation — Ask: What is most important to me today? Reaffirm Clarity of Intention. Do I want to be Free more than anything else? Let this question orient every significant choice.

Throughout the day — Live the Five Tenets as a lived contemplation: take responsibility rather than blame; face what arises rather than avoid it; see difficulties from the process perspective; let motive shift from self to the whole when possible.

Enlightened Communication — Wherever possible, engage with others from transparency rather than positioning. In sangha or with fellow practitioners, enter dialogue as inquiry: What don't I already know?

Evening — Review the day without dramatizing failure. Where did avoidance win? Where was integrity of action visible? Return to stillness before sleep.

Cohen insists that intention, not feeling, is what keeps us connected when higher states fade. "The way to stay awake is to intend to stay awake as a life priority."`,
  },
  {
    title: "Retreat — The Deeper Reason",
    body: `Most people go on retreat seeking relief from the tyranny of mind and emotion — and that is understandable. But Cohen points to a deeper reason: "The point of coming on a spiritual retreat, especially a retreat about enlightenment, is to give yourself an opportunity to let go of absolutely everything unconditionally."

It is only when you are able to let go that much that you can begin to wake up — let go of your own mind, let go of everyone else's mind, and discover higher states of consciousness in which an ecstatic freedom changes everything. Retreat also creates the conditions for serious philosophical and metaphysical inquiry: the kind of questioning that cannot be sustained amid the momentum of ordinary life.

On retreat, the shared field intensifies. Evolutionary tension replaces casual self-indulgence. "The spiritual life has to be pregnant with evolutionary tension. With no evolutionary tension there's no spiritual life." Intensive retreat compresses what daily practice unfolds over months, and often reveals what we have been unwilling to face.`,
  },
  {
    title: "Sangha — Association with Like-Minded People",
    body: `When the Buddha was asked whether association with like-minded people is part of the holy life, his answer was: association with like-minded people is the whole of the holy life. Cohen felt this statement was shocking in its implications — and profoundly true.

Sangha means spiritual brothers and sisters with whom the shared value is unconditional enlightenment. Such relationships are utterly unique: "All that you really want for them is their own perfect Liberation without conditions, and all they want for you is your own perfect Liberation without conditions."

Most of us need structure to remain connected to depth. Alone, self-deception is easy. Among sincere practitioners who love us and see us clearly, we cannot lie to ourselves for long. The intersubjective field becomes the canvas on which the spiritual life is enacted — and the true test of our sincerity.`,
  },
];

export default function PracticePage() {
  return (
    <InnerPageLayout
      title="Practice"
      subtitle="Living the Teaching"
      intro="How to learn and live Andrew Cohen's teaching — through daily discipline, retreat, sangha, and the ongoing integration of meditation, inquiry, and enlightened communication."
      sections={sections}
      quotes={[]}
      bookSource="Drawn from Evolutionary Enlightenment (2011), 11 Days at the Edge, The Challenge of Enlightenment, and related published work."
      links={[
        { label: "Meditation", href: "/teaching/meditation" },
        { label: "Inquiry", href: "/teaching/inquiry" },
        {
          label: "Enlightened Communication",
          href: "/teaching/enlightened-communication",
        },
        { label: "The Five Tenets", href: "/teaching/five-tenets" },
        { label: "The Six Principles", href: "/teaching/six-principles" },
        { label: "The Triple Gem", href: "/teaching/the-triple-gem" },
        { label: "The Spiritual Path", href: "/teaching/the-spiritual-path" },
        { label: "Manifest Nirvana", href: "/ashram" },
      ]}
    />
  );
}
