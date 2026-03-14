"use client";

import Link from "next/link";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import {
  BOOKKEEPING_ACCOUNTING_FIRM_DATA,
  type BookkeepingAccountingFirmIconKey,
} from "@/data/bookkeeping";

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HeadsetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z" />
      <path d="M21 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
      <path d="M12 2a4 4 0 0 0-4 4v12h8V6a4 4 0 0 0-4-4z" />
    </svg>
  );
}

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 21h5v-5" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

type FirmCardProps = {
  title: string;
  description: string;
  icon: (props: { className?: string }) => React.ReactElement;
  href: string;
  ctaLabel: string;
};

const FirmCard = ({ title, description, icon: Icon, href, ctaLabel }: FirmCardProps) => (
  <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-0 border-slate-100 bg-gradient-to-b from-white/70 to-[#D8EAFF] shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
    <CardContent className="flex flex-1 flex-col p-6">
      <span
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1e3a5f] text-white"
        aria-hidden
      >
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="text-lg font-semibold text-[#1e3a5f] sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-left text-[15px] leading-[1.6] text-slate-600">
        {description}
      </p>
      <Button
        asChild
        variant="outline"
        className="mt-6 w-full rounded-xl border-2 border-[#1e3a5f] bg-[#D8EAFF] py-6 text-base font-semibold text-[#1e3a5f] hover:bg-slate-50 hover:border-[#162d47]"
      >
        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2"
        >
          {ctaLabel}
          <ArrowRightIcon />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

export default function AccountingFirm() {
  const data = BOOKKEEPING_ACCOUNTING_FIRM_DATA;
  const iconMap: Record<
    BookkeepingAccountingFirmIconKey,
    (props: { className?: string }) => React.ReactElement
  > = {
    users: UsersIcon,
    headset: HeadsetIcon,
    refresh: RefreshIcon,
  };

  return (
    <section
      className="w-full bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="accounting-firm-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-3xl items-center justify-center gap-3">
            <span
              className="h-0.5 w-12 flex-shrink-0 bg-sky-400 sm:w-16"
              aria-hidden
            />
            <h2
              id="accounting-firm-heading"
              className="text-[2rem] font-bold leading-[1.15] tracking-tight text-[#175dab]  sm:text-4xl lg:text-[44px]"
            >
              {data.heading}
            </h2>
          </div>

          <p className="mt-6 max-w-3xl text-[18px] leading-[27.8px] text-slate-600">
            {data.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {data.cards.map((item) => (
            <FirmCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={iconMap[item.iconKey]}
              href={item.cta.href}
              ctaLabel={item.cta.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
