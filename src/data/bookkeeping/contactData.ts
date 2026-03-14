export const BOOKKEEPING_CONTACT_DATA = {
  sectionLabel: "Have a Question?",
  heading: "Contact Us",
  description:
    "Contact us to book a free video or face-to-face consultation and receive a clear proposal with a fixed-fee quote.",
  form: {
    fields: {
      name: { label: "Your name", placeholder: "Enter your full name" },
      email: { label: "Email address", placeholder: "you@example.com" },
      phone: { label: "Phone number", placeholder: "0800 000 0000" },
      help: {
        label: "How can we help you?",
        placeholder: "Tell us about your business and how we can help...",
      },
      hear: {
        label: "How did you hear about us? (Optional)",
        placeholder: "e.g. Google, referral, social media...",
      },
    },
    checkboxLabel: "I would like to receive updates and insights from your team",
    submitLabel: "Send message",
  },
} as const;

