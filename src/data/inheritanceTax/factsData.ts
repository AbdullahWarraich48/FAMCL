import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type InheritanceFactsIconKey = BookkeepingFactsIconKey;

export const INHERITANCE_TAX_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Inheritance Tax in Context",
  description:
    "Effective estate and tax planning helps protect your family from unexpected tax liabilities and ensures your legacy is passed on smoothly.",
  items: [
    {
      stat: "Up to 40%",
      description: "Inheritance Tax is charged at up to 40 percent.",
      source: "HMRC",
      iconKey: "badge-percent" as InheritanceFactsIconKey,
    },
    {
      stat: "Unnecessary Tax",
      description: "Many estates pay more tax than necessary.",
      source: "National Audit Office",
      iconKey: "file-warning" as InheritanceFactsIconKey,
    },
    {
      stat: "Early Planning",
      description: "Early planning reduces tax exposure.",
      source: "MoneyHelper",
      iconKey: "clock" as InheritanceFactsIconKey,
    },
  ],
};
