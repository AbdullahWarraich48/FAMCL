import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type CapitalGainsWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const CAPITAL_GAINS_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why CGT Planning Matters",
  description:
    "Property tax rules are complex and strict. Missed deadlines lead to automatic penalties. Overlooking reliefs increases tax unnecessarily. Selling property without advice can be costly. Correct planning protects your proceeds.",
  items: [
    {
      title: "Complex & Strict Rules",
      description: "Property tax rules are complex and strict.",
      iconKey: "clipboard-check" as CapitalGainsWhyMattersIconKey,
    },
    {
      title: "Automatic Penalties",
      description: "Missed deadlines lead to automatic penalties.",
      iconKey: "alert-triangle" as CapitalGainsWhyMattersIconKey,
    },
    {
      title: "Missed Reliefs",
      description: "Overlooking reliefs increases tax unnecessarily.",
      iconKey: "circle-dollar" as CapitalGainsWhyMattersIconKey,
    },
    {
      title: "Cost of No Advice",
      description: "Selling property without advice can be costly.",
      iconKey: "scale" as CapitalGainsWhyMattersIconKey,
    },
    {
      title: "Protect Your Proceeds",
      description: "Correct planning protects your proceeds.",
      iconKey: "shield" as CapitalGainsWhyMattersIconKey,
    },
  ],
};
