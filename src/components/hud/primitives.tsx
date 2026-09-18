import React from "react";
import type { Status } from "@/content/types";
import { useReveal } from "@/components/hud/useReveal";

/** Etiqueta de dato: gris, caja de oración, sin mayúsculas ni tracking. */
export const Label = ({ children }: { children: React.ReactNode }) => (
  <div className="hud-label">{children}</div>
);

/** Antetítulo, coloreado por tono. */
export const Eyebrow = ({ children, tone = "blue" }: { children: React.ReactNode; tone?: Tone }) => (
  <p className={`text-meta font-semibold ${toneText[tone]}`}>{children}</p>
);

/** Aparece al entrar en pantalla, con retardo opcional para escalonar. */
export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

export const Panel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`panel overflow-hidden ${className}`}>{children}</div>
);

/**
 * Cabecera de sección centrada, como la de una página de producto: título
 * grande y una línea de apoyo debajo.
 */
export const SectionTitle = ({
  title,
  note,
  tone = "blue",
}: {
  title: string;
  note: string;
  tone?: Tone;
}) => (
  <Reveal className="px-6 pb-2 pt-12 text-center sm:px-10 sm:pt-16">
    <p className={`text-meta font-semibold ${toneText[tone]}`}>{note}</p>
    <h2 className="mt-2 text-headline font-semibold text-txt sm:text-display">{title}</h2>
  </Reveal>
);

const chipTone: Record<Status, string> = {
  pass: "bg-green/10 text-green",
  test: "bg-orange/10 text-orange",
  confidential: "bg-purple/10 text-purple",
};

/** Cada sección lleva su color, como cada producto en apple.com. */
export type Tone = "blue" | "green" | "orange" | "purple" | "pink" | "teal";

const toneText: Record<Tone, string> = {
  blue: "text-blue",
  green: "text-green",
  orange: "text-orange",
  purple: "text-purple",
  pink: "text-pink",
  teal: "text-teal",
};

export const Chip = ({ children, tone }: { children: React.ReactNode; tone?: Status }) => (
  <span className={`hud-chip ${tone ? `${chipTone[tone]} font-medium` : ""}`}>{children}</span>
);
