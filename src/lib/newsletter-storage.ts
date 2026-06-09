import {
  NEWSLETTER_STORAGE_KEYS,
  NEWSLETTER_TIMING,
} from "@/lib/newsletter";

function readDismissedAt(): number | null {
  try {
    const raw = localStorage.getItem(NEWSLETTER_STORAGE_KEYS.dismissedAt);
    if (!raw) return null;
    const value = Number(raw);
    return Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
}

export function hasNewsletterSubscribed(): boolean {
  try {
    return localStorage.getItem(NEWSLETTER_STORAGE_KEYS.subscribed) === "1";
  } catch {
    return false;
  }
}

export function markNewsletterSubscribed(): void {
  try {
    localStorage.setItem(NEWSLETTER_STORAGE_KEYS.subscribed, "1");
    sessionStorage.removeItem(NEWSLETTER_STORAGE_KEYS.promptedSession);
  } catch {
    // Ignore storage failures — UX still works for this visit.
  }
}

export function markNewsletterDismissed(): void {
  try {
    localStorage.setItem(
      NEWSLETTER_STORAGE_KEYS.dismissedAt,
      String(Date.now())
    );
    sessionStorage.setItem(NEWSLETTER_STORAGE_KEYS.promptedSession, "1");
  } catch {
    // Ignore storage failures.
  }
}

export function wasPromptedThisSession(): boolean {
  try {
    return sessionStorage.getItem(NEWSLETTER_STORAGE_KEYS.promptedSession) === "1";
  } catch {
    return false;
  }
}

export function markPromptedThisSession(): void {
  try {
    sessionStorage.setItem(NEWSLETTER_STORAGE_KEYS.promptedSession, "1");
  } catch {
    // Ignore storage failures.
  }
}

export function shouldShowTimedPrompt(): boolean {
  if (hasNewsletterSubscribed()) return false;
  if (wasPromptedThisSession()) return false;

  const dismissedAt = readDismissedAt();
  if (dismissedAt === null) return true;

  const cooldownMs =
    NEWSLETTER_TIMING.dismissCooldownDays * 24 * 60 * 60 * 1000;
  return Date.now() - dismissedAt >= cooldownMs;
}
