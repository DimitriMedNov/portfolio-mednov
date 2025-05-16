
import React, { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Tienda online con carrito de compras, pagos y panel de administración.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demo: "https://ejemplo.com/demo1",
    github: "https://github.com/ejemplo/proyecto1",
  },
  {
    id: 2,
    title: "Dashboard Analítico",
    description: "Panel de control con visualización de datos en tiempo real y reportes personalizados.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Vue.js", "Firebase", "D3.js", "SCSS"],
    demo: "https://ejemplo.com/demo2",
    github: "https://github.com/ejemplo/proyecto2",
  },
  {
    id: 3,
    title: "App de Gestión de Tareas",
    description: "Aplicación para organizar tareas con características colaborativas y notificaciones.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React Native", "Redux", "Express", "MongoDB"],
    demo: "https://ejemplo.com/demo3",
    github: "https://github.com/ejemplo/proyecto3",
  },
  {
    id: 4,
    title: "Blog Personalizado",
    description: "Plataforma de blog con CMS integrado y opciones avanzadas de SEO.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Next.js", "GraphQL", "Tailwind CSS", "Prisma"],
    demo: "https://ejemplo.com/demo4",
    github: "https://github.com/ejemplo/proyecto4",
  },
  {
    id: 5,
    title: "Aplicación de Clima",
    description: "App de clima con pronósticos detallados y visualizaciones interactivas.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["Vue.js", "Vuex", "OpenWeather API", "Chart.js"],
    demo: "https://ejemplo.com/demo5",
    github: "https://github.com/ejemplo/proyecto5",
  },
  {
    id: 6,
    title: "Portal Inmobiliario",
    description: "Plataforma para búsqueda de propiedades con filtros avanzados y mapas interactivos.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "Node.js", "PostgreSQL", "Mapbox"],
    demo: "https://ejemplo.com/demo6",
    github: "https://github.com/ejemplo/proyecto6",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
          loading="lazy" // Add lazy loading for better performance
        />
      </div>
      <CardContent className="flex flex-col flex-grow p-6">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3 mt-auto">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/90"
          >
            <ExternalLink className="h-4 w-4 mr-1" /> Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary"
          >
            <Github className="h-4 w-4 mr-1" /> Código
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const PROJECTS_PER_PAGE = 3;

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  
  // Calculate which projects to show based on current page
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Memoized page change handler
  const handlePageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of projects section smoothly
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Una selección de mis trabajos más destacados en desarrollo web y aplicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(currentPage - 1)} 
                      className="cursor-pointer"
                    />
                  </PaginationItem>
                )}
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="cursor-pointer" 
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
