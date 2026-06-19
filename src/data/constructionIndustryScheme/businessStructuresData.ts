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
    intro:
      "If you are a sole trader subcontractor, the main contractor will deduct 20% from your invoices under CIS.",
    primaryBullets: [
      "You can reclaim this CIS deduction when you file your self-employment tax return at the end of the year",
      "CIS refund can only be reclaimed after the tax year ends at the time of submission of the tax return",
    ],
    midLabel: "CIS suffered is adjusted first against:",
    secondaryBullets: [
      "tax liability",
      "National Insurance contributions",
    ],
    closing:
      "Any remaining balance is refunded back to the subcontractor.",
  },
  {
    id: "limited-company",
    title: "Limited Company",
    iconKey: "limitedCompany",
    intro: "Under this structure:",
    primaryBullets: [
      "Any CIS suffered will be claimed back through the monthly payroll",
      "Amounts are netted off against PAYE and CIS deductions of the business subcontractors",
    ],
    tip: "There is no undue stress on business cashflows.",
  },
] as const;
