"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { Card, CardContent } from "@/Components/ui/card";
import { BOOKKEEPING_FAQ_DATA } from "@/data/bookkeeping";

export default function Faq() {
  const data = BOOKKEEPING_FAQ_DATA;

  return (
    <section
      className="w-full bg-[#F6F9FF] py-16 md:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        {/* Header: FAQs pill + lines */}
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-3xl items-center justify-center gap-4">
            <span className="h-px min-w-[80px] flex-1 bg-slate-300" aria-hidden />
            <div
              className="shrink-0 rounded-lg bg-[#BFFFCB] px-4 py-2"
              role="status"
              aria-label="Section"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#239337]">
                {data.sectionLabel}
              </span>
            </div>
            <span className="h-px min-w-[80px] flex-1 bg-slate-300" aria-hidden />
          </div>

          <h2
            id="faq-heading"
            className="mt-8 text-[2rem] font-bold leading-[1.15] tracking-tight text-[#175dab]  sm:text-4xl lg:text-[44px]"
          >
            {data.heading}
          </h2>

          <p className="mt-6 max-w-3xl text-[18px] leading-[27.8px] text-slate-600">
            {data.description}
          </p>
        </div>

        {/* Accordion in white card */}
        <div className="mx-auto mt-16 max-w-3xl">
          <Card className="overflow-hidden rounded-2xl border-0 border-slate-100 bg-gradient-to-b from-white/70 to-[#D8EAFF] shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)]">
            <CardContent className="p-0">
              <Accordion
                type="single"
                collapsible
                defaultValue="faq-0"
                className="px-6 py-2"
              >
                {data.items.map(({ question, answer }, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-base font-semibold text-slate-800 hover:no-underline hover:text-slate-900 py-5">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] leading-[1.6] text-slate-600">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
