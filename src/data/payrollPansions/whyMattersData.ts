import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type PayrollWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const PAYROLL_PANSIONS_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Payroll Accuracy Matters",
  description:
    "Payroll errors damage employee trust. Mistakes lead to penalties and complaints. Pension compliance is strictly enforced. Outsourcing payroll reduces risk and saves time. Your team stays confident in the business.",
  items: [
    {
      title: "Employee Trust",
      description: "Payroll errors damage employee trust.",
      iconKey: "heart-check" as PayrollWhyMattersIconKey,
    },
    {
      title: "Penalties & Complaints",
      description: "Mistakes lead to penalties and complaints.",
      iconKey: "alert-triangle" as PayrollWhyMattersIconKey,
    },
    {
      title: "Strict Pension Rules",
      description: "Pension compliance is strictly enforced.",
      iconKey: "shield" as PayrollWhyMattersIconKey,
    },
    {
      title: "Reduced Risk & Time Saved",
      description: "Outsourcing payroll reduces risk and saves time.",
      iconKey: "leaf" as PayrollWhyMattersIconKey,
    },
    {
      title: "Team Confidence",
      description: "Your team stays confident in the business.",
      iconKey: "check-square" as PayrollWhyMattersIconKey,
    },
  ],
};
