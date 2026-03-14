import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type TechnologyDigitalWhyIconKey = BookkeepingWhyMattersIconKey;

export const TECHNOLOGY_DIGITAL_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Strong Financial Foundations in Tech",
  description:
    "Technology businesses often grow quickly, and poor financial management can slow innovation or deter investors. Clear financial strategy ensures your company is investment-ready and capable of scaling effectively.",
  items: [
    {
      title: "Attract Investors with Confidence",
      description:
        "Investors expect strong financial reporting and forecasting. We help ensure your financials are investor-ready.",
      iconKey: "trend-up" as TechnologyDigitalWhyIconKey,
    },
    {
      title: "Maximise R&D Relief Opportunities",
      description:
        "Many tech companies fail to fully claim R&D tax relief. We ensure you receive the full benefit while maintaining compliance.",
      iconKey: "flask" as TechnologyDigitalWhyIconKey,
    },
    {
      title: "Avoid Financial Drag",
      description:
        "Disorganised financial systems can slow your company down. We provide the structure needed to scale efficiently.",
      iconKey: "alert-triangle" as TechnologyDigitalWhyIconKey,
    },
    {
      title: "Build a Scalable Financial Strategy",
      description:
        "Strong financial planning supports long-term growth, funding rounds, and sustainable business development.",
      iconKey: "cogs" as TechnologyDigitalWhyIconKey,
    },
    {
      title: "Structure Share Options Correctly",
      description:
        "Poorly structured employee share schemes can cause tax and legal issues. We ensure your schemes support both compliance and growth.",
      iconKey: "clipboard-check" as TechnologyDigitalWhyIconKey,
    },
    {
      title: "Manage Rapid Growth",
      description:
        "Scaling businesses require accurate financial insight to maintain stability during expansion.",
      iconKey: "activity" as TechnologyDigitalWhyIconKey,
    },
  ],
} as const;

