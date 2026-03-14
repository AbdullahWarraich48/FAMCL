import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type LimitedCompaniesServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const LIMITED_COMPANIES_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Overview",
  heading: "What We Manage for Limited Companies",
  description:
    "Running a limited company requires disciplined financial management and compliance with both HMRC and Companies House requirements. Our service helps directors maintain proper records, meet statutory obligations, and make informed financial decisions.",
  items: [
    {
      title: "Director Responsibility Guidance",
      description:
        "We help directors understand their legal duties, reporting responsibilities, and personal accountability under UK company law.",
      iconKey: "shield" as LimitedCompaniesServiceScopeIconKey,
    },
    {
      title: "Statutory Record Management",
      description:
        "We maintain statutory registers and ensure company records remain accurate and compliant.",
      iconKey: "document-check" as LimitedCompaniesServiceScopeIconKey,
    },
    {
      title: "Accounts Preparation",
      description:
        "We prepare financial statements aligned with both Companies House filing requirements and HMRC reporting standards.",
      iconKey: "bar-chart" as LimitedCompaniesServiceScopeIconKey,
    },
    {
      title: "Corporation Tax Planning",
      description:
        "We manage Corporation Tax planning proactively to reduce risk and avoid unnecessary penalties.",
      iconKey: "receipt-tax" as LimitedCompaniesServiceScopeIconKey,
    },
    {
      title: "Compliance Coordination",
      description:
        "We ensure proper coordination between payroll, VAT, reporting, and company secretarial obligations.",
      iconKey: "boxes" as LimitedCompaniesServiceScopeIconKey,
    },
  ],
};

