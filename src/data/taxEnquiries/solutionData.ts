import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type TaxEnquiriesSolutionIconKey = BookkeepingSolutionIconKey;

export const TAX_ENQUIRIES_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Support You",
  description:
    "A structured approach to managing HMRC enquiries from first contact through to resolution.",
  steps: [
    {
      number: "01",
      title: "Review the enquiry notice",
      iconKey: "document-check" as TaxEnquiriesSolutionIconKey,
    },
    {
      number: "02",
      title: "Assess records and submissions",
      iconKey: "search" as TaxEnquiriesSolutionIconKey,
    },
    {
      number: "03",
      title: "Correspond with HMRC on your behalf",
      iconKey: "message" as TaxEnquiriesSolutionIconKey,
    },
    {
      number: "04",
      title: "Prepare and submit responses",
      iconKey: "receipt-tax" as TaxEnquiriesSolutionIconKey,
    },
    {
      number: "05",
      title: "Advise on outcomes and next steps",
      iconKey: "calculator" as TaxEnquiriesSolutionIconKey,
    },
  ],
};
