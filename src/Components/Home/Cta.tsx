"use client"

import Link from "next/link"
import { BRAND_DISPLAY_NAME } from "@/constants/siteAssets"
import { CalendarDays, Phone } from "lucide-react"

export default function CtaExact() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex w-full flex-col items-center rounded-2xl bg-[#2ca01c] px-8 py-14 text-center md:px-12 md:py-16">
          <h2 className="text-[30px] font-bold leading-[1.15] tracking-tight text-white md:text-[40px]">
            See how {BRAND_DISPLAY_NAME} can help you
          </h2>

          <p className="mt-5 max-w-2xl text-[14px] leading-6 text-white/95 md:text-[15px] md:leading-7">
            Book a free consultation today and discover how we can help you stay
            compliant, organised, and confident with your finances.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              href="/Company/contact-us#contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-7 text-[13px] font-semibold text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-colors hover:bg-white/95"
            >
              <CalendarDays className="mr-2 h-4 w-4" aria-hidden />
              Book a Free Consultation
            </Link>

            <Link
              href="/Company/contact-us#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-7 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
