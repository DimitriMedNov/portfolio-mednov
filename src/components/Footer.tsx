import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const pathname = window.location.pathname;
  const isHome = pathname === "/";
  const sectionHref = (hash: string) => isHome ? `#${hash}` : `/#${hash}`;
  const navItems = [
    { name: "Home", href: sectionHref("hero") },
    { name: "Projects", href: sectionHref("projects") },
    { name: "About", href: "/about" },
    { name: "Contact", href: sectionHref("contact") },
  ];
  const socialLinks = [
    { Icon: Github, href: "https://github.com/DimitriMedNov", label: "GitHub", external: true },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/jdmtmednov82/", label: "LinkedIn", external: true },
    { Icon: Mail, href: "mailto:mednov@outlook.es", label: "Email", external: false },
  ];

  return (
    <footer className="relative z-[900] bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href={sectionHref("hero")} className="text-2xl font-bold inline-block mb-4">
              <span className="text-primary">Dev</span>MedNov
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Full stack engineer building AI-powered platforms, automation systems, and scalable backend solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, external, ...link }) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-gray-400 hover:text-primary transition rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="font-semibold text-lg mb-4">Links</h2>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-primary transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-semibold text-lg mb-4">Contact</h2>
            <a className="text-gray-400 hover:text-primary transition" href="mailto:mednov@outlook.es">
              mednov@outlook.es
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dimitri MedNov. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
