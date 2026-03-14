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
  BOOKKEEPING_WHY_MATTERS_DATA,
  type BookkeepingWhyMattersIconKey,
  type WhyMattersData,
} from "@/data/bookkeeping";

function AlertTriangleIcon({ className }: { className?: string }) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function CheckSquareIcon({ className }: { className?: string }) {
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
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
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

function ActivityIcon({ className }: { className?: string }) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function CircleDollarIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
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
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
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
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 5h6v6" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
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
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ClipboardCheckIcon({ className }: { className?: string }) {
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
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 4h6a1 1 0 0 1 1 1v2H8V5a1 1 0 0 1 1-1z" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function AlertOctagonIcon({ className }: { className?: string }) {
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
      <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z" />
      <path d="M12 8v5" />
      <path d="M12 16h.01" />
    </svg>
  );
}

function ScaleIcon({ className }: { className?: string }) {
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
      <path d="M12 3v18" />
      <path d="M6 7h12" />
      <path d="M7 7l-3 6h6l-3-6z" />
      <path d="M17 7l-3 6h6l-3-6z" />
      <path d="M8 21h8" />
    </svg>
  );
}

function ChartLineIcon({ className }: { className?: string }) {
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
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M6 14l4-4 4 3 4-6" />
      <path d="M18 7v4h-4" />
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

function CogsIcon({ className }: { className?: string }) {
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
      <path d="M12 8a4 4 0 1 0 4 4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93 6.34 6.34" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
      <path d="M16 12a4 4 0 0 0-4-4" />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
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
      <path d="M11 20c7 0 10-7 10-14C14 6 4 10 4 17c0 2 2 3 4 3" />
      <path d="M12 20c0-6 5-10 9-12" />
    </svg>
  );
}

function HeartCheckIcon({ className }: { className?: string }) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

type BenefitCardProps = {
  title: string;
  description: string;
  Icon: (props: { className?: string }) => React.ReactElement;
};

type WhyMattersProps = {
  data?: WhyMattersData;
};

const BenefitCard = ({ title, description, Icon }: BenefitCardProps) => (
  <Card className="flex w-full flex-col overflow-hidden rounded-2xl border-0 border-slate-100 bg-white p-4 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)]">
    <div className="flex items-start gap-4">
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f] text-white"
        aria-hidden
      >
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0 flex-1">
        <CardTitle className="text-[16px] font-semibold leading-tight tracking-tight text-[#1e3a5f]">
          {title}
        </CardTitle>
        <CardDescription className="mt-2 text-[15px] leading-[1.6] text-slate-600">
          {description}
        </CardDescription>
      </div>
    </div>
  </Card>
);

export const WhyMatters = ({ data }: WhyMattersProps) => {
  const content = data ?? BOOKKEEPING_WHY_MATTERS_DATA;
  const iconMap: Record<
    BookkeepingWhyMattersIconKey,
    (props: { className?: string }) => React.ReactElement
  > = {
    "alert-triangle": AlertTriangleIcon,
    "check-square": CheckSquareIcon,
    shield: ShieldIcon,
    activity: ActivityIcon,
    "circle-dollar": CircleDollarIcon,
    zap: ZapIcon,
    "trend-up": TrendUpIcon,
    clock: ClockIcon,
    "clipboard-check": ClipboardCheckIcon,
    "alert-octagon": AlertOctagonIcon,
    scale: ScaleIcon,
    "chart-line": ChartLineIcon,
    eye: EyeIcon,
    flask: FlaskIcon,
    cogs: CogsIcon,
    leaf: LeafIcon,
    "heart-check": HeartCheckIcon,
  };

  return (
    <section
      className="w-full bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="why-matters-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        {/* Header: WHY IT MATTERS pill + lines */}
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-3xl items-center justify-center gap-4">
            <span className="h-px min-w-[80px] flex-1 bg-slate-300" aria-hidden />
            <div
              className="shrink-0 rounded-lg bg-[#BFFFCB] px-4 py-2"
              role="status"
              aria-label="Section"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#239337]">
                {content.sectionLabel}
              </span>
            </div>
            <span className="h-px min-w-[80px] flex-1 bg-slate-300" aria-hidden />
          </div>

          <h2
            id="why-matters-heading"
            className="mt-8 text-[2rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]"
          >
            {content.heading}
          </h2>

          <p className="mt-6 max-w-3xl text-[18px] leading-[27.8px] text-slate-600">
            {content.description}
          </p>
        </div>

        {/* Benefits grid: 2 columns, 3 rows; content-driven height */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {content.items.map(({ title, description, iconKey }) => (
            <BenefitCard
              key={title}
              title={title}
              description={description}
              Icon={iconMap[iconKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;
