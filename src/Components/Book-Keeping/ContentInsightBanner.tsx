"use client";

import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import type { ContentInsightVariant } from "@/data/vatMarginScheme/exceptionsData";

type ContentInsightBannerProps = {
  variant: ContentInsightVariant;
  message: string;
};

const variantConfig = {
  info: {
    wrap: "border-sky-200/90 bg-sky-50",
    iconWrap: "bg-sky-600 text-white",
    Icon: Info,
  },
  warning: {
    wrap: "border-amber-200/90 bg-amber-50",
    iconWrap: "bg-amber-500 text-white",
    Icon: AlertTriangle,
  },
  success: {
    wrap: "border-emerald-200/90 bg-emerald-50",
    iconWrap: "bg-emerald-600 text-white",
    Icon: CheckCircle2,
  },
} as const;

export const ContentInsightBanner = ({
  variant,
  message,
}: ContentInsightBannerProps) => {
  const cfg = variantConfig[variant];
  const Icon = cfg.Icon;

  return (
    <div
      className={`mt-5 flex gap-3 rounded-xl border px-4 py-3 ${cfg.wrap}`}
      role="note"
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${cfg.iconWrap}`}
        aria-hidden
      >
        <Icon className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <p className="min-w-0 flex-1 text-[14px] leading-relaxed text-slate-800 sm:text-[15px]">
        {message}
      </p>
    </div>
  );
};

export default ContentInsightBanner;
