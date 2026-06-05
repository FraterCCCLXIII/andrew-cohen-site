export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-sm text-muted">
            A reading resource for the work of Andrew Cohen.
          </p>
          <p className="text-xs text-muted/60 mt-1">
            Built with care. Content sourced from published works.
          </p>
        </div>
        <nav className="flex items-center gap-6">
          {[
            { label: "Life", href: "/his-life" },
            { label: "Teaching", href: "/teaching" },
            { label: "Books", href: "/books" },
            { label: "Magazine", href: "/magazine" },
            { label: "Archive", href: "/archive" },
            { label: "Lineage", href: "/lineage" },
            { label: "Ashram", href: "/ashram" },
            { label: "Quotes", href: "/quotes" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs text-muted hover:text-foreground transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
