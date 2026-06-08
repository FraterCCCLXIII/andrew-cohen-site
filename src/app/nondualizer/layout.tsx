import type { Metadata } from "next";
import "@andrew-cohen/nondualizer/styles.css";

export const metadata: Metadata = {
  title: "Nondualize | Andrew Cohen",
  description:
    "Immersive audio meditations on nonduality, ego death, and evolutionary enlightenment with Andrew Cohen.",
};

export default function NondualizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
