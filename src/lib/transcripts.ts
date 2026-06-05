import fs from "fs";
import path from "path";

export interface VideoTranscript {
  id: string;
  youtubeId: string;
  title: string;
  language: string;
  text: string;
  charCount: number;
  scrapedAt?: string;
}

const TRANSCRIPTS_DIR = path.join(process.cwd(), "src/data/transcripts");

export function getVideoTranscript(videoId: string): VideoTranscript | null {
  const filePath = path.join(TRANSCRIPTS_DIR, `${videoId}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as VideoTranscript;
  } catch {
    return null;
  }
}

export function hasVideoTranscript(videoId: string): boolean {
  return fs.existsSync(path.join(TRANSCRIPTS_DIR, `${videoId}.json`));
}
