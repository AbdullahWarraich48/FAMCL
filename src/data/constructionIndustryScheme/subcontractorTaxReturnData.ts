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
  "Managing your tax obligations effectively. We ensure tax returns are filed on time and provide planning support to help manage cashflow.";

export const CIS_SUBCONTRACTOR_BENEFITS: readonly CisSubcontractorBenefit[] = [
  {
    title: "Faster Refunds",
    description: "receiving tax refunds sooner",
    iconKey: "trendingUp",
  },
  {
    title: "More Time",
    description: "more time to arrange tax payments",
    iconKey: "clock",
  },
  {
    title: "Reduced Risk",
    description: "reduced risk of penalties and interest",
    iconKey: "shield",
  },
  {
    title: "Less Stress",
    description: "less stress at deadlines",
    iconKey: "shieldCheck",
  },
  {
    title: "PAYE Option",
    description: "option to pay tax through PAYE code where possible",
    iconKey: "calculator",
  },
] as const;
