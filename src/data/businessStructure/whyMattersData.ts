import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type BusinessStructureWhyIconKey = BookkeepingWhyMattersIconKey;

export const BUSINESS_STRUCTURE_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Structure Shapes Your Future",
  description:
    "The right business structure is critical. It affects your personal liability, how much tax you pay, and your ability to raise investment. Getting it wrong can lead to unnecessary costs, administrative burdens, and legal risks. A well-planned structure provides a solid foundation for sustainable growth.",
  items: [
    {
      title: "A Critical Decision",
      description: "The right business structure is critical.",
      iconKey: "alert-triangle" as BusinessStructureWhyIconKey,
    },
    {
      title: "Liability, Tax & Investment",
      description:
        "It affects your personal liability, how much tax you pay, and your ability to raise investment.",
      iconKey: "scale" as BusinessStructureWhyIconKey,
    },
    {
      title: "Cost of Getting It Wrong",
      description:
        "Getting it wrong can lead to unnecessary costs, administrative burdens, and legal risks.",
      iconKey: "circle-dollar" as BusinessStructureWhyIconKey,
    },
    {
      title: "Foundation for Growth",
      description:
        "A well-planned structure provides a solid foundation for sustainable growth.",
      iconKey: "anchor" as BusinessStructureWhyIconKey,
    },
  ],
};
