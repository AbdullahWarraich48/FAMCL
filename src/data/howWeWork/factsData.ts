import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type HowWeWorkFactsIconKey = BookkeepingFactsIconKey;

export const HOW_WE_WORK_FACTS_DATA: FactsData = {
  sectionLabel: "Our Working Model",
  heading: "Our Working Model",
  description: "A clear process to ensure you understand your position.",
  cardStyle: "principles",
  items: [
    {
      stat: "Understand the full context",
      description: "",
      iconKey: "chart-pie" as HowWeWorkFactsIconKey,
    },
    {
      stat: "Identify exposure and uncertainty",
      description: "",
      iconKey: "alert-octagon" as HowWeWorkFactsIconKey,
    },
    {
      stat: "Apply regulation consistently",
      description: "",
      iconKey: "building" as HowWeWorkFactsIconKey,
    },
    {
      stat: "Document decisions and assumptions",
      description: "",
      iconKey: "file-warning" as HowWeWorkFactsIconKey,
    },
  ],
};
