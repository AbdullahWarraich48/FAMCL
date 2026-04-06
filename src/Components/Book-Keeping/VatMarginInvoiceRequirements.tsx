"use client";

import { AlertTriangle, FileText, ShoppingCart } from "lucide-react";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
  VAT_MARGIN_INVOICE_REQUIREMENTS_DATA,
  type InvoiceRequirementCardData,
  type VatMarginInvoiceRequirementsData,
} from "@/data/vatMarginScheme/invoiceRequirementsData";

type VatMarginInvoiceRequirementsProps = {
  data?: VatMarginInvoiceRequirementsData;
};

const cardIcon = (id: string) => {
  if (id === "buying") {
    return ShoppingCart;
  }
  return FileText;
};

const RequirementCard = ({ card }: { card: InvoiceRequirementCardData }) => {
  const Icon = cardIcon(card.id);

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white via-[#f8fbff] to-[#e8f2fc] p-6 shadow-[0_8px_28px_rgba(30,58,95,0.08),0_2px_10px_rgba(30,58,95,0.05)] sm:p-8">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-0">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f] text-white"
          aria-hidden
        >
          <Icon className="h-6 w-6" strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1 pt-0.5">
          <CardTitle className="text-left text-lg font-bold text-slate-900 sm:text-xl">
            {card.title}
          </CardTitle>
          <p className="mt-2 text-[15px] font-medium text-slate-700">
            {card.intro}
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-0 pt-5">
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-800 marker:text-slate-900">
          {card.bullets.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export const VatMarginInvoiceRequirements = ({
  data,
}: VatMarginInvoiceRequirementsProps) => {
  const content = data ?? VAT_MARGIN_INVOICE_REQUIREMENTS_DATA;
  const [buying, selling] = content.cards;

  return (
    <section
      className="w-full bg-white py-14 md:py-20 lg:py-24"
      aria-labelledby={content.headingId}
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto w-full max-w-5xl">
          <SectionIntroHeader
            headingId={content.headingId}
            heading={content.title}
            headingBgClassName="bg-white"
            headingBlockMarginTop="mt-0"
            headingClassName="text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[#1e3a5f] sm:text-3xl lg:text-[40px]"
          />

          <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-slate-600 sm:mt-8 sm:text-[16px]">
            {content.subtitle}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
            <RequirementCard card={buying} />
            <RequirementCard card={selling} />
          </div>

          {content.importantNote ? (
            <div
              className="mx-auto mt-10 max-w-4xl rounded-2xl border-2 border-red-200/90 bg-gradient-to-br from-amber-50 via-orange-50/90 to-amber-50 px-5 py-5 text-center shadow-sm sm:mt-12 sm:px-8 sm:py-6"
              role="alert"
            >
              <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:items-start sm:text-left">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500 text-white sm:mt-0.5"
                  aria-hidden
                >
                  <AlertTriangle className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <p className="text-[14px] leading-relaxed text-slate-800 sm:text-[15px]">
                  <span className="font-semibold text-slate-900">
                    Important note:{" "}
                  </span>
                  {content.importantNote.message}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default VatMarginInvoiceRequirements;
