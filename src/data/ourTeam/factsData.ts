import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type OurTeamFactsIconKey = BookkeepingFactsIconKey;

export const OUR_TEAM_FACTS_DATA: FactsData = {
  sectionLabel: "Professional Standards",
  heading: "The Principles That Guide Our Team",
  description:
    "Our professionals maintain a disciplined approach to each engagement to ensure advice remains relevant, defensible, and aligned with regulatory developments.",
  items: [
    {
      stat: "Professional Judgement",
      description:
        "Advice is guided by careful analysis and experienced professional judgement, rather than shortcuts or assumptions.",
      source: "FAM Chartered Accountants",
      iconKey: "trend" as OurTeamFactsIconKey,
    },
    {
      stat: "Continuous Learning",
      description:
        "Our team continually updates its knowledge through training and by tracking changing regulations and financial practices.",
      source: "FAM Chartered Accountants",
      iconKey: "users" as OurTeamFactsIconKey,
    },
    {
      stat: "Awareness of Regulatory Change",
      description:
        "We actively monitor tax and compliance developments so our advice remains accurate, defensible, and up to date.",
      source: "FAM Chartered Accountants",
      iconKey: "alert-octagon" as OurTeamFactsIconKey,
    },
  ],
};

