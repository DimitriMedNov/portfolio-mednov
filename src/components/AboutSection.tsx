
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Code, FileCode, LayoutDashboard } from "lucide-react";

const technologies = [
  { name: "TypeScript", icon: Code },
  { name: "WordPress", icon: LayoutDashboard },
  { name: "JavaScript", icon: Code },
  { name: "React", icon: LayoutDashboard },
  { name: "Next", icon: LayoutDashboard },
  { name: "Nuxt", icon: LayoutDashboard },
  { name: "Tailwind", icon: FileCode },
  { name: "Python", icon: Code },
  { name: "Django", icon: LayoutDashboard },
  { name: "SQL", icon: FileCode },
  { name: "AWS", icon: LayoutDashboard },
  { name: "Vue.js", icon: LayoutDashboard },
  { name: "Bootstrap", icon: LayoutDashboard },
  { name: "Flutter Flow", icon: LayoutDashboard },
  { name: "Vuetify", icon: LayoutDashboard },
  { name: "shadcn-ui", icon: LayoutDashboard },
  { name: "Vite", icon: LayoutDashboard },
  { name: "OpenAI API", icon: LayoutDashboard },
  { name: "Node.js", icon: LayoutDashboard },
  { name: "MongoDB", icon: LayoutDashboard },
  { name: "PostgreSQL", icon: LayoutDashboard },
  { name: "MySQL", icon: LayoutDashboard },
  { name: "Firebase", icon: LayoutDashboard },
  { name: "Git", icon: FileCode },
  { name: "Docker", icon: LayoutDashboard },
  { name: "Linux", icon: LayoutDashboard },
  { name: "GraphQL", icon: LayoutDashboard },
  { name: "REST API", icon: LayoutDashboard },
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
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Engineer in Information Technologies and Digital Business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-3">
              Jesus D'mitri Medina Novelo
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I am an engineer in Information Technologies and Digital Business with a strong passion for technology, software development, and web solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I have experience with various programming languages and frameworks, having worked on both personal and professional web projects. I’m driven by continuous learning and professional growth, always seeking new challenges that allow me to apply my skills and expand my knowledge.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="inline-flex items-center">
                  <FileText className="mr-2 h-4 w-4" /> Download CV
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
            <h3 className="text-lg font-bold mb-6">My Technologies</h3>
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
          <h3 className="text-3xl font-bold mb-12 text-left">WORK EXPERIENCE</h3>
          <div className="space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-gray-700 dark:text-gray-300">
                Feb 2023 — Jan 2024
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  IT Support Intern | Universidad Anáhuac Mayab
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-justify">
                  Provided IT support through the DTI chat and in-person assistance with equipment. Helped resolve email issues, manage support tickets, and troubleshoot technical problems.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-gray-700 dark:text-gray-300">
                Jan 2024 — Dec 2024
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  Web Developer, Maintenance and Support | Diario de Yucatán
                </h4>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-justify">
                  <p>
                    I helped create the website for the Diario de Yucatán Consultation Center portal, working on both the frontend and backend using web technologies such as Nuxt, Vuetify, MongoDB, and JS.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-gray-700 dark:text-gray-300">
                Jan 2025 — March 2025
              </div>
              <div className="md:col-span-2">
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-justify">
                  <p>
                    I managed the maintenance and optimization of the Consultation Center's web portal, improving performance, correcting errors, and updating content to ensure an optimal user experience.
                  </p>
                  <p>
                    Implemented performance improvements, bug fixes, and content updates to ensure proper functionality and a better user experience.
                  </p>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-gray-700 dark:text-gray-300">
                April 2025 — July 2025
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  API & Software Developer | Diario de Yucatán
                </h4>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-justify">
                  <p>
                    I developed an automated accounting system (Python + Algebraix API) integrating ChatGPT API to generate intelligent monthly summaries, optimizing financial control and decision-making at Unimedia.
                  </p>
                  <p>
                    I implemented e-commerce integrations with the WooCommerce API and ElevenLabs, automating order creation and purchase summaries on the Club del Diario de Yucatán portal, improving efficiency and user experience.
                  </p>
                  <p>
                    I built an intelligent subscription chatbot with the ChatGPT API, integrated with Zoho CRM and Zoho SalesIQ, which enabled subscription acquisition, purchase management, and automated support for Diario de Yucatán.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
          <div className="border-l-2 border-primary pl-6 space-y-8">
            <div>
              <div className="text-primary font-semibold">Aug 2020 - Dec 2024</div>
              <div className="font-bold text-lg mt-1">Universidad Anáhuac Mayab</div>
              <p className="text-gray-700 dark:text-gray-300">
                Bachelor’s Degree in Information Technology and Digital Business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
