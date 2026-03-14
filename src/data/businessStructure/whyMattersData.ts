import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type BusinessStructureWhyIconKey = BookkeepingWhyMattersIconKey;

export const BUSINESS_STRUCTURE_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of a Well-Structured Business",
  description:
    "Choosing the wrong business structure can have lasting consequences. It impacts your personal liability, tax payments, and your ability to grow or secure investment. A well-planned structure provides a strong foundation for your business to grow, minimise risks, and stay compliant.",
  items: [
    {
      title: "Reduce Personal Liability",
      description:
        "The right structure limits your personal liability, protecting your assets from business-related risks.",
      iconKey: "shield" as BusinessStructureWhyIconKey,
    },
    {
      title: "Tax Efficiency",
      description:
        "A well-chosen structure can reduce the amount of tax your business pays and help you plan for future financial needs.",
      iconKey: "circle-dollar" as BusinessStructureWhyIconKey,
    },
    {
      title: "Simplify Compliance",
      description:
        "The correct structure ensures you meet regulatory requirements without unnecessary complexity.",
      iconKey: "check-square" as BusinessStructureWhyIconKey,
    },
    {
      title: "Attract Investors",
      description:
        "Investors look for well-structured companies with clear ownership and risk management. A proper structure enhances investment appeal.",
      iconKey: "trend-up" as BusinessStructureWhyIconKey,
    },
    {
      title: "Avoid Legal Risks",
      description:
        "Choosing the wrong structure can lead to costly legal issues and complicated compliance.",
      iconKey: "alert-triangle" as BusinessStructureWhyIconKey,
    },
    {
      title: "Sustainable Growth",
      description:
        "A strong, flexible structure supports the long-term growth of your business, enabling scalability and operational efficiency.",
      iconKey: "activity" as BusinessStructureWhyIconKey,
    },
  ],
};

