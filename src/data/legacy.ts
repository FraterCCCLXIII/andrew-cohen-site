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
      {
        id: "art-of-listening",
        title: "Art of Listening",
        description:
          "Explorations in consciousness and culture — artistic projects, workshops, and processes that change the way we experience reality through participatory, sensorial art grounded in phenomenology, collective intelligence, and the art of listening.",
        url: "https://art-of-listening.org/",
        image: "/images/legacy/art-of-listening-logo.png",
        imageAlt: "Art of Listening logo",
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
    names: "Dr. Elizabeth Debold & Dr. Thomas Steininger",
    bio: "Elizabeth Debold, a former senior editor of EnlightenNext (<em>née What Is Enlightenment?</em>) magazine, having long worked alongside her partner, the late Thomas Steininger, former editor-in-chief of Evolve magazine in Germany, continues to carry forward a dialogical approach to cultural transformation — making visible the movements of conscious change across philosophy, politics, art, and psychology.",
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
    bio: "A student of Andrew Cohen's teachings since 1998, Tom Huston served as an editor of Cohen's award-winning magazine EnlightenNext (<em>née What Is Enlightenment?</em>) and was a founding member of Ken Wilber's Integral Institute. Through Tantrika, he teaches courses in Evolutionary Nonduality for embodying the dynamic freedom of one's authentic self.",
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
    hidden: true,
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
    id: "amir-freimann",
    names: "Amir Freimann",
    bio: "An Israeli researcher and author, Amir Freimann spent over twenty years in intensive spiritual practice in Andrew Cohen's EnlightenNext community — following two years of Zen training in Japan — before returning to Israel and academia. His work bridges spiritual search and academic research, exploring spiritual transmission, living transcendence, and the Experience of Being through interviews, books, and doctoral research at the University of Haifa.",
    projects: [
      {
        id: "spiritual-research",
        title: "Spiritual Search and Academic Research",
        description:
          "A meeting place for spiritual seekers with rational sensibilities and academic researchers with spiritual sensibilities — exploring the Experience of Being, living transcendence, spiritual transmission, and enlightening each other.",
        url: "https://www.spiritualresearch.net/",
        image: "/images/legacy/spiritual-research.png",
        imageAlt: "Spiritual Search and Academic Research — Enlightening Each Other",
        imageFit: "cover",
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
    id: "carter-phipps",
    names: "Carter Phipps",
    bio: "A visionary writer, thought-leader, and student of Andrew Cohen from 1991–2013, Carter Phipps served as a senior editor of EnlightenNext (<em>née What Is Enlightenment?</em>) magazine from 1999 to 2011. His award-winning journalism and books have helped articulate the emerging conversation at the intersection of evolution, consciousness, and culture.",
    projects: [
      {
        id: "carter-phipps",
        title: "Carter Phipps",
        description:
          "Thinking ahead about leadership and culture — writing, speaking, and consulting at the intersection of business, personal development, and evolutionary change.",
        url: "https://www.carterphipps.com/",
        image: "/images/legacy/carter-phipps-logo.png",
        imageAlt: "Carter Phipps",
        imageFit: "contain",
        imageBackground: "white",
      },
      {
        id: "evolutionaries",
        title: "Evolutionaries",
        description:
          "A groundbreaking guide to the movement of scientists, philosophers, and spiritual thinkers illuminating the secrets of our past and expanding the vistas of our future.",
        url: "https://www.carterphipps.com/evolutionaries/",
        image: "/images/legacy/evolutionaries-cover.png",
        imageAlt: "Evolutionaries book cover",
        imageFit: "contain",
      },
      {
        id: "thinking-ahead",
        title: "Thinking Ahead",
        description:
          "A podcast exploring the movements, trends, people, and ideas shaping the future — from business and politics to science, technology, consciousness, and spirituality.",
        url: "https://www.carterphipps.com/podcast/",
        image: "/images/legacy/thinking-ahead-podcast.jpg",
        imageAlt: "Thinking Ahead podcast",
        imageFit: "cover",
      },
      {
        id: "institute-for-developmental-philosophy",
        title: "Institute for Developmental Philosophy",
        description:
          "A nonprofit advancing humanity's understanding of cultural evolution — renewing society's commitment to truth, beauty, and goodness through developmental politics and integrative policy.",
        url: "https://www.developmentalphilosophy.org/",
        image: "/images/legacy/institute-for-developmental-philosophy-logo.png",
        imageAlt: "Institute for Developmental Philosophy logo",
        imageFit: "contain",
        imageBackground: "white",
      },
    ],
  },
  {
    id: "amy-edelstein",
    names: "Amy Edelstein",
    bio: "A transformative educator, author, and close student of Andrew Cohen from 1986–2013, Amy Edelstein served as a senior editor of What Is Enlightenment? magazine and Communications Director for EnlightenNext. She now directs her work toward youth and education as the founder of Inner Strength Education and cofounder of Emergence Education Press.",
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
    id: "gerard-senehi",
    names: "Gerard Senehi",
    bio: "A longtime student of Andrew Cohen and member of the EnlightenNext community, Gerard Senehi is a mentalist, educator, and philanthropist who carried the big questions awakened in Cohen's teaching into public education. After years at Foxhollow and a career as an internationally acclaimed mystery performer, he founded Open Future Institute in 2013 with Francesca Rusciani — empowering young people to explore meaning, purpose, and the values that will shape their lives and the culture of the future.",
    portrait: "/images/legacy/gerard-senehi.jpg",
    portraitAlt: "Gerard Senehi",
    projects: [
      {
        id: "open-future-institute",
        title: "Open Future Institute",
        description:
          "A nonprofit bringing The QUESTion Project into high schools — a semester-long credit-bearing course where students address life's biggest questions about meaning, purpose, and their role in making the world a better place.",
        url: "https://openfutureinstitute.org/",
        image: "/images/legacy/open-future-institute-logo.png",
        imageAlt: "Open Future Institute logo",
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
    id: "tim-mansfield",
    names: "Tim Mansfield",
    bio: "A longtime member of Andrew Cohen's EnlightenNext community for nineteen years, Tim Mansfield lived at Foxhollow and participated deeply in the life of the sangha through its rise, creative flourishing, and eventual collapse. His book offers a committed first-hand account of the vision, endeavour, and complexity of Cohen's spiritual community.",
    projects: [
      {
        id: "invoking-the-authentic-self",
        title: "Invoking the Authentic Self",
        description:
          "The life and work of Andrew Cohen's spiritual community — a first-hand account of EnlightenNext's pioneering experiment in consciousness, its remarkable achievements, and its dramatic collapse in 2013.",
        url: "https://www.amazon.com/Invoking-Authentic-Self-Tim-Mansfield/dp/1913663876",
        image: "/images/legacy/invoking-the-authentic-self.png",
        imageAlt: "Invoking the Authentic Self book cover",
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
  {
    id: "morgan-dix",
    names: "Morgan Dix",
    bio: "Morgan Dix is a cofounder of AboutMeditation.com, where he hosts the OneMind Meditation Podcast. He offers meditation coaching for new and seasoned meditators, drawing on fifteen years of formal meditation training in a contemporary yoga and meditation ashram focused on the non-dual teachings of Ramana Maharshi, and holds Mindfulness Meditation Teacher certification through Tibet House and Dharma Moon.",
    projects: [
      {
        id: "morgan-dix-meditation-coaching",
        title: "Meditation Coaching",
        description:
          "One-on-one meditation coaching to help new and seasoned meditators discover meaning, purpose, and life-changing positivity through meditation.",
        url: "https://www.morgandix.com/meditation-coaching/",
        image: "/images/legacy/morgan-dix-meditation-coaching.png",
        imageAlt: "Meditation Coaching logo",
        imageFit: "contain",
        imageBackground: "white",
      },
      {
        id: "about-meditation",
        title: "About Meditation",
        description:
          "A home for building a vibrant meditation practice — free courses, the OneMind Meditation Podcast, and guided resources for shifting from stress to inner calm.",
        url: "https://aboutmeditation.com/",
        image: "/images/legacy/about-meditation.jpg",
        imageAlt: "About Meditation",
        imageFit: "cover",
      },
    ],
  },
  {
    id: "aterah-nusrat",
    names: "Aterah Nusrat",
    bio: "Aterah Nusrat is Senior Program Manager and Director of Programming in Integrative Medicine and Planetary Health at the Osher Center for Integrative Medicine. She holds an MSc in Environmental Technology from Imperial College, University of London, and describes herself as a seasoned meditation practitioner with more than twenty-five years of experience in program and event management, marketing, communications, and grant management.",
    portrait: "/images/legacy/aterah-nusrat.jpg",
    portraitAlt: "Aterah Nusrat",
    projects: [
      {
        id: "icon-2026-aterah-nusrat",
        title: "ICON 2026 — Supporting Collective Spiritual Emergence",
        description:
          "Supporting Collective Spiritual Emergence: From Laboratory Lessons To Planetary Wellbeing — a presentation at ICON 2026.",
        url: "https://weareicon.org/events/supporting-collective-spiritual-emergence-from-laboratory-lessons-to-planetary-wellbeing/",
        image: "/images/legacy/icon-cover.jpg",
        imageAlt: "ICON — Integral Conference of North America",
        imageFit: "cover",
      },
      {
        id: "osher-center-aterah-nusrat",
        title: "Osher Center for Integrative Medicine",
        description:
          "Senior Program Manager and Director of Programming in Integrative Medicine and Planetary Health — integrating environmental sustainability, meditation, and integrative medicine programming.",
        url: "https://oshercenter.org/oc-leadership/aterah-nusrat-msc-dic/",
        image: "/images/legacy/osher-center-logo.png",
        imageAlt: "Osher Center for Integrative Medicine logo",
        imageFit: "contain",
        imageBackground: "white",
      },
    ],
  },
  {
    id: "faheem-nusrat",
    names: "Faheem Nusrat",
    bio: "Faheem Nusrat has explored Eastern culture and practice for over thirty years, with lived experience in intentional community, alongside many years of work in the tech industry. A long-standing collaborator with 3rd Space, he co-leads the Living with Uncertainty learning pathway and has shared reflections on Andrew Cohen in Conversations from the Heart.",
    projects: [
      {
        id: "third-space-living-with-uncertainty",
        title: "3rd Space — Living with Uncertainty",
        description:
          "A twelve-session learning pathway for thinking clearly about AI — drawing on evolutionary biology, philosophy of technology, and the study of consciousness to navigate a disorienting time.",
        url: "https://3rd-space.org/learning-pathway/",
        image: "/images/legacy/third-space-logo.png",
        imageAlt: "3rd Space logo",
        imageFit: "contain",
        imageBackground: "white",
      },
      {
        id: "emergence-education-ai-course",
        title: "A Fresh Perspective on AI and What It Means to Be Human",
        description:
          "A free Emergence Education conversation introducing the Living with Uncertainty course — exploring what this moment in human history might be asking of us.",
        url: "https://emergenceeducation.com/programs/a-fresh-perspective-on-ai-and-what-it-means-to-be-human/",
        image: "/images/legacy/emergence-education-logo.png",
        imageAlt: "Emergence Education logo",
        imageFit: "contain",
      },
    ],
  },
  {
    id: "igal-harmelin",
    names: "Rabbi Igal Harmelin",
    bio: "Rabbi Igal Harmelin offers sessions for healing developmental trauma, spiritual direction, and mental health coaching. He conducts meditative attunement workshops for therapists and is a certified practitioner of the NeuroAffective Relational Model (NARM).",
    projects: [
      {
        id: "igal-harmelin",
        title: "Rabbi Igal Harmelin",
        description:
          "Spiritual direction, developmental trauma healing, mental health coaching, and meditative attunement workshops for therapists.",
        url: "https://www.igalharmelin.com/",
        image: "/images/legacy/igal-harmelin.jpg",
        imageAlt: "Rabbi Igal Harmelin",
        imageFit: "cover",
      },
    ],
  },
  {
    id: "mike-kauschke",
    names: "Mike Kauschke",
    bio: "Mike Kauschke lives in the Chiemgau region of Germany as an author, editor, translator, dialog facilitator, poet, and photographer.",
    projects: [
      {
        id: "mike-kauschke",
        title: "Mike Kauschke",
        description:
          "Author, translator, editor, photographer, and dialog facilitator — sharing books, translations, editorial projects, and a newsletter on poetic and dialogical ways of engaging life.",
        url: "https://mike-kauschke.de/",
        image: "/images/legacy/mike-kauschke-logo.png",
        imageAlt: "Mike Kauschke",
        imageFit: "contain",
        imageBackground: "white",
      },
    ],
  },
];
