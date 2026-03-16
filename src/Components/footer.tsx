"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
type FooterLink = { label: string; href: string };

const BUSINESS_SERVICES_LINKS: FooterLink[] = [
  { label: "Accounts & Bookkeeping", href: "#accounts-bookkeeping" },
  { label: "Corporation Tax", href: "#corporation-tax" },
  { label: "VAT Returns", href: "#vat-returns" },
  { label: "Payroll & Pensions", href: "#payroll-pensions" },
  { label: "Business Advice", href: "#business-advice" },
  { label: "Business Structuring", href: "#business-structuring" },
];

const PERSONAL_SERVICES_LINKS: FooterLink[] = [
  { label: "Self-Assessment Tax", href: "#self-assessment" },
  { label: "Capital Gains & Property Tax", href: "#capital-gains-property-tax" },
  { label: "Pensions & Future Planning", href: "#pensions-future-planning" },
  {
    label: "Director & Shareholder Advisory",
    href: "#director-shareholder-advisory",
  },
  { label: "Crypto & Modern Income", href: "#crypto-modern-income" },
  {
    label: "Inheritance Tax & Retirement",
    href: "#inheritance-tax-retirement",
  },
  { label: "Strategy & Estate Planning", href: "#strategy-estate-planning" },
];

const WHO_WE_HELP_LINKS: FooterLink[] = [
  { label: "Starting a Business", href: "#starting-a-business" },
  { label: "Limited Companies", href: "#limited-companies" },
  { label: "Contractors & Freelancers", href: "#contractors-freelancers" },
  { label: "Landlords & Families", href: "#landlords-families" },
  { label: "Online Businesses", href: "#online-businesses" },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "Our Story", href: "#our-story" },
  { label: "Our Team", href: "#our-team" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Fixed Fees", href: "#fixed-fees" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact-us" },
];

const RESOURCES_LINKS: FooterLink[] = [
  { label: "News & Updates", href: "#news-updates" },
  { label: "FAQs", href: "#faqs" },
  { label: "Tools & Calculators", href: "#tools-calculators" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#facebook", Icon: Facebook, colorClass: "text-[#1877F2]" },
  { label: "Twitter", href: "#twitter", Icon: Twitter, colorClass: "text-[#1DA1F2]" },
  { label: "LinkedIn", href: "#linkedin", Icon: Linkedin, colorClass: "text-[#0A66C2]" },
  { label: "Instagram", href: "#instagram", Icon: Instagram, colorClass: "text-[#E4405F]" },
] as const;

const POLICY_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms & Conditions", href: "#terms-conditions" },
  { label: "Cookie Policy", href: "#cookie-policy" },
];

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => (
  <div>
    <h3 className="mb-4 text-[22px] font-bold leading-tight text-gray-900">
      {title}
    </h3>
    <ul className="space-y-2" role="list">
      {links.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-base leading-normal text-gray-900 transition-colors hover:underline"
            aria-label={item.label}
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
  const handleSocialKeyDown = (
    e: React.KeyboardEvent,
    href: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.location.assign(href);
    }
  };

  return (
    <footer
      className="w-full bg-white text-gray-900"
      aria-label="Site footer"
      role="contentinfo"
    >
      <div className="content-padding-x mx-auto max-w-[1440px] py-10 md:py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <FooterColumn title="Business" links={BUSINESS_SERVICES_LINKS} />
          <FooterColumn title="For You" links={PERSONAL_SERVICES_LINKS} />
          <FooterColumn title="Business Formation" links={WHO_WE_HELP_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Resources" links={RESOURCES_LINKS} />
        </div>

        {/* Social + logos row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Social media">
            {SOCIAL_LINKS.map(({ label, href, Icon, colorClass }) => (
              <a
                key={label}
                href={href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#12254b] focus:ring-offset-2"
                aria-label={label}
                tabIndex={0}
                onKeyDown={(e) => handleSocialKeyDown(e, href)}
              >
                <Icon className={`h-5 w-5 ${colorClass}`} aria-hidden />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <Image
              src="/assets/images/ACCA-Red-2 1.png"
              alt="ACCA accredited"
              width={80}
              height={34}
              className="h-[34px] w-auto md:h-[38px]"
            />
            <Image
              src="/assets/images/ICAEW-White 1.png"
              alt="ICAEW accredited"
              width={80}
              height={34}
              className="h-[34px] w-auto md:h-[38px]"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="content-padding-x mx-auto flex max-w-[1440px] flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="text-sm leading-normal text-gray-900">
            © 2026 Financial & Management Consultants Limited. All rights reserved.
            Registered in England & Wales.
          </p>
          <nav aria-label="Footer legal links">
            <ul className="flex flex-wrap items-center gap-2 text-sm text-gray-900 md:gap-4">
              {POLICY_LINKS.map((item, index) => (
                <li key={item.href} className="flex items-center gap-2 md:gap-4">
                  {index > 0 && (
                    <span
                      className="hidden h-4 w-px bg-gray-300 md:inline"
                      aria-hidden
                    />
                  )}
                  <Link
                    href={item.href}
                    className="rounded transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    aria-label={item.label}
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
