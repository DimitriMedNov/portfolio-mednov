import type { Content } from "@/content/types";

/**
 * English content. Every figure here is real or absent — never estimate a
 * metric to fill a gap.
 */
export const en: Content = {
  lang: "en",

  sheets: [
    {
      path: "/",
      tab: "Identity",
      seoTitle: "Dimitri MedNov",
      seoDescription:
        "Identity and measured results of Jesus D'mitri Medina Novelo: CRM and automation in production at Diprolam, an ERP for 100+ users in development.",
    },
    {
      path: "/systems",
      tab: "Systems",
      seoTitle: "Systems",
      seoDescription:
        "Private enterprise work: corporate ERP, multi-tenant SaaS, enterprise CRM, AI integrations and OCR archive search, with the sites they run in.",
    },
    {
      path: "/projects",
      tab: "Builds",
      seoTitle: "Public Projects",
      seoDescription:
        "Public projects with their source: InventaPro, ShopEdge, Chainlytics, MindTask, Beat Pulse and El Taquito Gordo Feliz.",
    },
    {
      path: "/about",
      tab: "Resume",
      seoTitle: "Resume",
      seoDescription:
        "Full resume: 4.5+ years across Diprolam, Grupo Megamedia and Universidad Anáhuac Mayab, with responsibilities, stack, education, certifications and courses.",
    },
    {
      path: "/contact",
      tab: "Contact",
      seoTitle: "Contact",
      seoDescription:
        "Contact Jesus D'mitri Medina Novelo — mednov@outlook.es, +52 999 359 0366.",
    },
  ],

  ui: {
    role: "AI systems engineering",
    availability: "Open to work",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    langSwitch: "Ver en español",
    navLabel: "Sections",
    skipDemo: "Live demo",
    source: "Source",
    copy: "Copy",
    copied: "copied",
    copyFailed: "Could not copy",
    copyFailedHint: "Select the text and copy it manually.",
    modelView: "Model view",
    inference: "inference",
    live: "live",
    units: "4 layers · 21 units",
    channelOpen: "channel open",
  },

  hero: {
    eyebrow: "Open to work",
    name: "Jesus D'mitri",
    surname: "Medina Novelo",
    summary:
      "I lead IT and software engineering at Diprolam, an industrial supplier with sites in Monterrey, Guanajuato, Puebla and Tijuana, where the CRM, the inventory system and the purchasing flow I built are already part of how the company works day to day while I put together the ERP that more than 100 people will work in and a multi-tenant SaaS platform beside it, after two years at Grupo Megamedia and its century-old newspaper putting AI where it saved real work: chatbots, automated financial summaries and OCR search across the archive.",
    ctaSystems: "View systems",
    ctaContact: "Open channel",
  },

  idFields: [
    { k: "Name", v: "Dimitri MedNov" },
    { k: "Coordinates", v: "20.9674 N · 89.5926 W" },
    { k: "Experience", v: "4.5+ years" },
    { k: "GitHub", v: "github/DimitriMedNov", href: "https://github.com/DimitriMedNov" },
    { k: "LinkedIn", v: "linkedin/dimitrimednoov", href: "https://www.linkedin.com/in/dimitrimednoov" },
    { k: "Email", v: "mednov@outlook.es", href: "mailto:mednov@outlook.es" },
    { k: "Phone", v: "+52 999 359 0366", href: "tel:+529993590366" },
  ],

  systems: {
    title: "Systems — private work",
    note: "mostly internal systems · no public repositories",
    stackLabel: "Stack manifest",
    resultLabel: "Recorded result",
    cases: [
      {
        id: "erp",
        logo: "/logos/diprolam.png",
        desig: "DPL-ERP/01",
        org: "Diprolam",
        year: "2026",
        statusLabel: "In development",
        status: "test",
        access: { label: "Internal use", public: false },
        title: "Corporate ERP",
        desc: "One ERP for more than 100 users across the four operating cities, pulling inventory, procurement, warehouse, suppliers and the administrative side into a single system instead of the handful of tools and spreadsheets each city had grown on its own.",
        caseHref: "/casos/erp",
        caseLabel: "Read the full case",
        stack: ["Python", "React 19", "TypeScript", "TanStack", "Supabase", "Docker", "AWS"],
        reads: [
          { v: "+100", l: "users" },
          { v: "4", l: "cities" },
        ],
      },
      {
        id: "saas",
        logo: "/logos/diprolam.png",
        desig: "DPL-SAAS/02",
        org: "Diprolam",
        year: "2026",
        statusLabel: "In development",
        status: "test",
        access: { label: "Internal use", public: false },
        title: "Multi-tenant SaaS platform",
        desc: "Platform that takes the paperwork of the business into software, with authentication, file storage, document generation and role-based access control, built multi-tenant so each part of the company works in its own space without stepping on the others.",
        caseHref: "/casos/saas",
        caseLabel: "Read the full case",
        stack: ["React 19", "TypeScript", "TanStack", "Supabase", "Zod", "Vercel"],
        reads: [],
      },
      {
        id: "crm",
        logo: "/logos/diprolam.png",
        desig: "DPL-CRM/03",
        org: "Diprolam",
        year: "2026",
        statusLabel: "In production",
        status: "pass",
        access: { label: "Internal use", public: false },
        title: "Enterprise CRM",
        desc: "CRM where the sales side of the company lives across its four cities: customers, the pipeline, every open opportunity and the follow-up each one needs, so the commercial team stops keeping that in their own heads and their own files.",
        caseHref: "/casos/crm",
        caseLabel: "Read the full case",
        stack: ["Python", "React", "TypeScript", "Supabase", "PostgreSQL", "Linux", "DigitalOcean"],
        reads: [{ v: "4", l: "cities" }],
      },
      {
        id: "inventory",
        logo: "/logos/diprolam.png",
        desig: "DPL-INV/04",
        org: "Diprolam",
        year: "2026",
        statusLabel: "In production",
        status: "pass",
        access: { label: "Internal use", public: false },
        title: "Inventory management",
        desc: "Software that follows every tool and every item across the four sites, so each movement carries a record and a name, which is what ended the tool loss and the spending nobody could account for.",
        caseHref: "/casos/inventario",
        caseLabel: "Read the full case",
        stack: ["Python", "React", "TypeScript", "Supabase", "PostgreSQL", "Docker"],
        reads: [{ v: "4", l: "cities" }],
      },
      {
        id: "purchasing",
        logo: "/logos/diprolam.png",
        desig: "DPL-PUR/05",
        org: "Diprolam",
        year: "2026",
        statusLabel: "In production",
        status: "pass",
        access: { label: "Internal use", public: false },
        title: "Purchasing, end to end",
        desc: "The whole purchasing process of the four cities in one place: the request, the stock check, the quotes, the comparison table, the approval, the purchase order and the reception of what arrives, so information is captured once and reused at every stage instead of being retyped into each form. The request, the comparison table and the order used to be done on paper with in-person signatures and the cycle could stretch to about six days; today that same stretch closes the same day, usually in an hour or two. It carries more than eight thousand requests and orders, 9,456 comparison tables and more than thirty-five thousand warehouse entries since it went live in June 2026.",
        caseHref: "/casos/compras",
        caseLabel: "Read the full case",
        stack: ["Python", "React", "TypeScript", "Supabase", "PostgreSQL", "REST APIs"],
        reads: [
          { v: "+8,000", l: "purchase orders" },
          { v: "+35,000", l: "warehouse entries" },
          { v: "+100", l: "users" },
        ],
      },
      {
        id: "nidal-site",
        logo: "/logos/nidal.png",
        logoShape: "wide",
        desig: "NDL-WEB/06",
        org: "Freelance · Nidal Arquitectura",
        year: "2026",
        statusLabel: "Delivered",
        status: "pass",
        access: { label: "Live site", public: true },
        url: "https://nidalarquitectura.com/",
        title: "Nidal Arquitectura — studio site",
        desc: "Site for the Nidal architecture studio built on TanStack Start and React 19 with file-based routing, where every built work, every piece of news and the studio itself gets its own page rather than being squeezed into a gallery that treats all the projects the same.",
        stack: ["TanStack Start", "TanStack Router", "React 19", "TypeScript", "Tailwind CSS v4", "Vercel"],
        reads: [],
      },
      {
        id: "nidal-admin",
        logo: "/logos/nidal.png",
        logoShape: "wide",
        desig: "NDL-CMS/07",
        org: "Freelance · Nidal Arquitectura",
        year: "2026",
        statusLabel: "Delivered",
        status: "pass",
        access: { label: "Internal use", public: false },
        title: "Nidal — internal admin panel",
        desc: "Admin panel behind a login so the studio publishes on its own, covering projects, news, categories, media, the studio page, contact, users, translations and site settings, which is what keeps new work from having to come through me every time.",
        stack: ["TanStack Start", "React 19", "TypeScript", "shadcn/ui", "Supabase", "Tailwind CSS v4"],
        reads: [{ v: "10", l: "panel sections" }],
      },
      {
        id: "solido-site",
        logo: "/logos/solido.png",
        desig: "SLD-WEB/08",
        org: "Freelance · Sólido Soluciones",
        year: "2026",
        statusLabel: "Delivered",
        status: "pass",
        access: { label: "Public site", public: true },
        title: "Sólido Soluciones — public site",
        desc: "Site for Sólido Soluciones Integrales with its services, its projects and a quote request that ends in a WhatsApp conversation, built with self-hosted fonts and hand-written transitions so it loads fast without leaning on a theme or a third party for its motion.",
        stack: ["React", "Vite", "JavaScript", "Lucide"],
        reads: [],
      },
      {
        id: "solido-system",
        logo: "/logos/solido.png",
        desig: "SLD-SYS/09",
        org: "Freelance · Sólido Soluciones",
        year: "2026",
        statusLabel: "Delivered",
        status: "pass",
        access: { label: "Internal use", public: false },
        title: "Sólido — internal management system",
        desc: "Internal system where each role sees its own work: an administrator and a supervisor see everything, a technician only the work orders assigned to them and an estimator only the quotes they own, with clients, evidence, activity history, notifications and the PDF that comes out at the end of a job.",
        stack: ["React", "Vite", "JavaScript", "Lucide"],
        reads: [{ v: "4", l: "roles" }],
      },
      {
        id: "ai",
        logo: "/logos/megamedia.png",
        desig: "MEG-AI/10",
        org: "Grupo Megamedia",
        year: "2025–26",
        statusLabel: "In production",
        status: "pass",
        access: { label: "Internal use", public: false },
        title: "AI integrations across a century-old newspaper",
        desc: "Python receipt automation, ChatGPT-API financial summaries, Zoho, WooCommerce and ElevenLabs integrations, and support and lead-generation chatbots adopted company-wide at Diario de Yucatán, all kept in step by real-time data synchronization across platforms.",
        stack: ["Python", "OpenAI API", "Zoho CRM", "WooCommerce", "ElevenLabs", "REST APIs"],
        reads: [{ v: "company-wide", l: "chatbot adoption" }],
      },
      {
        id: "ocr",
        logo: "/logos/diario.png",
        desig: "MEG-OCR/11",
        org: "Grupo Megamedia",
        year: "2024",
        statusLabel: "In production",
        status: "pass",
        access: { label: "Internal use", public: false },
        title: "Hemeroteca — OCR search over a century of print",
        desc: "Full-text search over the digitized archive of a century-old newspaper, built for the Hemeroteca portal the newsroom uses in house, so a single page can be pulled out of decades of scanned print, with OCR turning the scans into text the search can actually reach.",
        caseHref: "/casos/hemeroteca",
        caseLabel: "Read the full case",
        stack: ["Nuxt", "Vue.js", "Vuetify", "MongoDB", "AWS", "OCR"],
        reads: [],
      },
      {
        id: "empleate",
        logo: "/logos/empleate.png",
        desig: "MEG-BOT/12",
        org: "Grupo Megamedia",
        year: "2024",
        statusLabel: "In production",
        status: "pass",
        access: { label: "Publicly accessible", public: true },
        title: "Empléate.app — chatbot and AI switchboard",
        desc: "Conversational chatbot inside the public job board Empléate.app that walks candidates through registration and their applications without anyone on the other side, with AI automation that spots promoted vacancies and puts them in front of the right applicants, and on the phone side an AI switchboard that answers by voice, listens to what the person needs and transfers them to the right extension, so more people can be served without adding staff in the same proportion.",
        stack: ["Chatbase", "Anthropic Claude", "Nuxt", "Vue.js", "MongoDB", "REST APIs"],
        caseHref: "/casos/empleate",
        caseLabel: "Read the full case",
        reads: [],
      },
      {
        id: "survey",
        desig: "FRL-SRV/13",
        org: "Freelance",
        year: "2022–23",
        statusLabel: "Delivered",
        status: "pass",
        access: { label: "Internal use", public: false },
        title: "Field surveys: capture, live monitoring and statistics",
        desc: "Software built for a campaign in the political sector where field teams captured survey responses and a dashboard showed them as they landed, with every answer kept in a structured base in the spirit of Airtable so the team could filter it, export it and pull the breakdowns and statistics a campaign actually runs on, reading where it stood during the day instead of waiting for a count that arrived the morning after.",
        stack: ["React", "TypeScript", "Python", "MongoDB"],
        reads: [{ v: "1 year", l: "of build" }],
      },
      {
        id: "analytics-mx",
        desig: "FRL-PLT/14",
        org: "Freelance",
        year: "2024",
        statusLabel: "Delivered",
        status: "pass",
        access: { label: "Public code", public: true },
        repos: [
          { label: "Go API", href: "https://github.com/DimitriMedNov/Analytics" },
          { label: "Nuxt web panel", href: "https://github.com/DimitriMedNov/analytics-nuxt" },
          { label: "Flutter mobile app", href: "https://github.com/DimitriMedNov/Analytics-flutter" },
        ],
        title: "Analytics MX — survey platform",
        desc: "Unlike the campaign work, which solved one concrete operation, here the brief was a platform that would serve any survey, so what matters is that a survey is not programmed but defined: questions live in a catalogue of their own and get reused across forms, each form decides which ones are required and which only appear once another was answered a certain way, and both the web panel and the mobile app draw the form from that definition, so adding a new survey means adding it to the database rather than writing code. Answers are stored with the location they were taken from, which is what lets a result be read by area and not only as a total. Three pieces sit on the same API: the backend, the panel where surveys are built and reviewed, and the app used to capture them on the street. On the backend the queries are generated with sqlc from the SQL, so a schema change breaks the build instead of failing in production, and the migrations ship inside the binary and run on start.",
        stack: ["Go", "chi", "pgx", "PostgreSQL", "sqlc", "Nuxt 3", "Drizzle ORM", "Flutter", "Dart"],
        reads: [{ v: "3", l: "pieces on one API" }],
      },
      {
        id: "shops",
        desig: "FRL-WEB/15",
        org: "Freelance",
        year: "2022–23",
        statusLabel: "Delivered",
        status: "pass",
        access: { label: "Publicly accessible", public: true },
        title: "Sites and online stores for local businesses",
        desc: "Websites and online stores built in React for small businesses, each one with its own catalogue, its orders and the pages the owner actually needed, instead of a template that forces the business to fit whatever the theme allows.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        reads: [],
      },
      {
        id: "bots",
        desig: "FRL-BOT/16",
        org: "Freelance",
        year: "2022–23",
        statusLabel: "Delivered",
        status: "pass",
        access: { label: "Internal use", public: false },
        title: "Small automations for clients",
        desc: "Simple bots in Python for clients who were doing the same task by hand every day, the kind of work nobody wants and everybody keeps doing because moving it into software never seems urgent enough.",
        stack: ["Python", "REST APIs"],
        reads: [],
      },
    ],
  },

  caseStudies: {
    compras: {
      seoTitle: "Case: purchasing, end to end",
      seoDescription:
        "How a paper-based purchasing process with in-person signatures and a cycle of up to six days came to close the same day: the problem, the decisions and how the result is measured.",
      back: "Back to systems",
      eyebrow: "Case study · Industrial supplier with four plants",
      title: "Purchasing, end to end",
      lede:
        "Buying a bolt could take six days, and none of those days were the supplier's. This is the route of a process that lived on paper, with in-person signatures and the same information retyped into every form, to a flow where it is captured once and reused at every stage.",
      figures: [
        { v: "+8,000", l: "purchase orders" },
        { v: "9,456", l: "comparison tables" },
        { v: "+35,000", l: "warehouse entries" },
        { v: "+100", l: "users" },
      ],
      sections: [
        {
          id: "problema",
          title: "The problem was not the paper",
          body: [
            "It is easy to tell this as a digitization story, and that would sell it short. Paper was the symptom: what cost time was a process split across forms, people and departments that did not talk to each other.",
            "A need for material turned into a physical request that had to be printed and walked around to collect signatures, then someone checked stock, asked for at least three quotes, hand-built a comparison table with terms, delivery times, discounts, subtotals and taxes, and out of that came the purchase order that went back up for signature. Every jump meant retyping the same data and one more chance to get it wrong.",
            "Knowing where a purchase stood meant sending an email or walking over to ask. There was no place to look it up.",
          ],
        },
        {
          id: "decisiones",
          title: "The decision everything else hangs on",
          body: [
            "The central piece was not a screen but a rule: information is captured once and reused. The supplier, the quantities, the descriptions, the project it is charged to and who asked for it are written in the request and travel from there into the comparison table and the purchase order.",
            "That removes in one go the points where somebody retyped the same thing, which is exactly where transcription errors came from. Subtotals, taxes and totals stop being worked out by hand, and approvals and rejections are recorded with who, when and on what grounds.",
            "Fifteen stages of the flow live inside the system, from the request to the final reception, through warehouse entries, custody records and transfers. It is not that the whole department is automated; it is that this full stretch stopped leaking out into a loose form.",
          ],
        },
        {
          id: "medicion",
          title: "How it is measured, and what cannot be",
          body: [
            "The request, the comparison table and the order each used to take about two days counting drafting, reviews, signatures and waiting, so the administrative stretch could run to about six days. Today that same stretch closes the same day, usually in an hour or two, for processes carrying ten to fifteen items.",
            "That before is an estimate from the people who ran the process, not a measurement: the paper flow left no timestamps, so there is nothing to compare against automatically. The volume figures do come from the system, because it records them.",
            "Supplier time is deliberately left out. If a delivery takes fifteen days because of manufacturing or logistics, no software fixes that and it should not be counted in its favour. The measurement ends where the administrative work ends: at the approved order.",
          ],
        },
        {
          id: "resultado",
          title: "What changed in practice",
          body: [
            "A request is no longer chased: it is looked up. Its status, who is holding it, what was approved and what was rejected and why all sit on the same screen, so follow-up stopped being a chain of emails.",
            "Ordinary operation is practically paper-free, though the odd order still gets printed for certain audits, so saying paper disappeared entirely would be false.",
            "And there is something that was not in the plan and turned out to be worth a lot: because every movement carries an owner and a date, the history answers questions nobody used to ask, because there was no way to answer them.",
          ],
        },
      ],
      honesty: {
        title: "What this case does not prove",
        items: [
          "There is no measured cost reduction: the financial data to back one does not exist.",
          "There is no measured error reduction: the retyping points were removed, but the errors of the old process were never counted, so there is nothing to compare against.",
          "The time saved is cycle time, not hours worked: those six days included waiting and signatures, they were not six days of someone sitting over the file.",
          "The volume figures belong to different entities of the same process and must not be added together: a request, its comparison table and its order are the same case counted three times.",
        ],
      },
      note:
        "This case is published without the company's name, without references to its internal documents and without operational data, with permission to tell the work.",
    },
    crm: {
      seoTitle: "Case: the CRM that got the book out of a spreadsheet",
      seoDescription:
        "The whole commercial side of four plants lived in a spreadsheet. The problem was not the spreadsheet, it was that nobody knew which copy was the good one.",
      back: "Back to systems",
      eyebrow: "Case study · Industrial supplier with four plants",
      title: "A CRM to get the book out of a spreadsheet",
      lede:
        "The whole commercial side of four plants — customers, contacts, opportunities and follow-ups — lived inside a spreadsheet, and that is where the work happened too. The underlying problem was not the spreadsheet but what a spreadsheet cannot give you: one place where the information is the right one.",
      figures: [
        { v: "~60", l: "users" },
        { v: "4", l: "plants" },
        { v: "Jul 2026", l: "live since" },
      ],
      sections: [
        {
          id: "problema",
          title: "A spreadsheet has no owner",
          body: [
            "A shared spreadsheet works until two people need it at the same time. From there copies appear, and with copies comes the question nobody can answer: which one of them is current.",
            "What showed up day to day was repeated information — the same customer entered two and three times, spelled differently each time — and information that simply vanished, because a spreadsheet does not record who changed what or when, so an overwritten value leaves no trace. And every lookup that should take seconds took minutes, because you had to find it and then confirm it with somebody.",
            "None of that is the fault of the people using it. It is what happens when a spreadsheet is asked to be the database for a dozen large corporate accounts spread across four plants.",
          ],
        },
        {
          id: "decision",
          title: "Why an off-the-shelf CRM was not bought",
          body: [
            "Buying one of the CRMs that already exist would have been faster, and it was the first option on the table. The reason not to is that the ERP, the inventory system and the purchasing flow were being built on the same stack at the same time.",
            "A bought CRM would have sat apart, with its own customer list, and someone would have had to keep the two in sync: the customer in the CRM and the same customer in the ERP, each with its own identifier and fields. That syncing work never ends, and it is exactly where duplicated data comes back — which was the problem being solved in the first place.",
            "Building it inside the same system means the customer is one record: whoever buys is the same entry that shows up on a project, and there are no two truths to reconcile.",
          ],
        },
        {
          id: "falla",
          title: "Four times a follow-up was dropped",
          body: [
            "The system dropped the follow-up on certain accounts. Not once: four times. No customer was lost, but the thread was, and on a large account that is expensive to pick back up.",
            "The first time it looked like somebody's oversight. So did the second. By the fourth it was clear the pattern was not in the people but in the system, and that is where it was fixed.",
            "I tell it because it is the part that usually goes untold. A system that loses data silently is worse than one that falls over, because the one that falls over gets noticed. What is worth showing about a project in production is not that it never failed, but how long it took to notice and what was done once it was noticed.",
          ],
        },
        {
          id: "resultado",
          title: "What changed",
          body: [
            "There is now one place where the book lives, and what it says is what there is. Every change carries an owner and a date, so an overwritten value no longer disappears without a trace.",
            "Around sixty people across the four plants work on the same information at the same time, with no copies and without asking anyone which version is the right one.",
            "It has been live since July 2026.",
          ],
        },
      ],
      honesty: {
        title: "What this case does not prove",
        items: [
          "There is no measured before-and-after: the spreadsheet left no timestamps and no history, so there is no baseline to compare against.",
          "No sales are attributed to the system: having the information in order does not prove more gets sold, and there is no data to back that.",
          "The number of accounts is deliberately left vague, as is their industry, because identifying them would mean talking about the company's book of business, and that is not mine to publish.",
          "The sales pipeline is not described here: how the company qualifies and advances its opportunities is its own method.",
        ],
      },
      note:
        "This case is published without the company's name, without identifying its customers and without describing its commercial method, with permission to tell the work.",
    },
    inventario: {
      seoTitle: "Case: inventory that is computed, not written down",
      seoDescription:
        "Four thousand tools and items across four sites, tracked with a spreadsheet and loose paper notes. The decision that changed it was not storing stock as a number.",
      back: "Back to systems",
      eyebrow: "Case study · Industrial supplier with four plants",
      title: "Inventory that is computed, not written down",
      lede:
        "More than four thousand tools and items across four sites, tracked with a spreadsheet and notes on paper. It was not badly kept: an exact count was simply impossible at that scale, and what cannot be counted cannot be defended either when somebody asks where the money went.",
      figures: [
        { v: "+4,000", l: "tools and items" },
        { v: "4", l: "sites" },
        { v: "60", l: "users" },
      ],
      sections: [
        {
          id: "problema",
          title: "Nobody could count it all",
          body: [
            "Control lived between a spreadsheet and loose sheets of paper. Somebody took a tool, wrote it on a sheet, and that sheet had to reach the spreadsheet later; when it did not, the tool still existed in the system even though it was not on the shelf.",
            "At four thousand items across four sites, an absolute count stops being viable. There was no exact control, and without exact control you get the two consequences that showed up in practice: tools that went missing with nobody knowing when or with whom, and purchases nobody could account for, because something was bought again that might already be sitting at another site.",
            "The underlying problem was not a lack of discipline. It was that the system depended on somebody remembering to write things down.",
          ],
        },
        {
          id: "decision",
          title: "Stock is not stored, it is computed",
          body: [
            "The decision everything else rests on is not storing the quantity on hand as a number. The common way to build an inventory is to keep a column with the amount and update it on every movement, but that number has no history: when it is wrong, there is no way to know when it broke or who broke it.",
            "Here what gets stored are the movements — every entry, every exit and every adjustment, with its owner and its date — and the quantity is obtained by summing them. The number stops being something a person writes and becomes a consequence of what happened.",
            "That has an effect beyond accuracy: any quantity can be traced back to its origin. If there are seven today and there should be nine, the answer is not an argument but a list of movements with names and dates. And an adjustment, when one is needed, is also stored as a movement, so correcting does not mean erasing the evidence that something was off.",
            "Permissions are enforced in the database rather than by hiding buttons on screen, which is the difference between not being able to do something and merely not seeing the button for it.",
          ],
        },
        {
          id: "falla",
          title: "The fingerprint reader took me several tries",
          body: [
            "So that every movement would carry a name without depending on somebody writing it down, a fingerprint reader was integrated: whoever takes or returns a tool puts a finger down and the record is made on its own.",
            "It failed several times before it worked. It was not a design problem but a knowledge one: I had never integrated hardware like that and had to learn how you talk to such a device, which looks very little like consuming an API.",
            "I put it here because it is the honest part of this project. I did not arrive knowing how to do it; I arrived at getting it to work. And that distinction matters more than the other one, because in real work you almost never know in advance how to do what you have been handed.",
          ],
        },
        {
          id: "resultado",
          title: "What changed",
          body: [
            "Every movement is recorded with an owner and a date, without anyone having to remember to write it down. That is what ended the tools that went missing without a trace and the spending nobody could account for.",
            "The inventory stopped being a figure somebody maintains and became the result of what actually happened across the four sites.",
            "There is a public, simplified version of the same approach, with sample data, in the InventaPro project on this site: you can open it and watch stock being computed from movements.",
          ],
        },
      ],
      honesty: {
        title: "What this case does not prove",
        items: [
          "There is no measured before-and-after: the previous control lived between a spreadsheet and loose paper, so there is no reliable baseline to compare against.",
          "There is no quantified saving: tool loss and purchases that could not be accounted for were a recognised problem, but they were not measured in money before starting.",
          "The warehouse movement figures are not repeated here: they appear in the purchasing case, and adding them up in two places would make the volume look larger than it is.",
          "The fingerprint reader answers who made a movement, not whether they made it correctly: it is still possible to record an exit and leave the tool somewhere else.",
        ],
      },
      note:
        "This case is published without the company's name and without operational data, with permission to tell the work.",
    },
    hemeroteca: {
      seoTitle: "Case: searching inside a century of print",
      seoDescription:
        "The archive of a century-old newspaper was scanned but not searchable: finding something meant several people opening images and reading. This is the work of turning those scans into text.",
      back: "Back to systems",
      eyebrow: "Case study · Century-old newspaper",
      title: "Searching inside a century of print",
      lede:
        "From the paper's founding to today, plus every other title in the group, everything was digitised as images. It existed, it could be looked at, and it could not be searched: finding an old piece meant several people opening scans and reading until they hit it.",
      figures: [
        { v: "1 century", l: "of print" },
        { v: "2024", l: "live since" },
      ],
      sections: [
        {
          id: "problema",
          title: "Scanned is not the same as searchable",
          body: [
            "The archive lived as a historical gallery of images. To a computer, a scanned page is not text but a photograph: it can show it, but it does not know what it says, so a search finds nothing inside it.",
            "The practical consequence was that pulling the text out of an old edition was done by people, by hand, reading the image and typing it out. That works for one piece; it does not work for a century of archive, and it turns every newsroom query into several people's work.",
          ],
        },
        {
          id: "ocr",
          title: "The OCR was the work, not a step",
          body: [
            "The part that sounds simple — run the images through a text recogniser — turned out to be the whole project. AWS's OCR service was used, wired into the system I built, and getting to something usable took several rounds of trial and error.",
            "The reason is the material. A newspaper from decades ago looks nothing like a modern document: the paper yellows, the ink bleeds, the columns run into each other and the typefaces change from one era to the next. There are pages that simply cannot be read well, and no amount of configuration saves them.",
            "It was also the first time I had worked with text recognition, so a good part of the time went into understanding what could be asked of the OCR and what could not, and where the point was at which pushing further stopped improving the result.",
          ],
        },
        {
          id: "calidad",
          title: "The text was not only for searching",
          body: [
            "Here is what raised the bar on this project. If the extracted text were only for search, roughly right would be enough: even with errors, the search lands on the correct page and the person reads the image from there.",
            "But that same text was passed into documents to be worked on, to pull notes and quotes from. For that, roughly right is not enough: a person has to be able to read it without guessing what it actually said.",
            "Those are two very different bars for the same work, and the second one is considerably higher. It is the difference between OCR good enough to find something and OCR good enough to write on top of.",
          ],
        },
        {
          id: "resultado",
          title: "What changed",
          body: [
            "Search reaches the content of the pages and not just their dates, so you can get to a specific edition from what it said, which is how an old piece is actually looked for.",
            "What used to occupy several people opening images became a query, and the archive went from being stored to being available.",
          ],
        },
      ],
      honesty: {
        title: "What this case does not prove",
        items: [
          "There is no measured OCR accuracy: that would have needed a hand-made transcription of the same pages to compare against, and none exists.",
          "Not every page came out equally well: quality depends on the decade and the state of the paper, and some still read badly.",
          "There is no measured before-and-after: the manual work that came before was never timed.",
          "How the newsroom works internally is not described: it is an internal tool at a company I no longer work for, so this case stays on the technical problem.",
        ],
      },
      note:
        "This case tells the engineering problem, not the company's internal operation.",
    },
    empleate: {
      seoTitle: "Case: serving job seekers without adding staff",
      seoDescription:
        "In a job board the bottleneck is not the vacancies, it is answering the people asking about them. A chatbot on the site and an AI switchboard on the phone.",
      back: "Back to systems",
      eyebrow: "Case study · Empléate.app, public job board",
      title: "Serving job seekers without adding staff",
      lede:
        "In a job board the bottleneck is rarely publishing vacancies but answering the people asking about them. Everyone who wants to apply needs to work out how to register, find what fits them and complete their application, and that was being handled one person at a time.",
      figures: [
        { v: "3", l: "states covered" },
        { v: "2024", l: "live since" },
      ],
      sections: [
        {
          id: "problema",
          title: "The bottleneck is the answering",
          body: [
            "Empléate.app is the group's public job board and covers Yucatán, Campeche and Quintana Roo. The platform currently lists more than five thousand vacancies and more than ten thousand registered candidates, figures it publishes on its own home page.",
            "At that scale the work is not in publishing but in accompanying. Many people looking for work do not arrive knowing how the site works: they ask whether there is anything in their line, how to register, whether their application went through. Every one of those questions was answered by somebody, and the number of people who can answer does not grow at the rate of the number who ask.",
          ],
        },
        {
          id: "chatbot",
          title: "The chatbot, inside the site",
          body: [
            "That is how I was asked to build it and how I built it: an assistant living inside the page that walks a person through registration and through their application with nobody on the other side.",
            "On top of that sits automation that spots which vacancies are promoted and puts them in front of the applicants they suit, instead of letting them get lost in a list. That serves both sides of the market: the company that paid to feature its vacancy sees it in front of relevant people, and the person looking for work sees something that makes sense for them first.",
          ],
        },
        {
          id: "conmutador",
          title: "And the phone, which nobody usually mentions",
          body: [
            "A chatbot handles whoever arrives through a browser. But a share of people looking for work pick up the phone, and there the limit is how many calls one person can take at once.",
            "So an AI switchboard was built that answers the call by voice, listens to what the person needs and transfers them to the right extension. Whoever dials is attended to from the first moment instead of waiting for somebody to free up, and that way more people applying to the different vacancies can be served without adding staff in the same proportion.",
            "A keypad menu has solved the same routing for decades, but it asks the person to translate what they want into a number from a list they have to sit through first. Answering by voice takes that work off the caller and hands it to the system, which now has to understand somebody speaking the way they speak rather than the way they would pick an option.",
            "I built this part together with the intern I had under me, which is where I learned that explaining a technical decision to someone starting out forces you to understand it better than you thought you did.",
          ],
        },
        {
          id: "despues",
          title: "What happened afterwards",
          body: [
            "The chatbot I built lived inside the site. Later, with me no longer there, it was moved to WhatsApp keeping what it did, so today the same things can be done from there that used to be done on the page.",
            "That version is not my work, which is why I mention it rather than claim it. I tell it because it says something a case study usually cannot: what was built kept being useful after its author left, which is more than can be said of most projects.",
          ],
        },
      ],
      honesty: {
        title: "What this case does not prove",
        items: [
          "The platform's figures are the ones it publishes on its home page today, not results of my work: I was there in 2024, and the platform existed before and carried on after.",
          "The WhatsApp version is not mine: the chatbot I built lived inside the site and the migration happened later.",
          "There is no measured before-and-after: nobody measured how many queries one person handled before, or how many they stopped handling.",
          "There is no measured accuracy for the switchboard: nobody measured how often it understood the caller correctly or how many calls it sent to the wrong extension.",
          "I do not know the current state of what I built: I no longer work there and have no visibility of what has changed since.",
        ],
      },
      note:
        "Empléate.app is a public product, which is why it is named here. The figures quoted are the ones the platform itself publishes.",
    },
    erp: {
      seoTitle: "Case: one ERP, not four separate programs",
      seoDescription:
        "Inventory, purchasing and the CRM each have their own case, but they are not three systems: they are modules of the same ERP on the same database. This is the case of the container, still in development.",
      back: "Back to systems",
      eyebrow: "Case study · Industrial supplier with four plants",
      title: "One ERP, not four separate programs",
      lede:
        "Inventory, purchasing and the CRM each have their own case on this site and can be read separately. This is the case of what holds them up: the ERP they are modules of, which is why solving each problem on its own would have rebuilt the original problem with better technology.",
      figures: [
        { v: "+100", l: "users" },
        { v: "4", l: "cities" },
        { v: "3", l: "modules in use" },
      ],
      sections: [
        {
          id: "problema",
          title: "Four cities that had organised themselves",
          body: [
            "Each of the four cities had put together its own arrangement over the years: a handful of separate tools and spreadsheets that got the day done and that nobody had designed to talk to each other. It worked, in the sense that the company operated, but every city had its own version of the same things.",
            "That is the same problem as in the earlier cases, only at company scale: the same supplier entered four times under four different names, the same item under four codes, and no way to tell which of the four is the right one. When a company's information lives in copies, the question nobody can answer is not how much there is but where the truth is.",
          ],
        },
        {
          id: "modulos",
          title: "Why they are modules and not programs",
          body: [
            "Inventory, purchasing and the CRM are not three systems that resemble one another. They are modules of the same ERP working on the same database, and the difference is not organisational but a matter of what happens when one of them needs something from another.",
            "The purchasing flow has a step that checks stock before going out for quotes. That step does not ask inventory for a copy of its data: it reads the same record inventory writes. There are no two lists of items for somebody to keep identical, because there are not two lists.",
            "Building them separately would have been faster at the start and would have handed back the original problem with better technology: instead of four cities with their spreadsheets, four programs with their databases, and once again somebody reconciling by hand which of them tells the truth.",
          ],
        },
        {
          id: "decision",
          title: "It was built because they wanted their own",
          body: [
            "The decision not to buy one of the ERPs that already exist was not mine and was not technical: the company wanted its own. I tell it that way because that is what happened, and because on a project this size the biggest decision is usually the one that depends least on whoever writes the code.",
            "What did fall to me is what comes after that decision, which is where it is won or lost. That the modules genuinely share records rather than merely appearing to. That permissions are enforced in the database rather than by hiding buttons on screen, which is the difference between not being able to do something and merely not seeing the button for it. And that each module can go into production on its own without waiting for the whole ERP to be finished, which is exactly what lets people be using it already while the rest is being built.",
          ],
        },
        {
          id: "estado",
          title: "What is in use and what is not",
          body: [
            "Inventory and purchasing are already in use, and the CRM has been running since July 2026. What each of them solved is told in its own case, so I do not repeat it here.",
            "What is missing is the rest of what an ERP has to cover: warehouse, suppliers and the administrative side. The system is in development and I have no date to promise, so I say so rather than imply it is further along than it is.",
          ],
        },
        {
          id: "abierto",
          title: "API consumption, which is still open",
          body: [
            "The problem we have today is API consumption. In a system split into modules that read from each other, every screen showing information from more than one module makes several calls, and that number grows with the users and with each new module that comes in.",
            "I am not going to tell it as a resolved anecdote, because it is not: it is what is being worked on right now. I put it here because a half-built ERP has half-solved problems, and a case that only shows the finished parts says nothing about how the work goes when something does not work yet.",
          ],
        },
      ],
      honesty: {
        title: "What this case does not prove",
        items: [
          "It is in development: there is no final result to show, and what is missing may change shape before it is finished.",
          "API consumption is an open problem, not a lesson learned: it is still being worked on as this is published.",
          "The decision to build rather than buy was the company's: it was not a technical evaluation of mine and I do not present it as one.",
          "There is no measured before-and-after: what existed were separate tools and spreadsheets per city, with no record of times to compare against.",
          "The purchasing and inventory figures are not repeated here: they are in their own cases, and adding them up again would make the volume look larger than it is.",
        ],
      },
      note:
        "This case is published without the company's name and without operational data, with permission to tell the work.",
    },
    saas: {
      seoTitle: "Case: multi-tenant for a single company",
      seoDescription:
        "Multi-tenancy is what you build when the tenants are separate companies. Here they are areas of one company, and that decision is the whole case.",
      back: "Back to systems",
      eyebrow: "Case study · Industrial supplier with four plants",
      title: "Multi-tenant for a single company",
      lede:
        "A platform that takes the paperwork of the business into software, with authentication, files, document generation and role-based access control. What sets it apart from the other systems on this site is that each area works in its own sealed space, which is the exact opposite of what the ERP is after.",
      figures: [
        { v: "2026", l: "in development" },
        { v: "0", l: "users so far" },
      ],
      sections: [
        {
          id: "que-es",
          title: "What it is",
          body: [
            "A business's paperwork ends up as files. Documents somebody wrote, living wherever whoever made them left them, reached because you know where they are or because somebody sends them to you. The platform turns that into software: authentication, file storage, generation of the documents the company produces, and role-based permissions deciding who reaches what.",
            "The separate spaces are not external customers. They are areas of the same company, each with its own scope inside the platform.",
          ],
        },
        {
          id: "multi-tenant",
          title: "Why multi-tenant for a single company",
          body: [
            "Multi-tenancy is normally what you build when the tenants are separate companies that must not see each other. Using it for areas of one company looks like overkill, and it is the decision everything else rests on.",
            "The difference is between something that should not be seen and something that cannot be seen. Separating by convention — folders, agreements about who opens what, permissions somebody remembers to configure — works until somebody makes a mistake, and with company paperwork a mistake means a document ends up where it should not. Separating by architecture means a query made from one area does not reach another's data, whether the person making it errs or means to.",
            "That is why permissions live in the database rather than on screen: hiding a button stops someone pressing it, not someone asking for the data another way.",
          ],
        },
        {
          id: "vs-erp",
          title: "Why it is separate from the ERP",
          body: [
            "The ERP at this same company has its own case, and the two solve opposite problems. That is the reason they are two products and not one.",
            "The ERP exists so that a piece of data is the same everywhere. Its purchasing step that checks stock does not ask inventory for a copy: it reads the same record inventory writes, and that is the whole point. This platform is after the opposite, that one area's material does not mix with another's.",
            "Putting both in one system would have made every query carry the question of whether this case calls for sharing or isolating, which is the kind of condition somebody eventually gets wrong. They do not share a deployment either: the ERP runs on Python, Docker and AWS, while this platform leans on Supabase and Vercel with no backend of its own.",
          ],
        },
        {
          id: "estado",
          title: "What I cannot tell you yet",
          body: [
            "This is where what the case can claim runs out. The platform is in development and nobody uses it yet.",
            "The other cases on this site have their share of what went wrong, because they stood in front of real people: the follow-up dropped four times, the fingerprint reader that failed until I learned to integrate it, the OCR that could not read old paper, the API consumption still open. This one has no such section, and that is not to its credit. A system nobody has used has not been tested either.",
            "The isolation between spaces is designed and not verified against real use, which are two different things. I would rather say so now and come back to this case when there is something to tell, than write today an ending that has not happened.",
          ],
        },
      ],
      honesty: {
        title: "What this case does not prove",
        items: [
          "Nobody uses it yet: it is in development and has not been in front of real users.",
          "That nothing has failed says nothing in its favour: nothing has failed because nothing has been used, not because it is proven.",
          "The isolation between spaces is designed, not verified: architecture separating them is not the same as having checked it in operation.",
          "There is no before-and-after comparison because there is no after yet.",
          "What paperwork each area handles is not described: it is the company's internal operation and not mine to publish.",
        ],
      },
      note:
        "This case is published without the company's name and without operational data, with permission to tell the work.",
    },
  },

  sites: {
    title: "Diprolam sites running these systems",
    note: "4 plants, one ERP",
    rows: [
      { code: "MTY", name: "Monterrey", lat: "25.6866 N", lon: "100.3161 W", fn: "ERP, CRM, inventory and purchasing" },
      { code: "GTO", name: "Guanajuato", lat: "21.0190 N", lon: "101.2574 W", fn: "ERP, CRM, inventory and purchasing" },
      { code: "PUE", name: "Puebla", lat: "19.0414 N", lon: "98.2063 W", fn: "ERP, CRM, inventory and purchasing" },
      { code: "TIJ", name: "Tijuana", lat: "32.5149 N", lon: "117.0382 W", fn: "ERP, CRM, inventory and purchasing" },
    ],
  },

  builds: {
    title: "Public builds",
    note: (count) => `${count} projects`,
    demo: "Live demo",
    openChat: "Message it on WhatsApp",
    codePrivate: "Private code",
    text: {
      4: {
        category: "Internal system",
        summary: "Inventory and requisitions",
        description:
          "Inventory and requisition system for a company with several sites, where stock is the sum of every entry, exit and adjustment rather than a number that gets overwritten, so any movement can be traced back to its origin, and where requisitions move through their states charged to the project they belong to while permissions are enforced in the database instead of by hiding buttons. The demo runs on sample data and opens with the guest button, no sign-up.",
      },
      1: {
        category: "E-commerce",
        summary: "E-commerce storefront",
        description:
          "A full online store where customers fill a cart, compare products, leave reviews and keep a wishlist on the way to checkout, while on the other side an admin dashboard runs the catalog and the orders under role-based permissions.",
      },
      2: {
        category: "Analytics",
        summary: "Crypto analytics dashboard",
        description:
          "Cryptocurrency dashboard that follows prices in real time and lets you keep a portfolio and a watchlist, with an AI analyst that reads the current market and sums it up in plain language.",
      },
      3: {
        category: "Local AI",
        summary: "An AI task manager that works offline",
        description:
          "A task manager that runs entirely on your own machine, with its database, its model and its dictation, and where the AI provider is swappable, so it works the same with Ollama locally as with your own OpenAI or Anthropic key or any compatible server, and with none configured the app keeps working without its AI features instead of crashing. Dictate a task in plain speech and the text appears as you talk, with the transcription living on your computer too, while the same interpreter that reads dictation pulls the date, the priority and the category out of a loose sentence. The AI layer is measured and fenced in: a ceiling per call, retries only on transient failures, and a record of every request the repo turns into medians and percentiles.",
      },
      6: {
        category: "Visualization",
        summary: "Heart rate simulator",
        description:
          "ECG simulator for anyone learning to tell rhythms apart, with seven of them and their real signatures, from atrial fibrillation losing its P waves to the block where the PR interval stretches beat after beat until one fails to conduct, drawn on proper ECG paper with its real grid. The complex keeps its clinical timings at any rate, which is exactly what separates a faithful trace from an animation that stretches the whole wave as it speeds up, and the exam mode hides the rhythm so you recognise it yourself, with the explanation showing up once you answer.",
      },
      8: {
        category: "WhatsApp bot",
        summary: "Images turned into stickers",
        description:
          "WhatsApp bot you send an image to and it sends it back as a sticker, running as a serverless function on top of Meta's Cloud API. No image is ever stored anywhere: it is downloaded, transformed and sent, and all that is kept are the phone number, the counters and the technical details of the run. Per-user limits and idempotency live in the database behind a per-phone lock rather than in server memory, which is what keeps it standing even though every message lands on a different instance, and behind it there is a dashboard showing usage, errors and alerts. It is live: message +52 986 102 6628 and send it a photo.",
      },
      7: {
        category: "Booking",
        summary: "Booking system",
        description:
          "Booking and ordering web app for the El Taquito Gordo Feliz taquería, where customers book or order from their phone and get their reminders without anyone at the shop having to answer messages.",
      },
    },
  },

  resume: {
    title: "Resume",
    note: "4.5+ years · 7 roles",
    summary:
      "I am an AI Software Engineer and Full Stack Developer with 4.5+ years behind me building business software, AI integrations and process automation, and today I lead IT and software engineering at Diprolam, where the CRM, the inventory system and the purchasing flow run in production while the corporate ERP for more than 100 people and a multi-tenant SaaS platform are still in my hands, after two years at Grupo Megamedia and its newspaper Diario de Yucatán on LLM integrations, chatbots and OCR search over the archive, and a year on my own building sites and small automations for local businesses.",
    download: "Download CV as PDF",
    experienceLabel: "Experience",
    educationLabel: "Education",
    courseworkLabel: "Relevant coursework",
    roles: [
      {
        id: "diprolam",
        role: "Head of IT & Software Engineering",
        company: "Diprolam",
        location: "MTY · GTO · PUE · TIJ, Mexico",
        dates: "Feb 2026 — Present",
        bullets: [
          "Lead technology operations across the company's four cities, keeping critical systems, infrastructure and business services available",
          "Built and shipped the enterprise CRM now in production, where customers, the pipeline and every open opportunity live",
          "Built the inventory system running in the four cities, where every movement carries a record and a name, which ended the tool loss and the spending nobody could account for",
          "Built the purchasing system that runs from the request to the reception, where the administrative cycle went from stretching to about six days to closing the same day, and which carries more than eight thousand orders and over a hundred users",
          "Architect the corporate ERP, in development, for more than 100 people, centralizing inventory, procurement, warehouse, supplier and administrative processes",
          "Design a multi-tenant SaaS platform, in development, with authentication, file storage, document generation and role-based access control",
          "Manage cloud infrastructure on Linux, Docker, AWS and DigitalOcean, and define cybersecurity policies, backups and disaster recovery plans",
        ],
        tech: [
          "Python",
          "React 19",
          "TypeScript",
          "TanStack",
          "Tailwind CSS v4",
          "Supabase",
          "PostgreSQL",
          "Docker",
          "AWS",
          "DigitalOcean",
          "Linux",
        ],
      },
      {
        id: "megamedia",
        role: "AI Solutions Engineer & Project Lead",
        company: "Grupo Megamedia",
        dates: "Aug 2025 — Jan 2026",
        concurrent: "Group-level role, held alongside the Diario de Yucatán position below",
        bullets: [
          "Coordinated and implemented AI and automation projects across several business areas of the group",
          "Designed and integrated conversational AI systems, backend services and workflow automations",
          "Built API integrations and backend services with Python, FastAPI and PostgreSQL",
          "Evaluated emerging AI tools and automation platforms and recommended which ones to adopt",
        ],
        tech: ["Python", "FastAPI", "OpenAI API", "LLMs", "n8n", "Docker", "PostgreSQL", "React"],
      },
      {
        id: "dy-ai",
        role: "AI & API Software Developer",
        company: "Diario de Yucatán (Grupo Megamedia)",
        dates: "Jan 2025 — Feb 2026",
        concurrent: "Ran in parallel with the group-level role above",
        bullets: [
          "Built an automated accounting receipt system in Python that replaced a manual process",
          "Integrated the ChatGPT API to generate automated financial summaries for management",
          "Integrated WooCommerce, Zoho CRM and ElevenLabs to automate sales and marketing workflows",
          "Designed chatbots for lead generation and customer support, adopted company-wide",
          "Automated real-time data synchronization across platforms",
        ],
        tech: [
          "Python",
          "OpenAI API",
          "REST APIs",
          "WooCommerce API",
          "Zoho CRM",
          "Zoho SalesIQ",
          "ElevenLabs",
          "JavaScript",
        ],
      },
      {
        id: "dy-web",
        role: "Web Developer",
        company: "Diario de Yucatán (Grupo Megamedia)",
        dates: "Jan 2024 — Dec 2024",
        bullets: [
          "Developed the chatbot on the public job board Empléate.app that automated user registration and job applications",
          "Implemented AI-based automation that spots promoted vacancies and puts them in front of the right applicants",
          "Led development of the Hemeroteca portal the newsroom uses in house, with OCR search over a century of digitized print",
          "Optimized performance and stability of web platforms, reducing errors and load times",
        ],
        tech: ["Nuxt", "Vue.js", "Vuetify", "MongoDB", "AWS", "OCR", "Anthropic Claude", "Chatbase", "WordPress"],
      },
      {
        id: "anahuac-intern",
        role: "Software Engineering Intern",
        company: "Universidad Anáhuac Mayab",
        dates: "Sep 2023 — Jan 2024",
        bullets: [
          "Developed institutional web applications with React, TypeScript and Nuxt",
          "Contributed to the Consultation Center portal and other academic websites",
          "Carried out performance improvements and ongoing maintenance of web platforms",
        ],
        tech: ["React", "TypeScript", "Nuxt", "JavaScript"],
      },
      {
        id: "anahuac-support",
        role: "Technical Support / Bot Developer",
        company: "Universidad Anáhuac Mayab",
        dates: "Feb 2023 — Sep 2023",
        bullets: [
          "Resolved user issues through a ticketing system and direct support",
          "Developed a Discord bot with Python and the OpenAI API for automation and community management",
        ],
        tech: ["Python", "OpenAI API", "REST APIs", "Git"],
      },
      {
        id: "freelance",
        role: "Freelance Web Developer",
        company: "Self-employed",
        dates: "Mar 2022 — Jan 2023",
        bullets: [],
        tech: [],
        projects: [
          {
            name: "Survey software for a political campaign",
            meta: "Most of the year · React · TypeScript · Python · MongoDB",
            bullets: [
              "Built the field capture the teams on the street used to record every survey as they walked it",
              "Built the dashboard that showed the answers as they landed, so the campaign could read the day while it was still happening",
              "Kept every answer in a structured base, in the spirit of Airtable, so the data could be filtered, crossed and exported",
              "Produced the breakdowns and statistics the campaign made its decisions on",
            ],
            tech: ["React", "TypeScript", "Python", "MongoDB"],
          },
          {
            name: "Sites and online stores for local businesses",
            bullets: [
              "Built each site and store in React instead of a template, with the catalogue, the orders and the pages the owner actually needed",
            ],
            tech: ["React", "TypeScript", "Tailwind CSS"],
          },
          {
            name: "Small automations for clients",
            bullets: [
              "Wrote simple bots in Python for clients who were repeating the same task by hand every single day",
            ],
            tech: ["Python", "REST APIs"],
          },
        ],
      },
    ],
    education: {
      degree: "Bachelor's Degree in Information Technology and Digital Business",
      school: "Universidad Anáhuac Mayab",
      dates: "Aug 2020 — Dec 2024",
      coursework: [
        "Web Application Development",
        "Software Testing & QA",
        "Advanced Database Design & Optimization",
        "Data Analysis & Intelligent Data Processing",
      ],
    },
  },

  skills: {
    title: "Skills, certifications & courses",
    note: "8 groups · 5 certs · 12 courses",
    certificationsLabel: "Certifications",
    coursesLabel: "Courses",
    groups: [
      { cat: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
      {
        cat: "Frontend",
        items: [
          "React 19",
          "Next.js",
          "TanStack Start/Router/Query",
          "Vue.js",
          "Nuxt",
          "Vuetify",
          "React Native",
          "Tailwind CSS v4",
          "shadcn/ui",
          "Vite",
        ],
      },
      {
        cat: "Backend & apis",
        items: ["FastAPI", "Flask", "Django", "Express", "REST APIs", "GraphQL", "Microservices", "Zod"],
      },
      {
        cat: "AI & automation",
        items: [
          "OpenAI API",
          "Anthropic Claude",
          "LangChain",
          "LLM integrations",
          "AI agents",
          "Conversational AI",
          "OCR",
          "Chatbase",
          "Botpress",
          "ElevenLabs",
          "n8n",
        ],
      },
      { cat: "Databases", items: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "Redis"] },
      {
        cat: "Cloud & infra",
        items: ["AWS", "DigitalOcean", "Vercel", "Docker", "Kubernetes", "Linux", "CI/CD", "Backups & DRP"],
      },
      {
        cat: "Business platforms",
        items: [
          "ERP / CRM / SaaS development",
          "Zoho CRM",
          "Zoho SalesIQ",
          "Zoho Marketing Automation",
          "Zoho Inventory",
          "Zoho Books",
          "WooCommerce",
          "WordPress",
        ],
      },
      { cat: "Tools", items: ["Git", "GitHub", "FlutterFlow"] },
    ],
    certifications: [
      { no: "01", name: "AWS Certified Cloud Practitioner (CLF-C02)", issuer: "Amazon Web Services", year: "2026" },
      { no: "02", name: "CCNA", issuer: "Cisco", year: "2026" },
      { no: "03", name: "Associate Cloud Engineer", issuer: "Google Cloud", year: "2026" },
      { no: "04", name: "AI Engineer for Developers Associate", issuer: "", year: "2026" },
      { no: "05", name: "SOC", issuer: "Cisco", year: "2026" },
    ],
    courses: [
      "Generative AI with LLMs — DeepLearning.AI",
      "Machine Learning with Python — Coursera",
      "Designing ML Workflows in Python",
      "Software Development with Claude Code",
      "Advanced AI-Assisted Coding",
      "Advanced Prompt Engineering",
      "AWS Cloud Development",
      "Docker & Kubernetes: The Practical Guide",
      "Full-Stack Web Development with React",
      "Data Structures and Algorithms",
      "Google Business Intelligence",
      "SAP Professional Fundamentals",
    ],
  },

  contact: {
    title: "Contact",
    note: "Open to AI and full-stack roles",
    headline: "Available for work on",
    headlineAccent: "AI systems",
    headlineTail: "and full-stack platforms.",
    body: "I work remotely without trouble and I am open to relocating, so write to me and you will usually have an answer the same day.",
    channels: [
      { label: "Email", value: "mednov@outlook.es", href: "mailto:mednov@outlook.es", copy: "mednov@outlook.es" },
      { label: "Phone", value: "+52 999 359 0366", href: "tel:+529993590366", copy: "+52 999 359 0366" },
      { label: "GitHub", value: "github.com/DimitriMedNov", href: "https://github.com/DimitriMedNov" },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/dimitrimednoov",
        href: "https://www.linkedin.com/in/dimitrimednoov",
      },
    ],
  },

  notFound: {
    title: "Route not found",
    note: "no such endpoint",
    body: "That route is not part of this console, so head back to the identity view and pick a tab above.",
    cta: "Return to identity",
  },
};
