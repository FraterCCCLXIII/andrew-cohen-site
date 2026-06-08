export const GA_MEASUREMENT_ID = "G-QQY3P6RT6H";

type GtagCommand = "config" | "event" | "js" | "set";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function gtag(...args: [GtagCommand, ...unknown[]]) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag(...args);
}

export function trackPageView(url: string) {
  gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackClick({
  linkText,
  linkUrl,
  element,
  outbound,
  mailto,
}: {
  linkText: string;
  linkUrl?: string;
  element: string;
  outbound: boolean;
  mailto: boolean;
}) {
  gtag("event", "click", {
    link_text: linkText,
    link_url: linkUrl,
    element,
    outbound,
    mailto,
    page_path: window.location.pathname,
  });
}
