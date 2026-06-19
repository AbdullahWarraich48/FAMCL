export type StockBookRow = {
  field: string;
  purchase: string;
  sales: string;
};

export type VatMarginFrameworkData = {
  headingId: string;
  title: string;
  introParagraphs: readonly string[];
  checklistItems: readonly string[];
  stockBookTitle: string;
  stockBookIntro: string;
  stockBookRows: readonly StockBookRow[];
  recordsNote: string;
};

export const VAT_MARGIN_FRAMEWORK_DATA: VatMarginFrameworkData = {
  headingId: "vat-margin-framework-heading",
  title: "Framework",
  introParagraphs: [
    "You must keep the usual VAT records when using the margin scheme.",
    "You must also keep a stock book that tracks each item sold under the margin scheme individually, and copies of purchase and sales invoices for all items.",
  ],
  checklistItems: [
    "Keep standard VAT records",
    "Maintain a stock book for each item sold under the margin scheme",
    "Keep copies of purchase and sales invoices for all items",
  ],
  stockBookTitle: "Stock Book",
  stockBookIntro:
    "Certain information must be recorded for each item bought and sold where the margin scheme is to be applied.",
  stockBookRows: [
    {
      field: "Stock number in numerical sequence",
      purchase: "Required",
      sales: "—",
    },
    {
      field: "Date of purchase / Date of sale",
      purchase: "Date of purchase",
      sales: "Date of sale",
    },
    {
      field: "Invoice number",
      purchase: "Purchase invoice number",
      sales: "Sales invoice number",
    },
    {
      field: "Price",
      purchase: "Purchase price",
      sales: "Selling price",
    },
    {
      field: "Party name",
      purchase: "Name of seller",
      sales: "Name of buyer",
    },
    {
      field: "Description of the item",
      purchase: "Required",
      sales: "—",
    },
    {
      field: "Margin on sale (sale price less purchase price)",
      purchase: "—",
      sales: "Required",
    },
    {
      field: "VAT due (16.67% or one-sixth)",
      purchase: "—",
      sales: "Required",
    },
  ],
  recordsNote:
    "VAT records should be kept for 6 years. If stock was bought more than 6 years ago but sold recently, all records beyond that period should be retained for 6 years from the time of sale under the margin scheme.",
};
