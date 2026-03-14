import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type InheritanceFactsIconKey = BookkeepingFactsIconKey;

export const INHERITANCE_TAX_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Inheritance Tax and Estate Planning in the UK",
  description:
    "Effective estate and tax planning helps protect your family from unexpected tax liabilities and ensures your legacy is passed on smoothly.",
  items: [
    {
      stat: "Inheritance Tax Rate",
      description:
        "Inheritance Tax can be charged at up to 40% of the value of your estate.",
      source: "HMRC",
      iconKey: "trend" as InheritanceFactsIconKey,
    },
    {
      stat: "Overpaying on Estates",
      description:
        "Many estates end up paying more tax than necessary due to a lack of planning.",
      source: "National Audit Office",
      iconKey: "file-warning" as InheritanceFactsIconKey,
    },
    {
      stat: "Early Planning Reduces Exposure",
      description:
        "Planning ahead significantly reduces the risk of high Inheritance Tax exposure.",
      source: "MoneyHelper",
      iconKey: "building" as InheritanceFactsIconKey,
    },
  ],
};

