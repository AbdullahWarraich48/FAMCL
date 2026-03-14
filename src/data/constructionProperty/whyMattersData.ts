import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type ConstructionPropertyWhyIconKey = BookkeepingWhyMattersIconKey;

export const CONSTRUCTION_PROPERTY_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Industry-Specific Accounting &\nTax Services",
  description:
    "The construction and property sectors are rife with complex regulations and high financial risk. Without expert financial management, projects can fail, reputations can be damaged, and compliance issues can arise. Proper financial control ensures projects are completed efficiently and profitably.",
  items: [
    {
      title: "Avoid Financial Errors",
      description:
        "Mistakes in financial management can derail projects, increase costs, and damage reputations. We ensure that your financials are in order to avoid these risks.",
      iconKey: "alert-triangle" as ConstructionPropertyWhyIconKey,
    },
    {
      title: "Late Payment Issues",
      description:
        "Late payments are common in the construction sector and can harm cash flow. We help manage your finances to reduce delays and maintain healthy cash flow.",
      iconKey: "clock" as ConstructionPropertyWhyIconKey,
    },
    {
      title: "Strict CIS Regulations",
      description:
        "CIS compliance is critical to avoid penalties. We ensure your registration, verification, and reporting are handled accurately.",
      iconKey: "clipboard-check" as ConstructionPropertyWhyIconKey,
    },
    {
      title: "High Risk of Insolvency",
      description:
        "The construction industry faces high insolvency rates. Proper financial planning reduces the risk of financial failure.",
      iconKey: "alert-octagon" as ConstructionPropertyWhyIconKey,
    },
    {
      title: "Maintain Legal Compliance",
      description:
        "Ensuring your business complies with industry regulations is essential to avoid legal issues and financial losses.",
      iconKey: "scale" as ConstructionPropertyWhyIconKey,
    },
    {
      title: "Clear Profitability Tracking",
      description:
        "Project costs and margins need visibility. We use project-based accounting to help you track profitability and make informed financial decisions.",
      iconKey: "chart-line" as ConstructionPropertyWhyIconKey,
    },
  ],
} as const;

