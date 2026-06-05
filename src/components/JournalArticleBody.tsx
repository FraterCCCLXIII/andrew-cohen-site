interface JournalArticleBodyProps {
  html: string;
}

export default function JournalArticleBody({ html }: JournalArticleBodyProps) {
  if (!html.trim()) {
    return (
      <p className="text-base text-muted leading-relaxed">
        This article has no archived body text. View the original post on
        andrewcohen.com for the full content.
      </p>
    );
  }

  return (
    <div
      className="journal-article-body text-base text-muted leading-[1.8]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
