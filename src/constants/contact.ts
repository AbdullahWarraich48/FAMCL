export const CONTACT_PHONE_DISPLAY = "+44 730 123 3962";
export const CONTACT_PHONE_LABEL = `Contact Us: ${CONTACT_PHONE_DISPLAY}`;
export const CONTACT_PHONE_HREF = "tel:+447301233962";

/** International format only — country code + number, no +, spaces, or dashes. */
export const WHATSAPP_NUMBER = "447301233962";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello, I would like to speak with FAM Chartered Accountants.";

export function getWhatsAppChatUrl(
  number: string = WHATSAPP_NUMBER,
  message: string = WHATSAPP_DEFAULT_MESSAGE
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
