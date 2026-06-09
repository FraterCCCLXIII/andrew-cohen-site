"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import NewsletterModal from "@/components/NewsletterModal";
import {
  NEWSLETTER_TIMING,
  type NewsletterSource,
} from "@/lib/newsletter";
import {
  markPromptedThisSession,
  shouldShowTimedPrompt,
} from "@/lib/newsletter-storage";

interface NewsletterContextValue {
  openNewsletter: (source?: NewsletterSource) => void;
}

const NewsletterContext = createContext<NewsletterContextValue | null>(null);

export function useNewsletter() {
  const context = useContext(NewsletterContext);
  if (!context) {
    throw new Error("useNewsletter must be used within NewsletterProvider");
  }
  return context;
}

export default function NewsletterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<NewsletterSource>("footer");

  const openNewsletter = useCallback((nextSource: NewsletterSource = "footer") => {
    setSource(nextSource);
    setIsOpen(true);
  }, []);

  const closeNewsletter = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!pathname || pathname.startsWith("/nondualizer")) return;
    if (!shouldShowTimedPrompt()) return;

    const timer = window.setTimeout(() => {
      if (!shouldShowTimedPrompt()) return;
      markPromptedThisSession();
      openNewsletter("prompt");
    }, NEWSLETTER_TIMING.showDelayMs);

    return () => window.clearTimeout(timer);
  }, [pathname, openNewsletter]);

  const value = useMemo(
    () => ({
      openNewsletter,
    }),
    [openNewsletter]
  );

  return (
    <NewsletterContext.Provider value={value}>
      {children}
      <NewsletterModal
        isOpen={isOpen}
        source={source}
        onClose={closeNewsletter}
      />
    </NewsletterContext.Provider>
  );
}
