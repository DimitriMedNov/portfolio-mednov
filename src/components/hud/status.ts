import type { Status } from "@/content/types";

/** Verde: corriendo. Naranja: en construcción. Morado: no es público. */
export const statusTone: Record<Status, "green" | "orange" | "purple"> = {
  pass: "green",
  test: "orange",
  confidential: "purple",
};

export const statusColor: Record<Status, string> = {
  pass: "text-green",
  test: "text-orange",
  confidential: "text-purple",
};
