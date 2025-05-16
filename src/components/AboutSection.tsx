
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 88 },
  { name: "Vue.js", level: 80 },
  { name: "TypeScript", level: 78 },
  { name: "Node.js", level: 70 },
  { name: "Git", level: 85 },
  { name: "UI/UX", level: 75 },
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
            Conozca mi experiencia, habilidades y trayectoria profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-3">
              Desarrollador Frontend Especializado
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Soy un desarrollador frontend apasionado con más de 5 años de experiencia 
              creando aplicaciones web y móviles intuitivas y de alto rendimiento.
              Me especializo en React, Vue y tecnologías modernas de frontend.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Mi objetivo es construir interfaces que no solo sean visualmente
              atractivas sino también accesibles y con experiencias de usuario
              excepcionales. Disfruto resolviendo problemas complejos con
              soluciones elegantes y mantenibles.
            </p>

            <div className="pt-4">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="inline-flex items-center">
                  <FileText className="mr-2 h-4 w-4" /> Descargar CV
                </Button>
              </a>
            </div>
          </div>

          <Card className="p-8 shadow-lg">
            <h3 className="text-lg font-bold mb-6">Mis Habilidades</h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
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
                <div className="text-primary font-semibold">2021 - Presente</div>
                <div className="font-bold text-lg mt-1">Desarrollador Frontend Senior</div>
                <div className="text-gray-600 dark:text-gray-400">Empresa Innovadora</div>
              </div>
              <div className="md:w-2/3 mt-2 md:mt-0">
                <p className="text-gray-700 dark:text-gray-300">
                  Desarrollo de aplicaciones web de alto rendimiento utilizando React, TypeScript y Tailwind CSS. 
                  Implementación de arquitecturas escalables y mentorización de desarrolladores junior.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="text-primary font-semibold">2018 - 2021</div>
                <div className="font-bold text-lg mt-1">Desarrollador Frontend</div>
                <div className="text-gray-600 dark:text-gray-400">Agencia Digital</div>
              </div>
              <div className="md:w-2/3 mt-2 md:mt-0">
                <p className="text-gray-700 dark:text-gray-300">
                  Desarrollo de sitios web y aplicaciones responsivas para diversos clientes.
                  Implementación de soluciones con Vue.js, SCSS y optimización de rendimiento web.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="text-primary font-semibold">2016 - 2018</div>
                <div className="font-bold text-lg mt-1">Desarrollador Web</div>
                <div className="text-gray-600 dark:text-gray-400">Startup Tecnológica</div>
              </div>
              <div className="md:w-2/3 mt-2 md:mt-0">
                <p className="text-gray-700 dark:text-gray-300">
                  Creación de prototipos y desarrollo de interfaces para la plataforma principal.
                  Trabajo con HTML5, CSS3, JavaScript y jQuery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
