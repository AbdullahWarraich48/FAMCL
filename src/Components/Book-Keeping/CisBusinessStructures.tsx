"use client";

import { Building2, Check, User } from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import {
  CIS_BUSINESS_STRUCTURES_CARDS,
  CIS_BUSINESS_STRUCTURES_HEADING,
  type CisStructureCardData,
} from "@/data/constructionIndustryScheme/businessStructuresData";

const ICON_MAP = {
  soleTrader: User,
  limitedCompany: Building2,
} as const;

type CisStructureCardProps = {
  card: CisStructureCardData;
};

const CisStructureCard = ({ card }: CisStructureCardProps) => {
  const Icon = ICON_MAP[card.iconKey];

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-[28px] border-0 border-slate-100 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08),0_4px_12px_rgba(15,23,42,0.04)]">
      <CardContent className="flex flex-1 flex-col p-6 sm:p-8">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#175dab]"
          aria-hidden
        >
          <Icon className="h-7 w-7 text-white" strokeWidth={2} />
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#175dab] sm:text-[22px]">
          {card.title}
        </h3>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          {card.intro}
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          {card.primaryBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {card.midLabel ? (
          <p className="mt-6 text-[15px] font-medium leading-relaxed text-slate-800 sm:text-base">
            {card.midLabel}
          </p>
        ) : null}

        {card.secondaryBullets && card.secondaryBullets.length > 0 ? (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            {card.secondaryBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {card.closing ? (
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            {card.closing}
          </p>
        ) : null}

        {card.tip ? (
          <div
            className="mt-6 flex gap-3 rounded-2xl border border-emerald-200/90 bg-emerald-50/90 px-4 py-3 sm:px-5 sm:py-4"
            role="status"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
            </span>
            <p className="min-w-0 flex-1 text-[15px] font-medium leading-relaxed text-emerald-950 sm:text-base">
              {card.tip}
            </p>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export type CisBusinessStructuresProps = {
  heading?: string;
  cards?: readonly CisStructureCardData[];
};

export default function CisBusinessStructures({
  heading = CIS_BUSINESS_STRUCTURES_HEADING,
  cards = CIS_BUSINESS_STRUCTURES_CARDS,
}: CisBusinessStructuresProps) {
  return (
    <section
      className="w-full bg-[#f4f6fb] py-12 md:py-16 lg:py-20"
      aria-labelledby="cis-business-structures-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <SectionIntroHeader
          headingId="cis-business-structures-heading"
          heading={heading}
          headingBgClassName="bg-[#f4f6fb]"
          headingBlockMarginTop="mt-0"
          headingClassName="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-10 lg:gap-12">
          {cards.map((card) => (
            <CisStructureCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
