export interface LegacyProject {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
}

export interface LegacyProfile {
  id: string;
  names: string;
  bio: string;
  portrait?: string;
  portraitAlt?: string;
  projects: LegacyProject[];
}

export const legacyIntro = {
  subtitle: "Students & Initiatives",
  title: "Legacy",
  description:
    "Andrew Cohen's teaching catalyzed a generation of practitioners who went on to create books, platforms, communities, and experiments in conscious evolution. This page gathers profiles of his students and projects initiated by former members of EnlightenNext — a living map of how the work continues to unfold.",
};

export const legacyProfiles: LegacyProfile[] = [
  {
    id: "daniela-bomatter",
    names: "Daniela Bomatter",
    bio: "A spiritual practitioner, teacher, and cultural visionary who studied with Andrew Cohen from 2008 onward. She co-founded Manifest Nirvana in 2019 and, since Cohen's passing, continues to host retreats at Arunachala while extending the teaching through writing, dialogue, and new cultural forms.",
    portrait: "/images/legacy/daniela-bomatter.jpg",
    portraitAlt: "Daniela Bomatter",
    projects: [
      {
        id: "viratya-myth",
        title: "The Viratya Myth",
        description:
          "A visionary novel of speculative fiction — poetic, immersive, and alive with symbolic language. Not formulaic sci-fi or packaged spirituality, but a field you enter: a culture awakening from within.",
        url: "https://viratya.com/",
        image: "/images/legacy/viratya-book-cover.png",
        imageAlt: "The Viratya Myth book cover",
        imageFit: "contain",
      },
      {
        id: "third-attractor",
        title: "Co-creating the Third Attractor",
        description:
          "A conversation series and inquiry into meta-coherence — listening to the call from the future through dialogues with thinkers, mystics, activists, and system designers exploring what lies beyond the meta-crisis.",
        url: "https://3da.manifest-nirvana.com/",
        image: "/images/legacy/third-attractor-cover.webp",
        imageAlt: "Co-creating the Third Attractor",
        imageFit: "cover",
      },
    ],
  },
  {
    id: "steve-brett-mary-adams",
    names: "Steve Brett & Mary Adams",
    bio: "Longtime students of Andrew Cohen and contributors to EnlightenNext, Steve and Mary founded 3rd Space — a platform for new perspectives in critical times. Through articles, interviews, podcasts, and immersive journeys, they convene voices reshaping the future of consciousness and society.",
    projects: [
      {
        id: "third-space",
        title: "3rd Space",
        description:
          "A home for alternatives — new ways of thinking, being, and doing beyond polarising ideologies. A refuge for depth, intercultural communication, and sensemaking for a world in transition.",
        url: "https://3rd-space.org/",
        image: "/images/legacy/third-space-logo.png",
        imageAlt: "3rd Space logo",
        imageFit: "contain",
      },
    ],
  },
  {
    id: "elizabeth-debold-tom-steininger",
    names: "Elizabeth Debold & Tom Steininger",
    bio: "Elizabeth Debold, a founding editor of EnlightenNext (What Is Enlightenment?), and Tom Steininger, co-founder of evolve, carry forward a dialogical approach to cultural transformation — making visible the movements of conscious change across philosophy, politics, art, and psychology.",
    projects: [
      {
        id: "evolve-magazin",
        title: "evolve Magazin",
        description:
          "A voice of a new culture of consciousness emerging across society. evolve tracks innovative visionaries and activists, offering a dialogue forum for those bringing more spirit into the world through their own development and the transformation of culture.",
        url: "https://www.evolve-world.org/evolve-magazin",
        image: "/images/legacy/evolve-world-logo.svg",
        imageAlt: "evolve Magazin logo",
        imageFit: "contain",
      },
    ],
  },
  {
    id: "emergence-foundation",
    names: "Emergence Foundation",
    bio: "A fund created from EnlightenNext by former members, the Emergence Foundation supports those engaged in social justice, activism, and making the world a better place — offering grants, retreats, and spaces for regeneration, contemplation, and enquiry.",
    projects: [
      {
        id: "emergence-foundation",
        title: "Emergence Foundation",
        description:
          "From grant-giving to hosting retreats and events, the Foundation creates spaces where activists and changemakers can remember and re-engage with the deepest parts of themselves — and return to their work renewed.",
        url: "https://emergencefoundation.org/",
        image: "/images/legacy/emergence-cover.jpg",
        imageAlt: "Emergence Foundation",
        imageFit: "cover",
      },
    ],
  },
  {
    id: "craig-hamilton",
    names: "Craig Hamilton",
    bio: "A pioneering spiritual teacher and founding member of Ken Wilber's Integral Institute, Craig Hamilton spent eight years as Senior Editor of What Is Enlightenment? magazine. His contemporary approach to direct awakening has transformed seekers in over 85 countries.",
    projects: [
      {
        id: "craig-hamilton",
        title: "Craig Hamilton",
        description:
          "Online courses, guided meditations, and a monthly membership program integrating decades of intensive practice with a revolutionary approach to meditation — bringing enlightenment down to earth and unlocking the codes to our highest human potential.",
        url: "https://craighamiltonglobal.com/",
        image: "/images/legacy/craig-hamilton-logo-full.png",
        imageAlt: "Craig Hamilton",
        imageFit: "contain",
      },
    ],
  },
  {
    id: "jeff-carreira",
    names: "Jeff Carreira",
    bio: "Author, teacher, and founder of The Mystery School, Jeff Carreira has dedicated over thirty years to spiritual liberation, soul development, and transdimensional spirituality — exploring the invisible dimensions of reality and our inner capacities for transformation.",
    projects: [
      {
        id: "jeff-carreira",
        title: "Jeff Carreira & The Mystery School",
        description:
          "Programs, retreats, books, and an online community for spiritual transformation and mutual evolution — liberating ourselves from the limits of ordinary selfhood and exploring higher realms of being.",
        url: "https://jeffcarreira.com/",
        image: "/images/legacy/mystery-school-logo.png",
        imageAlt: "The Mystery School",
        imageFit: "contain",
      },
    ],
  },
  {
    id: "gia-mantra",
    names: "Gia Mantra Global Village",
    bio: "An experimental eco-village at the foot of Arunachala in Tamil Nadu. Andrew Cohen, Alka Arora, and Daniela Bomatter were among its early investors — supporting a global community dedicated to sustainable living, spiritual growth, and holistic wellness.",
    projects: [
      {
        id: "gia-mantra",
        title: "Gia Mantra Global Village",
        description:
          "A peaceful eco-village offering wellness retreats, organic farming, spa services, and sustainable real estate — nurturing a life of harmony in community and nature.",
        url: "https://www.giamantraglobalvillage.com/",
        image: "/images/legacy/gia-mantra-cover.png",
        imageAlt: "Gia Mantra Global Village",
        imageFit: "cover",
      },
    ],
  },
  {
    id: "paul-bloch",
    names: "Paul Bloch",
    bio: "A student of Andrew Cohen's teaching and a builder of cultural infrastructure — creating platforms that connect evolutionary spirituality with community, media, and the sacred landscape of Tiruvannamalai.",
    projects: [
      {
        id: "icon",
        title: "ICON",
        description:
          "A global initiative at the intersection of consciousness, culture, and collective evolution — convening practitioners and visionaries around the work of awakening in the twenty-first century.",
        url: "https://weareicon.org/",
        image: "/images/legacy/icon-cover.jpg",
        imageAlt: "ICON",
        imageFit: "contain",
      },
      {
        id: "tiru-fm",
        title: "Tiru.fm",
        description:
          "A radio and media platform rooted in Tiruvannamalai — sharing sound, culture, and the living spirit of the sacred mountain.",
        url: "https://tiru.fm",
        image: "/images/legacy/tiru-fm-icon.svg",
        imageAlt: "Tiru.fm",
        imageFit: "contain",
      },
    ],
  },
];
