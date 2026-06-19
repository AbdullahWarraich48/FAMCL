export type HowToStartMarginSchemeData = {
  headingId: string;
  title: string;
  intro: string;
  checklistItems: readonly string[];
  infoNote: string;
};

export const VAT_MARGIN_HOW_TO_START_DATA: HowToStartMarginSchemeData = {
  headingId: "vat-margin-how-to-start-heading",
  title: "How to Start the Margin Scheme",
  intro:
    "A business can start using a margin scheme at any time by keeping the correct records and then reporting it on the VAT return.",
  checklistItems: [
    "Keep the correct records for each margin scheme item",
    "Report margin scheme sales on your VAT return",
    "Apply the scheme only where goods qualify under HMRC rules",
  ],
  infoNote: "Businesses do not have to register for the margin scheme.",
};
