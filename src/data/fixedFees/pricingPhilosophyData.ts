type PricingPhilosophyData = {
  badgeLabel: string;
  title: string;
  paragraphs: string[];
  mainImage: { src: string; alt: string };
  secondaryImage: { src: string; alt: string };
};

export const FIXED_FEES_PRICING_PHILOSOPHY_DATA: PricingPhilosophyData = {
  badgeLabel: "Our Pricing Philosophy",
  title: "Our Pricing Philosophy",
  paragraphs: [
    "Fees are agreed in advance and linked to scope and responsibility, not outcomes. This approach exists because uncertainty in cost creates pressure to rush decisions. Rushed decisions lead to errors. Where scope changes, it is discussed before work continues. There are no retrospective surprises.",
  ],
  mainImage: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern office buildings",
  },
  secondaryImage: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Team working together in an office",
  },
};
