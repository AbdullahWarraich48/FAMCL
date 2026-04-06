export type InvoiceRequirementCardData = {
  id: string;
  title: string;
  intro: string;
  bullets: readonly string[];
};

export type InvoiceRequirementsImportantNote = {
  message: string;
};

export type VatMarginInvoiceRequirementsData = {
  headingId: string;
  title: string;
  subtitle: string;
  cards: readonly [InvoiceRequirementCardData, InvoiceRequirementCardData];
  importantNote?: InvoiceRequirementsImportantNote;
};

export const VAT_MARGIN_INVOICE_REQUIREMENTS_DATA: VatMarginInvoiceRequirementsData =
  {
    headingId: "vat-margin-invoice-requirements-heading",
    title: "Invoice Requirements",
    subtitle:
      "To use the margin scheme, invoices must meet specific rules.",
    cards: [
      {
        id: "buying",
        title: "Buying",
        intro: "Invoices must include:",
        bullets: [
          "Date",
          "Seller name and address",
          "Buyer details",
          "Stock number (if VAT-registered seller)",
          "Invoice number",
          "Item description",
          "Total price (no VAT shown separately)",
          "Margin scheme wording where applicable",
        ],
      },
      {
        id: "selling",
        title: "Selling",
        intro: "Invoices must include:",
        bullets: [
          "Date",
          "Seller name and VAT number",
          "Buyer details",
          "Stock number",
          "Invoice number",
          "Item description",
          "Total price (VAT not shown separately)",
          "Margin scheme wording",
        ],
      },
    ],
    importantNote: {
      message:
        "Invoice layouts vary by sector. If you are unsure whether your purchase or sales invoices meet HMRC’s margin scheme rules, we can review your documents and stock records before you submit your VAT Return.",
    },
  };
