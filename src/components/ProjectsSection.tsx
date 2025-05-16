
import React from "react";
import { projects } from "@/data/projects";
import ProjectCarousel from "./projects/ProjectCarousel";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My  <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my most outstanding work in web development and applications.
          </p>
        </div>

        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
