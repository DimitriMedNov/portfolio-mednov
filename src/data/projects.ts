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
  // Huella, el launcher y las extensiones de GNOME son apps nativas (escritorio Linux y tele): no hay demo web.
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
  {
    id: 12,
    code: "4.9",
    name: "Panel Claude",
    tags: ["JavaScript", "GNOME Shell", "GJS", "Python", "Claude Code hooks"],
    github: "https://github.com/DimitriMedNov/panel-claude",
  },
  {
    id: 13,
    code: "4.10",
    name: "Captura a Claude",
    tags: ["JavaScript", "GNOME Shell", "GJS", "Claude Code"],
    github: "https://github.com/DimitriMedNov/captura-claude",
  },
  {
    id: 14,
    code: "4.11",
    name: "Proyectos",
    tags: ["JavaScript", "GNOME Shell", "GJS", "git"],
    github: "https://github.com/DimitriMedNov/proyectos",
  },
  {
    id: 15,
    code: "4.12",
    name: "Servidores dev",
    tags: ["JavaScript", "GNOME Shell", "GJS", "iproute2"],
    github: "https://github.com/DimitriMedNov/servidores-dev",
  },
  {
    id: 16,
    code: "4.13",
    name: "Memoria",
    tags: ["JavaScript", "GNOME Shell", "GJS", "Python"],
    github: "https://github.com/DimitriMedNov/memoria",
  },
  {
    id: 17,
    code: "4.14",
    name: "Clima",
    tags: ["JavaScript", "GNOME Shell", "GJS", "Open-Meteo"],
    github: "https://github.com/DimitriMedNov/clima",
  },
  {
    id: 18,
    code: "4.15",
    name: "Reloj Flip",
    tags: ["Python", "GTK4", "libadwaita", "Cairo"],
    github: "https://github.com/DimitriMedNov/reloj-flip",
  },
  {
    id: 19,
    code: "4.16",
    name: "Barra limpia",
    tags: ["JavaScript", "GNOME Shell", "GJS"],
    github: "https://github.com/DimitriMedNov/barra-limpia",
  },
  // El más viejo y el más sencillo de los públicos: va al final a propósito.
  {
    id: 7,
    code: "4.17",
    name: "El Taquito Gordo Feliz",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://taquito.vercel.app/",
    github: "https://github.com/DimitriMedNov/ProyectoPrWeb",
  },
];
