"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CaretLeft,
  CaretRight,
  Copy,
  FacebookLogo,
  Link as LinkIcon,
  ShareNetwork,
  XLogo,
} from "@phosphor-icons/react";
import {
  enlightenmentQuotes,
  enlightenmentQuotesAuthor,
  formatQuoteShareText,
} from "@/data/quotes/enlightenment-is-a-secret";

function getQuoteIndex(id: string | null): number {
  if (!id) return 0;
  const index = enlightenmentQuotes.findIndex((quote) => quote.id === id);
  return index >= 0 ? index : 0;
}

export default function QuoteCarousel() {
  const reduce = useReducedMotion();
  const searchParams = useSearchParams();
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState<"quote" | "link" | null>(null);
  const [shareOpen, setShareOpen] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const quoteId = searchParams.get("quote");
    setIndex(getQuoteIndex(quoteId));
  }, [searchParams]);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  useEffect(() => {
    const id = enlightenmentQuotes[index]?.id;
    if (!id || typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("quote", id);
    window.history.replaceState(null, "", url);
  }, [index]);

  const quote = enlightenmentQuotes[index];
  const total = enlightenmentQuotes.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
      setCopied(null);
      setShareOpen(false);
    },
    [total]
  );

  useEffect(() => {
    if (!shareOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(event.target as Node)
      ) {
        setShareOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShareOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [shareOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goTo(index - 1);
      if (event.key === "ArrowRight") goTo(index + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, index]);

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/quotes?quote=${quote.id}`
      : `/quotes?quote=${quote.id}`;

  const shareText = formatQuoteShareText(quote);

  const flashCopied = (type: "quote" | "link") => {
    setCopied(type);
    window.setTimeout(() => setCopied(null), 2000);
  };

  const copyQuote = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      flashCopied("quote");
      setShareOpen(false);
    } catch {
      setCopied(null);
    }
  };

  const shareNative = async () => {
    if (!navigator.share) return;
    try {
      await navigator.share({
        title: `${enlightenmentQuotesAuthor} — ${quote.source}`,
        text: shareText,
        url: shareUrl,
      });
      setShareOpen(false);
    } catch {
      /* user cancelled */
    }
  };

  const shareX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=520");
    setShareOpen(false);
  };

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=520");
    setShareOpen(false);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      flashCopied("link");
      setShareOpen(false);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="relative min-h-[calc(100dvh-4rem)] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.div
            key={quote.image}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={quote.image}
              alt={quote.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous quote"
        className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-background/70 text-foreground backdrop-blur-sm transition-colors hover:bg-surface-elevated md:left-6 md:flex"
      >
        <CaretLeft size={18} weight="regular" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next quote"
        className="absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-background/70 text-foreground backdrop-blur-sm transition-colors hover:bg-surface-elevated md:right-6 md:flex"
      >
        <CaretRight size={18} weight="regular" />
      </button>

      <div className="relative grid min-h-[calc(100dvh-4rem)] grid-rows-[1fr_auto] px-6">
        <div className="flex items-center justify-center py-10 md:py-12">
          <div className="mx-auto w-full max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={quote.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: reduce ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote>
                  {quote.title && (
                    <p className="mb-6 text-sm font-mono uppercase tracking-[0.18em] text-muted">
                      {quote.title}
                    </p>
                  )}
                  <p className="text-2xl md:text-3xl lg:text-4xl font-sans font-medium tracking-tight leading-[1.25] text-foreground">
                    {quote.text}
                  </p>
                  <footer className="mt-8 space-y-1">
                    <cite className="block text-base not-italic text-foreground">
                      {enlightenmentQuotesAuthor}
                    </cite>
                    <p className="text-sm text-muted">{quote.source}</p>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-center gap-4 md:hidden">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous quote"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background/70 text-foreground backdrop-blur-sm transition-colors hover:bg-surface-elevated"
              >
                <CaretLeft size={18} weight="regular" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next quote"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background/70 text-foreground backdrop-blur-sm transition-colors hover:bg-surface-elevated"
              >
                <CaretRight size={18} weight="regular" />
              </button>
            </div>
          </div>
        </div>

        <div className="pb-8 pt-2 md:pb-10">
          <div className="relative mx-auto flex justify-center" ref={shareMenuRef}>
            <button
              type="button"
              onClick={() => setShareOpen((open) => !open)}
              aria-expanded={shareOpen}
              aria-haspopup="menu"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-4 py-2.5 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-surface-elevated"
            >
              <ShareNetwork size={16} weight="regular" />
              <span>
                {copied === "quote"
                  ? "Quote copied"
                  : copied === "link"
                    ? "Link copied"
                    : "Share"}
              </span>
            </button>

            <AnimatePresence>
              {shareOpen && (
                <motion.div
                  role="menu"
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-full left-1/2 z-20 mb-2 min-w-[12rem] -translate-x-1/2 overflow-hidden rounded-md border border-border bg-background/95 py-1 shadow-lg backdrop-blur-md"
                >
                  {canNativeShare && (
                    <ShareMenuItem
                      label="Share via device"
                      onClick={shareNative}
                      icon={<ShareNetwork size={16} weight="regular" />}
                    />
                  )}
                  <ShareMenuItem
                    label="Share on X"
                    onClick={shareX}
                    icon={<XLogo size={16} weight="regular" />}
                  />
                  <ShareMenuItem
                    label="Share on Facebook"
                    onClick={shareFacebook}
                    icon={<FacebookLogo size={16} weight="regular" />}
                  />
                  <ShareMenuItem
                    label="Copy quote"
                    onClick={copyQuote}
                    icon={<Copy size={16} weight="regular" />}
                  />
                  <ShareMenuItem
                    label="Copy link"
                    onClick={copyLink}
                    icon={<LinkIcon size={16} weight="regular" />}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mx-auto mt-6 hidden w-full max-w-4xl flex-wrap items-center justify-center gap-2">
          {enlightenmentQuotes.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to quote ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-foreground"
                  : "w-2 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center text-xs text-muted/80 font-mono">
            From{" "}
            <Link
              href="/books/enlightenment-is-a-secret"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Enlightenment Is a Secret
            </Link>
            {" · "}
            <Link
              href="/teaching/enlightenment-is-a-secret"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Read the teaching
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function ShareMenuItem({
  label,
  onClick,
  icon,
}: {
  label: string;
  onClick: () => void;
  icon: ReactNode;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-surface-elevated"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
