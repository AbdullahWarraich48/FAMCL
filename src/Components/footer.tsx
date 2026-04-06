"use client";

import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

type FooterLink = { label: string; href: string };

const BUSINESS_LINKS: FooterLink[] = [
  { label: "Accounts & Bookkeeping", href: "/accounts-and-bookkeeping" },
  { label: "Corporation Tax", href: "/corporation-tax" },
  { label: "VAT Returns", href: "/vat-returns" },
  { label: "Payroll & Pensions", href: "/payroll-pansions" },
  { label: "Business Advice", href: "/business-advice" },
  { label: "Business Structuring", href: "/business-structure" },
  { label: "CIS", href: "/Industries/construction-property" },
  { label: "VAT Margin Scheme", href: "/vat-returns" },
];

const FOR_YOU_LINKS: FooterLink[] = [
  { label: "Self-Assessment Tax", href: "/self-assesment-tax" },
  { label: "Capital Gains & Property Tax", href: "/capital-gain-property-tax" },
  { label: "Pensions & Future Planning", href: "/pensions-future-planning" },
  {
    label: "Director & Shareholder Advisory",
    href: "/director-shareholder-advice",
  },
  { label: "Crypto & Modern Income", href: "/crypto-modern-income" },
  {
    label:
      "Inheritance Tax, Retirement Strategy & Estate Planning",
    href: "/inheritance-tax-retirement-strategy-estate-planning",
  },
];

const BUSINESS_FORMATION_LINKS: FooterLink[] = [
  { label: "Starting a Business", href: "/Business_Formation/start_business" },
  { label: "Sole Traders", href: "/Business_Formation/sole-traders" },
  { label: "Limited Companies", href: "/Business_Formation/limited-companies" },
  {
    label: "Contractors & Freelancers",
    href: "/Business_Formation/contractors-freelancers",
  },
  { label: "Landlords & Families", href: "/Business_Formation/landlords-families" },
];

const INDUSTRIES_LINKS: FooterLink[] = [
  { label: "Construction & Property", href: "/Industries/construction-property" },
  {
    label: "Manufacturing & Engineering",
    href: "/Industries/manufacturing-engaging",
  },
  {
    label: "Professional Services",
    href: "/Industries/professional-services",
  },
  { label: "Technology & Digital", href: "/Industries/technology-digital" },
  { label: "Healthcare", href: "/Industries/healthcare" },
  { label: "Not-for-Profit", href: "/Industries/not-for-profit" },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "Our Story", href: "/Company/our-company" },
  { label: "Our Team", href: "/Company/our-team" },
  { label: "How We Work", href: "/Company/how-we-work" },
  { label: "Fixed Fees", href: "/Company/fixed-fees" },
  { label: "Careers", href: "/Company/careers" },
  { label: "Contact Us", href: "/Company/contact-us#contact" },
];

const RESOURCES_LINKS: FooterLink[] = [
  { label: "News & Updates", href: "/recources/news-and-updates" },
  { label: "FAQs", href: "/faqs" },
  { label: "Tools & Calculators", href: "/recources/tools-calculator" },
];

const SOCIAL_LINKS: readonly {
  label: string;
  href: string;
  Icon: LucideIcon;
  colorClass: string;
}[] = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    Icon: Facebook,
    colorClass: "text-[#1877F2]",
  },
  {
    label: "Twitter",
    href: "https://x.com",
    Icon: Twitter,
    colorClass: "text-[#1DA1F2]",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    Icon: Linkedin,
    colorClass: "text-[#0A66C2]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: Instagram,
    colorClass: "text-[#E4405F]",
  },
];

const POLICY_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/Company/contact-us" },
  { label: "Terms & Conditions", href: "/Company/contact-us" },
  { label: "Cookie Policy", href: "/Company/contact-us" },
];

const footerColCellClass = "min-w-0";

/**
 * Nudge Resources (and ACCA row) left.
 * - Without `lg:` → applies on all screen sizes (e.g. `-translate-x-4`).
 * - With `lg:` only → applies from 1024px up; mobile/tablet stay unchanged.
 * - Use both for different amounts: `-translate-x-2 lg:-translate-x-16`
 */
/** Desktop only — avoid transforms on mobile so alignment stays predictable */
const footerResourcesNudgeClass = "lg:-translate-x-14";

const FooterColumn = ({
  title,
  links,
  className,
}: {
  title: string;
  links: FooterLink[];
  className?: string;
}) => (
  <div
    className={`${footerColCellClass} flex flex-col items-start text-left ${className ?? ""}`}
  >
    <h3 className="mb-4 w-full text-left text-base font-bold leading-tight text-[#12254b]">
      {title}
    </h3>
    <ul className="flex w-full flex-col gap-2.5 text-left" role="list">
      {links.map((item) => (
        <li key={`${item.href}-${item.label}`} className="min-w-0">
          <Link
            href={item.href}
            className="block text-left text-sm leading-snug text-slate-600 break-words transition-colors hover:text-[#12254b] hover:underline"
            tabIndex={0}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterSection = () => {
  const handleSocialKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key !== "Enter" && e.key !== " ") {
      return;
    }
    e.preventDefault();
    window.location.assign(href);
  };

  return (
    <footer
      className="site-footer w-full bg-white text-left text-gray-900"
      aria-label="Site footer"
      role="contentinfo"
    >
      <div className="footer-inner mx-auto w-full max-w-[1512px] pb-10 pt-10 md:pb-14 md:pt-14 lg:pb-16 lg:pt-16">
        {/* Mobile: one column, left-aligned; sm/md: 2–3 cols; lg+: six columns */}
        <div className="grid w-full grid-cols-1 items-start gap-y-10 text-left sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-[repeat(5,minmax(0,1fr))_max-content] lg:gap-x-6 lg:gap-y-0">
          <FooterColumn title="Business" links={BUSINESS_LINKS} />
          <FooterColumn title="For You" links={FOR_YOU_LINKS} />
          <FooterColumn
            title="Business Formation"
            links={BUSINESS_FORMATION_LINKS}
          />
          <FooterColumn title="Industries" links={INDUSTRIES_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn
            title="Resources"
            links={RESOURCES_LINKS}
            className={footerResourcesNudgeClass}
          />
        </div>

        {/* Social row: stacked on small screens; aligns with link columns from lg */}
        <div className="mt-12 grid w-full grid-cols-1 items-start justify-items-start gap-y-8 text-left sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:mt-16 lg:grid-cols-[repeat(5,minmax(0,1fr))_max-content] lg:items-end lg:gap-x-6">
          <div
            className={`flex flex-wrap justify-start gap-2 sm:col-span-1 ${footerColCellClass}`}
            role="group"
            aria-label="Social media"
          >
            {SOCIAL_LINKS.map(({ label, href, Icon, colorClass }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12254b] focus-visible:ring-offset-2"
                aria-label={label}
                tabIndex={0}
                onKeyDown={(e) => handleSocialKeyDown(e, href)}
              >
                <Icon
                  className={`h-5 w-5 ${colorClass}`}
                  strokeWidth={2}
                  aria-hidden
                />
              </a>
            ))}
          </div>

          <div
            className={`hidden min-w-0 lg:block ${footerColCellClass}`}
            aria-hidden="true"
          />

          <div
            className={`hidden min-w-0 lg:block ${footerColCellClass}`}
            aria-hidden="true"
          />
          
          <div
            className={`hidden min-w-0 lg:block ${footerColCellClass}`}
            aria-hidden="true"
          />
          
          <div
            className={`hidden min-w-0 lg:block ${footerColCellClass}`}
            aria-hidden="true"
          />

          <div
            className={`flex flex-wrap items-end justify-start gap-4 sm:col-span-1 sm:justify-end lg:justify-end ${footerColCellClass} ${footerResourcesNudgeClass}`}
          >
            <Image
              src="/assets/images/acca-logo.svg"
              alt="ACCA"
              width={56}
              height={56}
              className="h-12 w-12 shrink-0 md:h-14 md:w-14"
            />
            <Image
              src="/assets/images/ICAEW-White 1.png"
              alt="ICAEW chartered accountants"
              width={120}
              height={48}
              className="h-8 w-auto md:h-10"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F8F9FA]">
        <div className="footer-inner mx-auto flex max-w-[1512px] flex-col items-start gap-6 py-4 text-left md:flex-row md:items-start md:justify-between md:gap-8 md:py-5">
          <div className="max-w-3xl space-y-1 text-left text-xs leading-relaxed text-gray-600 md:text-sm">
            <p>
              © 2026 Financial &amp; Management Consultants Limited. All rights
              reserved.
            </p>
            <p>
              Registered office: Suite 1 Fitzroy House, Lynwood Drive,
              Worcester Park, Surrey, KT4 7AT, UK. Company No. 06613732.
            </p>
          </div>

          <nav
            className="w-full shrink-0 text-left text-xs text-gray-600 md:w-auto md:text-sm"
            aria-label="Footer legal links"
          >
            <ul className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1">
              {POLICY_LINKS.map((item, index) => (
                <li
                  key={`${item.href}-${item.label}`}
                  className="flex items-center gap-2"
                >
                  {index > 0 ? (
                    <span aria-hidden className="text-gray-400">
                      |
                    </span>
                  ) : null}
                  <Link
                    href={item.href}
                    className="rounded transition-colors hover:text-gray-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                    tabIndex={0}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;