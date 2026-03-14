import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type PayrollWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const PAYROLL_PANSIONS_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Accurate Payroll Management",
  description:
    "Payroll mistakes affect both compliance and employee confidence. Proper systems and professional oversight reduce risk, prevent penalties, and ensure employees are paid correctly every time.",
  items: [
    {
      title: "Avoid Costly Penalties",
      description:
        "Payroll errors or missed submissions can result in financial penalties from HMRC.",
      iconKey: "alert-triangle" as PayrollWhyMattersIconKey,
    },
    {
      title: "Ensure Accurate Reporting",
      description:
        "Accurate payroll systems maintain reliable records for both HMRC and internal management.",
      iconKey: "check-square" as PayrollWhyMattersIconKey,
    },
    {
      title: "Stay Pension Compliant",
      description:
        "Auto-enrolment rules require businesses to manage workplace pensions properly.",
      iconKey: "shield" as PayrollWhyMattersIconKey,
    },
    {
      title: "Protect Employee Trust",
      description:
        "Accurate payroll ensures employees receive the correct payments on time.",
      iconKey: "circle-dollar" as PayrollWhyMattersIconKey,
    },
    {
      title: "Reduce Administrative Burden",
      description:
        "Outsourcing payroll removes the complexity of calculations and compliance tasks.",
      iconKey: "activity" as PayrollWhyMattersIconKey,
    },
    {
      title: "Maintain Business Confidence",
      description:
        "Employees and regulators can rely on accurate payroll management.",
      iconKey: "zap" as PayrollWhyMattersIconKey,
    },
  ],
};

