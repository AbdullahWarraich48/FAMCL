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
      "To use the margin scheme, you must have invoices for each item that meet the VAT margin scheme requirements. The margin scheme invoice requirements are not the same as the general VAT invoice requirements. You must have an invoice from the seller when you bought the item, and a copy of the invoice you gave to the buyer when you sold the item.",
    cards: [
      {
        id: "buying",
        title: "Buying",
        intro:
          "When you buy something you plan to sell under a margin scheme, you must get an invoice from the seller that includes:",
        bullets: [
          "Date",
          "Seller's name and address",
          "Buyer name and address, or that of the business",
          "The item's unique stock book number (if bought from another VAT-registered business)",
          "Invoice number (unless you made out the purchase invoice yourself)",
          "Item description",
          "Total price — you must not add any other costs to this price",
          "If bought from another VAT-registered business, any of the following: 'margin scheme - second-hand goods', 'margin scheme - works of art' or 'margin scheme - collectors' items and antiques'",
        ],
      },
      {
        id: "selling",
        title: "Selling",
        intro:
          "When you sell something you plan to account for under a VAT margin scheme, you must give the buyer an invoice that includes:",
        bullets: [
          "Date",
          "Seller's name, address and VAT registration number",
          "The buyer's name and address, or that of their business",
          "The item's unique stock book number",
          "Invoice number",
          "Item description",
          "Total price — you must not show VAT separately",
          "Any of the following: 'margin scheme - second-hand goods', 'margin scheme - works of art' or 'margin scheme - collectors' items and antiques'",
        ],
      },
    ],
    importantNote: {
      message:
        "Alternatives: If you are unable to meet the strict record-keeping requirements, you cannot use the scheme and must account for VAT on the full selling price.",
    },
  };
