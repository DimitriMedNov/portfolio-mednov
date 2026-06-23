
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce | ShopEdge",
    description: "Tienda online completa con carrito de compras, sistema de pagos, comparador de productos, reviews, wishlist y panel administrativo. Incluye autenticación de usuarios, gestión de órdenes, roles y permisos.",
    image: "/images/Ecommerce.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "React Query"],
    demo: "https://shop-edge-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Dashboard Analítico de Criptomonedas | Chainlytics",
    description: "Panel de control con visualización de datos en tiempo real y reportes personalizados para criptomonedas.",
    image: "/images/cripto.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "React Hook Form", "Zod"],
    demo: "https://chainlytics82-3v7y.vercel.app/",
  },
  {
    id: 3,
    title: "App de Gestión de Tareas | MindTask AI",
    description: "Aplicación para organizar tareas con características colaborativas y notificaciones.",
    image: "/images/Todoask.webp",
    tags: ["React Native", "Redux", "Express", "MongoDB"],
    demo: "https://mindtask-ai.vercel.app/",
  },
  {
    id: 5,
    title: "Aplicación de Clima | Weather App",
    description: "App de clima con pronósticos detallados y visualizaciones interactivas.",
    image: "/images/clima.webp",
    tags: ["TypeScript", "shadcn-ui", "OpenWeather API", "Vite", "React", "Tailwind CSS"],
    demo: "https://weather-app-gamma-vert-42.vercel.app/",
  },
  {
    id: 6,
    title: "Simulador de Ritmo Cardíaco | Beat pulse",
    description: "Visualizador interactivo de ritmo cardíaco con animaciones en tiempo real y métricas configurables.",
    image: "/images/RitmoC.webp",
    tags: ["TypeScript", "shadcn-ui", "Vite", "React", "Tailwind CSS"],
    demo: "https://beat-pulse-visualizer.vercel.app/",
  },
  {
    id: 7,
    title: "Sistema de Reservas | El Taquito Gordo Feliz taquería™",
    description: "A web application developed for \"El Taquito Gordo Feliz Taquería™\" that allows customers to book appointments or place orders, receive automated notifications, and manage personalized reminders. Designed to streamline scheduling and enhance the customer experience.",
    image: "/images/taquito.webp",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://taquito.vercel.app/",
    github: "https://github.com/DimitriMedNov/ProyectoPrWeb",
  },
];
