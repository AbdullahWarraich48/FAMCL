"use client";

import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";

type AgentHeroProps = {
  /** Page title, e.g. "FreeAgent Cloud Accounting Software" */
  title: string;
  /** Small breadcrumb / category text shown above the card */
  breadcrumb?: string;
  /** e.g. "Last updated 2 Mar 2026" */
  lastUpdated?: string;
  /** e.g. "First published 9 Oct 2024" */
  firstPublished?: string;
  /** e.g. "1 min read" */
  readTime?: string;
  /** e.g. "Digital Reporting" */
  tagLabel?: string;
  /** Optional back link URL (defaults to previous page via history.back) */
  backHref?: string;
};

export default function AgentHero({
  title,
  breadcrumb,
  lastUpdated,
  firstPublished,
  readTime,
  tagLabel,
  backHref,
}: AgentHeroProps) {
  const showMetaRow = lastUpdated || firstPublished || readTime;

  return (
    <section
      className="w-full bg-[#175dab]"
      aria-labelledby="agent-hero-heading"
    >
      <div className="content-padding-x mx-auto flex max-w-[1440px] flex-col py-16 text-white md:py-20 lg:py-24">
       

        {/* Main content card */}
        <div className="mx-auto w-full max-w-[1280px]">
          {/* Back link */}
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-100">
            {backHref ? (
              <Link href={backHref} className="inline-flex items-center gap-1 hover:underline">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-1 hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
            )}
          </div>

          {/* Title */}
          <h1
            id="agent-hero-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px]"
          >
            {title}
          </h1>

          {/* Meta row */}
          {showMetaRow && (
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-100/90">
              {lastUpdated && <span>Last updated {lastUpdated}</span>}
              {firstPublished && (
                <>
                  <span className="hidden h-4 w-px bg-slate-200/40 sm:inline-block" aria-hidden />
                  <span>First published {firstPublished}</span>
                </>
              )}
              {readTime && (
                <>
                  <span className="hidden h-4 w-px bg-slate-200/40 sm:inline-block" aria-hidden />
                  <span>{readTime}</span>
                </>
              )}
            </div>
          )}

          {/* Tag + share row */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
           
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#12254B] sm:text-sm"
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}