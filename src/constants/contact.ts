export const CONTACT_PHONE_DISPLAY = "+44 20 8144 4825";
export const CONTACT_PHONE_LABEL = `Contact Us: ${CONTACT_PHONE_DISPLAY}`;
export const CONTACT_PHONE_HREF = "tel:+442081444825";

export const OFFICE_PHONE_DISPLAY = CONTACT_PHONE_DISPLAY;
export const OFFICE_PHONE_LABEL = `Office Number: ${OFFICE_PHONE_DISPLAY}`;
export const OFFICE_PHONE_HREF = CONTACT_PHONE_HREF;

export const CONTACT_EMAIL = "info@famcl.uk";
export const CONTACT_EMAIL_LABEL = `Email: ${CONTACT_EMAIL}`;
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;

/** International format only — country code + number, no +, spaces, or dashes. */
export const WHATSAPP_NUMBER = "447865638506";
export const WHATSAPP_DISPLAY = "+44 7865 638506";

export const REGISTERED_OFFICE_ADDRESS =
  "Suite 1, Fitzroy House, Lynwood Drive, Worcester Park, Surrey KT4 7AT, UK";

export const SOCIAL_FACEBOOK_URL = "https://www.facebook.com/famcluk";
export const SOCIAL_LINKEDIN_URL = "https://www.linkedin.com/company/famcluk/";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello, I would like to speak with FAM Chartered Accountants.";

export function getWhatsAppChatUrl(
  number: string = WHATSAPP_NUMBER,
  message: string = WHATSAPP_DEFAULT_MESSAGE
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
