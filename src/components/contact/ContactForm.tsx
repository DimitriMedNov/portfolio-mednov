
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Credenciales reales de EmailJS
const SERVICE_ID = 'service_c6h332c';
const PUBLIC_KEY = 'CU2Nrne_YrSp8R0c0'; // Actualizado con la clave pública correcta

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    // Configurar los parámetros del email directamente
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Destinatario", // Puedes personalizar según necesites
    };

    // Enviar el email usando EmailJS sin plantilla predefinida
    emailjs.send(
      SERVICE_ID,
      'email_direct', // Valor genérico ya que no usamos plantilla específica
      templateParams,
      PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email enviado con éxito:', result.text);
      toast.success("Mensaje enviado correctamente. Te contactaré pronto.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error('Error al enviar email:', error.text);
      toast.error("Error al enviar el mensaje. Inténtalo de nuevo más tarde.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <Card className="p-6 shadow-md border border-gray-100">
      <h3 className="font-semibold text-xl mb-6">Envíame un mensaje</h3>
      <form ref={formRef} onSubmit={handleSubmit}>
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
              className="border-gray-200"
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
              className="border-gray-200"
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
            className="border-gray-200"
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
            className="border-gray-200"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : (
            <>
              Enviar Mensaje
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
