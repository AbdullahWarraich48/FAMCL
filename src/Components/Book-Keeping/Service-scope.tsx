"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import { SERVICE_SCOPE_LUCIDE } from "@/lib/bookkeepingContentLucideIcons";
import {
  BOOKKEEPING_SERVICE_SCOPE_DATA,
  type ServiceScopeData,
} from "@/data/bookkeeping";

type ServiceCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
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
        <Icon className="h-6 w-6" strokeWidth={2} />
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

  return (
    <section
      className="w-full bg-[#F6F9FF] py-16 md:py-20 lg:py-24"
      aria-labelledby="service-scope-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <SectionIntroHeader
            headingId="service-scope-heading"
            sectionLabel={scopeData.sectionLabel}
            labelPillClassName="shrink-0 rounded-full bg-[#BFFFCB] px-5 py-2.5"
            heading={scopeData.heading}
            headingBgClassName="bg-[#F6F9FF]"
          />

          <p className="mt-6 max-w-3xl text-[18px] leading-[27.8px] text-slate-600">
            {scopeData.description}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {scopeData.items
              .slice(0, 3)
              .map(({ title, description, iconKey }) => (
                <ServiceCard
                  key={title}
                  title={title}
                  description={description}
                  Icon={SERVICE_SCOPE_LUCIDE[iconKey]}
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
                  Icon={SERVICE_SCOPE_LUCIDE[iconKey]}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceScope;
