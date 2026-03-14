import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type LimitedCompaniesFactsIconKey = BookkeepingFactsIconKey;

export const LIMITED_COMPANIES_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Limited Company Insights",
  description:
    "Limited companies offer structural advantages but come with increased regulatory and reporting obligations.",
  items: [
    {
      stat: "Statutory Duties",
      description:
        "Limited companies carry higher statutory duties and reporting responsibilities than many other business structures.",
      source: "Companies House",
      iconKey: "building" as LimitedCompaniesFactsIconKey,
    },
    {
      stat: "Corporation Tax Compliance",
      description:
        "Errors in Corporation Tax returns can result in penalties and interest from HMRC, especially where records are incomplete.",
      source: "HMRC",
      iconKey: "file-warning" as LimitedCompaniesFactsIconKey,
    },
    {
      stat: "Director Responsibilities Under Company Law",
      description:
        "Company directors must follow statutory duties under company law and maintain proper documentation and records.",
      source: "Companies House",
      iconKey: "users" as LimitedCompaniesFactsIconKey,
    },
  ],
};

