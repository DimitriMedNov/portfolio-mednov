import { useEffect, useRef } from "react";

/** Milisegundos tras los que se revela todo, pase lo que pase. */
const FAILSAFE = 2500;

/**
 * Revela un bloque cuando entra en pantalla.
 *
 * El elemento nace visible y este hook lo oculta solo si puede garantizar que
 * volverá a mostrarlo: si no hay IntersectionObserver, o si el visitante pidió
 * menos movimiento, no oculta nada. Además, un plazo de seguridad revela todo
 * aunque el observador nunca dispare, para que el contenido no pueda quedarse
 * en blanco.
 */
export const useReveal = <T extends HTMLElement>(delay = 0) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    node.dataset.hidden = "true";
    node.style.transitionDelay = delay ? `${delay}s` : "";

    const show = () => {
      node.dataset.hidden = "false";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    const failsafe = window.setTimeout(show, FAILSAFE);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [delay]);

  return ref;
};
