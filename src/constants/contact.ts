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
