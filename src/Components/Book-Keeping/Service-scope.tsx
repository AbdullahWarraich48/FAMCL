"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  BOOKKEEPING_SERVICE_SCOPE_DATA,
  type BookkeepingServiceScopeIconKey,
  type ServiceScopeData,
} from "@/data/bookkeeping";

function DocumentCheckIcon({ className }: { className?: string }) {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  );
}

function BarChartIcon({ className }: { className?: string }) {
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
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
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
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TrendUpIcon({ className }: { className?: string }) {
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
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </svg>
  );
}

function HardHatIcon({ className }: { className?: string }) {
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
      <path d="M4 17a8 8 0 0 1 16 0v2H4v-2z" />
      <path d="M12 9v-3" />
      <path d="M8.5 10.2V7.8" />
      <path d="M15.5 10.2V7.8" />
      <path d="M3 19h18" />
    </svg>
  );
}

function CalculatorIcon({ className }: { className?: string }) {
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
      <rect x="6" y="2.5" width="12" height="19" rx="2" />
      <path d="M8.5 6h7" />
      <path d="M9 10h2" />
      <path d="M13 10h2" />
      <path d="M9 13h2" />
      <path d="M13 13h2" />
      <path d="M9 16h6" />
    </svg>
  );
}

function ReceiptTaxIcon({ className }: { className?: string }) {
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
      <path d="M7 3h10v18l-2-1-2 1-2-1-2 1-2-1-2 1V3z" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h3" />
      <path d="M15 15h0" />
    </svg>
  );
}

function BadgeCheckIcon({ className }: { className?: string }) {
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
      <path d="M12 2l3 1 3 3 1 3-1 3-3 3-3 1-3-1-3-3-1-3 1-3 3-3 3-1z" />
      <path d="M8.5 12l2.2 2.2L15.5 9.5" />
      <path d="M9 19l-1 3 4-2 4 2-1-3" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 3v3" />
      <path d="M21 12h-3" />
    </svg>
  );
}

function FlaskIcon({ className }: { className?: string }) {
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
      <path d="M10 2v6l-5.5 9.5A4 4 0 0 0 8 22h8a4 4 0 0 0 3.5-4.5L14 8V2" />
      <path d="M8 2h8" />
      <path d="M9 14h6" />
    </svg>
  );
}

function BoxesIcon({ className }: { className?: string }) {
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
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 7v10l9 4 9-4V7" />
      <path d="M12 11v10" />
    </svg>
  );
}

function FactoryIcon({ className }: { className?: string }) {
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
      <path d="M3 21V9l6 3V9l6 3V6l6 3v12H3z" />
      <path d="M7 21v-4" />
      <path d="M11 21v-6" />
      <path d="M15 21v-3" />
    </svg>
  );
}

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
      <path d="M16 11a4 4 0 1 0-8 0" />
      <path d="M8 15c-2.5.7-4 2-4 4v1h16v-1c0-2-1.5-3.3-4-4" />
      <path d="M17 11a3 3 0 1 0-2.5-5" />
      <path d="M20 20v-1c0-1.5-.7-2.6-2-3.4" />
    </svg>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  Icon: (props: { className?: string }) => React.ReactElement;
};

type ServiceScopeProps = {
  data?: ServiceScopeData;
};

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => (
  <Card className="flex h-full w-full flex-col overflow-hidden rounded-2xl border-0 border-slate-100 bg-gradient-to-b from-white/70 to-[#D8EAFF] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)]">
    <CardHeader className="space-y-3 p-0">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f] text-white"
        aria-hidden
      >
        <Icon className="h-6 w-6" />
      </span>
      <CardTitle className="text-[16px] font-semibold leading-tight tracking-tight text-[#1e3a5f]">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0 pt-1">
      <CardDescription className="text-[15px] leading-[1.6] text-slate-600">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export const ServiceScope = ({ data }: ServiceScopeProps) => {
  const scopeData = data ?? BOOKKEEPING_SERVICE_SCOPE_DATA;
  const iconMap: Record<
    BookkeepingServiceScopeIconKey,
    (props: { className?: string }) => React.ReactElement
  > = {
    "document-check": DocumentCheckIcon,
    "bar-chart": BarChartIcon,
    shield: ShieldIcon,
    eye: EyeIcon,
    "trend-up": TrendUpIcon,
    "hard-hat": HardHatIcon,
    calculator: CalculatorIcon,
    "receipt-tax": ReceiptTaxIcon,
    "badge-check": BadgeCheckIcon,
    target: TargetIcon,
    flask: FlaskIcon,
    boxes: BoxesIcon,
    factory: FactoryIcon,
    users: UsersIcon,
  };

  return (
    <section
      className="w-full bg-[#F6F9FF] py-16 md:py-20 lg:py-24"
      aria-labelledby="service-scope-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        {/* Header: horizontal lines almost meeting heading edges, pill in center */}
        <div className="flex flex-col items-center text-center">
          <div
            className="flex w-full max-w-3xl items-center justify-center gap-4"
            style={{ maxWidth: "min(48rem, 100%)" }}
          >
            <span
              className="h-px min-w-[60px] flex-1 bg-slate-300"
              aria-hidden
            />
            <div
              className="shrink-0 rounded-full bg-[#BFFFCB] px-5 py-2.5"
              role="status"
              aria-label="Section"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#239337]">
                {scopeData.sectionLabel}
              </span>
            </div>
            <span
              className="h-px min-w-[60px] flex-1 bg-slate-300"
              aria-hidden
            />
          </div>

          <h2
            id="service-scope-heading"
            className="mt-8 text-[2rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]"
          >
            {scopeData.heading}
          </h2>

          <p className="mt-6 max-w-3xl text-[18px] leading-[27.8px] text-slate-600">
            {scopeData.description}
          </p>
        </div>

        {/* Cards: row 1 = 3 cards, row 2 = 2 cards centered evenly */}
        <div className="mt-16 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {scopeData.items
              .slice(0, 3)
              .map(({ title, description, iconKey }) => (
              <ServiceCard
                key={title}
                title={title}
                description={description}
                Icon={iconMap[iconKey]}
              />
            ))}
          </div>

          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            {scopeData.items
              .slice(3, 5)
              .map(({ title, description, iconKey }) => (
              <ServiceCard
                key={title}
                title={title}
                description={description}
                Icon={iconMap[iconKey]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceScope;
