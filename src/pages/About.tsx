
import React from "react";
import { Card } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const techCategories = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Nuxt", "Tailwind CSS", "Vite", "shadcn/ui"],
  },
  {
    title: "Backend & APIs",
    items: ["FastAPI", "Flask", "Django", "REST APIs", "GraphQL"],
  },
  {
    title: "AI & Automation",
    items: ["OpenAI API", "LangChain", "OCR", "AI Agents", "Workflow Automation", "LLM Integrations"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["AWS", "Docker", "Linux"],
  },
  {
    title: "Tools & Engineering",
    items: ["Git", "GitHub"],
  },
  {
    title: "Enterprise & Integrations",
    items: ["Zoho Ecosystem", "CRM Integrations", "API Integrations"],
  },
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
              <p className="text-gray-700 dark:text-gray-300">
                I enjoy working on products where technology solves complex operational challenges, especially in areas involving AI, automation, integrations, and scalable software architecture. I’m constantly learning, adapting to new technologies, and looking for opportunities to build impactful solutions.
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
              <div className="space-y-5">
                {techCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <Badge key={item} variant="secondary" className="text-sm font-normal">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold mb-12 text-left">WORK EXPERIENCE</h3>
            <div className="space-y-12">
              {[
                {
                  date: "Feb 2026 — Present",
                  title: "Head of Information Technology",
                  company: "Diprolam | México",
                  bullets: [
                    "Led full technological operations of the company, ensuring high system availability and infrastructure reliability.",
                    "Developed full-stack applications to automate inventory and purchase order processes, significantly reducing operational workload.",
                    "Implemented software solutions to optimize engineering workflows, improving data accuracy.",
                    "Designed and implemented cybersecurity policies and disaster recovery plans (DRP) to protect critical assets.",
                  ],
                  tech: ["Python", "Flask", "PostgreSQL", "Tailwind CSS", "Linux", "Docker", "AWS", "DigitalOcean", "SQL", "Networking"],
                },
                {
                  date: "Jan 2025 — Feb 2026",
                  title: "AI & API Software Developer",
                  company: "Diario de Yucatán | Mérida",
                  bullets: [
                    "Developed an automated accounting receipt system in Python, eliminating manual processes and improving operational efficiency.",
                    "Integrated AI models (ChatGPT API) to generate automated financial summaries, supporting decision-making.",
                    "Implemented integrations between WooCommerce, Zoho CRM, and ElevenLabs, automating sales and marketing workflows.",
                    "Designed chatbots for customer acquisition and support, reducing team workload.",
                    "Automated real-time data synchronization across platforms, improving consistency and availability.",
                  ],
                  tech: ["Python", "OpenAI API", "ChatGPT API", "REST APIs", "WooCommerce API", "Zoho CRM", "Zoho SalesIQ", "Zoho Marketing Automation", "ElevenLabs", "Algebraix API", "JavaScript"],
                },
                {
                  date: "Jan 2024 — Dec 2024",
                  title: "Web Developer",
                  company: "Diario de Yucatán | Mérida",
                  bullets: [
                    "Developed an intelligent chatbot for Empléate.app, automating registration and application processes, improving user experience.",
                    "Implemented AI-based automation to detect promoted job vacancies and assist applications, increasing conversion rates.",
                    "Led development and improvement of the Hemeroteca portal, integrating AI features for optimized search and historical content access.",
                    "Implemented OCR-based intelligent search, improving document information retrieval.",
                    "Optimized performance and stability of web platforms, reducing errors and improving load times.",
                  ],
                  tech: ["Nuxt", "Vue.js", "Vuetify", "MongoDB", "JavaScript", "OCR", "AI", "Chatbase", "Anthropic Claude", "REST APIs", "HTML", "CSS", "WordPress", "WooCommerce", "Zoho"],
                },
                {
                  date: "Sep 2023 — Jan 2024",
                  title: "Software Engineering Intern",
                  company: "Universidad Anáhuac Mayab | Mérida",
                  bullets: [
                    "Contributed to the development of institutional web applications using React, TypeScript, and Nuxt.",
                    "Participated in the development of the Consultation Center portal, improving features and user experience.",
                    "Implemented performance improvements and continuous maintenance on web platforms.",
                  ],
                  tech: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
                },
                {
                  date: "Feb 2023 — Sep 2023",
                  title: "Technical Support / Bot Developer",
                  company: "Universidad Anáhuac Mayab | Mérida",
                  bullets: [
                    "Provided technical support resolving user issues through ticketing systems and direct assistance.",
                    "Developed a Discord bot using Python and OpenAI API for automation and community management.",
                    "Improved response times and efficiency in technical problem resolution.",
                  ],
                  tech: ["Python", "OpenAI API", "Discord Bot", "REST APIs", "Git", "Ticketing Systems"],
                },
              ].map((job) => (
                <div key={job.title + job.date} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-gray-700 dark:text-gray-300">{job.date}</div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {job.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{job.company}</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      {job.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs font-normal">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
