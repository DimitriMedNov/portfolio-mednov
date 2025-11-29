"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", to: "hero" },
        { name: "Projects", to: "projects" },
        { name: "About", to: "about" },
        { name: "Contact", to: "contact" },
    ];

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/DimitriMedNov", label: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/jdmtmednov82/", label: "LinkedIn" },
        { icon: <Mail className="w-5 h-5" />, href: "mailto:mednov@outlook.es", label: "Email" },
    ];

    // Clases reutilizables para el hover visible (light + dark)
    const itemClasses =
        "px-3 py-1 rounded-md text-gray-700 hover:text-primary hover:bg-black/5 " +
        "dark:text-gray-300 dark:hover:text-primary dark:hover:bg-white/10 " +
        "transition-colors cursor-pointer font-medium text-sm " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

    return (
        <header
            className={`fixed top-0 w-full z-[1000] pointer-events-auto transition-all duration-300 ${
                scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 font-bold text-xl">
                        {isHome ? (
                            <ScrollLink to="hero" smooth={true} duration={500} className={`${itemClasses} inline-flex items-center`}>
                                <span className="text-primary">Dev</span>MedNov
                            </ScrollLink>
                        ) : (
                            <RouterLink to="/#hero" className={`${itemClasses} inline-flex items-center`}>
                                <span className="text-primary">Dev</span>MedNov
                            </RouterLink>
                        )}
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) =>
                            item.name === "About" ? (
                                <RouterLink key={item.name} to="/about" className={itemClasses}>
                                    {item.name}
                                </RouterLink>
                            ) : isHome ? (
                                <ScrollLink key={item.name} to={item.to} smooth={true} duration={500} className={itemClasses}>
                                    {item.name}
                                </ScrollLink>
                            ) : (
                                <RouterLink key={item.name} to={`/#${item.to}`} className={itemClasses}>
                                    {item.name}
                                </RouterLink>
                            )
                        )}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-black/5
                           dark:text-gray-400 dark:hover:text-primary dark:hover:bg-white/10
                           transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-black/5
                         dark:text-gray-300 dark:hover:text-primary dark:hover:bg-white/10
                         transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                    <div className="flex flex-col space-y-2 pb-4">
                        {navItems.map((item) =>
                            item.name === "About" ? (
                                <RouterLink
                                    key={item.name}
                                    to="/about"
                                    onClick={() => setIsOpen(false)}
                                    className={itemClasses}
                                >
                                    {item.name}
                                </RouterLink>
                            ) : isHome ? (
                                <ScrollLink
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className={itemClasses}
                                >
                                    {item.name}
                                </ScrollLink>
                            ) : (
                                <RouterLink
                                    key={item.name}
                                    to={`/#${item.to}`}
                                    onClick={() => setIsOpen(false)}
                                    className={itemClasses}
                                >
                                    {item.name}
                                </RouterLink>
                            )
                        )}

                        <div className="flex space-x-2 pt-2">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-black/5
                             dark:text-gray-400 dark:hover:text-primary dark:hover:bg-white/10
                             transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
