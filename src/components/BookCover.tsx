import type { Book } from "@/data/books";

interface BookCoverProps {
  book: Pick<Book, "title" | "year">;
  className?: string;
}

// Placeholder cover rendered from design tokens. Swap for real artwork later
// by replacing this component's internals (e.g. with next/image).
export default function BookCover({ book, className = "" }: BookCoverProps) {
  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-md border border-border bg-surface-elevated ${className}`}
      role="img"
      aria-label={`Placeholder cover for ${book.title} (${book.year})`}
    >
      {/* Spine accent */}
      <div className="absolute inset-y-0 left-0 w-[6px] bg-accent/70" />

      {/* Ambient gradient */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 30% 20%, var(--accent), transparent)",
        }}
      />

      <div className="relative flex h-full flex-col justify-between p-5 pl-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          Andrew Cohen
        </p>

        <p className="font-serif text-lg leading-[1.2] tracking-tight text-foreground line-clamp-5">
          {book.title}
        </p>

        <p className="font-mono text-[11px] text-muted">{book.year}</p>
      </div>
    </div>
  );
}
