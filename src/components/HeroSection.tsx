
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code2 } from "lucide-react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 pb-12 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 animate-fade-in-right">
            <div>
              <p className="text-primary font-medium mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Hello, I'm Jesus D'mitri Medina Novelo
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <span className="text-primary">AI Software Engineer & Full Stack</span> Developer
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Link to="projects" smooth={true} duration={800}>
                <Button size="lg" className="text-md px-8">
                  View Projects
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={1000}>
                <Button variant="outline" size="lg" className="text-md px-8">
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <Code2 className="relative h-64 w-64 lg:h-80 lg:w-80 text-primary animate-pulse-slow" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-24 animate-bounce">
          <Link to="projects" smooth={true} duration={800} className="cursor-pointer">
            <ArrowDown className="h-8 w-8 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
