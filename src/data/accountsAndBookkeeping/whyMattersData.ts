import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

export const ACCOUNTS_AND_BOOKKEEPING_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "The Value of Clear Records",
  description:
    "Poor records slowly damage a business without warning. When numbers are unclear, decisions are delayed. Delayed decisions cost money. Clear records reduce risk, stress, and wasted time. They also protect you during HMRC reviews. Most importantly, they give you control.",
  items: [
    {
      title: "Slow Hidden Damage",
      description:
        "Poor records slowly damage a business without warning.",
      iconKey: "alert-triangle" as BookkeepingWhyMattersIconKey,
    },
    {
      title: "Delayed Costly Decisions",
      description:
        "When numbers are unclear, decisions are delayed. Delayed decisions cost money.",
      iconKey: "clock" as BookkeepingWhyMattersIconKey,
    },
    {
      title: "Less Risk & Stress",
      description:
        "Clear records reduce risk, stress, and wasted time.",
      iconKey: "activity" as BookkeepingWhyMattersIconKey,
    },
    {
      title: "HMRC Protection",
      description: "They also protect you during HMRC reviews.",
      iconKey: "shield" as BookkeepingWhyMattersIconKey,
    },
    {
      title: "Greater Control",
      description: "Most importantly, they give you control.",
      iconKey: "chart-line" as BookkeepingWhyMattersIconKey,
    },
  ],
};
