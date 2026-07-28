import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", hash: "hero" },
  { name: "Projects", hash: "projects" },
  { name: "About", path: "/about" },
  { name: "Contact", hash: "contact" },
];

const socialLinks = [
  { Icon: Github, href: "https://github.com/DimitriMedNov", label: "GitHub", external: true },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/jdmtmednov82/", label: "LinkedIn", external: true },
  { Icon: Mail, href: "mailto:mednov@outlook.es", label: "Email", external: false },
];

const itemClasses =
  "px-3 py-1 rounded-md text-gray-700 hover:text-primary hover:bg-black/5 " +
  "dark:text-gray-300 dark:hover:text-primary dark:hover:bg-white/10 " +
  "transition-colors cursor-pointer font-medium text-sm " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = window.location.pathname;
  const isHome = pathname === "/";

  useEffect(() => {
    let frameId = 0;
    const updateScrollState = () => {
      frameId = 0;
      const nextScrolled = window.scrollY > 50;
      setScrolled((current) => current === nextScrolled ? current : nextScrolled);
    };
    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const sectionHref = (hash: string) => isHome ? `#${hash}` : `/#${hash}`;

  return (
    <header
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href={sectionHref("hero")} className={`${itemClasses} inline-flex items-center text-xl font-bold`}>
            <span className="text-primary">Dev</span>MedNov
          </a>

          <nav className="hidden md:flex items-center space-x-2" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path ?? sectionHref(item.hash!)}
                className={itemClasses}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {socialLinks.map(({ Icon, external, ...link }) => (
              <a
                key={link.label}
                href={link.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-black/5 dark:text-gray-400 dark:hover:text-primary dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-label={link.label}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-black/5 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 py-4 visible" : "max-h-0 opacity-0 overflow-hidden invisible"
          }`}
        >
          <div className="flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path ?? sectionHref(item.hash!)}
                onClick={() => setIsOpen(false)}
                className={itemClasses}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-2 pt-2">
              {socialLinks.map(({ Icon, external, ...link }) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="p-2 rounded-md text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  aria-label={link.label}
                  tabIndex={isOpen ? 0 : -1}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
