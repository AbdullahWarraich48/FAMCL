"use client";

import { Box } from "lucide-react";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  VAT_MARGIN_APPLICABLE_GOODS_DATA,
  type ApplicableGoodsData,
} from "@/data/vatMarginScheme/applicableGoodsData";

type ApplicableGoodsGridProps = {
  data?: ApplicableGoodsData;
};

const GoodsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Card className="flex h-full w-full flex-col overflow-hidden rounded-xl border-0 border-slate-100/80 bg-gradient-to-b from-white via-white to-[#eef6ff] p-6 shadow-[0_6px_24px_rgba(30,58,95,0.08),0_2px_8px_rgba(30,58,95,0.04)] transition-shadow hover:shadow-[0_12px_32px_rgba(30,58,95,0.12),0_4px_12px_rgba(30,58,95,0.06)]">
    <CardHeader className="space-y-3 p-0">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f] text-white"
        aria-hidden
      >
        <Box className="h-6 w-6" strokeWidth={2} />
      </span>
      <CardTitle className="text-base font-semibold leading-tight tracking-tight text-[#1e3a5f] sm:text-[17px]">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0 pt-1">
      <CardDescription className="text-[15px] leading-relaxed text-slate-600">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export const ApplicableGoodsGrid = ({ data }: ApplicableGoodsGridProps) => {
  const content = data ?? VAT_MARGIN_APPLICABLE_GOODS_DATA;

  return (
    <section
      className="w-full bg-slate-50 py-14 md:py-20 lg:py-24"
      aria-labelledby={content.headingId}
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <SectionIntroHeader
          headingId={content.headingId}
          heading={content.title}
          headingBgClassName="bg-slate-50"
          headingBlockMarginTop="mt-0"
          headingClassName="text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[#1e3a5f] sm:text-3xl lg:text-[40px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {content.items.map(({ title, description }) => (
            <GoodsCard key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicableGoodsGrid;
