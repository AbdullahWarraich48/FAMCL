export type HomeHeroSlide = {
  id: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  /** Original home hero uses the frosted card; additional slides use overlay text. */
  variant?: "card" | "overlay";
  heading: string;
  line1: string;
  line2: string;
  ctaLabel: string;
  ctaHref: string;
};

export const HOME_HERO_SLIDES: HomeHeroSlide[] = [
  {
    id: "accounting-tax",
    variant: "card",
    backgroundImageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop",
    backgroundImageAlt: "Professionals collaborating on financial planning",
    heading: "Local expertise that goes beyond accounting & tax",
    line1:
      "We support you at every stage of your financial journey from compliance to confident financial planning.",
    line2: "",
    ctaLabel: "Book a Free Consultation",
    ctaHref: "#contact",
  },
  {
    id: "clarity-accounting",
    backgroundImageSrc:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1470&q=80",
    backgroundImageAlt: "Accounting and financial planning on a desk",
    heading: "Clarity in Accounting. Confidence in Every Decision.",
    line1:
      "FAM Chartered Accountants provides structured accounting, tax, and advisory support for businesses, individuals, and families across the UK. We help clients stay compliant, understand their financial position, and make decisions with confidence.",
    line2: "",
    ctaLabel: "Book a Free Consultation",
    ctaHref: "#contact",
  },
  {
    id: "why-choose-fam",
    backgroundImageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    backgroundImageAlt: "Professional accounting team collaboration",
    heading: "Why Choose FAM Chartered Accountants?",
    line1:
      "Our work is guided by accuracy, professional judgement, and responsibility. We provide clear communication, fixed-fee pricing, and practical advice designed to reduce risk and support long-term financial clarity.",
    line2: "",
    ctaLabel: "How We Work",
    ctaHref: "/Company/how-we-work",
  },
  {
    id: "specialist-support",
    backgroundImageSrc:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1470&auto=format&fit=crop",
    backgroundImageAlt: "Construction and business sector support",
    heading: "Specialist Support for Local\nBusinesses",
    line1:
      "We support UK businesses across construction, property, professional services, technology, healthcare, and not-for-profit sectors, with specialist expertise in the Construction Industry Scheme (CIS) for contractors and subcontractors.",
    line2: "",
    ctaLabel: "Explore Industries",
    ctaHref: "/Industries/construction-property",
  },
];

export const HOME_HERO_SLIDE_INTERVAL_MS = 3000;
