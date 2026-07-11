// Main work — real client / contract projects, rendered as full detail cards.
// Add an `image` path (e.g. "/projects/ensight.png" in /public) to show a
// thumbnail banner; cards gracefully fall back to text-only when `image` is "".
export const projects = [
  {
    id: 1,
    name: "Ensight Global Consultancy",
    description: "Consultancy website rebuilt on a headless WordPress CMS",
    details:
      "Rebuilt the company's consultancy website from the ground up using Next.js and WordPress (Headless CMS). Implemented a modern, high-performance frontend with server-side rendering (SSR) and an optimized SEO structure. Integrated WordPress as a headless backend so non-technical staff can manage content, and designed a scalable component architecture for faster feature updates.",
    repo: "https://github.com/Meargteame/senior-homecare-consultancy",
    live: "https://senior-homecare-consultancy.vercel.app",
    tag: "CONSULTANCY",
    wip: false,
    image: "",
    tech: "Next.js · Headless WordPress · SSR · SEO",
  },
  {
    id: 2,
    name: "Torra Parking",
    description: "Parking management platform with booking and an admin dashboard",
    details:
      "Parking management web app built with Next.js and TypeScript. Features parking-space listings, a booking flow, and an admin dashboard for managing availability and reservations, with a responsive design across devices.",
    repo: "https://github.com/Meargteame/torra-parking",
    live: "https://torra-parking.vercel.app",
    tag: "SAAS · BOOKING",
    wip: false,
    image: "",
    tech: "Next.js · TypeScript",
  },
  {
    id: 3,
    name: "E-commerce Platform",
    description: "Full-stack store with cart, checkout, and admin dashboard",
    details:
      "Full-stack e-commerce platform with product management, shopping cart, checkout, and an admin dashboard. Built with a React frontend and a Node.js backend, with TypeScript across the stack.",
    repo: "https://github.com/Meargteame/ecommerce-web",
    live: "https://ecommerce-web-e5iy.vercel.app",
    tag: "E-COMMERCE",
    wip: false,
    image: "",
    tech: "React · Node.js · TypeScript",
  },
  {
    id: 4,
    name: "Yaricho Senior Home Care",
    description: "Marketing & services website for a senior home-care provider",
    details:
      "Senior home-care website built with Next.js and TypeScript. Features service listings, contact forms, and a responsive design optimized for viewing across devices.",
    repo: "https://github.com/Meargteame/yaricho-senior-home-care",
    live: "https://yaricho-senior-home-care.vercel.app",
    tag: "HEALTHCARE",
    wip: false,
    image: "",
    tech: "Next.js · TypeScript",
  },
];

// Personal products & side projects — rendered as a compact card grid.
export const moreProjects = [
  {
    id: 5,
    name: "Meridian AI",
    repo: "https://github.com/Meargteame/careerguide-ai",
    live: "https://meridian-beta-coral.vercel.app",
    tech: "React · TypeScript · Supabase · Gemini",
  },
  {
    id: 6,
    name: "TrustGrid Ethiopia",
    repo: "https://github.com/Meargteame/trustgrid-ethiopia",
    live: "https://trustgrid.vercel.app",
    tech: "React · TypeScript · Supabase · Gemini",
  },
  {
    id: 7,
    name: "Create4Me",
    repo: "https://github.com/Meargteame/create4me",
    live: "https://create4me.vercel.app",
    tech: "MERN · MongoDB · Express",
  },
  {
    id: 8,
    name: "Neurofeedback MVP",
    repo: "https://github.com/Meargteame/neurofeedback-mvp",
    live: "https://neurofeedback-mvp.vercel.app",
    tech: "Next.js · Express · SQLite",
  },
];
