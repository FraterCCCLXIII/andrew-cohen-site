import { Suspense } from "react";
import QuoteCarousel from "@/components/QuoteCarousel";

export default function QuotesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center pt-16">
          <p className="text-sm text-muted font-mono">Loading quotes…</p>
        </div>
      }
    >
      <QuoteCarousel />
    </Suspense>
  );
}
