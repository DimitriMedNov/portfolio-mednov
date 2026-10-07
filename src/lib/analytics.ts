/**
 * Eventos de Umami. El script global vive en index.html; aquí solo se nombran
 * las interacciones que indican interés profesional o intención de contacto.
 *
 * Hay dos formas de marcar un elemento, y no son intercambiables:
 *
 * - `umamiEvent` pone `data-umami-event`. Sirve para botones y para enlaces que
 *   abren otra pestaña. En un enlace de la misma pestaña el tracker cancela el
 *   clic, espera a que Umami conteste y navega después: si Umami tarda, el
 *   enlace tarda, y un `download` deja de descargar.
 * - `umamiClick` avisa al hacer clic y no toca la navegación. Es la que va en
 *   todo enlace que se abre en la misma pestaña, `mailto:` y `tel:` incluidos.
 *
 * Nunca se manda nada que escriba o identifique a quien visita: solo datos que
 * ya son públicos en el portafolio.
 */
type EventData = Record<string, string>;

declare global {
  interface Window {
    umami?: { track: (event: string, data?: EventData) => void };
  }
}

/** Sin nombre de evento no se marca nada: el elemento queda como estaba. */
export const umamiEvent = (event: string | undefined, data: EventData = {}) =>
  event
    ? {
        "data-umami-event": event,
        ...Object.fromEntries(Object.entries(data).map(([key, value]) => [`data-umami-event-${key}`, value])),
      }
    : {};

export const umamiClick = (event: string | undefined, data?: EventData) =>
  event
    ? {
        onClick: () => {
          // Sin script (bloqueador, red que no lo resuelve) no hay nada que avisar.
          window.umami?.track(event, data);
        },
      }
    : {};

/** Pestañas de la navegación principal. */
export const navEvents: Record<string, string> = {
  "/": "nav_home",
  "/systems": "nav_systems",
  "/projects": "nav_projects",
  "/about": "nav_about",
  "/contact": "nav_contact",
};

export type Channel = "email" | "phone" | "github" | "linkedin";

/** El canal sale del enlace y no de su etiqueta, que cambia con el idioma. */
export const channelOf = (href: string): Channel | undefined => {
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("tel:")) return "phone";
  if (href.includes("github.com")) return "github";
  if (href.includes("linkedin.com")) return "linkedin";
  return undefined;
};

const channelEvents: Record<Channel, string> = {
  email: "email_click",
  phone: "phone_click",
  github: "github_profile_click",
  linkedin: "linkedin_profile_click",
};

/** Evento del canal al que apunta el enlace, o nada si no es un canal. */
export const channelEvent = (href: string) => {
  const channel = channelOf(href);
  return channel ? channelEvents[channel] : undefined;
};
