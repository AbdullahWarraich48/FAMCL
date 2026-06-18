"use client";

import * as React from "react";
import Image from "next/image";
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
  sectionClassName?: string;
};

const isEditorialSlide = (t: Testimonial) =>
  Boolean(t.bodyParagraphs && t.bodyParagraphs.length > 0);

const isTestimonialSlide = (t: Testimonial) =>
  Boolean(t.quote && (t.titleBlue || t.titleRed));

export default function TestimonialExact({
  hideArrows,
  items,
  trustStrip,
  sectionClassName = "bg-white",
}: CarasoulProps) {
  const data =
    items && items.length > 0 ? items : CARASOUL_TESTIMONIALS;
  const [i, setI] = React.useState(0);
  const t = data[i];
  const editorial = isEditorialSlide(t);
  const testimonial = isTestimonialSlide(t);

  const prev = () => setI((x) => (x - 1 + data.length) % data.length);
  const next = () => setI((x) => (x + 1) % data.length);

  return (
    <section className={`w-full py-12 md:py-16 ${sectionClassName}`}>
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

        <div className="relative flex w-full flex-col gap-5 md:flex-row md:items-center">
          <div className="relative z-0 w-full shrink-0 md:w-[44%]">
            <div className="overflow-hidden rounded-xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={t.imageUrl}
                  alt={
                    editorial
                      ? t.title
                      : `${t.title} — ${t.author ?? "client"}`
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 44vw"
                  priority={i === 0}
                  draggable={false}
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full md:-ml-[10%] md:w-[66%]">
            <div className="relative rounded-xl border border-slate-200/90 bg-[#f5f8fc] shadow-[0_12px_48px_rgba(18,37,75,0.14)]">
              {!hideArrows && (
                <div className="absolute right-4 top-4 z-10 hidden gap-1.5 md:flex">
                  <Button
                    type="button"
                    onClick={prev}
                    className="h-8 w-8 rounded-sm bg-[#1E63B3] p-0 hover:bg-[#175dab]"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4 text-white" />
                  </Button>
                  <Button
                    type="button"
                    onClick={next}
                    className="h-8 w-8 rounded-sm bg-[#1E63B3] p-0 hover:bg-[#175dab]"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4 text-white" />
                  </Button>
                </div>
              )}

              <div className="flex min-h-[280px] flex-col justify-center px-5 py-8 sm:min-h-[360px] sm:px-10 md:min-h-[480px] md:px-11 md:py-14 lg:px-12">
                {testimonial ? (
                  <h2 className="text-xl font-bold leading-[1.15] tracking-tight sm:text-[1.9rem] md:text-[2.35rem] lg:text-[2.5rem]">
                    <span className="block">
                      <span className="text-[#175dab]">{t.titleBlue}</span>
                      {t.titleMidRed ? (
                        <>
                          {" "}
                          <span className="text-red-600">{t.titleMidRed}</span>
                        </>
                      ) : null}
                    </span>
                    {t.titleRed ? (
                      <span className="mt-0.5 block text-red-600">{t.titleRed}</span>
                    ) : null}
                  </h2>
                ) : (
                  <h2 className="whitespace-pre-line text-xl font-bold leading-tight tracking-tight text-[#175dab] sm:text-[1.9rem] md:text-[2.35rem] lg:text-[2.5rem]">
                    {t.title}
                  </h2>
                )}

                <div
                  className="mt-5 h-[3px] w-14 bg-[#175dab]"
                  aria-hidden
                />

                  {!hideArrows && (
                    <div className="mt-4 flex gap-1.5 md:hidden">
                      <Button
                        type="button"
                        onClick={prev}
                        className="h-8 w-8 rounded-sm bg-[#1E63B3] p-0 hover:bg-[#175dab]"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="h-4 w-4 text-white" />
                      </Button>
                      <Button
                        type="button"
                        onClick={next}
                        className="h-8 w-8 rounded-sm bg-[#1E63B3] p-0 hover:bg-[#175dab]"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  )}

                {editorial && t.subtitle ? (
                  <p className="mt-5 text-xl font-bold leading-snug text-[#175dab] md:text-[1.35rem]">
                    {t.subtitle}
                  </p>
                ) : null}

                {editorial && t.bodyParagraphs ? (
                  <div className="mt-5 space-y-4 overflow-y-auto text-base leading-relaxed text-slate-700 md:text-lg md:leading-8">
                    {t.bodyParagraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                ) : null}

                {!editorial && t.quote ? (
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 sm:text-[17px] md:text-lg md:leading-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                ) : null}

                {!editorial && t.author ? (
                  <div className="mt-8">
                    <p className="text-lg font-bold text-[#175dab] md:text-xl">
                      &mdash; {t.author}
                    </p>
                    {t.role ? (
                      <p className="mt-1 text-base text-slate-600 md:text-[17px]">
                        {t.role}
                      </p>
                    ) : null}
                  </div>
                ) : null}
                </div>
              </div>
            </div>
        </div>

        <div className="mt-7 flex justify-center gap-2 md:mt-8">
          {data.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === i ? "true" : undefined}
              className={[
                "h-2 w-2 rounded-full transition",
                idx === i
                  ? "bg-slate-800"
                  : "bg-slate-300 hover:bg-slate-400",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
