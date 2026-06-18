import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type PayrollServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const PAYROLL_PANSIONS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business",
  description:
    "We manage payroll, PAYE, and workplace pensions and The Pension Regulator submissions. Employees are paid accurately and on time. Auto-enrolment duties are handled correctly. Starters, leavers, and changes are managed smoothly. Records remain compliant with HMRC and regulators. You avoid administrative overload.",
  items: [
    {
      title: "Payroll, PAYE & Pensions",
      description:
        "We manage payroll, PAYE, and workplace pensions and The Pension Regulator submissions.",
      iconKey: "calculator" as PayrollServiceScopeIconKey,
    },
    {
      title: "Accurate, On-Time Pay",
      description: "Employees are paid accurately and on time.",
      iconKey: "badge-check" as PayrollServiceScopeIconKey,
    },
    {
      title: "Auto-Enrolment Duties",
      description: "Auto-enrolment duties are handled correctly.",
      iconKey: "shield" as PayrollServiceScopeIconKey,
    },
    {
      title: "Starters, Leavers & Changes",
      description: "Starters, leavers, and changes are managed smoothly.",
      iconKey: "users" as PayrollServiceScopeIconKey,
    },
    {
      title: "Compliant Records",
      description:
        "Records remain compliant with HMRC and regulators. You avoid administrative overload.",
      iconKey: "document-check" as PayrollServiceScopeIconKey,
    },
  ],
};
