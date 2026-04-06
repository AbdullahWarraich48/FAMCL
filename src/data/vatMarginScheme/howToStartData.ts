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
    "A business can start using the margin scheme at any time by:",
  checklistItems: [
    "Keeping the correct records for margin scheme supplies",
    "Reporting margin scheme sales correctly on your VAT Return",
    "Applying the scheme only where the goods qualify under HMRC rules",
  ],
  infoNote:
    "There is no requirement to register separately for the scheme.",
};
