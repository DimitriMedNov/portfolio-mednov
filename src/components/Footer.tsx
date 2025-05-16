
import React from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:contacto@ejemplo.com", label: "Email" },
  ];

  const navItems = [
    { name: "Inicio", to: "hero" },
    { name: "Proyectos", to: "projects" },
    { name: "Acerca", to: "about" },
    { name: "Contacto", to: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold cursor-pointer inline-block mb-4"
            >
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Desarrollador frontend especializado en crear experiencias web 
              excepcionales con interfaces modernas y atractivas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Ciudad de México, México</li>
              <li>contacto@ejemplo.com</li>
              <li>+1 (234) 567-8901</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} DevPortfolio. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Diseñado y desarrollado con pasión
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
