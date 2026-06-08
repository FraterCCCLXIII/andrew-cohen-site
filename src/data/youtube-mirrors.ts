import mirrorsData from "@/data/youtube-mirrors.json";

/**
 * Local mirrors of YouTube archive videos.
 *
 * File layout:
 *   public/archive/media/youtube/{youtubeId}.{ext}
 *
 * Generated when incoming downloads are normalized from the repo root.
 * The YouTube catalog (youtube-videos.json) remains the source of metadata;
 * mirrors only supply self-hosted playback paths.
 */
export interface YoutubeMirror {
  mediaPath: string;
  mimeType: string;
}

const { mirrors } = mirrorsData as { mirrors: Record<string, YoutubeMirror> };

export function getYoutubeMirror(
  youtubeId: string
): YoutubeMirror | undefined {
  return mirrors[youtubeId];
}

export function hasYoutubeMirror(youtubeId: string): boolean {
  return youtubeId in mirrors;
}
