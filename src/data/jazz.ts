import { getArchiveItemById, type ArchiveItem } from "@/data/archive";

export interface JazzGalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export interface JazzAlbum {
  id: string;
  title: string;
  year: number;
  cover?: string;
  coverAlt: string;
  description: string;
}

export interface JazzVideoRef {
  archiveId: string;
  description?: string;
}

export interface JazzSection {
  title: string;
  paragraphs: string[];
}

export interface JazzBandMember {
  name: string;
  role: string;
  bio: string;
  group: "leaders" | "west" | "east";
  guest?: boolean;
}

export interface JazzReview {
  text: string;
  source: string;
  category: "media" | "club";
}

export interface JazzVenueRegion {
  region: string;
  venues: string[];
}

export const jazzIntro = {
  subtitle: "Music",
  title: "Jazz",
  description:
    "Long before he became a spiritual teacher, Andrew Cohen was a drummer — and jazz remained one of the great loves of his life. For Cohen, jazz was never merely entertainment. It was a living metaphor for enlightenment: spontaneous creation in the moment, deep listening, ego-transcendence in ensemble, and the courage to improvise beyond the known.",
};

export const jazzSections: JazzSection[] = [
  {
    title: "A lifelong passion",
    paragraphs: [
      `Raised in New York City, Cohen grew up immersed in the sound-world of modern jazz — the pulse of bebop, the expansiveness of fusion, the raw immediacy of live improvisation. Throughout his years as a teacher and community leader, he continued to play drums, often speaking of music as a parallel path to the spiritual life: both demand presence, surrender, discipline, and the willingness to risk the unknown.`,
    ],
  },
  {
    title: "Unfulfilled Desires",
    paragraphs: [
      `Unfulfilled Desires (UD) is an international indie jazz-funk-rock collective with a diverse line-up of players on both sides of the Atlantic. The band's fresh and eclectic sound is the combined expression of the jazz, classical, rock, funk, and avant-garde backgrounds of a revolving international lineup. From France, Germany, Chile, and the US, these talented and creative improvisational musicians span three continents to create a unique musical expression that both includes and transcends their cultural and musical influences. The sound is a brash combination of jazz virtuosity, funk-rock groove, and raw soul.`,
      `The visionary heart and core foundation of the band is the Massachusetts-based team of fusion drummer Andrew Cohen and classically trained sax, EWI, and flute player Rodrigo Tarraza. In 2000, they and a few friends started jamming together in the Berkshires and Unfulfilled Desires was born. Since then the band has consistently evolved through different formations, rocking clubs from New York to Paris to Tel Aviv with a dynamic and sophisticated sound. UD has released two indie CDs — Live at the Iron Horse (2003) and Enlightened Dog (2005) — and Punk Funk followed in summer 2008.`,
      `Throughout the year, Unfulfilled Desires East and West tours the US and Europe inspiring audiences numbering 50–500+ to dance and dissolve into hypnotic grooves. Last summer, they played sold-out performances in Israel's top jazz clubs. They've shared the stage with contemporary jazz greats Mike Stern, The Bad Plus, Oz Noy Trio, and guitar virtuosos David Fiuczynski with his band Screaming Headless Torsos as well as Fareed Haque's Garaj Mahal. Special guest band member, saxophonist Jim Campagnola, joins UD East whenever available.`,
    ],
  },
  {
    title: "UD East & UD West",
    paragraphs: [
      `The current European collective of the band, known as UD East, has been playing together on and off with great intensity and collaborative creativity since 2004. Their sound is defined by the super funky pocket playing of Paris-based electric bassist Christophe Bonnard, the powerful and uber-creative rock guitar of German-born Matthias Vogel, and the warm jazzy and supportive vibes of Hamburg-based Jeff Alpert.`,
      `After four years of playing as often as possible with an ocean between them, Cohen and Tarraza thought to find some local US musicians and form a stateside collective of UD as well — both to keep their creative juices flowing and their fans satiated. They were fortunate to be introduced to three top-notch Berkshires-based musicians who complete the free-form jamming quintet now known as UD West. This incarnation features the elegant sophistication of Jon Suters on electric guitar, the steady and deeply musical groove of Carl Oman on electric bass, and the newest addition, funky and fun-loving keyboardist Ben Kohn. Together, they add a new dimension to the band with a jazzier, powerfully engaging sound.`,
    ],
  },
];

export const jazzBandMemberGroups = [
  { id: "leaders", label: "Band leaders" },
  { id: "west", label: "UD West" },
  { id: "east", label: "UD East" },
] as const;

export const jazzBandMembers: JazzBandMember[] = [
  {
    name: "Andrew Cohen",
    role: "Drums — founder",
    group: "leaders",
    bio: `Began playing drums in his teens while living in Rome. He later attended Berklee College of Music in Boston and trained professionally with Sonny Igoe and the legendary Gary Chaffee. Not only is Andrew the creative visionary behind Unfulfilled Desires — he's also a world-renowned spiritual teacher, pioneering voice in the field of evolutionary spirituality, and founder of the international nonprofit organization EnlightenNext and its award-winning magazine, What Is Enlightenment? Unfulfilled Desires is an expression of this revolution in culture through music.`,
  },
  {
    name: "Rodrigo Tarraza",
    role: "Sax, EWI, flute",
    group: "leaders",
    bio: `A Chilean-born, classically trained professional flutist. He toured, performed, and recorded with many international orchestras before moving to sax and electronic wind and playing bossa nova, improvisational jazz, and avant-garde music. In 1995, he founded Ensemble Les Inegales, which released several recordings in Europe. Rodrigo has taught at the San Francisco Conservatory, the New England Conservatory, and several universities in South America. In addition to his work with Unfulfilled Desires, he performs baroque flute with the Berkshire Baroque Trio and teaches a course on music and the evolution of consciousness.`,
  },
  {
    name: "Jon Suters",
    role: "Electric guitar",
    group: "west",
    bio: `Grew up in a musical family and began studying classical guitar at thirteen. In his late teens, he joined a German rock group, Pearls at Swine, and toured the US and Germany for two years before settling in the Berkshires, where he's made a living as both a performer and music educator. Jon has appeared on numerous albums as a sideman, played for various productions of Broadway and off-Broadway musicals, and toured with several different groups. He currently lives in Lenox, MA and is well-known in the area as both a bass and guitar player.`,
  },
  {
    name: "Carl Oman",
    role: "Electric bass",
    group: "west",
    bio: `Began his professional music career as a percussionist with the Hartford Symphony Orchestra from 1969 to 1975. In the 1990s, he began playing electric bass and currently performs with a variety of jazz-fusion and Latin groups throughout New England, including Creacion, Patty and the IOU's, Sonny & Perley, and Unfulfilled Desires. Carl, a resident of North Adams, MA, teaches percussion and electric bass at the Massachusetts College of Liberal Arts and through private instruction.`,
  },
  {
    name: "Ben Kohn",
    role: "Keyboards",
    group: "west",
    bio: `Berkshires-born and raised keyboardist Ben Kohn studied music at Westfield State College and also at Berklee College of Music. Upon graduation, he moved to New York City performing with a variety of jazz groups for several years before returning to the Berkshires. He now plays with the area's best local jazz and blues musicians including Charles Neville, Chris Smither, Charlie Toklaz, Perry Robinson, and the Mary Verdi Band. Ben is also featured on several jazz and blues CDs with Jason Short and Mary Verdi.`,
  },
  {
    name: "James Campagnola",
    role: "Tenor sax — special guest",
    group: "west",
    guest: true,
    bio: `Regular special guest saxophonist, keyboardist, composer, bandleader, and one of New York's most sought-after session musicians, began his professional recording career in New York City in 1975. He has performed throughout the world both as a bandleader and as a featured soloist with such notable artists as Eric Clapton, Natalie Cole, Larry Coryell, Roberta Flack, David Sanborn, Brian Auger, Bo Diddley, Jon Lord, The Young Rascals, Kenny Kirkland, Jan Akkerman, The Four Tops, David Bromberg, and many others. Jim's music and performance have been featured on hundreds of CDs, film scores, and television commercials and he has performed at some of New York City's legendary jazz venues including The Blue Note, Birdland, and The Knitting Factory.`,
  },
  {
    name: "Christophe Bonnard",
    role: "Bass guitar",
    group: "east",
    bio: `Began playing bass at the age of twelve. Later, he studied at the CIM School of Jazz and the American School of Modern Music, both in Paris. In the mid-1980s, he and guitarist Matthias Vogel started a trio called Non Grata, playing original compositions of jazz, funk, and rock. They've produced five CDs together and have performed throughout Europe. Christophe has played with numerous other jazz and funk bands and has taught bass at several schools in Paris.`,
  },
  {
    name: "Matthias Vogel",
    role: "Electric guitar",
    group: "east",
    bio: `Born in Germany and began playing rock and folk guitar in his early teens. His interest later moved to jazz and he studied at the American School of Modern Music in Paris, where he met Christophe Bonnard and together they started the Non Grata Trio. Matthias has composed music and lyrics in French and English for several recordings. In the late 1990s, he started another band called French Garage, which played psychedelic fusion rock and recorded two CDs.`,
  },
  {
    name: "Jeff Alpert",
    role: "Vibraphones",
    group: "east",
    bio: `Began his musical studies at the High School of Performing Arts in New York City where the movie Fame was filmed, and in which Jeff played percussion. After completing his orchestral percussion studies with Vic Firth at the New England Conservatory, Jeff turned his attention to jazz and improvisation on the vibraphones. In 1991, he moved to Europe, where he's performed with such renowned musicians as Chico Freeman and Dee Dee Bridgewater. Jeff currently performs with jazz singer Cynthia Utterbach in France as well as his own trio in Hamburg, Germany, where he's lived since 1997.`,
  },
];

export const jazzReviews: JazzReview[] = [
  {
    category: "media",
    text: "Unfulfilled Desires is a hard-driving jazz-funk quintet playing virtuosic jazz and jazz-rock.",
    source: "Time Out London — Hot Pick of the Week",
  },
  {
    category: "media",
    text: "Steps Ahead and Miles Davis brought into the 21st Century.",
    source: "David Mossman, Owner, The New Vortex Jazz Club, London",
  },
  {
    category: "media",
    text: "Unfulfilled Desires is a band of creative musical explorers and fearless risk takers who have a natural occurring chemistry together. Their hard-edged experimental music combines the richness and sophistication of jazz and the soul and vitality of funk with the straight forward and uncompromising attitude of rock and roll. I loved hearing them play!",
    source: "Evan Belaff, Former Radio Host, WBAI, New York City",
  },
  {
    category: "media",
    text: "Listening to UD on CD didn't quite prepare me for the experience of the live show. The sound was powerful and intense, each musician playing masterfully. I was not only watching and listening, I felt I was being transformed, recreated, a participant in this experience.",
    source: "Gary Goldberg, Producer/Radio Host, WRPI, NY",
  },
  {
    category: "club",
    text: "Unfulfilled Desires are real masters of their style. With a strong jazz influence, they know how to groove and rock with explosive energy.",
    source: "Mathieu Roche, Sound Engineer, Baiser Salé, Paris",
  },
  {
    category: "club",
    text: "Unfulfilled Desires brings an innovative and dynamic sound to mostly new original material — powerful and expressive, they play with infectious enthusiasm.",
    source: "Dana Westover, Booking Manager, Johnny D's Jazz Club, Boston",
  },
  {
    category: "club",
    text: "Each musician in Unfulfilled Desires is great. The harmonies are creative, daring, and the music is so positive. Andrew is very good at driving the music to a climax. Most musicians are satisfied to get to that point. But these guys don't stop — they take it even further out.",
    source: "Otto Sminck, Program Manager, The Badcuyp, Amsterdam",
  },
  {
    category: "club",
    text: "Funk-fusion meets gypsy and it really rocks!",
    source: "Bob Buccheri, Sound Technician, Lion's Den, New York City",
  },
  {
    category: "club",
    text: "This concert was an unusually powerful and fascinating experience. Like being on acid — but clean. I've heard this kind of music before, but not at all with that kind of energy. These guys really mean it!",
    source: "Lars Rex, Sound Engineer, Park Café, Amsterdam",
  },
  {
    category: "club",
    text: "I was impressed with the high driving energy of Unfulfilled Desires' performance all night long, from start to finish. They gave so much to the audience. They're unusual. A lot of bands don't have that kind of give and take with the crowd, but the responses between them and the audience were very powerful.",
    source: "Craig McDowell, Manager, Club Helsinki, Great Barrington, MA",
  },
];

export const jazzVenueRegions: JazzVenueRegion[] = [
  {
    region: "New York City",
    venues: [
      "Tonic",
      "The Bitter End",
      "The Lion's Den",
      "CBGB's Gallery",
      "Ace of Clubs",
      "Galapagos Art Space",
      "Tobacco Road",
      "Tribeca Rock Club",
    ],
  },
  {
    region: "Boston & Greater Massachusetts",
    venues: [
      "Johnny D's",
      "Harper's Ferry",
      "The Iron Horse",
      "Club Helsinki",
      "The Basement",
      "Tammany Hall",
      "Bishop's Lounge",
    ],
  },
  {
    region: "Albany Metro, NY",
    venues: ["Savannah's", "The Van Dyck", "Northern Lights"],
  },
  {
    region: "Burlington, VT",
    venues: ["Club Metronome", "Parima", "Radio Bean"],
  },
  {
    region: "Washington, DC",
    venues: ["Twins Jazz"],
  },
  {
    region: "London",
    venues: [
      "The Spitz",
      "The Troubadour",
      "The New Vortex Jazz Club",
      "The Vibe Bar",
      "Café de Paris",
      "The Halo Bar",
      "POP",
      "JazzCafé Posk",
    ],
  },
  {
    region: "Paris",
    venues: ["Le Baiser Salé", "Opus Café", "Le Reservoir", "The Blues Café"],
  },
  {
    region: "Berlin & Hamburg",
    venues: ["Café Schlot", "Room 77", "Newessbar"],
  },
  {
    region: "Copenhagen",
    venues: ["Park Café", "Krudttonden"],
  },
  {
    region: "Amsterdam",
    venues: ["The Badcuyp", "Malo Melo"],
  },
  {
    region: "Israel",
    venues: ["Shabud Club, Tel Aviv", "Beat Club, Haifa", "Yellow Submarine, Jerusalem"],
  },
  {
    region: "International festivals",
    venues: ["Celebrate Life Fest, Germany (2008)", "Jazz in August Festival, France (2008)"],
  },
];

export const jazzMediaCoverage = {
  radio: [
    "WMFO-FM, Tufts University Radio, Boston",
    "WKZE-FM, Sharon, CT",
    "WRPI-FM, Troy, NY",
    "WRSI-FM, Northampton, MA",
    "WCDB-FM, University of Albany, NY",
    "WBCR-FM, Great Barrington, MA",
    "WRUV-FM, University of Vermont Radio, Burlington, VT",
    "WTBR-FM, Pittsfield, MA",
    "Reshet Gimmel, Israeli National Radio",
    "Colorful Radio, London",
  ],
  print: [
    "Time Out London — Hot Pick of the Week",
    "Metroland (Albany, NY)",
    "Berkshire Eagle (Western Massachusetts)",
    "The Advocate (Western Massachusetts)",
    "The Valley Advocate (Five Colleges Region in Massachusetts)",
    "The Bennington Banner (Vermont)",
  ],
};

export const jazzLinks = {
  facebook: "https://www.facebook.com/UnfulfilledDesires/photos",
  waybackFlashSite:
    "https://web.archive.org/web/20070206070651/http://www.unfulfilleddesires.com/assets/html/flash.html",
  youtubeChannel: "https://www.youtube.com/unfulfilleddesires",
};

export const jazzGalleryPhotos: JazzGalleryPhoto[] = [
  {
    src: "/images/jazz/unfulfilled-desires-splash.png",
    alt: "Unfulfilled Desires — original Flash website splash screen",
    caption: "Original Flash website splash (circa 2007)",
    credit: "Via Internet Archive",
  },
  {
    src: "/images/jazz/unfulfilled-desires-logo-wayback.jpg",
    alt: "Unfulfilled Desires band logo with musician silhouettes",
    caption: "Band logo from the archived website artwork",
    credit: "Via Internet Archive",
  },
  {
    src: "/images/jazz/facebook-profile.jpg",
    alt: "Unfulfilled Desires Facebook profile image",
    caption: "Facebook profile image",
    credit: "Via Facebook",
  },
  {
    src: "/images/jazz/gallery/performance-bDkhKMw7NkM.jpg",
    alt: "Unfulfilled Desires live performance",
    caption: "Live performance — March 26, 2011",
    credit: "YouTube archive",
  },
  {
    src: "/images/jazz/gallery/performance-8me3pTg66cQ.jpg",
    alt: "Unfulfilled Desires at FODfest, Colonial Theatre",
    caption: "FODfest, Colonial Theatre — May 29, 2010",
    credit: "YouTube archive",
  },
  {
    src: "/images/jazz/gallery/performance-E2lZoL6p-hw.jpg",
    alt: "Unfulfilled Desires in Chicago with Robert Irving III",
    caption: "Chicago with Robert Irving III",
    credit: "YouTube archive",
  },
  {
    src: "/images/jazz/gallery/performance-ErNMd5znQNA.jpg",
    alt: "Unfulfilled Desires performing Get With It!",
    caption: "\"Get With It!\" — vintage track",
    credit: "YouTube archive",
  },
  {
    src: "/images/jazz/gallery/performance-RJLwGbohJcE.jpg",
    alt: "Unfulfilled Desires performing Punk Funk",
    caption: "\"Punk Funk\" — live",
    credit: "YouTube archive",
  },
];

export const jazzAlbums: JazzAlbum[] = [
  {
    id: "live-at-the-iron-horse",
    title: "Live at the Iron Horse",
    year: 2003,
    cover: "/images/jazz/live-at-the-iron-horse-cover.jpg",
    coverAlt: "Live at the Iron Horse — archival performance still",
    description:
      "Recorded live at the Iron Horse in Northampton, Massachusetts — the band's early document of jazz-funk fusion on stage.",
  },
  {
    id: "enlightened-dog",
    title: "Enlightened Dog",
    year: 2005,
    cover: "/images/jazz/enlightened-dog-cover.png",
    coverAlt: "Enlightened Dog album cover — Unfulfilled Desires",
    description:
      "Original compositions and standards from the core Unfulfilled Desires lineup.",
  },
  {
    id: "punk-funk",
    title: "Punk Funk",
    year: 2008,
    cover: "/images/jazz/punk-funk-cover.png",
    coverAlt: "Punk Funk album cover",
    description:
      "A high-energy set blending punk attitude with funk grooves and jazz harmony.",
  },
  {
    id: "plugged",
    title: "Plugged",
    year: 2010,
    cover: "/images/jazz/plugged-cover.jpg",
    coverAlt: "Plugged — FODfest performance still (2010)",
    description:
      "The final studio release — electric, driving, and unmistakably Unfulfilled Desires.",
  },
];

/** Recordings recovered from the band's original Flash website. */
export const jazzWebsiteVideos: JazzVideoRef[] = [
  {
    archiveId: "av-ud-new-years-eve-2004",
    description:
      "Something came together at this show that took the band up to a whole new level.",
  },
  {
    archiveId: "av-ud-copenhagen-short-april-2005",
    description:
      "Short clips from Copenhagen with special guest Peter Bastian on bassoon.",
  },
  {
    archiveId: "av-ud-copenhagen-long-april-2005",
    description: "Extended live footage from Copenhagen, April 2005.",
  },
  {
    archiveId: "av-ud-the-path",
    description: "Live at Harper's Ferry, Boston — February 2006.",
  },
  {
    archiveId: "av-ud-jean-pierre",
    description: "Jean Pierre at The Troubadour, London — April 2006.",
  },
  {
    archiveId: "av-ud-freedom-jazz-dance",
    description: "Freedom Jazz Dance in Copenhagen — April 2006.",
  },
];

/** Performance and archival videos of the band — linked to archive pages with transcripts. */
export const jazzPerformanceVideos: JazzVideoRef[] = [
  {
    archiveId: "yt-1L5ptoJ_8gA",
    description: "Compilation of jazz-funk performances from the eastern US tour.",
  },
  {
    archiveId: "yt-E2lZoL6p-hw",
    description: "Live in Chicago with keyboardist Robert Irving III.",
  },
  {
    archiveId: "yt-RJLwGbohJcE",
    description: "Performance of the title track from Punk Funk.",
  },
  {
    archiveId: "yt-8me3pTg66cQ",
    description: "FODfest at the Colonial Theatre, Pittsfield — May 29, 2010.",
  },
  {
    archiveId: "yt-ErNMd5znQNA",
    description: "Vintage recording of \"Get With It!\"",
  },
  {
    archiveId: "yt-bDkhKMw7NkM",
    description: "Live performance — March 26, 2011.",
  },
];

export const jazzMusicianDialogues: JazzVideoRef[] = [
  {
    archiveId: "yt-c6zINgcqP9A",
    description: "Part 1 — on microtonal harmony, fusion, and the future of music.",
  },
  {
    archiveId: "yt-B_FJ57ATmII",
    description: "Part 2 — improvisation, emergence, and creative risk.",
  },
  {
    archiveId: "yt-5lxrrnnTSeI",
    description: "Part 3 — third stream, global music, and teaching.",
  },
  {
    archiveId: "yt-PY7ZXWsxc90",
    description: "A legendary New York drum teacher on passion, practice, and joy.",
  },
];

export function getJazzVideo(archiveId: string): ArchiveItem | undefined {
  return getArchiveItemById(archiveId);
}

export function resolveJazzVideos(
  refs: JazzVideoRef[]
): Array<JazzVideoRef & { video: ArchiveItem }> {
  return refs.flatMap((ref) => {
    const video = getArchiveItemById(ref.archiveId);
    return video ? [{ ...ref, video }] : [];
  });
}
