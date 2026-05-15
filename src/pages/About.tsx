
import React from "react";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Code, FileCode, LayoutDashboard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  { name: "Zoho CRM", icon: LayoutDashboard },
  { name: "Zoho Marketing", icon: LayoutDashboard },
  { name: "Zoho Campaigns", icon: LayoutDashboard },
  { name: "Zoho SalesIQ", icon: LayoutDashboard },
  { name: "Zoho Sites", icon: LayoutDashboard },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Engineer in Information Technologies and Digital Business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-3">
                Jesus D'mitri Medina Novelo
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                I’m a Full Stack Software Engineer focused on building AI-powered platforms, workflow automation systems, and scalable backend solutions for real-world business operations.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                My experience includes developing intelligent systems using Python, React, APIs, OCR, and LLM integrations to automate processes, optimize workflows, and improve user experience across enterprise environments.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <a href="https://github.com/DimitriMedNov" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/jdmtmednov82" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-gray-700 dark:text-gray-300">
                  August 2025 — September 2025
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700 dark:text-gray-300 text-justify">
                    I developed an integration between WordPress/WooCommerce and the Zoho Marketing Automation API to automatically connect new subscribers to the corresponding marketing lists in Zoho, implementing real-time synchronization of purchase and profile data while applying tags based on WooCommerce purchase behavior and product type. This automation improved segmentation accuracy, streamlined campaign orchestration, and eliminated manual data entry for the marketing team.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-gray-700 dark:text-gray-300">
                  October 2025 — November 2025
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700 dark:text-gray-300 text-justify">
                    I developed an intelligent chatbot using Chatbase for the Empléate.app platform. The bot helps users create accounts, apply for jobs, and find employment opportunities through natural conversation powered by Anthropic Claude 4.5 Haiku. It also detects job offers promoted through ads, automatically recognizing the position and applying on behalf of the user without requiring them to visit the website, significantly enhancing user experience and conversion rates.
                  </p>
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
                  Bachelor's Degree in Information Technology and Digital Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
