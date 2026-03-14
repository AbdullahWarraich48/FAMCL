import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type BusinessAdviceWhyIconKey = BookkeepingWhyMattersIconKey;

export const BUSINESS_ADVICE_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Clear Business Advice",
  description:
    "Most business problems begin quietly, slowly affecting cash flow, profitability, and operations. Clear financial advice helps you avoid costly mistakes, improve your growth trajectory, and prepare for long-term success.",
  items: [
    {
      title: "Reduced Business Risk",
      description:
        "Proactive advice helps you avoid potential pitfalls, protecting your business from unexpected challenges.",
      iconKey: "alert-triangle" as BusinessAdviceWhyIconKey,
    },
    {
      title: "Enhanced Business Growth",
      description:
        "Clear guidance fosters growth by identifying profitable opportunities and refining business strategies.",
      iconKey: "trend-up" as BusinessAdviceWhyIconKey,
    },
    {
      title: "Improved Cash Flow Management",
      description:
        "Better financial planning improves cash flow and ensures your business stays on track.",
      iconKey: "circle-dollar" as BusinessAdviceWhyIconKey,
    },
    {
      title: "Faster Decision Making",
      description:
        "Data-driven insights allow for quicker, more confident decision-making, reducing delays and missed opportunities.",
      iconKey: "check-square" as BusinessAdviceWhyIconKey,
    },
    {
      title: "Long-Term Stability",
      description:
        "Strategic planning supports long-term stability and growth, ensuring your business thrives for years.",
      iconKey: "shield" as BusinessAdviceWhyIconKey,
    },
    {
      title: "Clarity During Change",
      description:
        "When faced with restructuring or pivoting, expert advice helps you navigate complex decisions with confidence.",
      iconKey: "activity" as BusinessAdviceWhyIconKey,
    },
  ],
};

