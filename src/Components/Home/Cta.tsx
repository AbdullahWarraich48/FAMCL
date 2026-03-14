"use client"

import * as React from "react"
import { Button } from "@/Components/ui/button"
import { CalendarDays, Phone } from "lucide-react"

export default function CtaExact() {
  return (
    <section className="w-full bg-[#1E63B3] py-20">
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-[34px] font-bold leading-[1.15] tracking-tight text-white md:text-[44px]">
            See how Financial &amp; Management Consultants
            <br />
            Limited can help you
          </h2>

          <p className="mt-5 max-w-2xl text-[14px] leading-6 text-white/90 md:text-[15px]">
            Book a free consultation today and discover how we can help you
            <br />
            stay compliant, organised, and confident with your finances.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            {/* Primary (white pill) */}
            <Button
              className={[
                "h-11 rounded-full bg-white px-7 text-[13px] font-semibold text-[#1E63B3]",
                "shadow-[0_10px_25px_rgba(0,0,0,0.18)] hover:bg-white/95",
              ].join(" ")}
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              Book a Free Consultation
            </Button>

            {/* Secondary (outline pill) */}
            <Button
              variant="outline"
              className={[
                "h-11 rounded-full border-white/70 bg-transparent px-7 text-[13px] font-semibold text-white",
                "hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
