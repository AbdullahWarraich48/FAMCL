import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type InheritanceWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const INHERITANCE_TAX_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Estate Planning Matters",
  description:
    "Inheritance Tax can significantly reduce estates. Planning late limits available options. Rules are complex and often misunderstood. Early action protects family wealth. Clarity avoids difficult situations later.",
  items: [
    {
      title: "Reduced Estates",
      description: "Inheritance Tax can significantly reduce estates.",
      iconKey: "alert-triangle" as InheritanceWhyMattersIconKey,
    },
    {
      title: "Late Planning Limits Options",
      description: "Planning late limits available options.",
      iconKey: "clock" as InheritanceWhyMattersIconKey,
    },
    {
      title: "Complex Rules",
      description: "Rules are complex and often misunderstood.",
      iconKey: "scale" as InheritanceWhyMattersIconKey,
    },
    {
      title: "Protect Family Wealth",
      description: "Early action protects family wealth.",
      iconKey: "shield" as InheritanceWhyMattersIconKey,
    },
    {
      title: "Avoid Difficult Situations",
      description: "Clarity avoids difficult situations later.",
      iconKey: "leaf" as InheritanceWhyMattersIconKey,
    },
  ],
};
