"use client"

import * as React from "react"
import { Card, CardContent } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"

export default function SelfAssessmentCta() {
  return (
    <section className="relative z-10 mt-[-160px] w-full">
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <Card className="overflow-hidden rounded-2xl border-0 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
          <div className="grid grid-cols-1 md:grid-cols-[420px_1fr]">
            {/* LEFT IMAGE */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
                alt="Tax documents and calculator"
                className="h-full min-h-[240px] w-full object-cover md:min-h-[320px]"
                draggable={false}
              />
              {/* slight darken like figma */}
              <div className="pointer-events-none absolute inset-0 bg-black/10" />
            </div>

            {/* RIGHT CONTENT (light blue panel) */}
            <div className="bg-gradient-to-b from-white/70 to-[#D8EAFF]">
              <CardContent className="p-8 md:p-12">
                <h3 className="max-w-[720px] text-[28px] font-bold leading-[1.15] tracking-tight text-[#175dab] md:text-[38px]">
                  Take the next step to complete your self
                  assessment tax return today
                </h3>

                <p className="mt-4 max-w-[760px] text-[14px] leading-7 text-slate-600 md:text-[15px]">
                  If you&apos;re not confident completing your self-assessment tax return, we&apos;re here to
                  help. Our experienced advisors support you from start to finish ensuring accuracy,
                  compliance, and peace of mind while helping you make the most of available allowances.
                </p>

                <Button className="mt-8 h-11 rounded-full bg-[#12254B] text-white px-8 text-[13px] font-semibold ">
                  Get Started
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
