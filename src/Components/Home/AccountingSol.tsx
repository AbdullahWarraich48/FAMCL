"use client";

import * as React from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Briefcase, UserRound } from "lucide-react";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import {
  ACCOUNTING_SOL_BLOCKS,
  ACCOUNTING_SOL_SECTION,
} from "@/data/accountingSolData";

const ICON_MAP = {
  briefcase: Briefcase,
  userRound: UserRound,
} as const;

const Bullet = ({ dot, text }: { dot: string; text: string }) => (
  <li className="flex items-center gap-3 text-[14px] leading-6 text-slate-700 md:text-[15px]">
    <span className={`h-[5px] w-[5px] rounded-full ${dot}`} />
    <span>{text}</span>
  </li>
);

type AccountingSolProps = {
  sectionClassName?: string;
};

export default function ComprehensiveAccountingSolutionsExact({
  sectionClassName = "bg-[#cbdcff]",
}: AccountingSolProps) {
  return (
    <section
      className={`w-full py-16 ${sectionClassName}`}
      aria-labelledby="accounting-sol-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-4xl text-center">
          <SectionIntroHeader
            headingId="accounting-sol-heading"
            heading={
              <>
                <span className="text-[#175dab]">
                  {ACCOUNTING_SOL_SECTION.titleBefore}
                </span>
                <span className="text-red-600">
                  {ACCOUNTING_SOL_SECTION.titleHighlight}
                </span>
              </>
            }
            headingBgClassName={sectionClassName}
            headingClassName="text-[28px] font-bold tracking-tight md:text-[32px]"
          />
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-slate-600 md:mt-4 md:text-lg">
            {ACCOUNTING_SOL_SECTION.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
          {ACCOUNTING_SOL_BLOCKS.map((b) => {
            const IconComponent = ICON_MAP[b.iconKey];
            return (
              <div key={b.title} className="relative mx-auto w-full max-w-[620px] pb-4 lg:min-h-[480px] lg:pb-0">
                {/* Image */}
                <div className="relative mx-auto w-full max-w-[470px] overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.18)] lg:ml-auto">
                  <img
                    src={b.imageUrl}
                    alt={b.title}
                    className="h-[280px] w-full object-cover sm:h-[360px] md:h-[420px] lg:h-[460px]"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/10" />
                </div>

                {/* Card: stacked on mobile, overlaid on large screens */}
                <Card className="relative z-10 mx-auto mt-6 w-full max-w-[360px] rounded-2xl border-0 shadow-[0_22px_45px_rgba(0,0,0,0.20)] lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:w-[360px] lg:-translate-y-1/2">
                  <div className="rounded-2xl bg-white">
                    <CardContent className="p-5 md:p-6">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#175dab]">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>

                      <h3 className="mt-3 text-[18px] font-semibold text-slate-900 md:text-[19px]">
                        {b.title}
                      </h3>

                      <p className="mt-2 text-[14px] leading-6 text-slate-600 md:text-[15px] md:leading-7">
                        {b.desc}
                      </p>

                      <ul className="mt-3 space-y-1.5">
                        {b.bullets.map((x) => (
                          <Bullet key={x} dot={b.dot} text={x} />
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
