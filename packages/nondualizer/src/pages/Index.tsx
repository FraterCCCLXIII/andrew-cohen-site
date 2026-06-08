import { useEffect } from "react";
import { AudioPlayer } from "@nondualizer/components/AudioPlayer";
import { trackHomePageView } from "@nondualizer/lib/analytics";

const Index = () => {
  // Track home page view when component mounts
  useEffect(() => {
    trackHomePageView();
  }, []);

  return <AudioPlayer />;
};

export default Index;
