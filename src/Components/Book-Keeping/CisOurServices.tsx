"use client";

import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, Shield } from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import type { CisOurServiceColumn } from "@/data/constructionIndustryScheme/ourServicesData";
import {
  CIS_OUR_SERVICES_COLUMNS,
  CIS_OUR_SERVICES_HEADING,
} from "@/data/constructionIndustryScheme/ourServicesData";

const COLUMN_ICONS: Record<
  CisOurServiceColumn["iconKey"],
  LucideIcon
> = {
  contractors: Shield,
  subcontractors: ClipboardCheck,
};

type ServiceColumnCardProps = {
  column: CisOurServiceColumn;
};

const ServiceColumnCard = ({ column }: ServiceColumnCardProps) => {
  const Icon = COLUMN_ICONS[column.iconKey];

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-0 border-slate-100 bg-gradient-to-b from-white/80 to-[#D8EAFF] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:p-8">
      <CardContent className="flex flex-1 flex-col p-0">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#175dab]"
          aria-hidden
        >
          <Icon className="h-6 w-6 text-white" strokeWidth={2} />
        </div>
        <h3 className="mt-5 text-lg font-bold text-[#175dab] sm:text-xl">
          {column.title}
        </h3>
        <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          {column.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export type CisOurServicesProps = {
  heading?: string;
  columns?: readonly CisOurServiceColumn[];
};

export default function CisOurServices({
  heading = CIS_OUR_SERVICES_HEADING,
  columns = CIS_OUR_SERVICES_COLUMNS,
}: CisOurServicesProps) {
  return (
    <section
      className="w-full bg-[#f4f6fb] py-12 md:py-16 lg:py-20"
      aria-labelledby="cis-our-services-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <SectionIntroHeader
          headingId="cis-our-services-heading"
          heading={heading}
          headingBgClassName="bg-[#f4f6fb]"
          headingBlockMarginTop="mt-0"
          headingClassName="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]"
        />

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-10">
          {columns.map((column) => (
            <ServiceColumnCard key={column.id} column={column} />
          ))}
        </div>
      </div>
    </section>
  );
}
