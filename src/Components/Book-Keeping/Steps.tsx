"use client";

import Link from "next/link";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { BOOKKEEPING_STEPS_DATA, type BookkeepingStepsIconKey } from "@/data/bookkeeping";

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

function UserIcon({ className }: { className?: string }) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
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
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
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

type StepCardProps = {
  step: number;
  title: string;
  description: string;
  icon: (props: { className?: string }) => React.ReactElement;
};

const StepCard = ({ step, title, description, icon: Icon }: StepCardProps) => (
  <Card className="relative overflow-hidden rounded-2xl border-0 border-slate-100 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
    <span
      className="absolute -left-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white shadow-sm"
      aria-hidden
    >
      {step}
    </span>
    <CardContent className="flex flex-col items-center pt-12 pb-6 pl-6 pr-6 text-center">
      <span
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl text-[#1e3a5f]"
        aria-hidden
      >
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="text-lg font-semibold text-slate-800 sm:text-xl">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">
        {description}
      </p>
      <Button
        asChild
        variant="outline"
        className="mt-6 w-full rounded-xl border-2 border-slate-300 bg-white py-6 text-base font-semibold text-slate-800 hover:border-[#12254B] hover:bg-[#12254B] hover:text-white"
      >
        <Link
          href={BOOKKEEPING_STEPS_DATA.cta.href}
          className="inline-flex items-center justify-center gap-2"
        >
          {BOOKKEEPING_STEPS_DATA.cta.label}
          <ArrowRightIcon />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

export default function Steps() {
  const data = BOOKKEEPING_STEPS_DATA;
  const iconMap: Record<
    BookkeepingStepsIconKey,
    (props: { className?: string }) => React.ReactElement
  > = {
    message: MessageIcon,
    user: UserIcon,
    "file-text": FileTextIcon,
  };

  return (
    <section
      className="w-full bg-[#F6F9FF] py-16 md:py-20 lg:py-24"
      aria-labelledby="steps-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        {/* Heading with dividers */}
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-3xl items-center justify-center gap-4">
            <span className="hidden h-px min-w-[40px] flex-1 bg-slate-300 sm:block" aria-hidden />
            <h2
              id="steps-heading"
              className="shrink-0 text-[1.75rem] font-bold leading-tight tracking-tight text-[#175dab]  sm:text-3xl lg:text-4xl"
            >
              {data.heading}
            </h2>
            <span className="hidden h-px min-w-[40px] flex-1 bg-slate-300 sm:block" aria-hidden />
          </div>
        </div>

        {/* Three step cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {data.items.map(({ step, title, description, iconKey }) => (
            <StepCard
              key={step}
              step={step}
              title={title}
              description={description}
              icon={iconMap[iconKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
