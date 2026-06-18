import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type ConstructionPropertySolutionIconKey = BookkeepingSolutionIconKey;

export const CONSTRUCTION_PROPERTY_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "We take a structured approach to the unique financial challenges of the construction and property sectors.",
  steps: [
    {
      number: "01",
      title: "Manage CIS registration, verification, and returns accurately",
      iconKey: "hard-hat" as ConstructionPropertySolutionIconKey,
    },
    {
      number: "02",
      title:
        "Implement project-based accounting for clear cost and profit tracking",
      iconKey: "calculator" as ConstructionPropertySolutionIconKey,
    },
    {
      number: "03",
      title:
        "Advise on VAT implications for property, including zero-rating and reverse charges",
      iconKey: "receipt-tax" as ConstructionPropertySolutionIconKey,
    },
    {
      number: "04",
      title: "Ensure full compliance with industry-specific regulations",
      iconKey: "badge-check" as ConstructionPropertySolutionIconKey,
    },
    {
      number: "05",
      title: "Provide financial data to support project bids and financing",
      iconKey: "target" as ConstructionPropertySolutionIconKey,
    },
  ],
};
