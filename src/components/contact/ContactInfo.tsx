
import React from "react";
import { Mail, Phone } from "lucide-react";

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
    content: "mednov@outlook.es",
    link: "mailto:mednov@outlook.es",
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    title: "Phone",
    content: "+52 (999) 359-0366",
    link: "tel:+529993590366",
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
