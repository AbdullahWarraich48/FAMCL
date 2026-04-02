import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type PayrollServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const PAYROLL_PANSIONS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business",
  description:
    "Payroll administration involves more than simply paying employees. PAYE reporting, pension contributions, and regulatory filings must all be handled correctly. Our payroll service ensures your employee payments remain accurate, organised, and fully compliant.",
  items: [
    {
      title: "Payroll Processing",
      description:
        "Employee salaries are calculated and processed accurately so staff are paid on time.",
      iconKey: "calculator" as PayrollServiceScopeIconKey,
    },
    {
      title: "PAYE Management",
      description:
        "PAYE deductions and submissions are managed in accordance with HMRC requirements.",
      iconKey: "receipt-tax" as PayrollServiceScopeIconKey,
    },
    {
      title: "Workplace Pension Compliance",
      description:
        "Auto-enrolment duties and pension contributions are handled correctly under UK regulations.",
      iconKey: "badge-check" as PayrollServiceScopeIconKey,
    },
    {
      title: "Employee Changes Management",
      description:
        "Starters, leavers, and salary adjustments are processed smoothly and recorded properly.",
      iconKey: "users" as PayrollServiceScopeIconKey,
    },
    {
      title: "Regulatory Reporting",
      description:
        "Payroll-related reports and required submissions are filed accurately and on time.",
      iconKey: "calendar-clock" as PayrollServiceScopeIconKey,
    },
  ],
};

