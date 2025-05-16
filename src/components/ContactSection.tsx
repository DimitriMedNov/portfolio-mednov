
import React from "react";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Contáctame</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto interesante? Estoy disponible para trabajar en
            nuevos desafíos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
