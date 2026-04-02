"use client";

import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import { FACTS_LUCIDE } from "@/lib/bookkeepingContentLucideIcons";
import {
  BOOKKEEPING_FACTS_DATA,
  type FactsData,
} from "@/data/bookkeeping";

type FactCardProps = {
  stat: string;
  description: string;
  source?: string;
  icon: LucideIcon;
  principleStyle?: boolean;
};

type FactsProps = {
  data?: FactsData;
};

const FactCard = ({
  stat,
  description,
  source,
  icon: Icon,
  principleStyle,
}: FactCardProps) => (
  <Card
    className={`flex h-full flex-col overflow-hidden rounded-2xl border-0 border-slate-100 bg-gradient-to-b from-white/70 to-[#D8EAFF] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)] ${principleStyle ? "text-left" : ""}`}
  >
    <CardHeader className="p-0">
      <span
        className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f] text-white"
        aria-hidden
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </span>
      <CardTitle
        className={
          principleStyle
            ? "text-lg font-semibold leading-snug tracking-tight text-[#1e3a5f] sm:text-xl"
            : "text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl"
        }
      >
        {stat}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-1 flex-col p-0 pt-4">
      <CardDescription className="text-[15px] leading-[1.6] text-slate-600">
        {description}
      </CardDescription>
      {source?.trim() ? (
        <p className="mt-4 text-[13px] text-slate-500">Source: {source}</p>
      ) : null}
    </CardContent>
  </Card>
);

export const Facts = ({ data }: FactsProps) => {
  const content = data ?? BOOKKEEPING_FACTS_DATA;
  const principleCards = content.cardStyle === "principles";

  return (
    <section
      className="w-full bg-[#F6F9FF] py-10 md:py-16 lg:py-20"
      aria-labelledby="facts-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <SectionIntroHeader
            headingId="facts-heading"
            sectionLabel={
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#239337] sm:text-sm sm:tracking-[0.2em]">
                {content.sectionLabel}
              </span>
            }
            heading={content.heading}
            headingBgClassName="bg-[#F6F9FF]"
            headingBlockMarginTop="mt-6 sm:mt-8"
            headingClassName="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]"
          />

          <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-slate-600 sm:mt-6 sm:text-[18px] sm:leading-[27.8px]">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {content.items.map(({ stat, description, source, iconKey }) => (
            <FactCard
              key={stat}
              stat={stat}
              description={description}
              source={source}
              icon={FACTS_LUCIDE[iconKey]}
              principleStyle={principleCards}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
