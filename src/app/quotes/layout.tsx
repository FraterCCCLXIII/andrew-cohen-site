import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quotes | Andrew Cohen",
  description:
    "A carousel of teachings from Enlightenment Is a Secret — words to carry on the path.",
};

export default function QuotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
