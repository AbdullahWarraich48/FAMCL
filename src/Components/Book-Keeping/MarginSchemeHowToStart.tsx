"use client";

import { Check, Info } from "lucide-react";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import {
  VAT_MARGIN_HOW_TO_START_DATA,
  type HowToStartMarginSchemeData,
} from "@/data/vatMarginScheme/howToStartData";

type MarginSchemeHowToStartProps = {
  data?: HowToStartMarginSchemeData;
};

export const MarginSchemeHowToStart = ({
  data,
}: MarginSchemeHowToStartProps) => {
  const content = data ?? VAT_MARGIN_HOW_TO_START_DATA;

  return (
    <section
      className="w-full bg-slate-50 pb-16 pt-4 md:pb-20 md:pt-6 lg:pb-24"
      aria-labelledby={content.headingId}
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <SectionIntroHeader
          headingId={content.headingId}
          heading={content.title}
          headingBgClassName="bg-slate-50"
          headingBlockMarginTop="mt-0"
          headingClassName="text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[#1e3a5f] sm:text-3xl lg:text-[40px]"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-[16px] leading-relaxed text-slate-600 sm:mt-8 sm:text-[17px] sm:leading-[1.65]">
          {content.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-8">
          {/* Checklist panel */}
          <div
            className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-[#f0f7ff] via-[#f5f9ff] to-[#e8f2fc] p-6 shadow-sm sm:p-8"
            role="region"
            aria-label="Steps to use the margin scheme"
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
                  <span className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Info panel */}
          <aside
            className="flex flex-col justify-center rounded-2xl border border-slate-200/80 bg-gradient-to-br from-[#f0f7ff] via-[#f5f9ff] to-[#e8f2fc] p-6 shadow-sm sm:p-8"
            aria-label="Registration note"
          >
            <div className="flex gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f] text-white"
                aria-hidden
              >
                <Info className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <p className="text-[15px] leading-relaxed text-slate-700 sm:text-[17px] sm:leading-[1.65]">
                {content.infoNote}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default MarginSchemeHowToStart;
