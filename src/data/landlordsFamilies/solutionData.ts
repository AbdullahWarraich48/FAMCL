import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type LandlordsFamiliesSolutionIconKey = BookkeepingSolutionIconKey;

export const LANDLORDS_FAMILIES_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Support Landlords & Families",
  description:
    "Our structured approach focuses on aligning property ownership, tax planning, and family financial decisions so that obligations stay controlled and opportunities are not missed.",
  steps: [
    {
      number: "01",
      title: "Review Property Ownership Structure",
      iconKey: "search" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "02",
      title: "Identify Tax Exposure & Reliefs",
      iconKey: "receipt-tax" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "03",
      title: "Align Reporting with Deadlines",
      iconKey: "clock" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "04",
      title: "Plan Disposals or Transfers in Advance",
      iconKey: "boxes" as LandlordsFamiliesSolutionIconKey,
    },
    {
      number: "05",
      title: "Review Arrangements as Circumstances Change",
      iconKey: "bar-chart" as LandlordsFamiliesSolutionIconKey,
    },
  ],
};

