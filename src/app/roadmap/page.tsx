import type { Metadata } from "next";
import RoadmapPageContent from "@/components/RoadmapPageContent";

export const metadata: Metadata = {
  title: "Roadmap — Andrew Cohen",
  description:
    "Directions this archive is working toward — preserving media, aggregating collections, expanding books and reading, and making the teaching more accessible worldwide.",
};

export default function RoadmapPage() {
  return <RoadmapPageContent />;
}
