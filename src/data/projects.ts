import { Project } from "@/types/project";

/** Structural data only — all copy lives in src/content/{en,es}.ts. */

export const projects: Project[] = [
  {
    id: 1,
    code: "4.1",
    name: "ShopEdge",
    image: "/images/Ecommerce.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "React Query"],
    demo: "https://shop-edge-seven.vercel.app/",
  },
  {
    id: 2,
    code: "4.2",
    name: "Chainlytics",
    image: "/images/cripto.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Hook Form", "Zod"],
    demo: "https://chainlytics82-3v7y.vercel.app/",
    github: "https://github.com/DimitriMedNov/chainlytics82",
  },
  {
    id: 3,
    code: "4.3",
    name: "MindTask AI",
    image: "/images/Todoask.webp",
    tags: ["React Native", "Redux", "Express", "MongoDB"],
    demo: "https://mindtask-ai.vercel.app/",
  },
  {
    id: 5,
    code: "4.4",
    name: "Weather App",
    image: "/images/clima.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "OpenWeather API"],
    demo: "https://weather-app-gamma-vert-42.vercel.app/",
  },
  {
    id: 6,
    code: "4.5",
    name: "Beat Pulse",
    image: "/images/RitmoC.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    demo: "https://beat-pulse-visualizer.vercel.app/",
  },
  {
    id: 7,
    code: "4.6",
    name: "El Taquito Gordo Feliz",
    image: "/images/taquito.webp",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://taquito.vercel.app/",
    github: "https://github.com/DimitriMedNov/ProyectoPrWeb",
  },
];
