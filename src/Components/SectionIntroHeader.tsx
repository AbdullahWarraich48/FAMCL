"use client";

import * as React from "react";
import { SplitHeading } from "@/Components/SplitHeading";
import {
  SECTION_ACCENT_LINE,
  SECTION_LABEL_PILL,
  SECTION_LABEL_TEXT,
} from "@/constants/sectionBackgrounds";

export type SectionIntroHeaderProps = {
  headingId: string;
  heading: React.ReactNode;
  /** Blue portion when split heading is used */
  headingBefore?: string;
  /** Red portion when split heading is used */
  headingHighlight?: string;
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
  headingBlueClassName?: string;
  headingRedClassName?: string;
  accentLineClassName?: string;
};

const SectionIntroHeader = ({
  headingId,
  heading,
  headingBefore,
  headingHighlight,
  headingBgClassName,
  sectionLabel,
  labelPillClassName = SECTION_LABEL_PILL,
  labelTextClassName = SECTION_LABEL_TEXT,
  labelAriaLabel = "Section",
  className = "",
  headingBlockMarginTop = "mt-8",
  headingClassName = "text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[44px]",
  headingBlueClassName,
  headingRedClassName,
  accentLineClassName = SECTION_ACCENT_LINE,
}: SectionIntroHeaderProps) => {
  const hasLabel = sectionLabel != null;
  const useSplitHeading =
    (headingBefore != null && headingHighlight != null) ||
    typeof heading === "string";

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
          className={accentLineClassName}
          aria-hidden
        />
        <h2
          id={headingId}
          className={`min-w-0 max-w-4xl shrink px-1 text-center sm:px-2 ${headingClassName}`}
        >
          {useSplitHeading ? (
            <SplitHeading
              heading={heading}
              headingBefore={headingBefore}
              headingHighlight={headingHighlight}
              blueClassName={headingBlueClassName}
              redClassName={headingRedClassName}
            />
          ) : (
            heading
          )}
        </h2>
        <span
          className={accentLineClassName}
          aria-hidden
        />
      </div>
    </div>
  );
};

export default SectionIntroHeader;
