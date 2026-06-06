"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import {
  GA_MEASUREMENT_ID,
  GOOGLE_TAG_ID,
  trackClick,
  trackPageView,
} from "@/lib/gtag";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

function ClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest("a, button, [role='button']");
      if (!element) return;

      const linkText = (element.textContent ?? "").replace(/\s+/g, " ").trim();
      if (!linkText) return;

      const href =
        element instanceof HTMLAnchorElement ? element.getAttribute("href") : null;
      const absoluteUrl =
        href && typeof window !== "undefined"
          ? new URL(href, window.location.origin).href
          : undefined;

      trackClick({
        linkText: linkText.slice(0, 120),
        linkUrl: absoluteUrl,
        element: element.tagName.toLowerCase(),
        outbound: Boolean(
          absoluteUrl && !absoluteUrl.startsWith(window.location.origin)
        ),
        mailto: Boolean(href?.startsWith("mailto:")),
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_TAG_ID}', { send_page_view: false });
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      <ClickTracker />
    </>
  );
}
