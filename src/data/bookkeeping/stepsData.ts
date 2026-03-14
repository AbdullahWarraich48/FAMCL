export type BookkeepingStepsIconKey = "message" | "user" | "file-text";

export const BOOKKEEPING_STEPS_DATA = {
  heading: "Join us in three simple steps",
  cta: { label: "Contact Us", href: "#contact" },
  items: [
    {
      step: 1,
      title: "Get in touch",
      description:
        "Arrange a consultation online, by phone, or in person to discuss your business needs.",
      iconKey: "message",
    },
    {
      step: 2,
      title: "Speak with an expert",
      description:
        "We'll review your situation, answer your questions, and explain how we can help.",
      iconKey: "user",
    },
    {
      step: 3,
      title: "Receive a fixed quote",
      description:
        "You'll receive a clear proposal with transparent pricing and no hidden fees.",
      iconKey: "file-text",
    },
  ],
} as const;

