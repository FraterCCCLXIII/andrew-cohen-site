import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import {
  getMagazineIssue,
  getMagazineSupplement,
  getSupplementsForIssue,
  magazineIssues,
  magazineSupplements,
} from "@/data/magazine";
import MagazineCover from "@/components/MagazineCover";

export function generateStaticParams() {
  return [
    ...magazineIssues.map((item) => ({ slug: item.slug })),
    ...magazineSupplements.map((item) => ({ slug: item.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const issue = getMagazineIssue(slug);
  if (issue) {
    return {
      title: `${issue.magazine} Issue ${issue.issue} — Andrew Cohen`,
      description: issue.tagline,
    };
  }

  const supplement = getMagazineSupplement(slug);
  if (supplement) {
    return {
      title: `${supplement.title} — Andrew Cohen`,
      description: `${supplement.tagline} By ${supplement.author}. Unpublished from Issue ${supplement.issue}.`,
    };
  }

  return { title: "Issue Not Found" };
}

function MagazineSupplementPage({
  supplement,
}: {
  supplement: NonNullable<ReturnType<typeof getMagazineSupplement>>;
}) {
  const parentIssue = getMagazineIssue(`issue-${supplement.issue}`);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16">
          <div className="mx-auto w-full max-w-[220px] md:max-w-none">
            <MagazineCover
              issue={{
                issue: supplement.issue,
                magazine: supplement.magazine,
                cover: supplement.cover,
              }}
              alt={`${supplement.title} cover`}
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
              {supplement.magazine} · Unpublished
            </p>
            <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.1] text-foreground mb-4">
              {supplement.title}
            </h1>
            <p className="font-mono text-sm text-muted mb-2">
              Issue {supplement.issue} · {supplement.date}
            </p>
            <p className="text-sm text-muted mb-6">By {supplement.author}</p>
            <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">
              {supplement.tagline}
            </p>

            <a
              href={supplement.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm rounded-md hover:bg-foreground/85 transition-colors duration-300 active:scale-[0.98]"
            >
              Read PDF
              <ArrowUpRight size={16} weight="regular" />
            </a>
          </div>
        </div>
      </section>

      {parentIssue && (
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <Link
              href={`/magazine/${parentIssue.slug}`}
              className="group flex flex-col gap-1 border border-border p-6 hover:bg-surface-elevated transition-colors duration-300 max-w-md"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted">
                <ArrowLeft size={12} weight="regular" /> Published issue
              </span>
              <span className="text-base font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                Issue {parentIssue.issue}
              </span>
              <span className="text-sm text-muted leading-relaxed line-clamp-2">
                {parentIssue.tagline}
              </span>
            </Link>
          </div>
        </section>
      )}

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <Link
          href="/magazine"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft size={14} weight="regular" />
          All Issues
        </Link>
      </div>
    </div>
  );
}

function MagazineIssueDetailPage({
  issue,
}: {
  issue: NonNullable<ReturnType<typeof getMagazineIssue>>;
}) {
  const index = magazineIssues.findIndex((item) => item.slug === issue.slug);
  const prev = index > 0 ? magazineIssues[index - 1] : undefined;
  const next =
    index < magazineIssues.length - 1 ? magazineIssues[index + 1] : undefined;
  const supplements = getSupplementsForIssue(issue.issue);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16">
          <div className="mx-auto w-full max-w-[220px] md:max-w-none">
            <MagazineCover issue={issue} />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-4">
              {issue.magazine}
            </p>
            <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.1] text-foreground mb-4">
              Issue {issue.issue}
            </h1>
            <p className="font-mono text-sm text-muted mb-6">{issue.date}</p>
            <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">
              {issue.tagline}
            </p>

            <a
              href={issue.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm rounded-md hover:bg-foreground/85 transition-colors duration-300 active:scale-[0.98]"
            >
              Read PDF
              <ArrowUpRight size={16} weight="regular" />
            </a>
          </div>
        </div>
      </section>

      {supplements.length > 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted font-mono mb-6">
              Unpublished from this issue
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supplements.map((item) => (
                <Link
                  key={item.slug}
                  href={`/magazine/${item.slug}`}
                  className="group flex flex-col gap-1 border border-border p-6 hover:bg-surface-elevated transition-colors duration-300"
                >
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
                    Unpublished
                  </span>
                  <span className="text-base font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </span>
                  <span className="text-sm text-muted">{item.author}</span>
                  <span className="text-sm text-muted leading-relaxed line-clamp-2">
                    {item.tagline}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {next && (
            <Link
              href={`/magazine/${next.slug}`}
              className="group flex flex-col gap-1 border border-border p-6 hover:bg-surface-elevated transition-colors duration-300"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted">
                <ArrowLeft size={12} weight="regular" /> Newer
              </span>
              <span className="text-base font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                Issue {next.issue}
              </span>
              <span className="text-sm text-muted leading-relaxed line-clamp-2">
                {next.tagline}
              </span>
            </Link>
          )}

          {prev && (
            <Link
              href={`/magazine/${prev.slug}`}
              className="group flex flex-col gap-1 border border-border p-6 hover:bg-surface-elevated transition-colors duration-300 sm:ml-auto"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted sm:justify-end">
                Older <ArrowUpRight size={12} weight="regular" className="rotate-90" />
              </span>
              <span className="text-base font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 sm:text-right">
                Issue {prev.issue}
              </span>
              <span className="text-sm text-muted leading-relaxed line-clamp-2 sm:text-right">
                {prev.tagline}
              </span>
            </Link>
          )}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <Link
          href="/magazine"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft size={14} weight="regular" />
          All Issues
        </Link>
      </div>
    </div>
  );
}

export default async function MagazineIssuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const issue = getMagazineIssue(slug);
  if (issue) {
    return <MagazineIssueDetailPage issue={issue} />;
  }

  const supplement = getMagazineSupplement(slug);
  if (supplement) {
    return <MagazineSupplementPage supplement={supplement} />;
  }

  notFound();
}
