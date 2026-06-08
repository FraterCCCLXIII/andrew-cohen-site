export interface LegacyProject {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  imageBackground?: "white";
}

export interface LegacyProfile {
  id: string;
  names: string;
  bio: string;
  portrait?: string;
  portraitAlt?: string;
  projects: LegacyProject[];
  hidden?: boolean;
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
        id: "manifest-nirvana",
        title: "Manifest Nirvana",
        description:
          "A spiritual community and online platform dedicated to Evolutionary Enlightenment — rooted at the foot of Arunachala in Tiruvannamalai and reaching a global community through live teachings, retreats, guided meditations, and intersubjective practice.",
        url: "https://manifest-nirvana.com/",
        image: "/images/legacy/manifest-nirvana-logo.svg",
        imageAlt: "Manifest Nirvana logo",
        imageFit: "contain",
        imageBackground: "white",
      },
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
    id: "vincent-drouot",
    names: "Vincent Drouot",
    bio: "Originally from France, Vincent Drouot is a trainer and instructional designer specializing in Generative AI, with a background as an entrepreneur spanning technology, training, and innovation. A senior practitioner of Evolutionary Enlightenment, he has been a dedicated student of Andrew Cohen since 2008, following a life-changing retreat where he met his teacher. Over the past 17 years, he has cultivated a close relationship with Andrew as guru, mentor, and friend. An active member of Manifest Nirvana, Vincent lives in France, where he continues his work in both technology and spiritual practice.",
    portrait: "/images/legacy/vincent-drouot.jpg",
    portraitAlt: "Vincent Drouot",
    projects: [
      {
        id: "manifest-nirvana",
        title: "Manifest Nirvana",
        description:
          "A spiritual community and online platform dedicated to Evolutionary Enlightenment — rooted at the foot of Arunachala in Tiruvannamalai and reaching a global community through live teachings, retreats, guided meditations, and intersubjective practice.",
        url: "https://manifest-nirvana.com/",
        image: "/images/legacy/manifest-nirvana-logo.svg",
        imageAlt: "Manifest Nirvana logo",
        imageFit: "contain",
        imageBackground: "white",
      },
    ],
  },
  {
    id: "annick-macher",
    names: "Annick Macher",
    bio: "A lawyer, trainer, and consultant in labor law in France, Annick Macher is deeply interested in the world of work and its evolution, facilitating social dialogue within companies. A long-term student of Andrew Cohen for 17 years, she has been passionately inspired by the teachings of Evolutionary Enlightenment and the innovative practice of intersubjective dialogue — which she now uses as a compass to help reclaim meaning in human relationships at work.",
    portrait: "/images/legacy/annick-macher.jpg",
    portraitAlt: "Annick Macher",
    projects: [
      {
        id: "manifest-nirvana",
        title: "Manifest Nirvana",
        description:
          "A spiritual community and online platform dedicated to Evolutionary Enlightenment — rooted at the foot of Arunachala in Tiruvannamalai and reaching a global community through live teachings, retreats, guided meditations, and intersubjective practice.",
        url: "https://manifest-nirvana.com/",
        image: "/images/legacy/manifest-nirvana-logo.svg",
        imageAlt: "Manifest Nirvana logo",
        imageFit: "contain",
        imageBackground: "white",
      },
    ],
  },
  {
    id: "sara-topsoe",
    names: "Sara Topsoe",
    bio: "An artist by profession with more than twenty years of experience leading creative processes, Sara Topsoe has served as an artistic leader in cross-aesthetic and co-creative performance productions. Since meeting Andrew Cohen in 2011 and becoming his student, she has been passionately involved in the spiritual practice, development, and facilitation of intersubjective dialogue.",
    portrait: "/images/legacy/sara-topsoe.jpg",
    portraitAlt: "Sara Topsoe",
    projects: [
      {
        id: "manifest-nirvana",
        title: "Manifest Nirvana",
        description:
          "A spiritual community and online platform dedicated to Evolutionary Enlightenment — rooted at the foot of Arunachala in Tiruvannamalai and reaching a global community through live teachings, retreats, guided meditations, and intersubjective practice.",
        url: "https://manifest-nirvana.com/",
        image: "/images/legacy/manifest-nirvana-logo.svg",
        imageAlt: "Manifest Nirvana logo",
        imageFit: "contain",
        imageBackground: "white",
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
        image: "/images/legacy/evolve-magazin-logo.png",
        imageAlt: "evolve magazin logo",
        imageFit: "contain",
        imageBackground: "white",
      },
      {
        id: "evolve-world",
        title: "evolve World",
        description:
          "A human hive of co-creative emergence — a growing community of inquiry and practice catalyzing new consciousness and culture through magazine, podcast, salons, live events, courses, and the Communiverse membership community.",
        url: "https://www.evolve-world.org/",
        image: "/images/legacy/evolve-world-logo.svg",
        imageAlt: "evolve World logo",
        imageFit: "contain",
      },
      {
        id: "interbeing-monastery",
        title: "Interbeing Monastery",
        description:
          "A global online community of practice where the sacred opens between us — offering weekday meditation, Open Interbeing Lab, tea dialogues, and quarterly days of practice for cultivating emergence through interbeing and dialogue.",
        url: "https://www.evolve-world.org/interbeing-monastery",
        image: "/images/legacy/interbeing-monastery.png",
        imageAlt: "Interbeing Monastery — a global online community of practice",
        imageFit: "cover",
      },
    ],
  },
  {
    id: "tom-huston",
    names: "Tom Huston",
    bio: "A professional writer and longtime practitioner of integral spirituality, Tom Huston served as an editor of Andrew Cohen's award-winning magazine What Is Enlightenment? and as a founding member of Ken Wilber's Integral Institute. Through Tantrika, he teaches courses in integral psychospiritual development for embodying the freedom of one's authentic self.",
    portrait: "/images/legacy/tom-huston.jpg",
    portraitAlt: "Tom Huston",
    projects: [
      {
        id: "tantrika",
        title: "Tantrika",
        description:
          "Programs in integral psychospiritual development — discovering the timeless, world-embracing way of nondual tantra through courses such as The Way of Advaya Tantra.",
        url: "https://www.tantrika.life/",
        image: "/images/legacy/tantrika-logo.png",
        imageAlt: "Tantrika logo",
        imageFit: "contain",
        imageBackground: "white",
      },
    ],
  },
  {
    id: "lovena-vencatakistnen",
    names: "Lovena Vencatakistnen",
    bio: "An integrative hypnotherapist and former member of EnlightenNext, Lovena Vencatakistnen brings decades of meditation training and integral psychotherapy to her work. Through Symphony Therapy, she helps clients resolve deep-seated patterns through past-life regression, inner child healing, and other transformative modalities — online worldwide and in person in London.",
    portrait: "/images/legacy/lovena-vencatakistnen.jpg",
    portraitAlt: "Lovena Vencatakistnen",
    projects: [
      {
        id: "symphony-therapy",
        title: "Symphony Therapy",
        description:
          "A holistic synthesis of integrative hypnotherapy — addressing problems at their source through past-life regression, inner child healing, life between lives spiritual regression, and future-life progression.",
        url: "https://www.symphonytherapy.com/",
        image: "/images/legacy/symphony-therapy-logo.svg",
        imageAlt: "Symphony Therapy logo",
        imageFit: "contain",
        imageBackground: "white",
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
        id: "emergence-education",
        title: "Emergence Education",
        description:
          "A publishing house and educational platform dedicated to spiritual awakening and paradigm-shifting ideas — featuring books, The Artist of Possibility magazine, programs, and The Mystery School.",
        url: "https://emergenceeducation.com/",
        image: "/images/legacy/emergence-education-logo.png",
        imageAlt: "Emergence Education logo",
        imageFit: "contain",
      },
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
    id: "amy-edelstein",
    names: "Amy Edelstein",
    bio: "A transformative educator, author, and longtime student of Andrew Cohen's Evolutionary Enlightenment since 1986, Amy Edelstein served as a senior editor of What Is Enlightenment? magazine and Communications Director for EnlightenNext. She now directs her work toward youth and education — founding Inner Strength Education and co-founding Emergence Education Press.",
    projects: [
      {
        id: "amy-edelstein",
        title: "Amy Edelstein",
        description:
          "Transformative educator, author, and school mindfulness leader — offering courses, award-winning books, the Conscious Classroom podcast, and guided practice for personal and cultural change.",
        url: "https://amyedelstein.com/",
        image: "/images/legacy/conscious-classroom-cover.png",
        imageAlt: "The Conscious Classroom by Amy Edelstein",
        imageFit: "contain",
      },
      {
        id: "inner-strength-education",
        title: "Inner Strength Education",
        description:
          "A proven teen mindfulness and social-emotional learning program bringing mindfulness and systems thinking to classrooms — empowering students with calm, curiosity, and care across Philadelphia and beyond.",
        url: "https://innerstrengtheducation.org/",
        image: "/images/legacy/inner-strength-education-logo.png",
        imageAlt: "Inner Strength Education logo",
        imageFit: "contain",
        imageBackground: "white",
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
        image: "/images/legacy/icon-logo.png",
        imageAlt: "ICON — Integral Conference of North America",
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
      {
        id: "nondualize",
        title: "Nondualize.com",
        description:
          "Meditation and spiritual teachings with Andrew Cohen — a platform for awakening, offering guided practice and dharma drawn from Evolutionary Enlightenment.",
        url: "https://nondualize.com/",
        image: "/images/legacy/nondualize-icon.png",
        imageAlt: "Nondualize.com",
        imageFit: "contain",
      },
    ],
  },
  {
    id: "pete-bampton",
    names: "Pete Bampton",
    bio: "A British-born spiritual teacher who studied with Andrew Cohen for over a decade as a member of EnlightenNext. With Cynthia Lea Rose, he co-founded the Awakened Life Project in Portugal — hosting silent retreats devoted to meditation and evolutionary spirituality. His book The Fire of the Heart articulates a direct, contemporary approach to awakening.",
    projects: [
      {
        id: "fire-of-the-heart",
        title: "The Fire of the Heart",
        description:
          "An approach to spiritual awakening that is direct, contemporary, and integral in its embrace of the human condition — exploring the radical immediacy and evolutionary potential of the heart.",
        url: "https://www.amazon.com/Fire-Heart-Peter-Bampton/dp/164606769X/",
        image: "/images/legacy/fire-of-the-heart-cover.png",
        imageAlt: "The Fire of the Heart book cover",
        imageFit: "contain",
      },
    ],
  },
];
