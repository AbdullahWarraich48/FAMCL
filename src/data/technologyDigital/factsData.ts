import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type TechnologyDigitalFactsIconKey = BookkeepingFactsIconKey;

export const TECHNOLOGY_DIGITAL_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Technology Sector Insights",
  description:
    "The technology and digital sector is one of the fastest-growing parts of the UK economy, but growth also brings financial complexity.",
  items: [
    {
      stat: "UK Tech Sector\nValue",
      description:
        "The UK tech sector is valued at over £1 trillion, making it the largest tech ecosystem in Europe.",
      source: "Department for Science, Innovation and Technology",
      iconKey: "chart-pie" as TechnologyDigitalFactsIconKey,
    },
    {
      stat: "Employment in\nTech",
      description: "UK tech companies employ over 3 million people across the country.",
      source: "Tech Nation / ONS",
      iconKey: "users" as TechnologyDigitalFactsIconKey,
    },
    {
      stat: "R&D Tax Credit\nClaims",
      description:
        "HMRC estimates that billions of pounds are claimed annually through R&D tax relief, with increasing scrutiny from regulators.",
      source: "HMRC",
      iconKey: "flask" as TechnologyDigitalFactsIconKey,
    },
  ],
} as const;

