"use client";

import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import { WHY_MATTERS_LUCIDE } from "@/lib/bookkeepingContentLucideIcons";
import {
  BOOKKEEPING_WHY_MATTERS_DATA,
  type WhyMattersData,
} from "@/data/bookkeeping";

type BenefitCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

type WhyMattersProps = {
  data?: WhyMattersData;
};

const BenefitCard = ({ title, description, Icon }: BenefitCardProps) => (
  <Card className="flex w-full flex-col overflow-hidden rounded-2xl border-0 border-slate-100 bg-white p-4 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)]">
    <div className="flex items-start gap-4">
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f] text-white"
        aria-hidden
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <CardTitle className="text-[16px] font-semibold leading-tight tracking-tight text-[#1e3a5f]">
          {title}
        </CardTitle>
        <CardDescription className="mt-2 text-[15px] leading-[1.6] text-slate-600">
          {description}
        </CardDescription>
      </div>
    </div>
  </Card>
);

export const WhyMatters = ({ data }: WhyMattersProps) => {
  const content = data ?? BOOKKEEPING_WHY_MATTERS_DATA;

  return (
    <section
      className="w-full bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="why-matters-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <SectionIntroHeader
            headingId="why-matters-heading"
            sectionLabel={content.sectionLabel}
            heading={content.heading}
            headingBgClassName="bg-white"
          />

          <p className="mt-6 max-w-3xl text-[18px] leading-[27.8px] text-slate-600">
            {content.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {content.items.map(({ title, description, iconKey }) => (
            <BenefitCard
              key={title}
              title={title}
              description={description}
              Icon={WHY_MATTERS_LUCIDE[iconKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;
