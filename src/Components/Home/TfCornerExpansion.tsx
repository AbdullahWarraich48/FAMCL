"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calculator,
  Check,
  FileCheck,
  Globe,
  Mail,
  MapPin,
  Phone,
  Plane,
  Printer,
  ShieldCheck,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import {
  TF_CORNER_CARD,
  TF_CORNER_EXPANSION_SECTION,
} from "@/data/tfCornerExpansionData";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

const SERVICE_ICONS = {
  building: Building2,
  fileCheck: FileCheck,
  calculator: Calculator,
  shield: ShieldCheck,
  plane: Plane,
  trending: TrendingUp,
} as const;

type TfCornerExpansionProps = {
  sectionClassName?: string;
};

const ContactItem = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <>
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#175DAB]" aria-hidden />
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
          {label}
        </span>
        <span className="mt-0.5 block break-words text-[14px] font-medium leading-snug text-[#12254b]">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex gap-3 rounded-lg transition-colors hover:text-[#175DAB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#175DAB]"
      >
        {content}
      </a>
    );
  }

  return <div className="flex gap-3">{content}</div>;
};

const OfficeBlock = ({
  countryCode,
  label,
  address,
}: {
  countryCode: string;
  label: string;
  address: string;
}) => (
  <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
    <div className="flex items-center gap-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#12254b] text-[10px] font-bold tracking-wide text-white">
        {countryCode}
      </span>
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#12254b]">
        {label}
      </p>
    </div>
    <p className="mt-3 flex gap-2 text-[13px] leading-relaxed text-slate-600">
      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
      {address}
    </p>
  </div>
);

export default function TfCornerExpansion({
  sectionClassName = SECTION_BG.alt,
}: TfCornerExpansionProps) {
  const section = TF_CORNER_EXPANSION_SECTION;
  const card = TF_CORNER_CARD;

  return (
    <section
      className={`w-full py-12 sm:py-16 md:py-20 lg:py-24 ${sectionClassName}`}
      aria-labelledby="tf-corner-expansion-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-4xl text-center">
          <SectionIntroHeader
            headingId="tf-corner-expansion-heading"
            sectionLabel={section.sectionLabel}
            heading={`${section.titleBefore}${section.titleHighlight}`}
            headingBefore={section.titleBefore}
            headingHighlight={section.titleHighlight}
            headingBgClassName={sectionClassName}
            headingClassName="text-[1.5rem] font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[44px]"
          />
          <p className="mx-auto mt-4 max-w-3xl px-1 text-sm leading-relaxed text-slate-600 sm:mt-5 sm:px-0 sm:text-base md:mt-6 md:text-lg">
            {section.subtitle}
          </p>
        </div>

        <ul className="mx-auto mt-6 flex max-w-4xl flex-col items-start gap-2.5 px-1 sm:mt-8 sm:items-center sm:gap-3 sm:px-0 md:flex-row md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-2">
          {section.pillars.map((pillar) => (
            <li
              key={pillar}
              className="flex items-center gap-2 text-left text-sm font-medium text-[#12254b] sm:text-center md:text-[15px]"
            >
              <Check className="h-4 w-4 shrink-0 text-[#175DAB]" aria-hidden />
              {pillar}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 md:mt-12 md:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="min-w-0 space-y-6 md:space-y-8">
            <div className="space-y-4 text-sm leading-relaxed text-slate-600 sm:space-y-5 sm:text-[15px] md:text-base md:leading-[1.75]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div>
              <h3 className="text-base font-semibold text-[#12254b] sm:text-lg md:text-xl">
                Services we provide
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {section.services.map((service) => {
                  const Icon = SERVICE_ICONS[service.iconKey];
                  return (
                    <li
                      key={service.label}
                      className="flex min-w-0 items-start gap-3 rounded-xl border border-white/80 bg-white px-3.5 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.05)] sm:px-4 sm:py-3.5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#12254b]">
                        <Icon className="h-4 w-4 text-white" aria-hidden />
                      </span>
                      <span className="min-w-0 pt-1.5 text-sm font-medium leading-snug text-slate-700">
                        {service.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex justify-stretch sm:justify-start">
              <Link
                href="/Company/contact-us#contact"
                className="inline-flex h-12 w-full items-center justify-center gap-1 rounded-full border-2 border-[#1E63B3] bg-white/60 px-5 text-sm font-semibold text-[#1E63B3] transition-colors hover:bg-[#1E63B3]/10 sm:w-fit sm:px-6"
              >
                <span className="text-center">Discuss your expansion plans</span>
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </Link>
            </div>
          </div>

          <Card
            className="mx-auto w-full min-w-0 max-w-xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.1)] lg:mx-0 lg:max-w-none"
            aria-label="T&F Corner Ltd contact details"
          >
            <div className="border-b border-slate-100 bg-[#12254b] px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="font-aleo text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
                    {card.companyName}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 sm:text-xs">
                    {card.companyTagline}
                  </p>
                  <p className="mt-3 text-[11px] leading-relaxed text-white/60 sm:mt-4 sm:text-xs">
                    A FAM Chartered Accountants company
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="text-sm font-semibold uppercase tracking-wide text-white">
                    {card.contactName}
                  </p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-white/70">
                    {card.credentials}
                  </p>
                </div>
              </div>
            </div>

            <CardContent className="space-y-5 p-5 sm:space-y-6 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value={card.email}
                  href={card.emailHref}
                />
                <ContactItem
                  icon={Smartphone}
                  label="Mobile"
                  value={card.mobile}
                  href={card.mobileHref}
                />
                <ContactItem
                  icon={Phone}
                  label="Office"
                  value={card.office}
                  href={card.officeHref}
                />
                <ContactItem icon={Printer} label="Fax" value={card.fax} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <OfficeBlock
                  countryCode={card.canadaOffice.countryCode}
                  label={card.canadaOffice.label}
                  address={card.canadaOffice.address}
                />
                <OfficeBlock
                  countryCode={card.usOffice.countryCode}
                  label={card.usOffice.label}
                  address={card.usOffice.address}
                />
              </div>

              <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-start sm:justify-between sm:pt-5">
                <Link
                  href={card.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 break-all text-sm font-semibold text-[#175DAB] transition-colors hover:text-[#12254b] sm:break-normal"
                >
                  <Globe className="h-4 w-4 shrink-0" aria-hidden />
                  {card.website}
                </Link>
                <p className="text-xs leading-relaxed text-slate-500 sm:max-w-[220px] sm:text-right">
                  Subject to applicable immigration laws and eligibility requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
