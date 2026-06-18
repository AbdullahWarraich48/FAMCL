import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type HealthcareWhyIconKey = BookkeepingWhyMattersIconKey;

export const HEALTHCARE_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Specialist Support Matters in Healthcare",
  description:
    "In healthcare, patient care is paramount, but financial health is critical for survival. Complex payroll, CQC compliance, and NHS contract reconciliation demand specialist knowledge. We manage the financial burdens, allowing you to focus on delivering outstanding care.",
  items: [
    {
      title: "Patient Care First",
      description: "In healthcare, patient care is paramount.",
      iconKey: "heart-check" as HealthcareWhyIconKey,
    },
    {
      title: "Financial Survival",
      description: "Financial health is critical for survival.",
      iconKey: "circle-dollar" as HealthcareWhyIconKey,
    },
    {
      title: "Complex Payroll",
      description: "Complex payroll demands specialist knowledge.",
      iconKey: "activity" as HealthcareWhyIconKey,
    },
    {
      title: "CQC & NHS Compliance",
      description:
        "CQC compliance and NHS contract reconciliation demand specialist knowledge.",
      iconKey: "clipboard-check" as HealthcareWhyIconKey,
    },
    {
      title: "Focus on Outstanding Care",
      description:
        "We manage the financial burdens, allowing you to focus on delivering outstanding care.",
      iconKey: "shield" as HealthcareWhyIconKey,
    },
  ],
};
