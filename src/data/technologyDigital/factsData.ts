import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type TechnologyDigitalFactsIconKey = BookkeepingFactsIconKey;

export const TECHNOLOGY_DIGITAL_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Technology & Digital in Context",
  description:
    "The technology and digital sector is one of the fastest-growing parts of the UK economy.",
  items: [
    {
      stat: "£1 Trillion Sector",
      description:
        "The UK tech sector is valued at over £1 trillion, the largest in Europe.",
      source: "Department for Science, Innovation and Technology",
      iconKey: "chart-pie" as TechnologyDigitalFactsIconKey,
    },
    {
      stat: "3 Million Jobs",
      description: "UK tech companies account for more than 3 million jobs.",
      source: "Tech Nation",
      iconKey: "users" as TechnologyDigitalFactsIconKey,
    },
    {
      stat: "R&D Relief Scrutiny",
      description:
        "HMRC estimates billions of pounds are claimed annually through R&D relief, with increased scrutiny.",
      source: "HMRC",
      iconKey: "flask" as TechnologyDigitalFactsIconKey,
    },
  ],
};
