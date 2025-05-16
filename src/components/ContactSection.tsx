
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensaje enviado correctamente. Te contactaré pronto.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
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

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Contacta</span> Conmigo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto interesante? Estoy disponible para trabajar en
            nuevos desafíos. Contáctame y hablemos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
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

            <div className="mt-12">
              <h3 className="font-semibold text-lg mb-4">Horario Laboral</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Lunes - Viernes: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Fines de semana: Sólo con cita previa
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-6">Envíame un mensaje</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto de tu mensaje"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
