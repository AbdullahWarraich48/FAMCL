export type ApplicableGoodsItem = {
  title: string;
  description: string;
};

export type ApplicableGoodsData = {
  headingId: string;
  title: string;
  items: readonly ApplicableGoodsItem[];
};

export const VAT_MARGIN_APPLICABLE_GOODS_DATA: ApplicableGoodsData = {
  headingId: "vat-margin-applicable-goods-heading",
  title: "Applicable Goods",
  items: [
    {
      title: "Second-hand Vehicles",
      description: "Cars and other motor vehicles",
    },
    {
      title: "Works of Art",
      description: "Paintings, sculptures, and artistic items",
    },
    {
      title: "Collectors' Items",
      description: "Rare and collectible goods",
    },
    {
      title: "Antiques",
      description: "Items over 100 years old",
    },
    {
      title: "Mobile Phones",
      description: "Second-hand mobile devices",
    },
    {
      title: "IT Equipment",
      description: "Computers and technology items",
    },
  ],
};
