import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type LandlordsFamiliesSolutionIconKey = BookkeepingSolutionIconKey;

export const LANDLORDS_FAMILIES_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solutions & Roadmap",
  heading: "How We Support Landlords & Families",
  description:
    "Our structured approach aligns property ownership, tax planning, and family financial decisions for long-term clarity.",
  steps: [
    {
      number: "01",
      title: "Review property ownership and income structure",
      iconKey: "search" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "02",
      title: "Identify tax exposure and relief eligibility",
      iconKey: "receipt-tax" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "03",
      title: "Align reporting with statutory deadlines",
      iconKey: "calendar-clock" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "04",
      title: "Plan disposals or transfers in advance",
      iconKey: "boxes" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "05",
      title: "Review arrangements as family circumstances change",
      iconKey: "bar-chart" as LandlordsFamiliesSolutionIconKey,
    },
  ],
};

export const LANDLORDS_FAMILIES_TRUST_MATRIX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants Trust Matrix",
  description:
    "Accuracy enforced. Compliance mandatory. Judgement applied. Process controlled. Accountability retained.",
  steps: [
    {
      number: "01",
      title: "Accuracy enforced",
      iconKey: "document-check" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "02",
      title: "Compliance mandatory",
      iconKey: "badge-check" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "03",
      title: "Judgement applied",
      iconKey: "calculator" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "04",
      title: "Process controlled",
      iconKey: "cogs" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "05",
      title: "Accountability retained",
      iconKey: "target" as LandlordsFamiliesSolutionIconKey,
    },
  ],
};
