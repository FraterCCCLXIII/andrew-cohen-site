import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";

export const metadata: Metadata = {
  title: "Responding to Critics — Andrew Cohen",
  description:
    "Thoughtful responses to common criticisms of Andrew Cohen — with context, compassion, and links to his own letters, books, and teachings.",
};

const sections = [
  {
    id: "why-this-page",
    title: "Why This Page Exists",
    body: `Andrew Cohen's public reputation — especially as reflected on Wikipedia and in certain former-student accounts — has often been shaped by fragments of experience, taken out of context and amplified over time. What emerges can read like a portrait of a man and a community that few who practiced seriously with him would recognize.

This page is not an exercise in denial. Andrew himself acknowledged real failures, took responsibility for the collapse of EnlightenNext, and returned to teaching with a far more nuanced understanding of power, shadow, and the guru principle. What we offer here is something different from either hagiography or condemnation: context, proportion, and the fuller truth that only becomes visible when one understands what serious spiritual training actually demands.

We write with understanding and compassion — toward those who were hurt, toward those who left with grievances, and toward anyone trying to make sense of a teacher whose work was as demanding as it was transformative.`,
    links: [
      {
        label: "Read Andrew's life story",
        href: "/life",
      },
      {
        label: "When Shadow Meets the Bodhisattva",
        href: "/books/when-shadow-meets-the-bodhisattva",
      },
    ],
  },
  {
    id: "context-matters",
    title: "Context Matters",
    body: `Any account of a spiritual community — especially one organized around intensive practice, shared aspiration, and the transmission of awakening — will sound strange, even alarming, when its methods are described without the frame that gave them meaning.

Former students sometimes describe environments of extraordinary pressure, discipline, and emotional intensity. Those descriptions are not always inventions. But they are often retold as though Cohen were running a luxury retreat or a conventional self-help program, when the actual context was closer to monastic or military training: a field deliberately structured to break through ego, complacency, and self-deception.

When that frame is removed, discipline can look like abuse. Devotion can look like cultishness. Confrontation can look like cruelty. Shared aspiration can look like coercion. The same events read very differently depending on whether one understands that the work was oriented toward liberation — and that liberation, in every great tradition, has never been comfortable.`,
    links: [
      {
        label: "The Challenge of Enlightenment",
        href: "/books/the-challenge-of-enlightenment",
      },
      {
        label: "In Defense of the Guru Principle",
        href: "/books/in-defense-of-the-guru-principle",
      },
    ],
  },
  {
    id: "the-nature-of-training",
    title: "The Nature of Serious Spiritual Training",
    body: `In traditions from Zen monasteries to Sufi orders to yogic ashrams, the path has never resembled a spa. Students submit to structure, surrender personal preference, and accept correction from those further along the way. The point is not punishment. The point is to create conditions in which the ego cannot maintain its usual defenses.

Andrew Cohen's teaching community was built on that same logic — not on pampering, but on evolutionary tension: the insistence that awakening is not a private consolation but a demand to become a vehicle for the evolution of consciousness itself. Retreats were long. Standards were high. The mirror was often uncomfortably clear.

This does not excuse every action or every moment of excess. It does mean that many of the stories circulated online describe, without acknowledgment, the very intensity that participants originally sought — and that some of the harshest portrayals come from people who experienced that intensity as liberation before later reframing it as victimization.`,
    links: [
      {
        label: "Evolutionary Enlightenment",
        href: "/books/evolutionary-enlightenment",
      },
      {
        label: "The Practice",
        href: "/practice",
      },
    ],
  },
  {
    id: "wikipedia",
    title: "The Wikipedia Problem",
    body: `Andrew Cohen's Wikipedia entry has become a focal point for the critical narrative. It draws heavily on secondary sources — books by disaffected former students, media coverage from periods of organizational crisis, and forum discussions — while giving comparatively little weight to Cohen's own writings, the testimony of long-term practitioners, or the arc of his teaching after 2016.

Wikipedia's editorial standards favor verifiable published criticism over the lived complexity of a four-decade teaching career. The result is an article that reads as comprehensive while omitting much of what would be required for a fair portrait: the breakthroughs students reported, the philosophical depth of Evolutionary Enlightenment, Cohen's own reckoning with failure, and the community that continues his work today at Manifest Nirvana.

We do not ask anyone to accept Andrew Cohen uncritically. We do ask readers to treat a Wikipedia summary as a starting point rather than a verdict — and to weigh it against primary sources.`,
    links: [
      {
        label: "View Wikipedia entry",
        href: "https://en.wikipedia.org/wiki/Andrew_Cohen_(spiritual_teacher)",
        external: true,
      },
      {
        label: "Browse the archive",
        href: "/archive",
      },
    ],
  },
  {
    id: "andrews-own-words",
    title: "Andrew's Own Words",
    body: `The most direct way to encounter Andrew Cohen is through his own writing — not through the summaries of those who left in anger. Over decades he addressed criticism openly, reflected on the collapse of his organization, and returned from sabbatical with letters and teachings that bear reading in full.

His Declaration of Integrity responds directly to the negative image cultivated in books and online forums. His open letter upon returning from sabbatical speaks to former students with honesty about what went wrong and what he learned. My Master Is My Self and Autobiography of an Awakening document the awakening and early years that set the course of his life — before the controversies that would later define his public image.

We encourage readers to encounter these sources directly before forming a final judgment.`,
    links: [
      {
        label: "Declaration of Integrity",
        href: "/archive/article-declaration-of-integrity",
      },
      {
        label: "Open letter upon return from sabbatical",
        href: "/archive/article-open-letter",
      },
      {
        label: "My Master Is My Self",
        href: "/books/my-master-is-my-self",
      },
      {
        label: "Autobiography of an Awakening",
        href: "/books/autobiography-of-an-awakening",
      },
    ],
  },
  {
    id: "specific-criticisms",
    title: "Specific Criticisms",
    body: `This section will address particular claims and accusations as they are documented — each with context, primary sources where available, and links to relevant letters, teachings, or books.

The responses below are being developed. If you have encountered a specific criticism you would like addressed, we welcome correspondence through the archive.`,
    links: [
      {
        label: "Contact the archive",
        href: "mailto:andrewcohenarchive@gmail.com?subject=Responding%20to%20Critics",
        external: true,
      },
    ],
  },
  {
    id: "further-reading",
    title: "Further Reading",
    body: `Andrew Cohen's published work spans more than three decades — from early teachings on the paradox of awakening to his mature articulation of Evolutionary Enlightenment and his later reflections on shadow, power, and the guru principle. For those willing to engage the teaching on its own terms, these books offer the fullest picture available.

Letters of Love preserves the voices of early students — intimate declarations of freedom and revelation from the years before controversy defined the public conversation. Being & Becoming and The Three Jewels of the New Enlightenment develop the philosophical architecture that serious practitioners found compelling long before the organization's collapse.`,
    links: [
      {
        label: "All books",
        href: "/books",
      },
      {
        label: "Letters of Love",
        href: "/books/letters-of-love",
      },
      {
        label: "Being & Becoming",
        href: "/books/being-and-becoming",
      },
      {
        label: "The Three Jewels of the New Enlightenment",
        href: "/books/the-three-jewels-of-the-new-enlightenment",
      },
      {
        label: "Teaching library",
        href: "/teaching",
      },
    ],
  },
];

export default function RespondingToCriticsPage() {
  return (
    <InnerPageLayout
      title="Responding to Critics"
      subtitle="Context, compassion, and the fuller picture"
      intro="Andrew Cohen's Wikipedia page and certain former-student accounts present a one-sided portrait — intensity without context, discipline mistaken for abuse, and a teaching career reduced to its most troubled chapter. This page gathers thoughtful responses, links to Andrew's own letters and books, and the framing needed to understand what serious spiritual training actually asks of those who undertake it."
      sections={sections}
      quotes={[]}
      links={[
        {
          label: "Andrew's letters",
          href: "#andrews-own-words",
        },
        {
          label: "Specific criticisms",
          href: "#specific-criticisms",
        },
        {
          label: "Browse books",
          href: "/books",
        },
        {
          label: "Read his life story",
          href: "/life",
        },
      ]}
    />
  );
}
