export type CisOurServiceColumnIconKey = "contractors" | "subcontractors";

export type CisOurServiceColumn = {
  id: string;
  title: string;
  iconKey: CisOurServiceColumnIconKey;
  items: readonly string[];
};

export const CIS_OUR_SERVICES_HEADING = "Our Services";

export const CIS_OUR_SERVICES_COLUMNS: readonly CisOurServiceColumn[] = [
  {
    id: "contractors",
    title: "For Contractors",
    iconKey: "contractors",
    items: [
      "HMRC enquiries for CIS suffered and deductions",
      "CIS registration in HMRC on net or gross basis as contractor, subcontractor, or both at the same time",
      "Subcontractor verification: verify your subcontractors with HMRC",
      "Payment management: ensure subcontractors are paid correctly after CIS deductions as per criteria",
      "Deduction statements: supply paperwork, payment and deduction statements or CIS pay slips and year-end statements to subcontractors",
      "Record keeping: bookkeeping of all CIS and payroll records with other accounting records",
      "Submissions: submission of monthly CIS returns to HMRC",
    ],
  },
  {
    id: "subcontractors",
    title: "For Subcontractors",
    iconKey: "subcontractors",
    items: [
      "Employment status: register with HMRC after determining status as a subcontractor or employee",
      "Verification: verify with HMRC on behalf of the contractor",
      "Record keeping: manage and organise the business records",
      "Tax return: prepare the end-of-year self-employment tax returns",
    ],
  },
] as const;
