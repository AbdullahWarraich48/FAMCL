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
        "You must check that the vehicle is eligible for onward sale under the scheme. This is available in the auctioneer's sales catalogue.",
        "If the auctioneer charges VAT separately on the hammer price of the vehicle, the margin scheme will not be applicable for the onward sale.",
      ],
    },
    {
      title: "Work Out the Purchase Price",
      bullets: [
        "The purchase price will be the hammer price of the vehicle plus charges for services. The invoice from the auctioneer will itemise, for each lot, the hammer price of the goods and any charges for services (for example, buyer's premium). These charges will not be shown with VAT separately.",
        "This will be the purchase price for the purposes of the margin scheme or global accounting, and this amount is to be shown on the stock book. It should be clearly identified on the invoice from the auctioneer.",
        "If the auctioneer bills for any other services and charges VAT on them separately, VAT can be reclaimed under the normal rules. Those charges will not be added to the margin scheme purchase price.",
      ],
      alert: {
        variant: "info",
        message:
          "If there is any doubt about the purchase price for a vehicle bought at auction, check with the auctioneer.",
      },
    },
    {
      title: "Buying from an Online Auction Site",
      bullets: [
        "You must find out if the seller is VAT registered.",
        "Confirm whether the vehicle is eligible to be sold under the margin scheme.",
        "If the seller charges VAT under standard rules, sales of the same cars will also be on the standard rate.",
      ],
    },
    {
      title: "Buying from an Insurance Company or Finance House",
      bullets: [
        "If you buy an eligible vehicle as a result of an insurance claim, or from a finance house which has repossessed it, VAT will not be charged if both the vehicle is sold in the same state and it was obtained by the insurance company or finance house from a person who would not have charged VAT on its supply (for example, a private individual).",
        "The vehicle can be resold using the margin scheme if it is eligible.",
      ],
      alert: {
        variant: "success",
        message:
          "In this case, the item can be sold under the margin scheme.",
      },
    },
  ],
};
