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
      "CIS registration (net or gross basis) as contractor, subcontractor, or both",
      "subcontractor verification with HMRC",
      "payment management ensuring correct CIS deductions",
      "deduction statements (CIS pay slips and year-end statements)",
      "bookkeeping of CIS, payroll, and accounting records",
      "submission of monthly CIS returns to HMRC",
    ],
  },
  {
    id: "subcontractors",
    title: "For Subcontractors",
    iconKey: "subcontractors",
    items: [
      "employment status assessment and HMRC registration",
      "verification with HMRC",
      "record keeping and organisation of business records",
      "preparation of self-employment tax returns",
    ],
  },
] as const;
