
## Update Work Experience on `src/pages/About.tsx`

Replace the current 6 entries with the 5 roles from the CV, keeping the existing layout (date column on the left, role + bullets on the right, "WORK EXPERIENCE" header). Add a new "Technologies" line per role styled with Badges to match the Technologies card vibe.

### New entries (newest → oldest)

1. **Head of Information Technology** — Diprolam | México — Feb 2026 – Present
   - Led full technological operations of the company, ensuring high system availability and infrastructure reliability.
   - Developed full-stack applications to automate inventory and purchase order processes, significantly reducing operational workload.
   - Implemented software solutions to optimize engineering workflows, improving data accuracy.
   - Designed and implemented cybersecurity policies and disaster recovery plans (DRP) to protect critical assets.
   - Tech: Python, Flask, PostgreSQL, Tailwind CSS, Linux, Docker, AWS, DigitalOcean, SQL, Networking

2. **AI & API Software Developer** — Diario de Yucatán | Mérida — Jan 2025 – Feb 2026
   - Developed an automated accounting receipt system in Python, eliminating manual processes and improving operational efficiency.
   - Integrated AI models (ChatGPT API) to generate automated financial summaries, supporting decision-making.
   - Implemented integrations between WooCommerce, Zoho CRM, and ElevenLabs, automating sales and marketing workflows.
   - Designed chatbots for customer acquisition and support, reducing team workload.
   - Automated real-time data synchronization across platforms, improving consistency and availability.
   - Tech: Python, OpenAI API, ChatGPT API, REST APIs, WooCommerce API, Zoho CRM, Zoho SalesIQ, Zoho Marketing Automation, ElevenLabs, Algebraix API, JavaScript

3. **Web Developer** — Diario de Yucatán | Mérida — Jan 2024 – Dec 2024
   - Developed an intelligent chatbot for Empléate.app, automating registration and application processes, improving user experience.
   - Implemented AI-based automation to detect promoted job vacancies and assist applications, increasing conversion rates.
   - Led development and improvement of the Hemeroteca portal, integrating AI features for optimized search and historical content access.
   - Implemented OCR-based intelligent search, improving document information retrieval.
   - Optimized performance and stability of web platforms, reducing errors and improving load times.
   - Tech: Nuxt, Vue.js, Vuetify, MongoDB, JavaScript, OCR, AI, Chatbase, Anthropic Claude, REST APIs, HTML, CSS, WordPress, WooCommerce, Zoho

4. **Software Engineering Intern** — Universidad Anáhuac Mayab | Mérida — Sep 2023 – Jan 2024
   - Contributed to the development of institutional web applications using React, TypeScript, and Nuxt.
   - Participated in the development of the Consultation Center portal, improving features and user experience.
   - Implemented performance improvements and continuous maintenance on web platforms.
   - Tech: React, TypeScript, JavaScript, HTML, CSS

5. **Technical Support / Bot Developer** — Universidad Anáhuac Mayab | Mérida — Feb 2023 – Sep 2023
   - Provided technical support resolving user issues through ticketing systems and direct assistance.
   - Developed a Discord bot using Python and OpenAI API for automation and community management.
   - Improved response times and efficiency in technical problem resolution.
   - Tech: Python, OpenAI API, Discord Bot, REST APIs, Git, Ticketing Systems

### Design notes
- Keep the existing 3-column grid (date | content) layout already used in About.tsx.
- Render bullets with a `<ul className="list-disc pl-5 space-y-2">`.
- Render the "Technologies" line as a small label + flex-wrap of `<Badge variant="secondary">`, matching the My Technologies card.
- Add the company subtitle (e.g. "Diario de Yucatán | Mérida") in muted text under the role title.
- No changes to other sections.
