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
          {["Teaching", "Books", "Quotes", "About"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
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
