
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileCode2 } from "lucide-react";
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
                Hola, soy Jesus D'mitri Medina Novelo
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <span className="text-primary">Desarrollador</span> Frontend
              </h1>
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
            <div className="absolute inset-8 bg-gray-900 dark:bg-gray-800 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
              <div className="terminal-container">
                <div className="terminal-header">
                  <div className="terminal-buttons">
                    <span className="terminal-btn red"></span>
                    <span className="terminal-btn yellow"></span>
                    <span className="terminal-btn green"></span>
                  </div>
                  <div className="terminal-title">frontend.jsx</div>
                </div>
                <div className="terminal-body animate-pulse-code">
                  <pre className="terminal-code">
                    <span className="terminal-purple">const</span> <span className="terminal-blue">Developer</span> <span className="terminal-white">=</span> <span className="terminal-yellow">()</span> <span className="terminal-white">=&gt;</span> <span className="terminal-yellow">{'{'}</span>
                    <br/><span className="terminal-indent"></span><span className="terminal-purple">return</span> <span className="terminal-yellow">(</span>
                    <br/><span className="terminal-indent terminal-indent-2"></span><span className="terminal-pink">&lt;div</span> <span className="terminal-green">className</span><span className="terminal-white">=</span><span className="terminal-orange">"portfolio"</span><span className="terminal-pink">&gt;</span>
                    <br/><span className="terminal-indent terminal-indent-3"></span><span className="terminal-cyan">// Creative code here</span>
                    <br/><span className="terminal-indent terminal-indent-2"></span><span className="terminal-pink">&lt;/div&gt;</span>
                    <br/><span className="terminal-indent"></span><span className="terminal-yellow">)</span><span className="terminal-white">;</span>
                    <br/><span className="terminal-yellow">{'}'}</span><span className="terminal-white">;</span>
                  </pre>
                </div>
              </div>
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
