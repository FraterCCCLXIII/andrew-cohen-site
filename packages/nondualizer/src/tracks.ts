export const trackData = [
  { title: "What is Nonduality", slug: "what-is-non-duality", duration: 0 },
  { title: "What is Ego Death", slug: "what-is-ego-death", duration: 0 },
  { title: "The Four Selves", slug: "the-four-selves", duration: 0 },
  { title: "Rational Idealism", slug: "rational-idealism", duration: 0 },
  { title: "Realization and Transformation", slug: "realisation-and-transformation", duration: 0 },
  { title: "Realigning the Soul", slug: "realigning-the-soul", duration: 0 },
  { title: "The Evolution of Nonduality", slug: "the-evolution-of-nonduality", duration: 0 },
  { title: "The Edge of Evolution", slug: "the-edge-of-evolution", duration: 0 },
] as const;

const trackSlugMap: Record<string, number> = {
  "what-is-non-duality": 0,
  "what-is-ego-death": 1,
  "the-four-selves": 2,
  "rational-idealism": 3,
  "realisation-and-transformation": 4,
  "realigning-the-soul": 5,
  "the-evolution-of-nonduality": 6,
  "the-edge-of-evolution": 7,
};

export function getTrackIndexFromSlug(slug: string): number | undefined {
  return trackSlugMap[slug];
}

export function getTrackSlug(trackIndex: number): string {
  const trackSlugs = trackData.map((track) => track.slug);
  return trackSlugs[trackIndex] ?? trackSlugs[0];
}
