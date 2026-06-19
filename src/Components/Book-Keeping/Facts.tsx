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
import { SECTION_BG } from "@/constants/sectionBackgrounds";
import { getFactSourceUrl } from "@/constants/factSourceUrls";

type FactCardProps = {
  stat: string;
  description: string;
  source?: string;
  sourceUrl?: string;
  icon: LucideIcon;
  principleStyle?: boolean;
};

type FactsProps = {
  data?: FactsData;
  sectionClassName?: string;
};

const FactCard = ({
  stat,
  description,
  source,
  sourceUrl,
  icon: Icon,
  principleStyle,
}: FactCardProps) => {
  const resolvedSourceUrl = getFactSourceUrl(source, sourceUrl);

  return (
  <Card
    className={`flex h-full flex-col overflow-hidden rounded-2xl border-0 border-slate-100 bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)] ${principleStyle ? "text-left" : ""}`}
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
            ? "text-base font-semibold leading-snug tracking-tight text-[#1e3a5f] sm:text-lg"
            : "text-lg font-bold leading-snug tracking-tight text-[#1e3a5f] sm:text-xl"
        }
      >
        {stat}
      </CardTitle>
    </CardHeader>
    <CardContent className={`flex flex-1 flex-col p-0 ${description.trim() ? "pt-4" : ""}`}>
      {description.trim() ? (
        <CardDescription className="text-[15px] leading-[1.6] text-slate-600">
          {description}
        </CardDescription>
      ) : null}
      {source?.trim() ? (
        <p className="mt-4 text-[13px] text-slate-500">
          Source:{" "}
          {resolvedSourceUrl ? (
            <a
              href={resolvedSourceUrl}
              target={resolvedSourceUrl.startsWith("/") ? undefined : "_blank"}
              rel={
                resolvedSourceUrl.startsWith("/")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="font-medium text-[#175dab] underline-offset-2 hover:underline"
            >
              {source}
            </a>
          ) : (
            source
          )}
        </p>
      ) : null}
    </CardContent>
  </Card>
  );
};

export const Facts = ({
  data,
  sectionClassName = SECTION_BG.alt,
}: FactsProps) => {
  const content = data ?? BOOKKEEPING_FACTS_DATA;
  const principleCards = content.cardStyle === "principles";
  const factsGridClass =
    content.items.length === 4
      ? "mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-2 lg:gap-8 xl:grid-cols-4"
      : "mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-8";

  return (
    <section
      className={`w-full ${sectionClassName} py-10 md:py-16 lg:py-20`}
      aria-labelledby="facts-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <SectionIntroHeader
            headingId="facts-heading"
            sectionLabel={content.sectionLabel}
            heading={content.heading}
            headingBgClassName={sectionClassName}
            headingBlockMarginTop="mt-6 sm:mt-8"
            headingClassName="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]"
          />

          <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-slate-600 sm:mt-6 sm:text-[18px] sm:leading-[27.8px]">
            {content.description}
          </p>
        </div>

        <div className={factsGridClass}>
          {content.items.map(({ stat, description, source, sourceUrl, iconKey }) => (
            <FactCard
              key={stat}
              stat={stat}
              description={description}
              source={source}
              sourceUrl={sourceUrl}
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
