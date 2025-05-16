
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

type ContactInfoItem = {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
};

const contactInfoItems: ContactInfoItem[] = [
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    title: "Email",
    content: "contacto@ejemplo.com",
    link: "mailto:contacto@ejemplo.com",
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    title: "Teléfono",
    content: "+1 (234) 567-8901",
    link: "tel:+12345678901",
  },
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    title: "Ubicación",
    content: "Ciudad de México, México",
    link: "https://maps.google.com",
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {contactInfoItems.map((item, index) => (
        <div key={index} className="flex items-start">
          <div className="mr-4 mt-1">{item.icon}</div>
          <div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              {item.content}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
