export type VatMarginFrameworkData = {
  headingId: string;
  title: string;
  subtitle: string;
  checklistItems: readonly string[];
};

export const VAT_MARGIN_FRAMEWORK_DATA: VatMarginFrameworkData = {
  headingId: "vat-margin-framework-heading",
  title: "Framework",
  subtitle: "General record-keeping requirements, records, etc.",
  checklistItems: [
    "Keep standard VAT records.",
    "Maintain a stock book for each tier.",
    "Record the purchase price and sale price.",
  ],
};
