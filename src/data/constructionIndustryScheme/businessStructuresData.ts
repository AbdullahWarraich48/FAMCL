export type CisStructureCardData = {
  id: string;
  title: string;
  iconKey: "soleTrader" | "limitedCompany";
  intro: string;
  primaryBullets: readonly string[];
  midLabel?: string;
  secondaryBullets?: readonly string[];
  closing?: string;
  tip?: string;
};

export const CIS_BUSINESS_STRUCTURES_HEADING =
  "CIS for Different Business Structures";

export const CIS_BUSINESS_STRUCTURES_CARDS: readonly CisStructureCardData[] = [
  {
    id: "sole-trader",
    title: "Sole Trader",
    iconKey: "soleTrader",
    intro: "If you are a subcontractor operating as a sole trader:",
    primaryBullets: [
      "the main contractor will deduct 20% from your invoices under CIS",
      "this deduction can be reclaimed when you file your self-employment tax return",
      "refunds are only processed after the end of the tax year",
    ],
    midLabel: "CIS suffered is first adjusted against:",
    secondaryBullets: ["tax liability", "National Insurance contributions"],
    closing:
      "Any remaining balance is refunded back to the subcontractor.",
  },
  {
    id: "limited-company",
    title: "Limited Company",
    iconKey: "limitedCompany",
    intro: "If operating through a limited company:",
    primaryBullets: [
      "CIS suffered is claimed back through monthly payroll",
      "amounts are offset against PAYE and CIS deductions",
    ],
    tip: "This helps reduce pressure on business cashflow.",
  },
] as const;
