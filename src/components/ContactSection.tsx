
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
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Do you have an interesting project? I'm available to work on new challenges.
          </p>
        </div>

        <div className="flex justify-center">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
