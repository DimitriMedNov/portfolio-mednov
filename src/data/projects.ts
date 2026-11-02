import { Project } from "@/types/project";

/** Structural data only — all copy lives in src/content/{en,es}.ts. */

export const projects: Project[] = [
  {
    id: 4,
    code: "4.1",
    name: "InventaPro",
    demo: "https://inventory-management-system-ten-puce.vercel.app/",
    tags: ["React", "TypeScript", "TanStack Router", "Tailwind CSS", "Supabase", "PostgreSQL"],
    github: "https://github.com/DimitriMedNov/Inventory-Management-System",
  },
  {
    id: 2,
    code: "4.2",
    name: "Chainlytics",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Hook Form", "Zod"],
    demo: "https://chainlytics82-3v7y.vercel.app/",
    github: "https://github.com/DimitriMedNov/chainlytics82",
  },
  {
    id: 3,
    code: "4.3",
    name: "MindTask",
    tags: ["React", "TypeScript", "PGlite", "Ollama", "whisper.cpp", "Tauri"],
    // Corre en la máquina de cada quien: no hay demo pública que enseñar.
    github: "https://github.com/DimitriMedNov/mindtask-ai",
  },
  {
    id: 6,
    code: "4.4",
    name: "Beat Pulse",
    tags: ["React", "TypeScript", "Canvas", "Vite", "Tailwind CSS", "Vitest"],
    demo: "https://beat-pulse-visualizer.vercel.app/",
    github: "https://github.com/DimitriMedNov/beat-pulse-visualizer-plus",
  },
  {
    id: 8,
    code: "4.5",
    name: "Sticker Bot",
    tags: ["Node.js", "Vercel Functions", "WhatsApp Cloud API", "Supabase", "PostgreSQL", "Sharp"],
    // El "demo" de un bot de WhatsApp es abrir la conversación con él.
    demo: "https://wa.me/529861026628",
    demoLabelKey: "openChat",
    github: "https://github.com/DimitriMedNov/whatsapp-sticker-bot-vercel",
  },
  // Huella, el launcher y Buscador son apps nativas (escritorio Linux y tele): no hay demo web.
  {
    id: 9,
    code: "4.6",
    name: "Huella",
    tags: ["Python", "GTK4", "libadwaita", "fprintd", "PAM", "polkit"],
    github: "https://github.com/DimitriMedNov/huella",
  },
  {
    id: 10,
    code: "4.7",
    name: "Mi TV",
    tags: ["Kotlin", "Jetpack Compose for TV", "Android TV", "Open-Meteo"],
    github: "https://github.com/DimitriMedNov/launcher-tv",
  },
  {
    id: 11,
    code: "4.8",
    name: "Buscador",
    tags: ["JavaScript", "GNOME Shell", "GJS", "Ollama", "LocalSearch"],
    github: "https://github.com/DimitriMedNov/buscador",
  },
  // El más viejo y el más sencillo de los públicos: va al final a propósito.
  {
    id: 7,
    code: "4.9",
    name: "El Taquito Gordo Feliz",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://taquito.vercel.app/",
    github: "https://github.com/DimitriMedNov/ProyectoPrWeb",
  },
];
