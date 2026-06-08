import { X, Share2 } from "lucide-react";
import { Button } from "@nondualizer/components/ui/button";
import { ScrollArea } from "@nondualizer/components/ui/scroll-area";
import { useEffect } from "react";
import type { StaticImageData } from "next/image";
import { trackDrawerOpen, trackDrawerClose, trackAudioShare } from "@nondualizer/lib/analytics";
import { trackPath, SITE_HEADER_OFFSET_CLASS } from "@nondualizer/config";
import { getTrackSlug } from "@nondualizer/tracks";

// Import track images (using the same images as BackgroundSlideshow)
import img1 from "@nondualizer/assets/pexels-dennisariel-32880873.jpg";
import img2 from "@nondualizer/assets/pexels-lum3n-44775-167684.jpg";
import img3 from "@nondualizer/assets/pexels-dennisariel-32880874.jpg";
import img4 from "@nondualizer/assets/pexels-simon73-1323550.jpg";
import img5 from "@nondualizer/assets/pexels-todd-trapani-488382-1420440.jpg";
import img6 from "@nondualizer/assets/pexels-luisfe-5191926.jpg";
import img7 from "@nondualizer/assets/pexels-alberlan-7311921.jpg";
import img8 from "@nondualizer/assets/pexels-sliceisop-2873669.jpg";

function imageSrc(image: string | StaticImageData): string {
  return typeof image === "string" ? image : image.src;
}

// Track image mapping (first image from each track's set)
const trackImages = [
  img2,  // Track 1: "What is Non-Duality?"
  img1,  // Track 2: "What is Ego Death?"
  img5,  // Track 3: "The Four Selves"
  img4,  // Track 4: "Rational Idealism"
  img6,  // Track 5: "Realisation and Transformation"
  img3,  // Track 6: "Realigning the Soul"
  img7,  // Track 7: "The Evolution of Nonduality"
  img8   // Track 8: "The Edge of Evolution"
];

interface Track {
  id: string;
  title: string;
  description: string;
  duration: number;
  audioUrl: string;
}

interface TrackDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  tracks: Track[];
  currentTrack: number;
  onTrackSelect: (trackIndex: number) => void;
  isPlaying: boolean; // Add this prop to track actual playback state
}

export function TrackDrawer({
  isOpen,
  onClose,
  tracks,
  currentTrack,
  onTrackSelect,
  isPlaying
}: TrackDrawerProps) {
  // Track drawer open/close events
  useEffect(() => {
    if (isOpen) {
      trackDrawerOpen();
    } else {
      trackDrawerClose();
    }
  }, [isOpen]);


  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleShare = (trackIndex: number, trackTitle: string) => {
    const trackSlug = getTrackSlug(trackIndex);
    const trackUrl = `${window.location.origin}${trackPath(trackSlug)}`;
    const text = `Listen to "${trackTitle}" with Andrew Cohen`;
    
    // Track share event
    const canNativeShare = typeof navigator.share === "function";
    const shareMethod = canNativeShare ? "native_share" : "clipboard";
    trackAudioShare(trackTitle, trackIndex, shareMethod);

    if (canNativeShare) {
      navigator.share({
        title: trackTitle,
        text: text,
        url: trackUrl,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(trackUrl);
    }
  };



  return (
    <>
      {/* Backdrop - player area only, below site nav */}
      <div
        className={`fixed inset-x-0 bottom-0 ${SITE_HEADER_OFFSET_CLASS} z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
      </div>

      {/* Drawer - below site nav */}
      <div
        className={`fixed left-0 bottom-0 ${SITE_HEADER_OFFSET_CLASS} z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
      >
        {isOpen && (
          <div className="w-80 h-full glass-morphism border-r flex flex-col">
            {/* Header - Fixed */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 flex-shrink-0">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white font-sans">Nondualize</h2>
                  <span className="text-[10px] font-medium text-white/60 bg-white/10 px-1.5 py-0.5 rounded">BETA</span>
                </div>
                <p className="text-xs text-white/70 mt-1 font-light">Integral Nonduality for an Evolving World</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Scrollable Content Area */}
            <ScrollArea className="flex-1">
              <div className="p-4 md:p-6">
                {/* Track List */}
                <div className="space-y-3">
                  {tracks.map((track, index) => (
                    <div
                      key={track.id}
                      className={`group cursor-pointer rounded-lg p-4 mb-3 transition-all duration-200 hover:bg-white/5 ${
                        index === currentTrack 
                          ? 'bg-[hsl(var(--primary)/0.2)] border border-[hsl(var(--primary)/0.3)]' 
                          : 'hover:bg-white/5'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (typeof onTrackSelect === 'function') {
                          onTrackSelect(index);
                        } else {
                          console.error('onTrackSelect is not a function:', onTrackSelect);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        {/* Image Square */}
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-white/10 flex items-center justify-center">
                          <img
                            src={imageSrc(trackImages[index])}
                            alt={`Track ${index + 1} image`}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-white mb-1">
                            {track.title}
                          </h3>
                          <p className="text-xs text-white/60 mb-2 line-clamp-2">
                            {track.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/40">
                              Duration: {formatDuration(track.duration)}
                            </span>
                            <div className="flex items-center gap-2">
                              {index === currentTrack && isPlaying && (
                                <span className="text-xs text-[hsl(var(--primary))] font-medium">
                                  Playing
                                </span>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleShare(index, track.title);
                                }}
                                className="w-6 h-6 opacity-0 group-hover:opacity-100 text-white/60 hover:text-white hover:bg-white/10 transition-opacity"
                              >
                                <Share2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </div>
        )}
      </div>
    </>
  );
}