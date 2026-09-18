export type Project = {
  id: number;
  /** Section number printed on the card, e.g. "4.1". */
  code: string;
  name: string;
  image: string;
  tags: string[];
  demo: string;
  /** Optional: only set when a public repository actually exists. */
  github?: string;
};
