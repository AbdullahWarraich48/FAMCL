"use client"

import * as React from "react"
import { Card, CardContent } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CARASOUL_TESTIMONIALS, type Testimonial } from "@/data/carasoulData"

type CarasoulProps = {
  hideArrows?: boolean
  items?: Testimonial[]
}

export default function TestimonialExact({ hideArrows, items }: CarasoulProps) {
  const data = items && items.length > 0 ? items : CARASOUL_TESTIMONIALS
  const [i, setI] = React.useState(0)
  const t = data[i]

  const prev = () => setI((x) => (x - 1 + data.length) % data.length)
  const next = () => setI((x) => (x + 1) % data.length)

  return (
    <section className="w-full bg-white py-10">
      {/* ✅ match upper component container */}
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="relative flex flex-col gap-8 md:min-h-[560px] md:flex-row md:items-center md:justify-start">
          {/* LEFT IMAGE */}
          <div className="relative z-0 w-full max-w-[720px] md:mr-[280px]">
            <div className="overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
              <img
                src={t.imageUrl}
                alt={t.author}
                className="h-[240px] w-full object-cover sm:h-[280px] md:h-[360px]"
                draggable={false}
              />
            </div>
          </div>

          {/* RIGHT CARD (overlapping on desktop, stacked on mobile) */}
          <Card className="relative z-10 mt-4 flex w-full max-w-[640px] flex-col justify-center rounded-2xl border-0 shadow-[0_22px_45px_rgba(0,0,0,0.14)] md:absolute md:right-0 md:top-1/2 md:mt-0 md:min-h-[420px] md:-translate-y-1/2">
            <div className="flex min-h-[360px] flex-1 flex-col justify-center rounded-2xl bg-gradient-to-b from-white/70 to-[#D8EAFF]  to-sky-100 md:min-h-[420px]">
              <CardContent className="relative flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-14">
                {/* Nav buttons (top-right on desktop) */}
                {!hideArrows && (
                  <div className="absolute right-8 top-8 hidden gap-3 md:flex">
                    <Button
                      type="button"
                      onClick={prev}
                      className="h-12 w-12 rounded-md bg-[#12254B] p-0"
                    >
                      <ChevronLeft className="h-5 w-5 text-white" />
                    </Button>
                    <Button
                      type="button"
                      onClick={next}
                      className="h-12 w-12 rounded-md bg-[#12254B] p-0 "
                    >
                      <ChevronRight className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                )}
                {/* Title */}
                <h2 className="whitespace-pre-line text-2xl font-bold leading-tight tracking-tight text-[#175dab] sm:text-3xl md:text-5xl md:leading-[1.05]">
                  {t.title}
                </h2>

                {/* Nav buttons (inline on mobile) */}
                {!hideArrows && (
                  <div className="mt-4 flex gap-3 self-end md:hidden">
                    <Button
                      type="button"
                      onClick={prev}
                      className="h-10 w-10 rounded-md bg-[#12254B] p-0"
                    >
                      <ChevronLeft className="h-4 w-4 text-white" />
                    </Button>
                    <Button
                      type="button"
                      onClick={next}
                      className="h-10 w-10 rounded-md bg-[#12254B] p-0"
                    >
                      <ChevronRight className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                )}

                {/* Underline */}
                <div className="mt-4 h-[3px] w-16 bg-slate-900 md:mt-6" />

                {/* Quote */}
                <p className="mt-6 max-w-[520px] text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8 md:mt-8 md:text-xl">
                  “{t.quote}”
                </p>

                {/* Author block */}
                <div className="mt-8 md:mt-10">
                  <div className="flex items-center gap-3 text-lg font-semibold text-[#175dab] sm:text-xl md:text-2xl">
                    <span className="inline-block h-[3px] w-7 bg-slate-900" />
                    <span>{t.author}</span>
                  </div>
                  <div className="mt-1 text-sm text-slate-700 sm:mt-2 sm:text-base md:text-lg">
                    {t.role}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* DOTS */}
          <div className="mt-6 flex justify-center gap-3 md:absolute md:bottom-2 md:left-1/2 md:-translate-x-1/2 md:mt-0">
            {data.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
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
  )
}
