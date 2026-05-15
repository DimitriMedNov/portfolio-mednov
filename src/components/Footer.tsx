"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            href: "https://github.com/DimitriMedNov",
            label: "GitHub",
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://www.linkedin.com/in/jdmtmednov82/",
            label: "LinkedIn",
        },
        {
            icon: <Mail className="w-5 h-5" />,
            href: "mailto:mednov@outlook.es",
            label: "Email",
        },
    ];

    const navItems = [
        { name: "Home", to: "hero" },
        { name: "Projects", to: "projects" },
        { name: "About", to: "about" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <footer className="relative z-[900] bg-gray-900 text-white py-12 px-4 pointer-events-auto">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div className="md:col-span-2">
                        {isHome ? (
                            <ScrollLink
                                to="hero"
                                smooth={true}
                                duration={500}
                                className="text-2xl font-bold cursor-pointer inline-block mb-4"
                            >
                                <span className="text-primary">Dev</span>MedNov
                            </ScrollLink>
                        ) : (
                            <RouterLink
                                to="/#hero"
                                className="text-2xl font-bold cursor-pointer inline-block mb-4"
                            >
                                <span className="text-primary">Dev</span>MedNov
                            </RouterLink>
                        )}

                        <p className="text-gray-400 mb-6 max-w-md">
                            Full stack engineer building AI-powered platforms, automation
                            systems, and scalable backend solutions for real-world business
                            operations.
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

                    {/* Links de navegación */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Links</h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    {item.name === "About" ? (
                                        <RouterLink
                                            to="/about"
                                            className="text-gray-400 hover:text-primary transition cursor-pointer"
                                        >
                                            {item.name}
                                        </RouterLink>
                                    ) : isHome ? (
                                        <ScrollLink
                                            to={item.to}
                                            smooth={true}
                                            duration={500}
                                            className="text-gray-400 hover:text-primary transition cursor-pointer"
                                        >
                                            {item.name}
                                        </ScrollLink>
                                    ) : (
                                        <RouterLink
                                            to={`/#${item.to}`}
                                            className="text-gray-400 hover:text-primary transition cursor-pointer"
                                        >
                                            {item.name}
                                        </RouterLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>mednov@outlook.es</li>
                            <li>+52 (999) 359-0366</li>
                        </ul>
                    </div>
                </div>

                {/* Línea final opcional */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    © {currentYear} DevMedNov. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
