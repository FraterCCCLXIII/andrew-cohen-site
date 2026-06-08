"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "@nondualizer/components/ui/toaster";
import { Toaster as Sonner } from "@nondualizer/components/ui/sonner";
import { TooltipProvider } from "@nondualizer/components/ui/tooltip";
import { AudioPlayer } from "@nondualizer/components/AudioPlayer";
import { NondualizerRouterProvider } from "@nondualizer/router-context";
import { NONDUALIZER_BASE_PATH } from "@nondualizer/config";
import { trackHomePageView, trackTrackPageView } from "@nondualizer/lib/analytics";
import { getTrackIndexFromSlug, trackData } from "@nondualizer/tracks";

interface NondualizerPlayerProps {
  initialTrackIndex?: number;
  trackSlug?: string;
}

export function NondualizerPlayer({
  initialTrackIndex = 0,
  trackSlug,
}: NondualizerPlayerProps) {
  const router = useRouter();

  useEffect(() => {
    if (trackSlug) {
      const trackIndex = getTrackIndexFromSlug(trackSlug);
      if (trackIndex !== undefined) {
        const track = trackData[trackIndex];
        trackTrackPageView(track.title, track.slug, trackIndex, track.duration);
        return;
      }
    }

    trackHomePageView();
  }, [trackSlug]);

  const navigate = (path: string, options?: { replace?: boolean }) => {
    const nextPath = path.startsWith("/") ? `${NONDUALIZER_BASE_PATH}${path}` : path;

    if (options?.replace) {
      router.replace(nextPath);
      return;
    }

    router.push(nextPath);
  };

  return (
    <NondualizerRouterProvider navigate={navigate} basePath={NONDUALIZER_BASE_PATH}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="nondualizer-root fixed inset-x-0 top-16 bottom-0 z-40 overflow-hidden flex flex-col">
          <AudioPlayer initialTrackIndex={initialTrackIndex} />
        </div>
      </TooltipProvider>
    </NondualizerRouterProvider>
  );
}
