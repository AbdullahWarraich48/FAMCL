import type { FactsData } from "@/data/bookkeeping/factsData";

/** About page — “Our Approach” principles (Figma) */
export const ABOUT_FACTS_DATA: FactsData = {
  sectionLabel: "Our Steps",
  heading: "Our Approach",
  description:
    "Our work is guided by principles that shape the firm's philosophy.",
  cardStyle: "principles",
  items: [
    {
      stat: "Accuracy before speed",
      description:
        "Financial information must be precise and reliable.",
      iconKey: "clock",
    },
    {
      stat: "Judgement before optimisation",
      description:
        "Advice should be based on professional judgement rather than aggressive optimisation.",
      iconKey: "chart-pie",
    },
    {
      stat: "Responsibility before convenience",
      description:
        "Financial decisions should prioritise long-term responsibility and compliance.",
      iconKey: "building",
    },
  ],
};
