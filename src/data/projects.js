import torraRealestateImg from "../assets/torra-realstate.webp";
import torraParkingImg from "../assets/torra-parking.webp";
import ecommerceWebImg from "../assets/ecommerce-web.png";
import yarichoHomeCareImg from "../assets/yaricho-senior-home-care.webp";
import ensightImg from "../assets/egc.png";
import create4meImg from "../assets/create4me.png";
import trustgridImg from "../assets/trustgrid.png";
import meridianImg from "../assets/meridian.jpg";
import leonsLabLogo from "../assets/leons_lab_logo.jpg";
import ensightLogo from "../assets/ensight_global_consultancy.jpg";

// Featured Engineering Projects — live apps with real users, verified proof, and modern stacks
export const projects = [
  {
    id: 1,
    name: "Create4Me",
    logo: leonsLabLogo,
    description: "Creator Marketplace & Influencer Booking SaaS Platform",
    details:
      "A production-grade creator economy SaaS platform built under software studio Leons Lab connecting brands with verified Ethiopian TikTok and Instagram creators. Features transparent rate cards, campaign management, creator discovery, and escrow payments via Telebirr & CBE.",
    repo: "https://github.com/Meargteame/create4me",
    live: "https://create4me.leonslab.tech",
    tag: "LEONS LAB · SAAS · CREATOR MARKETPLACE",
    wip: false,
    image: create4meImg,
    tech: "React · TypeScript · Tailwind CSS · Node.js · Telebirr Escrow",
  },
  {
    id: 2,
    name: "TrustGrid",
    logo: leonsLabLogo,
    description: "Verified Social Proof & Cryptographic Identity Wall",
    details:
      "A trust verification and social proof SaaS platform built under software studio Leons Lab. Turns authentic customer reviews into high-converting proof walls verified via real Telegram identity. Architected with PostgreSQL Row Level Security (RLS) and cryptographic verification routines.",
    repo: "https://github.com/Meargteame/trustgrid-ethiopia",
    live: "https://trustgrid.leonslab.tech/",
    tag: "LEONS LAB · SAAS · FINTECH",
    wip: false,
    image: trustgridImg,
    tech: "PostgreSQL RLS · Next.js · FastAPI · Supabase · Tailwind CSS",
  },
  {
    id: 3,
    name: "Meridian AI / CareerGuide AI",
    description: "Career Architect & Interactive Evaluation Assistant",
    details:
      "An interactive AI evaluation assistant rendering streaming UI feedback widgets, real-time response scoring, and dynamic learning roadmaps with Gemini 2.5 Flash and Neo-Brutalism UI styling.",
    repo: "https://github.com/Meargteame/careerguide-ai",
    live: "https://meridian-beta-coral.vercel.app",
    tag: "GEMINI 2.5 · STREAMING UI · NEXT.JS",
    wip: false,
    image: meridianImg,
    tech: "FastAPI · Gemini 2.5 Flash · Next.js · Neo-Brutalism UI · Supabase",
  },
  {
    id: 4,
    name: "Torra Realestate",
    description: "Modern Real Estate Listing & Property Management Platform",
    details:
      "A full-featured real estate platform with advanced search filters, property listings, and client inquiry management. Built using Next.js for server-side rendering (SSR) and high-performance SEO.",
    repo: "https://github.com/Meargteame/torra-realestate",
    live: "https://torrarealestate.cloud/",
    tag: "REAL ESTATE · SSR · NEXT.JS",
    wip: false,
    image: torraRealestateImg,
    tech: "Next.js · TypeScript · Tailwind CSS · SEO",
  },
  {
    id: 5,
    name: "Torra Parking",
    description: "Parking Management Platform with Booking & Admin Dashboard",
    details:
      "Parking management web app built with Next.js and TypeScript. Features parking-space listings, a booking flow, and an admin dashboard for managing availability and reservations with responsive cross-device layout.",
    repo: "https://github.com/Meargteame/torra-parking",
    live: "https://torra-parking.vercel.app/",
    tag: "SAAS · BOOKING · DASHBOARD",
    wip: false,
    image: torraParkingImg,
    tech: "Next.js · TypeScript · Tailwind CSS",
  },
];

// Production products & contract systems
export const moreProjects = [
  {
    id: 6,
    name: "Talix",
    description: "AI-Powered Adaptive Learning Engine",
    details:
      "Architected an AI learning engine during a 72-hour hackathon, building dynamic topic decomposition pipelines and automated quiz generation with structured JSON schemas.",
    repo: "https://github.com/Meargteame/talix-ai",
    live: "https://talix.leonslab.tech/",
    tag: "FASTAPI · GEMINI · EDTECH",
    wip: false,
    image: null,
    tech: "FastAPI · Gemini API · React · Tailwind CSS · PostgreSQL",
  },
  {
    id: 7,
    name: "StockPilot & Smart Goal Breaker",
    description: "Core Inventory & Goal Orchestration Engine",
    details:
      "Engineered real-time inventory tracking event APIs and automated goal breakdown modules using structured Gemini prompt chaining.",
    repo: "https://github.com/Meargteame/stockpilot",
    live: "https://stockpilot.leonslab.tech/",
    tag: "EVENT APIS · POSTGRES",
    wip: false,
    image: null,
    tech: "FastAPI · Supabase · Next.js · Gemini API · PostgreSQL",
  },
  {
    id: 8,
    name: "Ensight Global Consultancy",
    logo: ensightLogo,
    description: "Consultancy Website Rebuilt on Headless WordPress CMS",
    details:
      "Rebuilt the company's consultancy website from the ground up using Next.js and WordPress (Headless CMS). Implemented a modern, high-performance frontend with server-side rendering (SSR) and an optimized SEO structure.",
    repo: "https://github.com/Meargteame/senior-homecare-consultancy",
    live: "https://senior-homecare-consultancy.vercel.app",
    tag: "HEADLESS CMS · SSR",
    wip: false,
    image: ensightImg,
    tech: "Next.js · Headless WordPress · SSR · SEO",
  },
  {
    id: 9,
    name: "Yaricho Senior Home Care",
    description: "Healthcare Services Platform & Patient Portal",
    details:
      "Senior home-care website built with Next.js and TypeScript. Features service listings, contact forms, and a responsive design optimized for viewing across devices.",
    repo: "https://github.com/Meargteame/yaricho-senior-home-care",
    live: "https://yarichohomecare.com/",
    tag: "HEALTHCARE",
    wip: false,
    image: yarichoHomeCareImg,
    tech: "Next.js · TypeScript · Tailwind CSS",
  },
  {
    id: 10,
    name: "E-Commerce Platform",
    description: "Full-Stack Store with Cart, Checkout & Admin Dashboard",
    details:
      "Full-stack e-commerce platform with product management, shopping cart, checkout, and an admin dashboard. Built with a React frontend and a Node.js backend.",
    repo: "https://github.com/Meargteame/ecommerce-web",
    live: "https://ecommerce-web-e5iy.vercel.app/export",
    tag: "E-COMMERCE",
    wip: false,
    image: ecommerceWebImg,
    tech: "React · Node.js · TypeScript · Express",
  },
];
