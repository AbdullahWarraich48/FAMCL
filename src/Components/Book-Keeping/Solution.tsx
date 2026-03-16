"use client";

import { Card, CardContent } from "@/Components/ui/card";
import {
  BOOKKEEPING_SOLUTION_DATA,
  type BookkeepingSolutionIconKey,
  type SolutionData,
} from "@/data/bookkeeping";

function SearchIcon({ className }: { className?: string }) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
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
      <path d="M12 3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h.01a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-.01z" />
      <path d="M12 15a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h.01a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-.01z" />
      <path d="M12 9a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h.01a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.01z" />
      <path d="M3 8a2 2 0 0 1 2-2v.01a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v.01A2 2 0 0 1 3 8z" />
      <path d="M21 8a2 2 0 0 1-2 2h-.01a2 2 0 0 1 2-2H22a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-.01A2 2 0 0 1 21 8z" />
      <path d="M21 16a2 2 0 0 1-2 2h-.01a2 2 0 0 1 2-2H22a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-.01A2 2 0 0 1 21 16z" />
      <path d="M3 16a2 2 0 0 1 2-2h.01a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v.01A2 2 0 0 1 3 16z" />
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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

type StepCardProps = {
  number: string;
  title: string;
  icon: (props: { className?: string }) => React.ReactElement;
};

type SolutionProps = {
  data?: SolutionData;
};

const StepCard = ({ number, title, icon: Icon }: StepCardProps) => (
  <Card className="overflow-hidden rounded-2xl border-0 border-slate-100 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
    <CardContent className="flex items-center gap-6 p-6">
      <span
        className="text-3xl font-bold leading-none text-emerald-600 sm:text-4xl"
        aria-hidden
      >
        {number}
      </span>
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f] text-white"
        aria-hidden
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="min-w-0 flex-1 text-base font-semibold text-slate-800 sm:text-lg">
        {title}
      </h3>
    </CardContent>
  </Card>
);

export const Solution = ({ data }: SolutionProps) => {
  const content = data ?? BOOKKEEPING_SOLUTION_DATA;
  const iconMap: Record<
    BookkeepingSolutionIconKey,
    (props: { className?: string }) => React.ReactElement
  > = {
    search: SearchIcon,
    cogs: CogsIcon,
    message: MessageIcon,
    "bar-chart": BarChartIcon,
    "heart-check": HeartCheckIcon,
    "hard-hat": HardHatIcon,
    calculator: CalculatorIcon,
    "document-check": DocumentCheckIcon,
    "receipt-tax": ReceiptTaxIcon,
    "badge-check": BadgeCheckIcon,
    target: TargetIcon,
    boxes: BoxesIcon,
    flask: FlaskIcon,
    factory: FactoryIcon,
    clock: ClockIcon,
  };

  return (
    <section
      className="w-full bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="solution-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        {/* Header: SOLUTION & FRAMEWORK pill + lines */}
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-3xl items-center justify-center gap-4">
            <span className="hidden h-px min-w-[40px] flex-1 bg-slate-300 sm:block" aria-hidden />
            <div
              className="shrink-0 rounded-lg bg-[#BFFFCB] px-4 py-2"
              role="status"
              aria-label="Section"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#239337]">
                {content.sectionLabel}
              </span>
            </div>
            <span className="hidden h-px min-w-[40px] flex-1 bg-slate-300 sm:block" aria-hidden />
          </div>

          <h2
            id="solution-heading"
            className="mt-8 text-[2rem] font-bold leading-[1.15] tracking-tight text-[#175dab]  sm:text-4xl lg:text-[44px]"
          >
            {content.heading}
          </h2>

          <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-slate-600 sm:text-[18px] sm:leading-[27.8px]">
            {content.description}
          </p>
        </div>

        {/* Step cards - vertical list, slightly tighter on mobile */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-5 sm:mt-16 sm:gap-6">
          {content.steps.map(({ number, title, iconKey }) => (
            <StepCard
              key={number}
              number={number}
              title={title}
              icon={iconMap[iconKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
