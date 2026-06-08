"use client";

import dynamic from "next/dynamic";

const NondualizerPlayer = dynamic(
  () => import("@nondualizer/NondualizerPlayer").then((mod) => mod.NondualizerPlayer),
  { ssr: false },
);

interface NondualizerTrackClientProps {
  initialTrackIndex: number;
  trackSlug: string;
}

export default function NondualizerTrackClient({
  initialTrackIndex,
  trackSlug,
}: NondualizerTrackClientProps) {
  return (
    <NondualizerPlayer
      initialTrackIndex={initialTrackIndex}
      trackSlug={trackSlug}
    />
  );
}
