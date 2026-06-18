import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type BusinessStructureSolutionIconKey = BookkeepingSolutionIconKey;

export const BUSINESS_STRUCTURE_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our approach guides you from initial assessment through formation to ongoing support as your business evolves.",
  steps: [
    {
      number: "01",
      title:
        "Assess your business model, risk profile, and long-term ambitions",
      iconKey: "search" as BusinessStructureSolutionIconKey,
    },
    {
      number: "02",
      title:
        "Explain the pros and cons of each legal structure in simple terms",
      iconKey: "message" as BusinessStructureSolutionIconKey,
    },
    {
      number: "03",
      title:
        "Model the tax implications of different ownership and profit extraction strategies",
      iconKey: "calculator" as BusinessStructureSolutionIconKey,
    },
    {
      number: "04",
      title: "Assist with company formation and registration with HMRC",
      iconKey: "document-check" as BusinessStructureSolutionIconKey,
    },
    {
      number: "05",
      title: "Provide ongoing support as your business evolves",
      iconKey: "cogs" as BusinessStructureSolutionIconKey,
    },
  ],
};
