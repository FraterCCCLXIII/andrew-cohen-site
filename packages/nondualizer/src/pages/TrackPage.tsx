import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AudioPlayer } from "@nondualizer/components/AudioPlayer";
import { trackTrackPageView } from "@nondualizer/lib/analytics";
import { getTrackIndexFromSlug, trackData } from "@nondualizer/tracks";

export function TrackPage() {
  const { trackSlug } = useParams();
  const navigate = useNavigate();
  const trackIndex = getTrackIndexFromSlug(trackSlug || "");

  useEffect(() => {
    if (trackSlug && trackIndex !== undefined) {
      const track = trackData[trackIndex];
      if (track) {
        trackTrackPageView(track.title, track.slug, trackIndex, track.duration);
      }
    }
  }, [trackSlug, trackIndex]);

  if (!trackSlug || trackIndex === undefined) {
    navigate("/");
    return null;
  }

  return (
    <div className="h-screen w-full">
      <AudioPlayer initialTrackIndex={trackIndex} />
    </div>
  );
}
