import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type ContractorsFreelancersSolutionIconKey = BookkeepingSolutionIconKey;

export const CONTRACTORS_FREELANCERS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Support Contractors",
  description:
    "Our approach focuses on ensuring that your contracting arrangements remain compliant, defensible, and adaptable to regulatory change.",
  steps: [
    {
      number: "01",
      title: "Analyse Working Arrangements",
      iconKey: "document-check" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "02",
      title: "Assess Tax Exposure",
      iconKey: "receipt-tax" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "03",
      title: "Establish a Compliant Structure",
      iconKey: "boxes" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "04",
      title: "Monitor Regulatory Changes",
      iconKey: "clock" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "05",
      title: "Adjust Planning as Circumstances Evolve",
      iconKey: "bar-chart" as ContractorsFreelancersSolutionIconKey,
    },
  ],
};

