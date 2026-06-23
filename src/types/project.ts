
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  /** Optional: only set when a public repository actually exists. */
  github?: string;
};
