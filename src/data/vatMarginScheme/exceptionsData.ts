export type ContentInsightVariant = "info" | "warning" | "success";

export type ExceptionCardData = {
  title: string;
  bullets: readonly string[];
  /** First card: bullets inside a light blue panel */
  listHighlight?: boolean;
  alert?: {
    variant: ContentInsightVariant;
    message: string;
  };
};

export type VatMarginExceptionsData = {
  headingId: string;
  title: string;
  cards: readonly ExceptionCardData[];
};

export const VAT_MARGIN_EXCEPTIONS_DATA: VatMarginExceptionsData = {
  headingId: "vat-margin-exceptions-heading",
  title: "Exceptions",
  cards: [
    {
      title: "Buying from an Auction",
      listHighlight: true,
      bullets: [
        "You must check if the vehicle is eligible for resale under the scheme.",
        "Eligible vehicles are listed in the auction catalogue.",
        "You need a bill for the purchase showing the hammer price, and any buyer's premium inclusive of VAT.",
      ],
    },
    {
      title: "Purchase Price Rules",
      bullets: [
        "The purchase price includes the hammer price and related auction charges that form part of your cost.",
        "Include auction service charges where they are part of what you pay to acquire the vehicle.",
        "Use the total purchase cost that qualifies under margin scheme rules when you calculate the margin.",
      ],
      alert: {
        variant: "info",
        message: "In short, confirm details with the auctioneer.",
      },
    },
    {
      title: "Buying from Online Auction Sites",
      bullets: [
        "Confirm whether you are buying from a business and that the sale can qualify under the scheme.",
        "Check that the seller meets the conditions for margin scheme supplies where applicable.",
        "Establish how VAT is charged on the invoice before you treat the purchase as a margin scheme purchase.",
      ],
      alert: {
        variant: "warning",
        message:
          "If the VAT is charged separately, it cannot be claimed back under the Margin Scheme.",
      },
    },
    {
      title: "Buying from Insurance Companies or Finance Houses",
      bullets: [
        "In many cases VAT will not be charged on the disposal in the way it would on a normal taxable sale.",
        "Confirm the VAT status of the transaction and what documentation you receive.",
        "Ensure your purchase records support margin scheme treatment when you resell.",
      ],
      alert: {
        variant: "success",
        message:
          "In this case, the item can be sold under the Margin Scheme.",
      },
    },
  ],
};
