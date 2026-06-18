import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type CareersFactsIconKey = BookkeepingFactsIconKey;

export const CAREERS_FACTS_DATA: FactsData = {
  sectionLabel: "Who We Look For",
  heading: "Who We Look For",
  description: "We hire professionals who are aligned with our core values.",
  cardStyle: "principles",
  items: [
    {
      stat: "Attention to detail",
      description: "",
      iconKey: "trend" as CareersFactsIconKey,
    },
    {
      stat: "Comfort with responsibility",
      description: "",
      iconKey: "clock" as CareersFactsIconKey,
    },
    {
      stat: "Respect for regulatory standards",
      description: "",
      iconKey: "building" as CareersFactsIconKey,
    },
    {
      stat: "Prefers solving complex problems",
      description: "",
      iconKey: "alert-octagon" as CareersFactsIconKey,
    },
  ],
};
