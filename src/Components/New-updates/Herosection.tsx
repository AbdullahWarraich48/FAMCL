"use client";

import {
  SECTION_LABEL_PILL_ON_DARK,
  SECTION_LABEL_TEXT,
} from "@/constants/sectionBackgrounds";

type NewsHeroProps = {
  /** Small pill label above the heading */
  tagLabel?: string;
  /** Main page heading */
  title?: string;
  /** One‑line description under the heading */
  description?: string;
  /** Optional background colour, defaults to brand blue */
  backgroundClassName?: string;
};

export default function NewsUpdatesHero({
  tagLabel = "Resources",
  title = "News & Updates",
  description =
    "Regulatory and tax changes explained, with expert interpretation and impact assessment.",
  backgroundClassName = "bg-[#175dab]",
}: NewsHeroProps) {
  return (
    <section
      className={`w-full ${backgroundClassName}`}
      aria-labelledby="news-updates-heading"
    >
      <div className="content-padding-x mx-auto flex max-w-[1440px] flex-col items-center py-16 text-center text-white md:py-20 lg:py-24">
        {/* Pill */}
        <div
          className={`${SECTION_LABEL_PILL_ON_DARK} ${SECTION_LABEL_TEXT} text-xs sm:text-sm`}
          aria-label={tagLabel}
        >
          {tagLabel}
        </div>

        {/* Heading */}
        <h1
          id="news-updates-heading"
          className="mt-6 max-w-3xl text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[44px]"
        >
          {title}
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-100/90 sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
