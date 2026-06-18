import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type HealthcareIconKey = BookkeepingServiceScopeIconKey;

export const HEALTHCARE_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Industry",
  description:
    "Specialist accounting and compliance for private healthcare providers, including GP practices, dental surgeries, and care homes.",
  items: [
    {
      title: "Specialist Accounting & Compliance",
      description:
        "Specialist accounting and compliance for private healthcare providers.",
      iconKey: "document-check" as HealthcareIconKey,
    },
    {
      title: "GP Practices",
      description: "Including GP practices and NHS contract reconciliation.",
      iconKey: "calculator" as HealthcareIconKey,
    },
    {
      title: "Dental Surgeries",
      description: "Accounting and compliance for dental surgeries.",
      iconKey: "badge-check" as HealthcareIconKey,
    },
    {
      title: "Care Homes",
      description: "Financial reporting and compliance for care homes.",
      iconKey: "shield" as HealthcareIconKey,
    },
    {
      title: "Medical Payroll",
      description:
        "Specialist medical payroll, including locum and practitioner payments.",
      iconKey: "users" as HealthcareIconKey,
    },
  ],
};
