import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type InheritanceWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const INHERITANCE_TAX_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Early Estate and Retirement Planning",
  description:
    "Inheritance Tax and estate planning are complex but essential for preserving family wealth. By planning early, you ensure your assets are protected and passed on efficiently, avoiding unnecessary tax burdens and legal challenges.",
  items: [
    {
      title: "Reduce Inheritance Tax",
      description:
        "Inheritance Tax can be as high as 40%, significantly reducing your estate. Proper planning can help reduce this burden.",
      iconKey: "alert-triangle" as InheritanceWhyMattersIconKey,
    },
    {
      title: "Protect Family Wealth",
      description:
        "Early planning helps preserve your wealth and ensures it is transferred efficiently to your heirs.",
      iconKey: "shield" as InheritanceWhyMattersIconKey,
    },
    {
      title: "Avoid Late Planning",
      description:
        "Planning too late limits your options. Taking action early ensures you have the flexibility to make the best decisions for your family.",
      iconKey: "clock" as InheritanceWhyMattersIconKey,
    },
    {
      title: "Minimise Tax Exposure",
      description:
        "By structuring your estate correctly, you can minimise your tax exposure and pass on more of your wealth.",
      iconKey: "circle-dollar" as InheritanceWhyMattersIconKey,
    },
    {
      title: "Navigate Complex Rules",
      description:
        "Inheritance Tax and estate planning rules are complex. We guide you through them, ensuring you understand your options and the implications of your decisions.",
      iconKey: "scale" as InheritanceWhyMattersIconKey,
    },
    {
      title: "Peace of Mind",
      description:
        "Effective planning reduces uncertainty, ensuring that your family is taken care of when the time comes.",
      iconKey: "leaf" as InheritanceWhyMattersIconKey,
    },
  ],
};

