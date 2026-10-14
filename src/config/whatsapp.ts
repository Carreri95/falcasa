const MESSAGE = "Olá, quero um diagnóstico da Falcasa.";

const buildUrl = (number: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(MESSAGE)}`;

// Número principal: usado por todos os botões de WhatsApp do site.
export const WHATSAPP_NUMBER = "5534984395096";
export const WHATSAPP_URL = buildUrl(WHATSAPP_NUMBER);

// Números adicionais, listados no rodapé abaixo do principal.
export const WHATSAPP_NUMBER_2 = "5534998020426";
export const WHATSAPP_URL_2 = buildUrl(WHATSAPP_NUMBER_2);

export const WHATSAPP_NUMBER_3 = "5534997377144";
export const WHATSAPP_URL_3 = buildUrl(WHATSAPP_NUMBER_3);
