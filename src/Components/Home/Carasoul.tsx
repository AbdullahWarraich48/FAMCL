"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { CARASOUL_TESTIMONIALS, type Testimonial } from "@/data/carasoulData";

type TrustStripConfig = {
  headline: string;
  supporting: string;
};

type CarasoulProps = {
  hideArrows?: boolean;
  items?: Testimonial[];
  trustStrip?: TrustStripConfig;
};

const isEditorialSlide = (t: Testimonial) =>
  Boolean(t.bodyParagraphs && t.bodyParagraphs.length > 0);

export default function TestimonialExact({
  hideArrows,
  items,
  trustStrip,
}: CarasoulProps) {
  const data =
    items && items.length > 0 ? items : CARASOUL_TESTIMONIALS;
  const [i, setI] = React.useState(0);
  const t = data[i];
  const editorial = isEditorialSlide(t);

  const prev = () => setI((x) => (x - 1 + data.length) % data.length);
  const next = () => setI((x) => (x + 1) % data.length);

  return (
    <section className="w-full bg-white py-10">
      <div className="content-padding-x mx-auto max-w-[1440px]">
        {trustStrip ? (
          <div
            className="mb-10 flex flex-col items-center gap-4 border-b border-slate-200/80 pb-8 md:mb-12 md:flex-row md:flex-wrap md:justify-center md:gap-6"
            role="region"
            aria-label="Client trust"
          >
            <div
              className="flex items-center gap-0.5 text-amber-500"
              aria-hidden
            >
              {Array.from({ length: 5 }).map((_, starIdx) => (
                <Star
                  key={starIdx}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span
              className="hidden h-6 w-px bg-slate-300 md:block"
              aria-hidden
            />
            <p className="text-center text-base font-semibold text-slate-800 md:text-left">
              {trustStrip.headline}
            </p>
            <span
              className="hidden h-6 w-px bg-slate-300 md:block"
              aria-hidden
            />
            <p className="max-w-3xl text-center text-sm leading-relaxed text-slate-600 md:text-left md:text-base">
              {trustStrip.supporting}
            </p>
          </div>
        ) : null}

        <div className="relative isolate flex flex-col gap-8 md:min-h-[560px] md:flex-row md:items-center md:justify-start">
          <div className="relative z-0 w-full shrink-0 md:w-[37%] md:min-w-[240px] md:max-w-[480px]">
            <div className="overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.12)] md:opacity-95">
              <div className="relative h-[240px] w-full sm:h-[280px] md:h-[360px]">
                <Image
                  src={t.imageUrl}
                  alt={editorial ? t.title : `${t.title} — ${t.author ?? "slide"}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority={i === 0}
                  draggable={false}
                />
              </div>
            </div>
          </div>

          <Card className="relative z-20 mt-4 flex w-full min-w-0 flex-1 flex-col justify-center rounded-2xl border-0 shadow-[0_26px_56px_rgba(10,37,77,0.22)] md:mt-0 md:min-h-[420px] md:max-w-none md:ml-[-2rem] md:ring-1 md:ring-[#b8d6fa] lg:ml-[-2.5rem]">
            <div className="flex min-h-[360px] flex-1 flex-col justify-center rounded-2xl bg-gradient-to-b from-white via-[#eef6ff] to-[#d8eaff] md:min-h-[420px]">
              <CardContent className="relative flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-14">
                {!hideArrows && (
                  <div className="absolute right-8 top-8 hidden gap-3 md:flex">
                    <Button
                      type="button"
                      onClick={prev}
                      className="h-12 w-12 rounded-md bg-[#12254B] p-0"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-5 w-5 text-white" />
                    </Button>
                    <Button
                      type="button"
                      onClick={next}
                      className="h-12 w-12 rounded-md bg-[#12254B] p-0"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                )}

                <h2 className="whitespace-pre-line text-2xl font-bold leading-tight tracking-tight text-[#175dab] sm:text-3xl md:text-5xl md:leading-[1.05]">
                  {t.title}
                </h2>

                {editorial ? (
                  <div
                    className="mt-4 h-0.5 w-20 rounded-full bg-[#175dab] md:mt-5"
                    aria-hidden
                  />
                ) : (
                  <div
                    className="mt-4 h-[3px] w-16 bg-slate-900 md:mt-6"
                    aria-hidden
                  />
                )}

                {!hideArrows && (
                  <div className="mt-4 flex gap-3 self-end md:hidden">
                    <Button
                      type="button"
                      onClick={prev}
                      className="h-10 w-10 rounded-md bg-[#12254B] p-0"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-4 w-4 text-white" />
                    </Button>
                    <Button
                      type="button"
                      onClick={next}
                      className="h-10 w-10 rounded-md bg-[#12254B] p-0"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                )}

                {editorial && t.subtitle ? (
                  <p className="mt-6 text-lg font-bold leading-snug text-slate-800 sm:text-xl md:mt-8 md:text-2xl">
                    {t.subtitle}
                  </p>
                ) : null}

                {editorial && t.bodyParagraphs ? (
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg md:mt-8 md:text-xl lg:max-w-[46rem]">
                    {t.bodyParagraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                ) : null}

                {!editorial && t.quote ? (
                  <p className="mt-6 max-w-none text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8 md:mt-8 md:text-xl lg:max-w-[46rem]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                ) : null}

                {!editorial && t.author ? (
                  <div className="mt-8 md:mt-10">
                    <div className="flex items-center gap-3 text-lg font-semibold text-[#175dab] sm:text-xl md:text-2xl">
                      <span className="inline-block h-[3px] w-7 bg-slate-900" />
                      <span>{t.author}</span>
                    </div>
                    {t.role ? (
                      <div className="mt-1 text-sm text-slate-700 sm:mt-2 sm:text-base md:text-lg">
                        {t.role}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </CardContent>
            </div>
          </Card>

          <div className="mt-6 flex justify-center gap-3 md:absolute md:bottom-2 md:left-1/2 md:-translate-x-1/2 md:mt-0">
            {data.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={[
                  "h-3 w-3 rounded-full transition",
                  idx === i ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
