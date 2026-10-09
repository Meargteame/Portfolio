import betterformImg from "../assets/betterform.png";
import betterformLogo from "../assets/betterform-logo.svg";
import torraRealestateImg from "../assets/torra-realstate.webp";
import yarichoHomeCareImg from "../assets/yaricho-senior-home-care.webp";
import ensightImg from "../assets/egc.webp";
import create4meImg from "../assets/create4me.png";
import trustgridImg from "../assets/trustgrid.png";
import leonsLabLogo from "../assets/leons_lab_logo.jpg";
import ensightLogo from "../assets/ensight_global_consultancy.jpg";

export const projects = [
  {
    id: 1,
    name: "BetterForm",
    logo: betterformLogo,
    role: "Full-Stack Developer & Product Designer",
    tagline: "Minimalist Job Application Builder & Applicant Tracking System",
    description:
      "A minimalist job application builder and applicant tracking system (ATS) inspired by Swiss editorial typography (Ink, Paper, Signal Green), engineered for modern hiring workflows.",
    highlights: [
      "Built a minimalist job application builder and applicant tracking system (ATS) inspired by Swiss editorial typography (Ink, Paper, Signal Green).",
      "Designed a zero-friction applicant flow where candidates submit custom forms and CV attachments without mandatory account creation.",
      "Implemented a dedicated 3-stage candidate pipeline (Applied, Shortlisted, Rejected) with status transitions, recruiter notes, and UTF-8 CSV spreadsheet exports.",
      "Created an embeddable iframe code generator enabling companies to drop BetterForm applications directly onto Webflow, WordPress, or custom sites.",
      "Engineered a resilient backend on Express and MongoDB Atlas supporting JWT auth, file upload validation, and webhook dispatching for external ATS/Slack integration.",
    ],
    repo: "https://github.com/Meargteame/jobform",
    live: "https://betterform.leonslab.tech",
    tag: "SAAS · ATS & FORM BUILDER",
    image: betterformImg,
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Tailwind CSS",
      "Render",
      "Vercel",
    ],
  },
  {
    id: 2,
    name: "Create4Me",
    logo: leonsLabLogo,
    tagline: "Creator Marketplace & Influencer Booking SaaS",
    description:
      "A two-sided marketplace connecting brands with verified content creators. Features transparent rate cards, deliverable tracking, and automated escrow payments via Telebirr & CBE.",
    repo: "https://github.com/Meargteame/create4me",
    live: "https://create4me.leonslab.tech",
    tag: "SAAS · MARKETPLACE",
    image: create4meImg,
    tech: ["React", "TypeScript", "Node.js", "Express", "Telebirr Escrow"],
  },
  {
    id: 3,
    name: "TrustGrid",
    logo: leonsLabLogo,
    tagline: "Cryptographic Social Proof & Verification Wall",
    description:
      "A trust verification platform turning authentic client reviews into embeddable proof widgets verified via Telegram identity. Built with PostgreSQL Row-Level Security (RLS).",
    repo: "https://github.com/Meargteame/trustgrid-ethiopia",
    live: "https://trustgrid.leonslab.tech/",
    tag: "SAAS · SECURITY",
    image: trustgridImg,
    tech: ["Next.js", "FastAPI", "PostgreSQL RLS", "Supabase", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Torra Realestate",
    tagline: "Property Management & Real Estate Platform",
    description:
      "A full-featured real estate platform with advanced search filters, property listings, and client inquiry management built with server-side rendering (SSR) for high-performance SEO.",
    repo: "https://github.com/Meargteame/torra-realestate",
    live: "https://torrarealestate.cloud/",
    tag: "REAL ESTATE · SSR",
    image: torraRealestateImg,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
  },
  {
    id: 5,
    name: "Ensight Global Consultancy",
    logo: ensightLogo,
    tagline: "Consultancy Website Rebuilt on Headless CMS",
    description:
      "A high-performance corporate platform with server-side rendering (SSR), optimized SEO architecture, and dynamic content management powered by Headless WordPress.",
    repo: "https://github.com/Meargteame/senior-homecare-consultancy",
    live: "http://ensightglobalconsultancy.com/",
    tag: "HEADLESS CMS · SSR",
    image: ensightImg,
    tech: ["Next.js", "Headless WordPress", "Tailwind CSS", "SEO"],
  },
  {
    id: 6,
    name: "Yaricho Senior Home Care",
    tagline: "Healthcare Services & Patient Inquiry Portal",
    description:
      "A patient inquiry and healthcare service platform featuring clear service tiers, booking requests, and a mobile-optimized responsive layout.",
    repo: "https://github.com/Meargteame/yaricho-senior-home-care",
    live: "https://yarichohomecare.com/",
    tag: "HEALTHCARE · WEB PORTAL",
    image: yarichoHomeCareImg,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const moreProjects = [];
