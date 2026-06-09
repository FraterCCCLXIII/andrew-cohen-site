export const NEWSLETTER_COPY = {
  title: "Stay in touch",
  description:
    "Get updates on new additions to the library and archive, and learn more about Andrew Cohen's teachings.",
  emailLabel: "Email address",
  emailPlaceholder: "you@example.com",
  submit: "Subscribe",
  submitting: "Subscribing…",
  successTitle: "You're on the list",
  successMessage:
    "Thank you. Watch your inbox for updates about the archive and Andrew Cohen's teachings.",
  dismiss: "Not now",
  close: "Close",
  privacy:
    "We'll only use your email for site updates. Unsubscribe anytime from any message.",
  footerLink: "Newsletter",
} as const;

export const NEWSLETTER_TIMING = {
  /** Wait before showing the timed prompt. */
  showDelayMs: 45_000,
  /** Don't prompt again for this many days after dismiss. */
  dismissCooldownDays: 14,
} as const;

export const NEWSLETTER_STORAGE_KEYS = {
  subscribed: "ac-newsletter-subscribed",
  dismissedAt: "ac-newsletter-dismissed-at",
  promptedSession: "ac-newsletter-prompted-session",
} as const;

export type NewsletterSource = "footer" | "prompt";

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
