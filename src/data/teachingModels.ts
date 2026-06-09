export interface TeachingModel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  pdfHref: string;
  pdfDownloadName: string;
  source: string;
}

export const teachingModels: TeachingModel[] = [
  {
    id: "authentic-self",
    title: "Evolutionary Enlightenment",
    subtitle: "The Authentic Self Model",
    description:
      "Being and Becoming united by the evolutionary impulse — the Authentic Self as the bridge between the Ground of Being and evolving culture.",
    href: "/teaching/the-authentic-self",
    image: "/images/teaching/models/authentic-self-model.jpg",
    imageAlt:
      "Evolutionary Enlightenment model — the Authentic Self connecting the Ground of Being with evolving culture",
    pdfHref: "/downloads/teaching-models/Authentic-Self-Model.pdf",
    pdfDownloadName: "Authentic-Self-Model.pdf",
    source: "Being & Becoming",
  },
  {
    id: "ego",
    title: "Unenlightenment",
    subtitle: "The Ego Model",
    description:
      "The structure of resistance — inertia, avoidance, and the maintenance of the status quo across personal and cultural dimensions of self.",
    href: "/teaching/the-ego",
    image: "/images/teaching/models/ego-model.jpg",
    imageAlt:
      "Unenlightenment model — the negative ego suffocating the soul and maintaining the status quo",
    pdfHref: "/downloads/teaching-models/Ego-Model.pdf",
    pdfDownloadName: "Ego-Model.pdf",
    source: "Being & Becoming",
  },
];

export function getTeachingModel(id: string): TeachingModel | undefined {
  return teachingModels.find((model) => model.id === id);
}
