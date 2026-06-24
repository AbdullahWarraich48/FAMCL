"use client";

import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import {
  TF_CORNER_CARD,
  TF_CORNER_EXPANSION_SECTION,
} from "@/data/tfCornerExpansionData";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

type TfCornerExpansionProps = {
  sectionClassName?: string;
};

type ContactBlockProps = {
  icon: React.ElementType;
  iconBgClassName: string;
  label: string;
  children: React.ReactNode;
};

const ContactBlock = ({
  icon: Icon,
  iconBgClassName,
  label,
  children,
}: ContactBlockProps) => (
  <div className="flex gap-4 border-b border-slate-200 py-5 last:border-b-0">
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconBgClassName}`}
    >
      <Icon className="h-5 w-5 text-white" aria-hidden />
    </span>
    <div className="min-w-0">
      <p className="text-[15px] font-semibold text-slate-800">{label}</p>
      <div className="mt-1 space-y-0.5 text-[14px] leading-relaxed text-slate-600">
        {children}
      </div>
    </div>
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
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <h2
              id="tf-corner-expansion-heading"
              className="text-[1.75rem] font-bold leading-[1.2] tracking-tight sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem]"
            >
              <span className="text-[#12254b]">{section.titleBefore}</span>
              <span className="text-red-600">{section.titleHighlight}</span>
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-600 sm:mt-8 sm:text-[15px] md:text-base md:leading-[1.8]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside
            className="mx-auto w-full min-w-0 max-w-md rounded-2xl border border-slate-100 bg-[#f9fafb] px-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:px-6 lg:mx-0 lg:max-w-none"
            aria-label="T&F Corner Ltd contact details"
          >
            <ContactBlock
              icon={Phone}
              iconBgClassName="bg-red-600"
              label="Phone"
            >
              {card.phones.map((phone) => (
                <a
                  key={phone.label}
                  href={phone.href}
                  className="block transition-colors hover:text-[#175DAB]"
                >
                  {phone.label}
                </a>
              ))}
            </ContactBlock>

            <ContactBlock
              icon={Mail}
              iconBgClassName="bg-[#16a34a]"
              label="Email"
            >
              <a
                href={card.emailHref}
                className="block break-words transition-colors hover:text-[#175DAB]"
              >
                {card.email}
              </a>
            </ContactBlock>

            <ContactBlock
              icon={MapPin}
              iconBgClassName="bg-[#1E63B3]"
              label={card.canadaOffice.label}
            >
              <p>{card.canadaOffice.address}</p>
            </ContactBlock>

            <ContactBlock
              icon={MapPin}
              iconBgClassName="bg-[#1E63B3]"
              label={card.usOffice.label}
            >
              <p>{card.usOffice.address}</p>
            </ContactBlock>

            <ContactBlock
              icon={Globe}
              iconBgClassName="bg-[#12254B]"
              label="Website"
            >
              <Link
                href={card.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-[#175DAB]"
              >
                {card.website}
              </Link>
            </ContactBlock>
          </aside>
        </div>
      </div>
    </section>
  );
}
