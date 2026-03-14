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
        <div className="relative flex min-h-[560px] items-center justify-start">
          {/* LEFT IMAGE */}
          <div className="relative z-0 w-full max-w-[720px] md:mr-[280px]">
            <div className="overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
              <img
                src={t.imageUrl}
                alt={t.author}
                className="h-[320px] w-full object-cover md:h-[360px]"
                draggable={false}
              />
            </div>
          </div>

          {/* RIGHT CARD (overlapping) */}
          <Card className="absolute right-0 top-1/2 z-10 flex min-h-[420px] w-full max-w-[640px] -translate-y-1/2 flex-col justify-center rounded-2xl border-0 shadow-[0_22px_45px_rgba(0,0,0,0.14)]">
            <div className="flex min-h-[420px] flex-1 flex-col justify-center rounded-2xl bg-gradient-to-b from-white/70 to-[#D8EAFF]  to-sky-100">
              <CardContent className="relative flex flex-1 flex-col justify-center p-10 md:p-14">
                {/* Nav buttons (top-right) */}
                {!hideArrows && (
                  <div className="absolute right-8 top-8 flex gap-3">
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
                <h2 className="whitespace-pre-line text-[44px] font-bold leading-[1.05] tracking-tight text-[#175dab] md:text-5xl">
                  {t.title}
                </h2>

                {/* Underline */}
                <div className="mt-6 h-[3px] w-16 bg-slate-900" />

                {/* Quote */}
                <p className="mt-8 max-w-[520px] text-lg leading-8 text-slate-600 md:text-xl">
                  “{t.quote}”
                </p>

                {/* Author block */}
                <div className="mt-10">
                  <div className="flex items-center gap-3 text-2xl font-semibold text-[#175dab]">
                    <span className="inline-block h-[3px] w-7 bg-slate-900" />
                    <span>{t.author}</span>
                  </div>
                  <div className="mt-2 text-lg text-slate-700">{t.role}</div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* DOTS */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-3">
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
