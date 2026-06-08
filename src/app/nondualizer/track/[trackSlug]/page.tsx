import { redirect } from "next/navigation";
import { getTrackIndexFromSlug } from "@nondualizer/tracks";
import NondualizerTrackClient from "./NondualizerTrackClient";

interface TrackPageProps {
  params: Promise<{ trackSlug: string }>;
}

export default async function NondualizerTrackPage({ params }: TrackPageProps) {
  const { trackSlug } = await params;
  const trackIndex = getTrackIndexFromSlug(trackSlug);

  if (trackIndex === undefined) {
    redirect("/nondualizer");
  }

  return (
    <NondualizerTrackClient
      initialTrackIndex={trackIndex}
      trackSlug={trackSlug}
    />
  );
}
