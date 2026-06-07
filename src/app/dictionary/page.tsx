import type { Metadata } from "next";
import DictionaryPageContent from "@/components/DictionaryPageContent";

export const metadata: Metadata = {
  title: "Dictionary of Awakening | Andrew Cohen",
  description:
    "Core concepts and terms from Evolutionary Enlightenment, Integral theory, and Spiral Dynamics — with definitions and cited sources.",
};

export default function DictionaryPage() {
  return <DictionaryPageContent />;
}
