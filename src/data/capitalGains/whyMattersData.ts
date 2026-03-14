import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type CapitalGainsWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const CAPITAL_GAINS_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Capital Gains & Property Tax Planning",
  description:
    "Property tax rules are complex, and missing deadlines or overlooking reliefs can result in significant financial consequences. Professional advice ensures your tax position is managed efficiently, protecting your proceeds and avoiding unnecessary costs.",
  items: [
    {
      title: "Complex Rules Simplified",
      description:
        "Property tax rules are strict and complex. We simplify them for you and ensure compliance.",
      iconKey: "alert-triangle" as CapitalGainsWhyMattersIconKey,
    },
    {
      title: "Maximise Reliefs",
      description:
        "Overlooking reliefs leads to overpaying taxes. We ensure all applicable reliefs are applied to reduce your CGT liability.",
      iconKey: "check-square" as CapitalGainsWhyMattersIconKey,
    },
    {
      title: "Tax Efficiency",
      description:
        "Correct planning and proactive tax management help minimise your tax burden and protect your profits.",
      iconKey: "trend-up" as CapitalGainsWhyMattersIconKey,
    },
    {
      title: "Future-Proof Your Sales",
      description:
        "Strategic advice ensures you are well-prepared for future property sales and tax responsibilities.",
      iconKey: "activity" as CapitalGainsWhyMattersIconKey,
    },
    {
      title: "Avoid Penalties",
      description:
        "Missing CGT reporting deadlines now carry penalties, which can significantly increase your tax bill. We ensure timely submission to avoid these costs.",
      iconKey: "shield" as CapitalGainsWhyMattersIconKey,
    },
    {
      title: "Cost of Incorrect Planning",
      description:
        "Selling property without professional advice can lead to costly mistakes. We guide you through the process to avoid unexpected tax bills.",
      iconKey: "circle-dollar" as CapitalGainsWhyMattersIconKey,
    },
  ],
};

