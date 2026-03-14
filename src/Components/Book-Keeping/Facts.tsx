"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  BOOKKEEPING_FACTS_DATA,
  type BookkeepingFactsIconKey,
  type FactsData,
} from "@/data/bookkeeping";

function TrendIcon({ className }: { className?: string }) {
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
    </svg>
  );
}

function FileWarningIcon({ className }: { className?: string }) {
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
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
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
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
    </svg>
  );
}

function ChartPieIcon({ className }: { className?: string }) {
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
      <path d="M21 12A9 9 0 1 1 12 3v9z" />
      <path d="M12 3a9 9 0 0 1 9 9h-9z" />
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

type FactCardProps = {
  stat: string;
  description: string;
  source: string;
  icon: (props: { className?: string }) => React.ReactElement;
};

type FactsProps = {
  data?: FactsData;
};

const FactCard = ({ stat, description, source, icon: Icon }: FactCardProps) => (
  <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-0 border-slate-100 bg-gradient-to-b from-white/70 to-[#D8EAFF] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)]">
    <CardHeader className="p-0">
      <span
        className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f] text-white"
        aria-hidden
      >
        <Icon className="h-6 w-6" />
      </span>
      <CardTitle className="text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl">
        {stat}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-1 flex-col p-0 pt-4">
      <CardDescription className="text-[15px] leading-[1.6] text-slate-600">
        {description}
      </CardDescription>
      <p className="mt-4 text-[13px] text-slate-500">
        Source: {source}
      </p>
    </CardContent>
  </Card>
);

export const Facts = ({ data }: FactsProps) => {
  const content = data ?? BOOKKEEPING_FACTS_DATA;
  const iconMap: Record<
    BookkeepingFactsIconKey,
    (props: { className?: string }) => React.ReactElement
  > = {
    trend: TrendIcon,
    "file-warning": FileWarningIcon,
    building: BuildingIcon,
    "chart-pie": ChartPieIcon,
    "alert-octagon": AlertOctagonIcon,
    clock: ClockIcon,
    users: UsersIcon,
    flask: FlaskIcon,
  };

  return (
    <section
      className="w-full bg-[#F6F9FF] py-16 md:py-20 lg:py-24"
      aria-labelledby="facts-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        {/* Header: FACTS & STATS pill + lines */}
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
            id="facts-heading"
            className="mt-8 text-[2rem] font-bold leading-[1.15] tracking-tight text-[#175dab] sm:text-4xl lg:text-[44px]"
          >
            {content.heading}
          </h2>

          <p className="mt-6 max-w-3xl text-[18px] leading-[27.8px] text-slate-600">
            {content.description}
          </p>
        </div>

        {/* Three fact cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {content.items.map(({ stat, description, source, iconKey }) => (
            <FactCard
              key={stat}
              stat={stat}
              description={description}
              source={source}
              icon={iconMap[iconKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
