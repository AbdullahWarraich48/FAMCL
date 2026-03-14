import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type LimitedCompaniesWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const LIMITED_COMPANIES_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants – Trust Matrix",
  description:
    "Our work follows a professional framework that emphasises accountability, clarity, and controlled financial processes throughout every engagement.",
  items: [
    {
      title: "Accuracy Enforced",
      description:
        "Financial reporting and documentation must remain precise and reliable so directors can sign off with confidence.",
      iconKey: "check-square" as LimitedCompaniesWhyMattersIconKey,
    },
    {
      title: "Accountability Retained",
      description:
        "Responsibility remains clear throughout the engagement, so decisions and outcomes are always owned.",
      iconKey: "shield" as LimitedCompaniesWhyMattersIconKey,
    },
    {
      title: "Compliance Mandatory",
      description:
        "All statutory obligations are addressed proactively, reducing the risk of penalties and regulatory issues.",
      iconKey: "alert-octagon" as LimitedCompaniesWhyMattersIconKey,
    },
    {
      title: "Process Controlled",
      description:
        "Structured systems reduce risk and maintain consistency across payroll, VAT, accounts, and filings.",
      iconKey: "cogs" as LimitedCompaniesWhyMattersIconKey,
    },
    {
      title: "Judgement Applied",
      description:
        "Professional expertise guides every financial and regulatory decision, not just automated processes.",
      iconKey: "scale" as LimitedCompaniesWhyMattersIconKey,
    },
    {
      title: "Transparent Service",
      description:
        "Clients always understand their financial position and obligations, with visibility before decisions are made.",
      iconKey: "eye" as LimitedCompaniesWhyMattersIconKey,
    },
  ],
};

