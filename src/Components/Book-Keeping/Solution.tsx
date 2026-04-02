"use client";

import type { LucideIcon } from "lucide-react";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import { SOLUTION_LUCIDE } from "@/lib/bookkeepingContentLucideIcons";
import { Card, CardContent } from "@/Components/ui/card";
import {
  BOOKKEEPING_SOLUTION_DATA,
  type SolutionData,
} from "@/data/bookkeeping";

type StepCardProps = {
  number: string;
  title: string;
  icon: LucideIcon;
};

type SolutionProps = {
  data?: SolutionData;
};

const StepCard = ({ number, title, icon: Icon }: StepCardProps) => (
  <Card className="overflow-hidden rounded-2xl border-0 border-slate-100 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
    <CardContent className="flex min-h-[100px] items-center gap-6 py-4 px-2 sm:gap-8 sm:px-6">
      <span
        className="text-3xl font-bold leading-none text-slate-900 sm:text-4xl"
        aria-hidden
      >
        {number}
      </span>
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f] text-white"
        aria-hidden
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </span>
      <h3 className="min-w-0 flex-1 text-base font-semibold text-slate-800 sm:text-lg">
        {title}
      </h3>
    </CardContent>
  </Card>
);

export const Solution = ({ data }: SolutionProps) => {
  const content = data ?? BOOKKEEPING_SOLUTION_DATA;

  return (
    <section
      className="w-full bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="solution-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <SectionIntroHeader
            headingId="solution-heading"
            sectionLabel={content.sectionLabel}
            heading={content.heading}
            headingBgClassName="bg-white"
          />

          <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-slate-600 sm:text-[18px] sm:leading-[27.8px]">
            {content.description}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-5 sm:mt-16 sm:gap-6">
          {content.steps.map(({ number, title, iconKey }) => (
            <StepCard
              key={number}
              number={number}
              title={title}
              icon={SOLUTION_LUCIDE[iconKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
