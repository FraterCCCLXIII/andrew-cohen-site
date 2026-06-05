import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, BookOpen } from "@phosphor-icons/react/dist/ssr";
import { books, getBookBySlug } from "@/data/books";
import { getBookContent } from "@/data/bookContent";
import BookCover from "@/components/BookCover";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "Book Not Found" };
  return {
    title: `${book.title} — Andrew Cohen`,
    description: book.tagline,
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const extended = getBookContent(slug);
  const index = books.findIndex((b) => b.slug === slug);
  const prev = index > 0 ? books[index - 1] : undefined;
  const next = index < books.length - 1 ? books[index + 1] : undefined;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft size={14} weight="regular" />
          All Books
        </Link>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-14 items-start">
          <div className="w-[200px] mx-auto md:mx-0">
            <BookCover book={book} />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
              Book · {book.year}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.1] text-foreground mb-4">
              {book.title}
            </h1>
            {extended?.subtitle && (
              <p className="text-lg text-muted leading-relaxed mb-6">
                {extended.subtitle}
              </p>
            )}
            <p className="text-lg text-muted leading-relaxed mb-4">
              {book.description}
            </p>
            {extended?.credits && (
              <p className="text-xs text-muted/70 font-mono mb-8">
                {extended.credits}
              </p>
            )}

            {book.teachingHref && (
              <Link
                href={book.teachingHref}
                className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background text-sm rounded-md hover:bg-foreground/85 transition-colors duration-300 active:scale-[0.98]"
              >
                <BookOpen size={16} weight="regular" />
                Explore the teaching
              </Link>
            )}
          </div>
        </div>
      </section>

      {extended && (
        <>
          <section className="py-8 px-6 pb-20">
            <div className="max-w-4xl mx-auto space-y-16">
              {extended.sections.map((section) => (
                <article key={section.title} className="prose-custom">
                  <h2 className="text-2xl md:text-3xl font-serif tracking-tight leading-[1.2] text-foreground mb-5">
                    {section.title}
                  </h2>
                  <div className="text-base text-muted leading-[1.8] space-y-4">
                    {section.body.split("\n\n").map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {extended.quotes.length > 0 && (
            <section className="py-20 px-6 bg-surface-elevated">
              <div className="max-w-4xl mx-auto">
                <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-10">
                  {extended.quotesHeading ?? "Quotes"}
                </p>

                <div className="space-y-10">
                  {extended.quotes.map((quote, i) => (
                    <blockquote
                      key={i}
                      className="border-l-2 border-border pl-6"
                    >
                      <p className="text-lg md:text-xl font-serif leading-relaxed text-foreground mb-3">
                        &ldquo;{quote.text}&rdquo;
                      </p>
                      <cite className="text-sm text-muted not-italic font-mono">
                        — {quote.source}
                      </cite>
                    </blockquote>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-1 border-t border-border pt-10">
          {prev ? (
            <Link
              href={`/books/${prev.slug}`}
              className="group flex flex-col gap-1 border border-border p-6 hover:bg-surface-elevated transition-colors duration-300"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted">
                <ArrowLeft size={12} weight="regular" /> Earlier
              </span>
              <span className="text-base font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/books/${next.slug}`}
              className="group flex flex-col gap-1 border border-border p-6 hover:bg-surface-elevated transition-colors duration-300 sm:text-right sm:items-end"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted">
                Later <ArrowUpRight size={12} weight="regular" />
              </span>
              <span className="text-base font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft size={14} weight="regular" />
          All Books
        </Link>
      </div>
    </div>
  );
}
