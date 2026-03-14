export type Testimonial = {
  title: string;
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
};

export const CARASOUL_TESTIMONIALS: Testimonial[] = [
  {
    title: "Better Results Than\nExpected",
    quote:
      "They helped me plan properly and I ended up saving more than I had anticipated.",
    author: "Sarah Ahmed",
    role: "Small Business Client",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Professional &\nReliable",
    quote:
      "Clear guidance, great communication, and a plan that actually worked for my business.",
    author: "Omar Khan",
    role: "Founder",
    imageUrl:
      "https://images.unsplash.com/photo-1524503033411-f4f36b6f9f2b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Peace of Mind",
    quote:
      "I finally feel confident about my finances and the next steps I need to take.",
    author: "Amina Noor",
    role: "Entrepreneur",
    imageUrl:
      "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=1400&q=80",
  },
];
