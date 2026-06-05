import InnerPageLayout from "@/components/InnerPageLayout";

const archiveEmail = "archive@andrewcohen.com";

const sections = [
  {
    id: "submit-content",
    title: "Submit Content to the Archive",
    body: `This site is building a living record of Andrew Cohen's teaching — books, magazine issues, journal articles, videos, audio, and transcripts spanning four decades. Much of that history lives in private collections, old hard drives, and the memories of those who practiced with him.

We welcome contributions in many forms:

Photographs — retreat gatherings, Foxhollow and international centers, teachings in India, portraits, and candid moments from community life.

Videos and audio — recorded teachings, dialogues, interviews, and retreat sessions not yet cataloged here. Original files or links are both welcome.

Written accounts — personal stories of practice, transformation, challenge, and breakthrough; reflections on what the teaching meant in your life; letters or journal entries you are willing to share.

Documents and ephemera — magazine clippings, flyers, course materials, and other printed matter that helps reconstruct the arc of the work.

When you reach out, please include whatever context you have: approximate dates, locations, names of participants, and how the material came into your possession. Our team will follow up about format, permissions, and how your contribution may be used.`,
    links: [
      {
        label: "Submit materials",
        href: `mailto:${archiveEmail}?subject=Archive%20submission`,
        external: true,
      },
    ],
  },
  {
    id: "community",
    title: "Join a Community of Practitioners",
    body: `Andrew Cohen taught that association with like-minded people is the whole of the holy life — not a supplement to practice, but its very heart. Sangha means spiritual brothers and sisters for whom the shared value is unconditional enlightenment: "All that you really want for them is their own perfect Liberation without conditions, and all they want for you is your own perfect Liberation without conditions."

For those drawn to Evolutionary Enlightenment today, Manifest Nirvana is the living community Cohen founded in 2019 — an ashram at the foot of Arunachala in Tiruvannamalai and an online platform reaching practitioners worldwide. Weekly silent meditations, live dialogues, courses, retreats, and the Co-Creating the Third Attractor series continue the work of intersubjective awakening and collective evolution.

"In Manifest Nirvana we experience the consciousness of eternity. Manifest Nirvana is a living, ever evolving intersubjective world space that we create together." Whether you join from afar or travel to India, this is the primary field for engaging the teaching in relationship with others who share the same aspiration.`,
    links: [
      {
        label: "Visit Manifest Nirvana",
        href: "https://www.manifest-nirvana.com/",
        external: true,
      },
      {
        label: "About the Ashram",
        href: "/ashram",
      },
      {
        label: "The Practice",
        href: "/practice",
      },
    ],
  },
  {
    id: "practice-group",
    title: "Start Your Own Practice Group",
    body: `Not everyone can travel to Tiruvannamalai — and Cohen never imagined that depth required a single location. What matters is sincere association with others who want freedom as much as you do. Alone, self-deception is easy. Among practitioners who love you and see you clearly, the spiritual life becomes real.

A local practice group need not be large. Even two or three people meeting regularly can create the intersubjective field Cohen described — a "we-space" in which insights emerge that no one could reach alone. A simple rhythm works well:

Begin with shared stillness — meditation as the art of assuming no relationship to whatever arises.

Contemplate together — revisit Clarity of Intention and the Five Tenets as living questions, not abstract ideals.

Practice Enlightened Communication — dialogue as inquiry, interested in what you do not already know rather than defending what you do.

Hold one another accountable with compassion — the same evolutionary tension Cohen insisted must animate any serious spiritual life.

If you are forming a group around Evolutionary Enlightenment, we would love to hear about it. Tell us where you are, how often you meet, and what you are exploring. Over time, this site may help connect local groups with shared resources and one another.`,
    links: [
      {
        label: "Daily practice guide",
        href: "/practice",
      },
      {
        label: "The Five Tenets",
        href: "/teaching/five-tenets",
      },
      {
        label: "Register a practice group",
        href: `mailto:${archiveEmail}?subject=Practice%20group`,
        external: true,
      },
    ],
  },
  {
    id: "volunteer",
    title: "Volunteer with the Archive",
    body: `Preserving and organizing decades of teaching is labor-intensive work — and much of it can be done remotely. Volunteers help this archive become more complete, searchable, and useful for future generations.

Ways to contribute time include:

Transcription — turning audio and video teachings into searchable text, as with the transcript library already growing on this site.

Cataloging and tagging — helping classify items by theme, year, location, and teaching topic so others can discover them.

Research — identifying dates, venues, and participants for undocumented recordings; tracing the history of centers, retreats, and magazine issues.

Digitization support — preparing scans, metadata, and file formats for long-term storage.

Editorial and writing — summaries, contextual notes, and cross-links between related teachings.

If you have skills in any of these areas — or simply a meticulous love for the work — write to us with how much time you can offer and what interests you most. Every hour given in service of the dharma helps keep Cohen's teaching accessible.`,
    links: [
      {
        label: "Volunteer your time",
        href: `mailto:${archiveEmail}?subject=Archive%20volunteer`,
        external: true,
      },
      {
        label: "Browse the archive",
        href: "/archive",
      },
    ],
  },
  {
    id: "donate",
    title: "Support the Archive",
    body: `This archive is maintained as a public resource — free to explore, without paywalls or subscriptions. That openness depends on ongoing support for hosting, storage, bandwidth, and the human time required to ingest, verify, and publish new material.

Your financial contribution helps cover:

Web hosting and content delivery for thousands of pages, images, and media files.

Long-term storage and backup of original audio, video, and document submissions.

Domain registration and technical maintenance to keep the site secure and available.

The slow, careful work of expanding the catalog — transcribing teachings, processing donations of physical media, and building new ways to discover Cohen's work.

No amount is too small. If this teaching has mattered in your life and you want others to encounter it with the same clarity, your support directly sustains that possibility. We are grateful for every gift.`,
    links: [
      {
        label: "Make a donation",
        href: `mailto:${archiveEmail}?subject=Archive%20donation`,
        external: true,
      },
    ],
  },
];

export default function ContributePage() {
  return (
    <InnerPageLayout
      title="Contribute"
      subtitle="Help preserve and carry the teaching forward"
      intro="This archive grows through the generosity of practitioners — those who share materials, join community, gather locally, volunteer time, and give what they can to keep Andrew Cohen's teaching alive and accessible."
      sections={sections}
      quotes={[]}
      links={[
        {
          label: "Submit content",
          href: "#submit-content",
        },
        {
          label: "Join Manifest Nirvana",
          href: "https://www.manifest-nirvana.com/",
          external: true,
        },
        {
          label: "Volunteer",
          href: "#volunteer",
        },
        {
          label: "Donate",
          href: "#donate",
        },
      ]}
    />
  );
}
