export type Status = "pass" | "test" | "confidential";

export type Sheet = {
  path: string;
  tab: string;
  seoTitle: string;
  seoDescription: string;
};

export type Content = {
  /** BCP 47 tag written to <html lang>. */
  lang: "en" | "es";
  sheets: Sheet[];

  ui: {
    role: string;
    availability: string;
    themeToDark: string;
    themeToLight: string;
    langSwitch: string;
    navLabel: string;
    skipDemo: string;
    source: string;
    copy: string;
    copied: string;
    copyFailed: string;
    copyFailedHint: string;
    modelView: string;
    inference: string;
    live: string;
    units: string;
    channelOpen: string;
  };

  hero: {
    eyebrow: string;
    name: string;
    surname: string;
    summary: string;
    ctaSystems: string;
    ctaContact: string;
  };

  idFields: { k: string; v: string; href?: string }[];

  systems: {
    title: string;
    note: string;
    stackLabel: string;
    resultLabel: string;
    cases: {
      id: string;
      desig: string;
      org: string;
      year: string;
      statusLabel: string;
      status: Status;
      /** Whether anyone can open it, or it only runs inside the company. */
      access: { label: string; public: boolean };
      /** Live URL, only when the thing is actually reachable. */
      url?: string;
      /** Public repositories, when the work has code anyone can read. */
      repos?: { label: string; href: string }[];
      /** Logo de la organización, en /public/logos. */
      logo?: string;
      /** "wide" para marcas horizontales; por defecto cuadrada. */
      logoShape?: "wide";
      title: string;
      desc: string;
      stack: string[];
      reads: { v: string; l: string }[];
    }[];
  };

  sites: {
    title: string;
    note: string;
    rows: { code: string; name: string; lat: string; lon: string; fn: string }[];
  };

  builds: {
    title: string;
    note: (count: number) => string;
    demo: string;
    /** Replaces "live demo" when the link opens a chat instead of a page. */
    openChat: string;
    /** Shown instead of a source link when the repository is private. */
    codePrivate: string;
    /** Per project id: category, one-line summary and full description. */
    text: Record<number, { category: string; summary: string; description: string }>;
  };

  resume: {
    title: string;
    note: string;
    summary: string;
    experienceLabel: string;
    educationLabel: string;
    courseworkLabel: string;
    roles: {
      id: string;
      role: string;
      company: string;
      /** Opcional: la ciudad de la empresa, no la de quien escribe el portafolio. */
      location?: string;
      dates: string;
      concurrent?: string;
      bullets: string[];
      tech: string[];
      /** Sub-projects listed under the role, each detailed on its own. */
      projects?: { name: string; meta?: string; bullets: string[]; tech: string[] }[];
    }[];
    education: {
      degree: string;
      school: string;
      location?: string;
      dates: string;
      coursework: string[];
    };
  };

  skills: {
    title: string;
    note: string;
    certificationsLabel: string;
    coursesLabel: string;
    groups: { cat: string; items: string[] }[];
    certifications: { no: string; name: string; issuer: string; year: string }[];
    courses: string[];
  };

  contact: {
    title: string;
    note: string;
    headline: string;
    headlineAccent: string;
    headlineTail: string;
    body: string;
    channels: { label: string; value: string; href: string; copy?: string }[];
  };

  notFound: {
    title: string;
    note: string;
    body: string;
    cta: string;
  };
};
