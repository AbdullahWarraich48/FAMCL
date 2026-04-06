"use client";

import SectionIntroHeader from "@/Components/SectionIntroHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import ContentInsightBanner from "@/Components/Book-Keeping/ContentInsightBanner";
import {
  VAT_MARGIN_EXCEPTIONS_DATA,
  type ExceptionCardData,
  type VatMarginExceptionsData,
} from "@/data/vatMarginScheme/exceptionsData";

type VatMarginExceptionsGridProps = {
  data?: VatMarginExceptionsData;
};

const ExceptionCard = ({
  title,
  bullets,
  listHighlight,
  alert,
}: ExceptionCardData) => (
  <Card className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_6px_24px_rgba(30,58,95,0.07),0_2px_8px_rgba(30,58,95,0.04)]">
    <CardHeader className="border-b border-slate-100/90 px-6 pb-4 pt-6 text-center sm:px-8">
      <CardTitle className="text-base font-semibold leading-snug text-[#1e3a5f] sm:text-lg">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-1 flex-col px-6 pb-6 pt-5 sm:px-8">
      <ul
        className={`list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-slate-700 marker:text-[#1e3a5f] ${
          listHighlight
            ? "rounded-xl bg-sky-50/90 px-4 py-4 pl-8 sm:px-5 sm:py-5"
            : ""
        }`}
      >
        {bullets.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      {alert ? (
        <ContentInsightBanner variant={alert.variant} message={alert.message} />
      ) : null}
    </CardContent>
  </Card>
);

export const VatMarginExceptionsGrid = ({
  data,
}: VatMarginExceptionsGridProps) => {
  const content = data ?? VAT_MARGIN_EXCEPTIONS_DATA;

  return (
    <section
      className="w-full bg-white py-14 md:py-20 lg:py-24"
      aria-labelledby={content.headingId}
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto w-full max-w-3xl">
          <SectionIntroHeader
            headingId={content.headingId}
            heading={content.title}
            headingBgClassName="bg-white"
            headingBlockMarginTop="mt-0"
            headingClassName="text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[#1e3a5f] sm:text-3xl lg:text-[40px]"
          />

          <div className="mt-12 flex w-full flex-col gap-6 lg:mt-14 lg:gap-8">
            {content.cards.map((card) => (
              <ExceptionCard
                key={card.title}
                title={card.title}
                bullets={card.bullets}
                listHighlight={card.listHighlight}
                alert={card.alert}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VatMarginExceptionsGrid;
