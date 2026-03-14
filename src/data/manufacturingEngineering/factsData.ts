import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type ManufacturingEngineeringFactsIconKey = BookkeepingFactsIconKey;

export const MANUFACTURING_ENGINEERING_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Manufacturing & Engineering Insights",
  description:
    "The manufacturing and engineering sectors play a pivotal role in the UK economy. Effective financial management is essential for addressing key challenges in cost control, cash flow, and tax planning.",
  items: [
    {
      stat: "Sector Contribution to\nUK GDP",
      description:
        "Manufacturing contributes £217 billion, approximately 10% of UK GDP.",
      source: "Office for National Statistics (ONS)",
      iconKey: "chart-pie" as ManufacturingEngineeringFactsIconKey,
    },
    {
      stat: "Employment in\nManufacturing",
      description: "The sector employs around 2.7 million people across the UK.",
      source: "ONS",
      iconKey: "users" as ManufacturingEngineeringFactsIconKey,
    },
    {
      stat: "Cash Flow Pressures",
      description:
        "Over 53% of manufacturers report cash flow pressure due to rising energy and input costs.",
      source: "Make UK Manufacturing Outlook",
      iconKey: "file-warning" as ManufacturingEngineeringFactsIconKey,
    },
  ],
} as const;

