import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type HealthcareWhyIconKey = BookkeepingWhyMattersIconKey;

export const HEALTHCARE_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Specialist Financial Support in\nHealthcare",
  description:
    "Healthcare providers operate under strict regulatory oversight while managing complex payroll structures and funding models. Clear financial guidance ensures compliance, stability, and long-term sustainability.",
  items: [
    {
      title: "Focus on Patient Care",
      description:
        "By managing financial administration and compliance, we allow healthcare professionals to focus on delivering quality care.",
      iconKey: "heart-check" as HealthcareWhyIconKey,
    },
    {
      title: "Confidence in Compliance",
      description:
        "Proper accounting and reporting reduce the risk of compliance failures and financial penalties.",
      iconKey: "shield" as HealthcareWhyIconKey,
    },
    {
      title: "Regulatory Compliance",
      description:
        "Healthcare providers must meet strict regulatory standards, including those from regulators and NHS frameworks. We help keep you compliant.",
      iconKey: "clipboard-check" as HealthcareWhyIconKey,
    },
    {
      title: "Financial Stability for Practices",
      description:
        "Clear financial management ensures healthcare organisations maintain sustainable and financially secure operations.",
      iconKey: "trend-up" as HealthcareWhyIconKey,
    },
    {
      title: "Support for Growth & Change",
      description:
        "Healthcare practices facing expansion, mergers, or structural changes receive financial insight to navigate these transitions confidently.",
      iconKey: "activity" as HealthcareWhyIconKey,
    },
    {
      title: "Complex Payroll Structures",
      description:
        "Healthcare teams include locums, practitioners, and varying pay arrangements. Robust payroll processes ensure accurate and compliant payments.",
      iconKey: "alert-triangle" as HealthcareWhyIconKey,
    },
  ],
} as const;

