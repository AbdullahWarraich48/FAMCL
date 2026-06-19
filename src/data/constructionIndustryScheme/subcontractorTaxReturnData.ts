export type CisSubcontractorBenefitIconKey =
  | "trendingUp"
  | "clock"
  | "shield"
  | "shieldCheck"
  | "calculator";

export type CisSubcontractorBenefit = {
  title: string;
  description: string;
  iconKey: CisSubcontractorBenefitIconKey;
};

export const CIS_SUBCONTRACTOR_TAX_RETURN_HEADING =
  "CIS Subcontractor Tax Return";

export const CIS_SUBCONTRACTOR_TAX_RETURN_INTRO =
  "We help you meet your tax obligations. We ensure your tax return is filed on time, and we also provide tax planning which helps manage business cashflows better.";

export const CIS_SUBCONTRACTOR_BENEFITS: readonly CisSubcontractorBenefit[] = [
  {
    title: "Faster Refunds",
    description: "Receiving tax refunds sooner",
    iconKey: "trendingUp",
  },
  {
    title: "More Time",
    description: "More time to arrange how to pay tax liability",
    iconKey: "clock",
  },
  {
    title: "Reduced Risk",
    description: "Less risk of late filing penalties and overdue payment interest",
    iconKey: "shield",
  },
  {
    title: "Less Stress",
    description: "Less stress in dealing with last-minute tax returns",
    iconKey: "shieldCheck",
  },
  {
    title: "PAYE Option",
    description: "Paying tax through PAYE tax code (where possible)",
    iconKey: "calculator",
  },
] as const;
