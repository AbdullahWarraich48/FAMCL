import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type ContractorsFreelancersSolutionIconKey = BookkeepingSolutionIconKey;

export const CONTRACTORS_FREELANCERS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solutions & Roadmap",
  heading: "How We Support Contractors",
  description:
    "Our approach ensures contracting arrangements remain compliant, defensible, and adaptable to regulatory change.",
  steps: [
    {
      number: "01",
      title: "Analyse working arrangements and contractual reality",
      iconKey: "document-check" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "02",
      title: "Assess tax exposure under current rules",
      iconKey: "receipt-tax" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "03",
      title: "Establish compliant structure",
      iconKey: "boxes" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "04",
      title: "Monitor regulatory changes affecting status",
      iconKey: "clock" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "05",
      title: "Adjust planning as circumstances evolve",
      iconKey: "bar-chart" as ContractorsFreelancersSolutionIconKey,
    },
  ],
};

export const CONTRACTORS_FREELANCERS_TRUST_MATRIX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants Trust Matrix",
  description:
    "Accuracy enforced. Compliance mandatory. Judgement applied. Process controlled. Accountability retained.",
  steps: [
    {
      number: "01",
      title: "Accuracy enforced",
      iconKey: "document-check" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "02",
      title: "Compliance mandatory",
      iconKey: "badge-check" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "03",
      title: "Judgement applied",
      iconKey: "calculator" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "04",
      title: "Process controlled",
      iconKey: "cogs" as ContractorsFreelancersSolutionIconKey,
    },
    {
      number: "05",
      title: "Accountability retained",
      iconKey: "target" as ContractorsFreelancersSolutionIconKey,
    },
  ],
};
