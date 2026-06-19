export type ApplicableGoodsItem = {
  title: string;
  description: string;
};

export type ApplicableGoodsData = {
  headingId: string;
  title: string;
  intro?: string;
  items: readonly ApplicableGoodsItem[];
};

export const VAT_MARGIN_APPLICABLE_GOODS_DATA: ApplicableGoodsData = {
  headingId: "vat-margin-applicable-goods-heading",
  title: "Applicable Goods",
  intro:
    "The VAT margin scheme is also applicable on second-hand sales of:",
  items: [
    {
      title: "Second-hand vehicles",
      description: "Cars and other motor vehicles sold second-hand",
    },
    {
      title: "Works of art",
      description: "Paintings, sculptures, and artistic items",
    },
    {
      title: "Collectors' items",
      description: "Rare and collectible goods",
    },
    {
      title: "Antiques",
      description: "Items over 100 years old",
    },
    {
      title: "Mobile phones, computers and IT gadgets",
      description: "Second-hand mobile devices and technology equipment",
    },
  ],
};
