import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type ConstructionPropertySolutionIconKey = BookkeepingSolutionIconKey;

export const CONSTRUCTION_PROPERTY_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "We take a structured approach to managing the unique financial challenges of the construction and property sectors. Our service ensures compliance, improves profitability, and reduces risk.",
  steps: [
    {
      number: "01",
      title: "Manage CIS Registration & Compliance",
      iconKey: "hard-hat" as ConstructionPropertySolutionIconKey,
    },
    {
      number: "02",
      title: "Implement Project-Based Accounting",
      iconKey: "calculator" as ConstructionPropertySolutionIconKey,
    },
    {
      number: "03",
      title: "Advise on VAT Implications for Property",
      iconKey: "receipt-tax" as ConstructionPropertySolutionIconKey,
    },
    {
      number: "04",
      title: "Ensure Compliance with Industry Regulations",
      iconKey: "badge-check" as ConstructionPropertySolutionIconKey,
    },
    {
      number: "05",
      title: "Provide Financial Data for Bids & Financing",
      iconKey: "target" as ConstructionPropertySolutionIconKey,
    },
  ],
} as const;

