---
name: emailjs-contact-forms
description: Endurece y valida el formulario de contacto EmailJS del portafolio (ContactForm.tsx). Úsala al tocar el formulario, las credenciales EmailJS, validación, estados de envío o accesibilidad del envío.
---

# emailjs-contact-forms

Skill específica para [src/components/contact/ContactForm.tsx](../../../src/components/contact/ContactForm.tsx), que envía correo **client-side** con `@emailjs/browser`. No hay backend: el envío ocurre en el navegador del visitante.

## Estado actual del código

- `SERVICE_ID = 'service_c6h332c'`, template `'email_direct'`, `PUBLIC_KEY = 'nBpohfI7B9ADFkEJcZUsp'` están **hardcodeados** como constantes. La PUBLIC KEY de EmailJS es de exposición pública por diseño (no es secreta), así que esto es aceptable — **no** la trates como secreto ni la muevas a un backend.
- `templateParams`: `from_name`, `from_email`, `subject`, `message`, `to_name`. Deben coincidir con las variables del template `email_direct` en el panel de EmailJS.
- Validación actual: solo `required` de HTML + `type="email"`. No hay honeypot, ni rate-limit, ni feedback accesible más allá de toasts `sonner`.
- Estado: `isSubmitting` deshabilita el botón; éxito/error vía `toast.success` / `toast.error`.

## Checklist

### Correctitud / robustez
- [ ] Las 5 variables de `templateParams` existen en el template `email_direct` (un nombre mal escrito = correo vacío sin error visible).
- [ ] `emailjs.send` envuelto en try/catch o `.catch` (✅ ya tiene `.catch`).
- [ ] `setIsSubmitting(false)` siempre se ejecuta (✅ en `.finally`). Pero hay un `return` temprano en `if (!formRef.current) return;` (línea 41) **después** de `setIsSubmitting(true)` → si `formRef` es null, el botón queda colgado en "Sending...". Mover el guard antes del `setIsSubmitting(true)`.
- [ ] Validación de email con regex antes de enviar (evita gastar cuota de EmailJS en correos basura).

### Anti-spam (sin backend)
- [ ] Honeypot: campo oculto (`<input className="hidden" tabIndex={-1} autoComplete="off">`); si llega lleno, abortar silenciosamente.
- [ ] Rate-limit simple en cliente: deshabilitar reenvío durante N segundos tras un envío exitoso.

### Accesibilidad del formulario
- [ ] Cada `<label htmlFor>` casa con el `id` del input (✅ ya correcto).
- [ ] Región `aria-live="polite"` para anunciar éxito/error a lectores de pantalla (los toasts `sonner` no siempre se anuncian).
- [ ] `aria-busy={isSubmitting}` en el `<form>`.

## Criterios de aceptación

1. Si `formRef.current` es null, el botón **no** queda atascado en "Sending..." (guard movido antes de `setIsSubmitting(true)`).
2. Un email inválido se rechaza en cliente antes de llamar a `emailjs.send`.
3. Existe honeypot y un envío con el honeypot lleno no llama a EmailJS.
4. Éxito y error se comunican por toast **y** por una región `aria-live`.
5. `PUBLIC_KEY` permanece como constante client-side (no se "esconde" en un .env como si fuera secreto — eso da falsa seguridad en un build estático).
6. `npm run build` y `npm run lint` pasan.

## Ejemplo aplicable (guard + honeypot + validación)

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!formRef.current) return;            // guard ANTES de setIsSubmitting
  if (formData.website) return;            // honeypot lleno -> bot, abortar
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    toast.error("Introduce un email válido.");
    return;
  }
  setIsSubmitting(true);
  emailjs.send(SERVICE_ID, 'email_direct', templateParams, PUBLIC_KEY)
    // ...resto igual
};
```

```tsx
{/* Honeypot: invisible para humanos, tentador para bots */}
<input
  type="text" name="website" tabIndex={-1} autoComplete="off"
  value={formData.website} onChange={handleChange}
  className="hidden" aria-hidden="true"
/>
```

## Cómo trabajar
1. Lee `ContactForm.tsx` completo.
2. Confirma los nombres de variables contra el template EmailJS si el usuario tiene acceso al panel.
3. Aplica el guard primero (es un bug real), luego honeypot/validación/aria-live.
4. Prueba un envío real y uno con email inválido.
