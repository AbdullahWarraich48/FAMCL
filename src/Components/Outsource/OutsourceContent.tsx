"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { OUTSOURCE_PAGE_DATA } from "@/data/outsource/outsourceData";

export default function OutsourceContent() {
  const content = OUTSOURCE_PAGE_DATA;
  const [leadParagraph, ...bodyParagraphs] = content.introParagraphs;

  return (
    <section
      className="w-full bg-white py-14 md:py-16 lg:py-20"
      aria-labelledby="outsource-content-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-0">
          <div className="min-w-0 lg:pr-12 xl:pr-20">
            <p className="text-xl leading-relaxed text-slate-800 sm:text-[1.35rem] sm:leading-[1.65] md:text-[1.5rem] md:leading-[1.75]">
              {leadParagraph}
            </p>

            {bodyParagraphs.length > 0 ? (
              <div className="mt-8 space-y-5">
                {bodyParagraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="min-w-0 bg-[#f4f4f4] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <h2
              id="outsource-content-heading"
              className="text-lg font-semibold text-slate-800 sm:text-xl"
            >
              {content.servicesHeading}
            </h2>

            <Accordion type="single" collapsible className="mt-6">
              {content.services.map(({ title, description }, index) => (
                <AccordionItem
                  key={title}
                  value={`outsource-service-${index}`}
                  className="border-slate-300/80"
                >
                  <AccordionTrigger className="py-4 text-[15px] font-normal text-slate-700 hover:no-underline sm:text-base [&[data-state=open]]:font-medium [&[data-state=open]]:text-slate-900">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] leading-relaxed text-slate-600 sm:text-[15px] sm:leading-[1.7]">
                    {description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </aside>
        </div>
      </div>
    </section>
  );
}
