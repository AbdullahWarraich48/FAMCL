import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type HealthcareIconKey = BookkeepingServiceScopeIconKey;

export const HEALTHCARE_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Industry",
  description:
    "Healthcare organisations face unique financial and regulatory challenges. Our services are tailored to support medical practices, care providers, and healthcare businesses with compliant financial management and operational clarity.",
  items: [
    {
      title: "Specialist Medical Payroll",
      description:
        "We manage payroll for healthcare staff, including locum doctors, practitioners, and support teams, ensuring accurate payments and compliance with HMRC requirements.",
      iconKey: "document-check" as HealthcareIconKey,
    },
    {
      title: "NHS Contract & Practice Accounts",
      description:
        "We handle NHS contract income and practice accounts for GP practices and clinics, providing clear reporting on funding streams and profitability.",
      iconKey: "calculator" as HealthcareIconKey,
    },
    {
      title: "Tax Planning for Partnerships",
      description:
        "We advise healthcare partnerships on tax planning, profit allocation, and allowable expense claims to optimise partner drawings and tax efficiency.",
      iconKey: "receipt-tax" as HealthcareIconKey,
    },
    {
      title: "Regulatory Financial Reporting",
      description:
        "We ensure financial reporting meets regulatory requirements, including standards expected by regulators and professional bodies.",
      iconKey: "badge-check" as HealthcareIconKey,
    },
    {
      title: "Strategic Practice Advice",
      description:
        "We provide guidance on practice mergers, acquisitions, and succession planning to support long-term stability.",
      iconKey: "target" as HealthcareIconKey,
    },
  ],
} as const;

