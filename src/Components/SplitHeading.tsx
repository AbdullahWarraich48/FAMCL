import type { ReactNode } from "react";
import { splitSectionHeading } from "@/lib/splitSectionHeading";

type SplitHeadingProps = {
  heading?: ReactNode;
  headingBefore?: string;
  headingHighlight?: string;
  blueClassName?: string;
  redClassName?: string;
};

export function SplitHeading({
  heading,
  headingBefore,
  headingHighlight,
  blueClassName = "text-[#175dab]",
  redClassName = "text-red-600",
}: SplitHeadingProps) {
  if (headingBefore != null && headingHighlight != null) {
    return (
      <>
        <span className={blueClassName}>{headingBefore}</span>
        <span className={redClassName}>{headingHighlight}</span>
      </>
    );
  }

  if (typeof heading === "string") {
    const split = splitSectionHeading(heading);
    return (
      <>
        <span className={blueClassName}>{split.headingBefore}</span>
        <span className={redClassName}>{split.headingHighlight}</span>
      </>
    );
  }

  return heading ?? null;
}
