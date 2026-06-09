"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import {
  NEWSLETTER_COPY,
  type NewsletterSource,
} from "@/lib/newsletter";
import {
  markNewsletterDismissed,
  markNewsletterSubscribed,
} from "@/lib/newsletter-storage";

interface NewsletterModalProps {
  isOpen: boolean;
  source: NewsletterSource;
  onClose: () => void;
}

export default function NewsletterModal({
  isOpen,
  source,
  onClose,
}: NewsletterModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDismiss = useCallback(() => {
    if (source === "prompt" && status !== "success") {
      markNewsletterDismissed();
    }
    onClose();
  }, [onClose, source, status]);

  useEffect(() => {
    if (!isOpen) return;

    lastFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      emailInputRef.current?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleDismiss();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      lastFocusedRef.current?.focus();
    };
  }, [handleDismiss, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setStatus("idle");
      setErrorMessage(null);
    }
  }, [isOpen]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          website: formData.get("website"),
        }),
      });

      const payload = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to subscribe right now.");
      }

      markNewsletterSubscribed();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to subscribe right now. Please try again."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label={NEWSLETTER_COPY.close}
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-lg border border-border bg-surface shadow-2xl"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/hero-stars.jpg"
            alt=""
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/55 to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background from-[38%] via-background/92 to-transparent" />
        </div>

        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground/80 transition-colors hover:bg-background/40 hover:text-foreground"
          aria-label={NEWSLETTER_COPY.close}
        >
          <X size={18} weight="regular" />
        </button>

        {status === "success" ? (
          <div className="relative z-10 p-6 pr-14 sm:p-8 sm:pr-16">
            <h2
              id={titleId}
              className="text-2xl font-serif tracking-tight text-foreground"
            >
              {NEWSLETTER_COPY.successTitle}
            </h2>
            <p
              id={descriptionId}
              className="mt-3 text-sm leading-relaxed text-muted"
            >
              {NEWSLETTER_COPY.successMessage}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-foreground/85"
            >
              {NEWSLETTER_COPY.close}
            </button>
          </div>
        ) : (
          <div className="relative z-10 p-6 sm:p-8">
            <h2
              id={titleId}
              className="pr-10 text-2xl font-serif tracking-tight text-foreground"
            >
              {NEWSLETTER_COPY.title}
            </h2>
            <p
              id={descriptionId}
              className="mt-3 text-sm leading-relaxed text-muted"
            >
              {NEWSLETTER_COPY.description}
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="newsletter-website">Website</label>
                <input
                  id="newsletter-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="newsletter-email"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.14em] text-muted"
                >
                  {NEWSLETTER_COPY.emailLabel}
                </label>
                <input
                  ref={emailInputRef}
                  id="newsletter-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={NEWSLETTER_COPY.emailPlaceholder}
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
                />
              </div>

              {errorMessage && (
                <p className="text-sm text-red-400" role="alert">
                  {errorMessage}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-foreground/85 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting"
                    ? NEWSLETTER_COPY.submitting
                    : NEWSLETTER_COPY.submit}
                </button>
                {source === "prompt" && (
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="inline-flex items-center justify-center rounded-md px-2 py-2.5 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {NEWSLETTER_COPY.dismiss}
                  </button>
                )}
              </div>

              <p className="text-xs leading-relaxed text-muted">
                {NEWSLETTER_COPY.privacy}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
