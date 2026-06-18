import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type OurTeamFactsIconKey = BookkeepingFactsIconKey;

export const OUR_TEAM_FACTS_DATA: FactsData = {
  sectionLabel: "Emphasis on Professionalism",
  heading: "Emphasis on Professionalism",
  description:
    "Our team's focus ensures advice remains relevant, defensible, and current.",
  cardStyle: "principles",
  items: [
    {
      stat: "Professional judgement",
      description: "",
      iconKey: "trend" as OurTeamFactsIconKey,
    },
    {
      stat: "Continuous learning",
      description: "",
      iconKey: "users" as OurTeamFactsIconKey,
    },
    {
      stat: "Awareness of regulatory change",
      description: "",
      iconKey: "alert-octagon" as OurTeamFactsIconKey,
    },
  ],
};
