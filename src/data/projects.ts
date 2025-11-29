
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce | ShopEdge",
    description: "Tienda online completa con carrito de compras, sistema de pagos, comparador de productos, reviews, wishlist y panel administrativo. Incluye autenticación de usuarios, gestión de órdenes, roles y permisos.",
    image: "/images/Ecommerce.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "React Query"],
    demo: "https://shop-edge-seven.vercel.app/",
    github: "https://github.com/ejemplo/proyecto1",
  },
  {
    id: 2,
    title: "Dashboard Analítico de Criptomonedas | Chainlytics",
    description: "Panel de control con visualización de datos en tiempo real y reportes personalizados para criptomonedas.",
    image: "/images/cripto.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "React Hook Form", "Zod"],
    demo: "https://chainlytics82-3v7y.vercel.app/",
    github: "https://github.com/ejemplo/proyecto2",
  },
  {
    id: 3,
    title: "App de Gestión de Tareas | MindTask AI",
    description: "Aplicación para organizar tareas con características colaborativas y notificaciones.",
      image: "/images/Todoask.png",
    tags: ["React Native", "Redux", "Express", "MongoDB"],
    demo: "https://mindtask-ai.vercel.app/",
    github: "https://github.com/ejemplo/proyecto3",
  },
  {
    id: 5,
    title: "Aplicación de Clima | Weather App",
    description: "App de clima con pronósticos detallados y visualizaciones interactivas.",
    image: "/images/clima.png",
    tags: ["TypeScript", "shadcn-ui", "OpenWeather API", "Vite", "React", "Tailwind CSS"],
    demo: "https://weather-app-gamma-vert-42.vercel.app/",
    github: "https://github.com/ejemplo/proyecto5",
  },
  {
    id: 6,
    title: "Simulador de Ritmo Cardíaco | Beat pulse",
    description: "Plataforma para búsqueda de propiedades con filtros avanzados y mapas interactivos.",
    image: "/images/RitmoC.png",
    tags: ["TypeScript", "shadcn-ui", "Vite", "React", "Tailwind CSS"],
    demo: "https://beat-pulse-visualizer.vercel.app/",
    github: "https://github.com/ejemplo/proyecto6",
  },
  {
    id: 7,
    title: "Sistema de Reservas | El Taquito Gordo Feliz taqueria™",
    description: "A web application developed for \"El Taquito Gordo Feliz Taquería™\" that allows customers to book appointments or place orders, receive automated notifications, and manage personalized reminders. Designed to streamline scheduling and enhance the customer experience.\n",
    image: "/images/taquito.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://taquito.vercel.app/",
    github: "https://github.com/DimitriMedNov/ProyectoPrWeb.git",}
];
