import type { MediaAsset } from "@/data/listen";

export interface VideoEmbedAsset {
  format: "audio" | "video";
  provider: string;
  embedUrl: string;
  href?: string;
}

interface MediaEmbedProps {
  asset: MediaAsset | VideoEmbedAsset;
  title: string;
  label?: string;
}

const providerLabels: Record<string, string> = {
  soundcloud: "SoundCloud",
  vimeo: "Vimeo",
  libsyn: "Podcast",
  file: "Archive file",
  youtube: "YouTube",
};

export default function MediaEmbed({ asset, title, label }: MediaEmbedProps) {
  const heading = label ?? providerLabels[asset.provider];

  if (asset.provider === "file" && asset.format === "audio") {
    return (
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          {heading}
        </p>
        <audio
          controls
          preload="none"
          src={asset.embedUrl}
          className="w-full"
          title={title}
        />
      </div>
    );
  }

  if (asset.provider === "file" && asset.format === "video") {
    return (
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          {heading}
        </p>
        <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-black">
          <video
            controls
            preload="metadata"
            playsInline
            src={asset.embedUrl}
            className="absolute inset-0 h-full w-full"
            title={title}
          />
        </div>
      </div>
    );
  }

  const height =
    asset.provider === "soundcloud"
      ? 166
      : asset.provider === "libsyn"
        ? 90
        : undefined;

  return (
    <div className="space-y-3">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {heading}
      </p>
      <div
        className={
          asset.format === "video"
            ? "relative aspect-video w-full overflow-hidden rounded-md border border-border bg-surface-elevated"
            : "overflow-hidden rounded-md border border-border bg-surface-elevated"
        }
      >
        <iframe
          src={asset.embedUrl}
          title={`${title} — ${heading}`}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          className={
            asset.format === "video"
              ? "absolute inset-0 h-full w-full"
              : "w-full"
          }
          style={height ? { height } : undefined}
        />
      </div>
    </div>
  );
}
