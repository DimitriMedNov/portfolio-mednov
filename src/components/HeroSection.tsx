
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 pb-12 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 animate-fade-in-right">
            <div>
              <p className="text-primary font-medium mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Hola, soy
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <span className="text-primary">Desarrollador</span> Frontend
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                Especializado en crear experiencias web excepcionales con interfaces
                modernas y atractivas que destacan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Link to="projects" smooth={true} duration={800}>
                <Button size="lg" className="text-md px-8">
                  Ver proyectos
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={1000}>
                <Button variant="outline" size="lg" className="text-md px-8">
                  Contacto
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 relative aspect-square max-w-md w-full animate-fade-in">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-primary/50 to-blue-600/50 rounded-full animate-pulse" style={{ animationDuration: "5s" }}></div>
            <div className="absolute inset-8 bg-white dark:bg-gray-800 rounded-full overflow-hidden flex items-center justify-center">
              <div className="text-8xl font-bold text-primary/20">&lt;/&gt;</div>
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
