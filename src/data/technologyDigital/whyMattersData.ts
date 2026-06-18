import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type TechnologyDigitalWhyIconKey = BookkeepingWhyMattersIconKey;

export const TECHNOLOGY_DIGITAL_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Financial Agility Matters in Tech",
  description:
    "In the fast-paced tech world, financial drag can be fatal. Unclaimed R&D relief, poorly structured share options, and messy books can deter investors and hinder growth. We provide the agile, compliant financial foundation your business needs to innovate and scale without friction.",
  items: [
    {
      title: "Financial Drag",
      description: "In the fast-paced tech world, financial drag can be fatal.",
      iconKey: "alert-triangle" as TechnologyDigitalWhyIconKey,
    },
    {
      title: "Unclaimed R&D Relief",
      description: "Unclaimed R&D relief can hinder growth.",
      iconKey: "flask" as TechnologyDigitalWhyIconKey,
    },
    {
      title: "Share Option Structure",
      description: "Poorly structured share options can deter investors.",
      iconKey: "clipboard-check" as TechnologyDigitalWhyIconKey,
    },
    {
      title: "Messy Books",
      description: "Messy books can deter investors and hinder growth.",
      iconKey: "activity" as TechnologyDigitalWhyIconKey,
    },
    {
      title: "Innovate & Scale",
      description:
        "We provide the agile, compliant financial foundation your business needs to innovate and scale without friction.",
      iconKey: "trend-up" as TechnologyDigitalWhyIconKey,
    },
  ],
};
