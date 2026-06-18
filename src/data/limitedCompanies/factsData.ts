import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type LimitedCompaniesFactsIconKey = BookkeepingFactsIconKey;

export const LIMITED_COMPANIES_FACTS_DATA: FactsData = {
  sectionLabel: "Stats & Facts (UK)",
  heading: "Limited Companies in Context",
  description:
    "Limited companies offer structural advantages but come with increased regulatory and reporting obligations.",
  items: [
    {
      stat: "Higher Statutory Duties",
      description: "Limited companies carry higher statutory duties.",
      source: "Companies House",
      iconKey: "building" as LimitedCompaniesFactsIconKey,
    },
    {
      stat: "Corporation Tax Penalties",
      description:
        "Corporation Tax errors attract penalties and interest.",
      source: "HMRC",
      iconKey: "file-warning" as LimitedCompaniesFactsIconKey,
    },
  ],
};
