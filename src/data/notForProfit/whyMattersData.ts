import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type NotForProfitWhyIconKey = BookkeepingWhyMattersIconKey;

export const NOT_FOR_PROFIT_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Financial Governance Matters",
  description:
    "For mission-driven organisations, trust is the most valuable asset. Financial mismanagement not only breaks regulations but also betrays donor confidence. We provide the rigorous financial oversight needed to protect your reputation, ensure compliance, and keep your focus on your cause.",
  items: [
    {
      title: "Trust Is Everything",
      description:
        "For mission-driven organisations, trust is the most valuable asset.",
      iconKey: "heart-check" as NotForProfitWhyIconKey,
    },
    {
      title: "Regulatory Breaches",
      description: "Financial mismanagement breaks regulations.",
      iconKey: "alert-triangle" as NotForProfitWhyIconKey,
    },
    {
      title: "Donor Confidence",
      description: "Financial mismanagement betrays donor confidence.",
      iconKey: "scale" as NotForProfitWhyIconKey,
    },
    {
      title: "Protect Reputation",
      description:
        "Rigorous financial oversight protects your reputation and ensures compliance.",
      iconKey: "shield" as NotForProfitWhyIconKey,
    },
    {
      title: "Focus on Your Cause",
      description: "Keep your focus on your cause.",
      iconKey: "leaf" as NotForProfitWhyIconKey,
    },
  ],
};
