"use client";

import type { LucideIcon } from "lucide-react";
import {
  Calculator,
  Clock,
  Shield,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import type { CisSubcontractorBenefit } from "@/data/constructionIndustryScheme/subcontractorTaxReturnData";
import {
  CIS_SUBCONTRACTOR_BENEFITS,
  CIS_SUBCONTRACTOR_TAX_RETURN_HEADING,
  CIS_SUBCONTRACTOR_TAX_RETURN_INTRO,
} from "@/data/constructionIndustryScheme/subcontractorTaxReturnData";

const BENEFIT_ICONS: Record<
  CisSubcontractorBenefit["iconKey"],
  LucideIcon
> = {
  trendingUp: TrendingUp,
  clock: Clock,
  shield: Shield,
  shieldCheck: ShieldCheck,
  calculator: Calculator,
};

type BenefitCardProps = {
  benefit: CisSubcontractorBenefit;
};

const BenefitCard = ({ benefit }: BenefitCardProps) => {
  const Icon = BENEFIT_ICONS[benefit.iconKey];

  return (
    <Card className="flex h-full w-full flex-col overflow-hidden rounded-2xl border-0 border-slate-100 bg-gradient-to-b from-white/80 to-[#D8EAFF] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)]">
      <CardHeader className="space-y-3 p-0">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#175dab] text-white"
          aria-hidden
        >
          <Icon className="h-6 w-6" strokeWidth={2} />
        </span>
        <CardTitle className="text-[16px] font-semibold leading-tight tracking-tight text-[#175dab]">
          {benefit.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 pt-1">
        <CardDescription className="text-[15px] leading-[1.6] text-slate-600">
          {benefit.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export type CisSubcontractorTaxReturnProps = {
  heading?: string;
  intro?: string;
  benefits?: readonly CisSubcontractorBenefit[];
};

export default function CisSubcontractorTaxReturn({
  heading = CIS_SUBCONTRACTOR_TAX_RETURN_HEADING,
  intro = CIS_SUBCONTRACTOR_TAX_RETURN_INTRO,
  benefits = CIS_SUBCONTRACTOR_BENEFITS,
}: CisSubcontractorTaxReturnProps) {
  const topRow = benefits.slice(0, 3);
  const bottomRow = benefits.slice(3, 5);

  return (
    <section
      className="w-full bg-white py-12 md:py-16 lg:py-20"
      aria-labelledby="cis-subcontractor-tax-return-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-4xl">
          <SectionIntroHeader
            headingId="cis-subcontractor-tax-return-heading"
            heading={heading}
            headingBgClassName="bg-white"
            headingBlockMarginTop="mt-0"
            headingClassName="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[27.8px]">
            {intro}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl md:mt-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {topRow.map((benefit) => (
              <BenefitCard key={benefit.title} benefit={benefit} />
            ))}
          </div>

          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:mt-8 md:gap-8">
            {bottomRow.map((benefit) => (
              <BenefitCard key={benefit.title} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
