export type Project = {
  id: number;
  /** Section number printed on the card, e.g. "4.1". */
  code: string;
  name: string;
  /** Optional: cards without a screenshot render text only. */
  image?: string;
  tags: string[];
  /** Optional: only set when there is a public demo anyone can open. */
  demo?: string;
  /**
   * Optional: replaces the shared "live demo" wording when the link does not
   * open a demo page. The WhatsApp bot opens a chat, not a site.
   */
  demoLabelKey?: "openChat";
  /** Optional: only set when a public repository actually exists. */
  github?: string;
};
