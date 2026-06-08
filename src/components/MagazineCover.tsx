import Image from "@/components/FadeInImage";
import type { MagazineIssue } from "@/data/magazine";

interface MagazineCoverProps {
  issue: Pick<MagazineIssue, "issue" | "magazine" | "cover">;
  alt?: string;
  className?: string;
}

function coverDimensions(cover: string): { width: number; height: number } {
  const match = cover.match(/-(\d+)x(\d+)\./);
  if (match) {
    return { width: Number(match[1]), height: Number(match[2]) };
  }
  return { width: 833, height: 1024 };
}

export default function MagazineCover({
  issue,
  alt,
  className = "",
}: MagazineCoverProps) {
  const { width, height } = coverDimensions(issue.cover);

  return (
    <Image
      src={issue.cover}
      alt={alt ?? `${issue.magazine} Issue ${issue.issue} cover`}
      width={width}
      height={height}
      sizes="(max-width: 640px) 50vw, 220px"
      className={`w-full h-auto rounded-md border border-border bg-surface-elevated ${className}`}
    />
  );
}
