
import React from "react";
import ContactInfo from "./contact/ContactInfo";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Contact Me</span>
          </h2>
        </div>

        <div className="flex justify-center">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
