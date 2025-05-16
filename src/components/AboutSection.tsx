
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Html, Css, LayoutDashboard } from "lucide-react";

const technologies = [
  { name: "HTML", icon: Html },
  { name: "CSS", icon: Css },
  { name: "JavaScript", icon: LayoutDashboard },
  { name: "React", icon: LayoutDashboard },
  { name: "TypeScript", icon: LayoutDashboard },
  { name: "Next", icon: LayoutDashboard },
  { name: "Nuxt", icon: LayoutDashboard },
  { name: "Tailwind", icon: LayoutDashboard },
  { name: "Python", icon: LayoutDashboard },
  { name: "Django", icon: LayoutDashboard },
  { name: "SQL", icon: LayoutDashboard },
  { name: "AWS", icon: LayoutDashboard },
  { name: "Flutter Flow", icon: LayoutDashboard },
  { name: "Vuetify", icon: LayoutDashboard },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Acerca de <span className="text-primary">Mí</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ingeniero en Tecnologías de Información y Negocios Digitales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-3">
              Jesus D'mitri Medina Novelo
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Soy un ingeniero en Tecnologías de Información y Negocios Digitales con una gran pasión por la tecnología, 
              el software y el desarrollo web.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Tengo experiencia en lenguajes de programación y habilidades en tecnologías usando frameworks.
              He desarrollado tanto proyectos personales como profesionales en el ámbito web.
              Estoy comprometido con mi crecimiento profesional, buscando nuevos desafíos para aplicar y expandir mi conocimiento.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="inline-flex items-center">
                  <FileText className="mr-2 h-4 w-4" /> Descargar CV
                </Button>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <Card className="p-8 shadow-lg">
            <h3 className="text-lg font-bold mb-6">Mis Tecnologías</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <tech.icon className="h-5 w-5 text-primary" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center">Mi Experiencia</h3>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="text-primary font-semibold">Feb 2023 - Oct 2023</div>
                <div className="font-bold text-lg mt-1">Web Development Intern</div>
                <div className="text-gray-600 dark:text-gray-400">Universidad Anáhuac Mayab</div>
              </div>
              <div className="md:w-2/3 mt-2 md:mt-0">
                <p className="text-gray-700 dark:text-gray-300">
                  Apoyo en el desarrollo frontend de la plataforma "Mi Plan A" usando React y TypeScript. 
                  Contribución a la creación de una página web para mostrar información sobre aulas, 
                  incluyendo su disponibilidad y capacidad.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="text-primary font-semibold">Oct 2023 - Ene 2024</div>
                <div className="font-bold text-lg mt-1">IT Support Intern</div>
                <div className="text-gray-600 dark:text-gray-400">Universidad Anáhuac Mayab</div>
              </div>
              <div className="md:w-2/3 mt-2 md:mt-0">
                <p className="text-gray-700 dark:text-gray-300">
                  Soporte técnico a través del chat DTI y asistencia presencial con equipos. 
                  Resolución de problemas de correo electrónico, gestión de tickets de soporte 
                  y solución de problemas técnicos.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="text-primary font-semibold">Ene 2024 - Dic 2024</div>
                <div className="font-bold text-lg mt-1">Web Development Intern</div>
                <div className="text-gray-600 dark:text-gray-400">Diario de Yucatán</div>
              </div>
              <div className="md:w-2/3 mt-2 md:mt-0">
                <p className="text-gray-700 dark:text-gray-300">
                  Asistencia en la creación de una página web para el portal HemerótecaDY, 
                  trabajando tanto en frontend como en backend utilizando tecnologías como 
                  Nuxt y Vuetify.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center">Educación</h3>
          <div className="border-l-2 border-primary pl-6 space-y-8">
            <div>
              <div className="text-primary font-semibold">Ago 2020 - Dic 2024</div>
              <div className="font-bold text-lg mt-1">Universidad Anáhuac Mayab</div>
              <p className="text-gray-700 dark:text-gray-300">
                Licenciatura en Tecnología de Información y Negocios Digitales
              </p>
            </div>
            
            <div>
              <div className="text-primary font-semibold">Feb 2023 - Oct 2023</div>
              <div className="font-bold text-lg mt-1">Universidad Anáhuac Mayab</div>
              <p className="text-gray-700 dark:text-gray-300">
                Desarrollo de un bot de Discord usando Python y la API de OpenAI para la sala de juegos, 
                diseñado para gestionar el canal de deportes electrónicos durante eventos universitarios 
                y mejorar su administración general.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
