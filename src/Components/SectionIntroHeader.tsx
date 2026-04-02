"use client";

import * as React from "react";

export type SectionIntroHeaderProps = {
  headingId: string;
  heading: React.ReactNode;
  /** Kept for API compatibility; lines no longer use a mask behind text */
  headingBgClassName?: string;
  sectionLabel?: React.ReactNode;
  labelPillClassName?: string;
  /** Used when sectionLabel is a string */
  labelTextClassName?: string;
  labelAriaLabel?: string;
  className?: string;
  /** Margin above the heading row (after the label when present) */
  headingBlockMarginTop?: string;
  headingClassName?: string;
};

const SectionIntroHeader = ({
  headingId,
  heading,
  sectionLabel,
  labelPillClassName = "shrink-0 rounded-lg bg-[#BFFFCB] px-4 py-2",
  labelTextClassName = "text-sm font-semibold uppercase tracking-[0.2em] text-[#239337]",
  labelAriaLabel = "Section",
  className = "",
  headingBlockMarginTop = "mt-8",
  headingClassName = "text-[2rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]",
}: SectionIntroHeaderProps) => {
  const hasLabel = sectionLabel != null;

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {hasLabel ? (
        <div
          className={labelPillClassName}
          role="status"
          aria-label={labelAriaLabel}
        >
          {typeof sectionLabel === "string" ? (
            <span className={labelTextClassName}>{sectionLabel}</span>
          ) : (
            sectionLabel
          )}
        </div>
      ) : null}

      <div
        className={`flex w-full min-w-0 items-center justify-center gap-3 sm:gap-4 ${hasLabel ? headingBlockMarginTop : "mt-0"}`}
      >
        <span
          className="h-0.5 shrink-0 rounded-full bg-slate-400 w-14 sm:w-16 md:w-20"
          aria-hidden
        />
        <h2
          id={headingId}
          className={`min-w-0 max-w-4xl shrink px-1 text-center sm:px-2 ${headingClassName}`}
        >
          {heading}
        </h2>
        <span
          className="h-0.5 shrink-0 rounded-full bg-slate-400 w-14 sm:w-16 md:w-20"
          aria-hidden
        />
      </div>
    </div>
  );
};

export default SectionIntroHeader;
