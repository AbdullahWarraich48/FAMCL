"use client";

import Link from "next/link";

export default function FeaturedInsight() {
  return (
    <section
      className="w-full bg-white py-8 md:py-10 lg:py-12"
      aria-labelledby="featured-insight-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[1280px] rounded-3xl bg-gradient-to-b from-[#E4F2FF] to-[#F4F9FF] px-6 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.18)] md:px-10 md:py-10">
          {/* Pill */}
          <div
            className="inline-flex items-center justify-center rounded-full bg-[#bfffcb]  px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-sm"
            aria-label="Featured insight"
          >
            Featured Insight
          </div>

          {/* Heading */}
          <h2
            id="featured-insight-heading"
            className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#175dab] sm:text-3xl lg:text-[32px]"
          >
            Preparing for the Expansion of Making Tax Digital
          </h2>

          {/* Body text */}
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            The UK government continues to expand Making Tax Digital (MTD) as part of its strategy
            to modernise the tax system. From April 2026, many self-employed individuals and
            landlords will be required to maintain digital records and submit quarterly updates to
            HMRC.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            This change represents a significant shift from the traditional annual Self-Assessment
            reporting model. Businesses and individuals should begin reviewing their
            record-keeping systems to ensure compatibility with digital reporting requirements.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#12254b] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#184B83] sm:text-base"
            >
              Read Full Article
              <span aria-hidden className="text-base">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

