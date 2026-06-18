import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type SelfAssessmentWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const SELF_ASSESSMENT_TAX_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Getting Your Return Right Matters",
  description:
    "Late or incorrect returns trigger penalties automatically. From April 2026, HMRC implement Making Tax Digital – MDT for self employment businesses and property income which require quarterly reporting. Small mistakes can lead to HMRC enquiries. Many people overpay tax without realizing it. Tax stress often builds silently until deadlines arrive. Clear handling removes uncertainty and anxiety. You regain confidence in your finances.",
  items: [
    {
      title: "Automatic Penalties",
      description:
        "Late or incorrect returns trigger penalties automatically.",
      iconKey: "alert-triangle" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "Making Tax Digital from 2026",
      description:
        "From April 2026, HMRC implement Making Tax Digital – MDT for self employment businesses and property income which require quarterly reporting.",
      iconKey: "clipboard-check" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "HMRC Enquiries",
      description: "Small mistakes can lead to HMRC enquiries.",
      iconKey: "shield" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "Avoid Overpaying",
      description: "Many people overpay tax without realizing it.",
      iconKey: "circle-dollar" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "Silent Tax Stress",
      description:
        "Tax stress often builds silently until deadlines arrive.",
      iconKey: "activity" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "Remove Uncertainty",
      description: "Clear handling removes uncertainty and anxiety.",
      iconKey: "leaf" as SelfAssessmentWhyMattersIconKey,
    },
    {
      title: "Financial Confidence",
      description: "You regain confidence in your finances.",
      iconKey: "check-square" as SelfAssessmentWhyMattersIconKey,
    },
  ],
};
