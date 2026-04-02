"use client";

import Link from "next/link";
import { FileText, Share2 } from "lucide-react";
import { Button } from "@/Components/ui/button";

export type NewsArticleHeroProps = {
  backHref: string;
  /** e.g. "← Back" */
  backLabel?: string;
  title: string;
  datesLine: string;
  authorLine: string;
  category: string;
  /** Used for Web Share API title */
  shareTitle: string;
};

const handleShare = async (shareTitle: string) => {
  if (typeof window === "undefined") return;
  const url = window.location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title: shareTitle, url });
      return;
    }
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    }
  } catch {
    /* user cancelled or share unavailable */
  }
};

export default function NewsArticleHero({
  backHref,
  backLabel = "← Back",
  title,
  datesLine,
  authorLine,
  category,
  shareTitle,
}: NewsArticleHeroProps) {
  return (
    <section
      className="w-full bg-[#12254B]"
      aria-labelledby="article-hero-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px] pb-12 pt-8 md:pb-16 md:pt-10 lg:pb-20 lg:pt-12">
        <Link
          href={backHref}
          className="inline-flex items-center text-sm font-semibold text-white underline-offset-4 transition-opacity hover:opacity-90 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {backLabel}
        </Link>

        <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="min-w-0 flex-1">
            <h1
              id="article-hero-heading"
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-white"
              style={{ fontFamily: "var(--font-aleo), ui-serif, Georgia, serif" }}
            >
              {title}
            </h1>
            <p className="mt-5 max-w-[52rem] text-[18px] leading-[27.8px] text-white/95">
              {datesLine}
            </p>
            <p className="mt-2 max-w-[52rem] text-[18px] leading-[27.8px] text-white/95">
              {authorLine}
            </p>
            <div className="mt-5 flex items-center gap-2.5 text-base text-white/95">
              <FileText
                className="h-5 w-5 shrink-0 text-white/90"
                aria-hidden
              />
              <span>{category}</span>
            </div>
          </div>

          <div className="shrink-0 lg:pb-1">
            <Button
              type="button"
              variant="outline"
              className="h-11 rounded-full border-2 border-white bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              onClick={() => handleShare(shareTitle)}
              aria-label="Share this article"
            >
              <Share2 className="mr-2 h-4 w-4" aria-hidden />
              Share
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
