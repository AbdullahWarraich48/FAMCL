"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { TAX_CTA_DATA } from "@/data/taxCtaData";

export default function SelfAssessmentCta() {
  const data = TAX_CTA_DATA;

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-14">
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <Card className="overflow-hidden rounded-2xl border-0 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,420px)_1fr]">
            <div className="relative min-h-[240px] md:min-h-[320px]">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/10" />
            </div>

            <div className="bg-white">
              <div className="flex h-full flex-col justify-center p-8 md:p-10 lg:p-12">
                <h2 className="max-w-[720px] text-[28px] font-bold leading-[1.15] tracking-tight md:text-[36px] lg:text-[38px]">
                  <span className="text-[#175dab]">{data.titleBlue} </span>
                  <span className="text-red-600">{data.titleRed}</span>
                </h2>

                <p className="mt-4 max-w-[760px] text-[14px] leading-7 text-slate-600 md:text-[15px]">
                  {data.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    className="h-11 w-fit rounded-full bg-[#1E63B3] px-8 text-[13px] font-semibold leading-none text-white hover:bg-[#175dab]"
                  >
                    <Link
                      href={data.buttonHref}
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <span className="translate-x-1.5">{data.buttonLabel}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-11 w-fit rounded-full border-2 border-[#1E63B3] bg-white px-8 text-[13px] font-semibold leading-none text-[#1E63B3] hover:bg-[#1E63B3] hover:text-white"
                  >
                    <Link
                      href={data.secondaryButtonHref}
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <span>{data.secondaryButtonLabel}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
