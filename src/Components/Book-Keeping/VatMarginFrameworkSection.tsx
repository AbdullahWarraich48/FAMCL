"use client";

import { Check } from "lucide-react";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import {
  VAT_MARGIN_FRAMEWORK_DATA,
  type VatMarginFrameworkData,
} from "@/data/vatMarginScheme/frameworkData";

type VatMarginFrameworkSectionProps = {
  data?: VatMarginFrameworkData;
};

export const VatMarginFrameworkSection = ({
  data,
}: VatMarginFrameworkSectionProps) => {
  const content = data ?? VAT_MARGIN_FRAMEWORK_DATA;

  return (
    <section
      className="w-full bg-slate-50 py-14 md:py-20 lg:py-24"
      aria-labelledby={content.headingId}
    >
      <div className="content-padding-x mx-auto max-w-3xl">
        <SectionIntroHeader
          headingId={content.headingId}
          heading={content.title}
          headingBgClassName="bg-slate-50"
          headingBlockMarginTop="mt-0"
          headingClassName="text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[#1e3a5f] sm:text-3xl lg:text-[40px]"
        />

        <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed text-slate-600 sm:mt-8 sm:text-[16px]">
          {content.subtitle}
        </p>

        <div
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200/80 bg-gradient-to-br from-[#f0f7ff] via-[#f5f9ff] to-[#e8f2fc] p-6 shadow-sm sm:mt-12 sm:p-8"
          role="region"
          aria-label="Framework checklist"
        >
          <ul className="flex flex-col gap-4">
            {content.checklistItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white"
                  aria-hidden
                >
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-[15px] leading-relaxed text-slate-800 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VatMarginFrameworkSection;
