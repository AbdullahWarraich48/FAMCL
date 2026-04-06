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
  <li className="flex items-center gap-3 text-[13px] leading-6 text-slate-700">
    <span className={`h-[5px] w-[5px] rounded-full ${dot}`} />
    <span>{text}</span>
  </li>
);

export default function ComprehensiveAccountingSolutionsExact() {
  return (
    <section
      className="w-full bg-slate-50 py-16"
      aria-labelledby="accounting-sol-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-4xl text-center">
          <SectionIntroHeader
            headingId="accounting-sol-heading"
            heading={ACCOUNTING_SOL_SECTION.title}
            headingBgClassName="bg-slate-50"
            headingClassName="text-[28px] font-bold tracking-tight text-[#175dab] md:text-[32px]"
          />
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-6 text-slate-600 md:text-[15px]">
            {ACCOUNTING_SOL_SECTION.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
          {ACCOUNTING_SOL_BLOCKS.map((b) => {
            const IconComponent = ICON_MAP[b.iconKey];
            return (
              <div key={b.title} className="relative mx-auto w-full max-w-[620px]">
                {/* Mobile: image centered; lg+: image stays right (original layout) */}
                <div className="relative mx-auto w-full max-w-[470px] overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.18)] lg:ml-auto">
                  <img
                    src={b.imageUrl}
                    alt={b.title}
                    className="h-[420px] w-full object-cover md:h-[460px]"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/10" />
                </div>

                {/* Mobile: card centered over the block; lg+: card anchored left like before */}
                <Card className="absolute left-1/2 top-1/2 z-10 w-[min(300px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-0 shadow-[0_22px_45px_rgba(0,0,0,0.20)] md:w-[320px] lg:left-0 lg:translate-x-0">
                  <div className="rounded-2xl bg-[#D8EAFF]">
                    <CardContent className="p-5 md:p-6">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#175dab]">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>

                      <h3 className="mt-3 text-[17px] font-semibold text-slate-900 md:text-[18px]">
                        {b.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-5 text-slate-600">
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
