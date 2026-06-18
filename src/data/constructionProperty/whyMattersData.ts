import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type ConstructionPropertyWhyIconKey = BookkeepingWhyMattersIconKey;

export const CONSTRUCTION_PROPERTY_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Expert Financial Control Matters",
  description:
    "Financial errors in construction can dismantle projects and ruin reputations. Strict CIS rules, complex project costing, and high insolvency rates demand expert financial control. We provide the clarity needed to build with confidence and protect your margins from start to finish.",
  items: [
    {
      title: "Costly Financial Errors",
      description:
        "Financial errors in construction can dismantle projects and ruin reputations.",
      iconKey: "alert-triangle" as ConstructionPropertyWhyIconKey,
    },
    {
      title: "Strict CIS Rules",
      description: "Strict CIS rules demand expert financial control.",
      iconKey: "clipboard-check" as ConstructionPropertyWhyIconKey,
    },
    {
      title: "Complex Project Costing",
      description: "Complex project costing requires clear visibility and control.",
      iconKey: "chart-line" as ConstructionPropertyWhyIconKey,
    },
    {
      title: "High Insolvency Rates",
      description: "High insolvency rates in the sector demand proactive planning.",
      iconKey: "alert-octagon" as ConstructionPropertyWhyIconKey,
    },
    {
      title: "Protect Your Margins",
      description:
        "We provide the clarity needed to build with confidence and protect your margins from start to finish.",
      iconKey: "shield" as ConstructionPropertyWhyIconKey,
    },
  ],
};
