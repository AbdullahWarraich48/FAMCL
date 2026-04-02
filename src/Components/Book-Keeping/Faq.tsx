"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { Card, CardContent } from "@/Components/ui/card";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import {
  BOOKKEEPING_FAQ_DATA,
  type FaqSectionData,
} from "@/data/bookkeeping";

type FaqProps = {
  data?: FaqSectionData;
};

export default function Faq({ data }: FaqProps) {
  const resolved = data ?? BOOKKEEPING_FAQ_DATA;
  const hasCategories = Boolean(resolved.categories?.length);
  const flatItems = resolved.items ?? [];

  return (
    <section
      className="w-full bg-[#F6F9FF] py-16 md:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <SectionIntroHeader
            headingId="faq-heading"
            sectionLabel={resolved.sectionLabel}
            heading={resolved.heading}
            headingBgClassName="bg-[#F6F9FF]"
          />

          <p className="mt-6 max-w-3xl text-[18px] leading-[27.8px] text-slate-600">
            {resolved.description}
          </p>
        </div>

        <div
          className={`mx-auto mt-16 ${hasCategories ? "max-w-5xl" : "max-w-3xl"}`}
        >
          <Card className="overflow-hidden rounded-2xl border-0 border-slate-100 bg-gradient-to-b from-white/70 to-[#D8EAFF] shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)]">
            <CardContent className="p-0">
              {hasCategories ? (
                <div className="divide-y divide-slate-200/80">
                  {resolved.categories!.map((category, categoryIndex) => (
                    <div
                      key={category.categoryTitle}
                      className="px-6 py-6 first:pt-8 last:pb-8 md:px-8"
                    >
                      <h3 className="mb-4 text-left text-lg font-bold text-[#175dab] md:text-xl">
                        {category.categoryTitle}
                      </h3>
                      <Accordion
                        type="single"
                        collapsible
                        defaultValue={
                          categoryIndex === 0 ? "faq-0" : undefined
                        }
                        className="py-0"
                      >
                        {category.items.map(({ question, answer }, index) => (
                          <AccordionItem key={index} value={`faq-${index}`}>
                            <AccordionTrigger className="py-4 text-left text-base font-semibold text-slate-800 hover:text-slate-900 hover:no-underline">
                              {question}
                            </AccordionTrigger>
                            <AccordionContent className="text-[15px] leading-[1.6] text-slate-600">
                              {answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              ) : (
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="faq-0"
                  className="px-6 py-2"
                >
                  {flatItems.map(({ question, answer }, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="py-5 text-base font-semibold text-slate-800 hover:text-slate-900 hover:no-underline">
                        {question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[15px] leading-[1.6] text-slate-600">
                        {answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
