import { Server, Code, Zap, Cloud, Chrome, Database } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Building end-to-end web applications with modern frameworks and technologies. From database design to responsive frontends, I deliver complete solutions.",
    icon: Code,
    tag: "REACT · NEXT.JS · NODE.JS",
  },
  {
    id: 2,
    title: "Custom API Development & Integration",
    description:
      "Designing and building robust RESTful APIs with proper authentication, validation, and documentation. Integrating third-party APIs seamlessly.",
    icon: Server,
    tag: "REST · GRAPHQL · FASTAPI",
  },
  {
    id: 3,
    title: "Real-Time Application Development",
    description:
      "Building real-time features using WebSockets, WebRTC, and event-driven architectures. Perfect for chat apps, collaborative tools, and live dashboards.",
    icon: Zap,
    tag: "WEBSOCKETS · WEBRTC · REAL-TIME",
  },
  {
    id: 4,
    title: "SaaS Product Development",
    description:
      "Developing scalable SaaS platforms from concept to launch. Including authentication, subscription management, analytics, and multi-tenancy.",
    icon: Cloud,
    tag: "SAAS · MULTI-TENANT · SCALABLE",
  },
  {
    id: 5,
    title: "Chrome Extension Development",
    description:
      "Creating powerful Chrome extensions that enhance browser functionality. From productivity tools to content scrapers and automation.",
    icon: Chrome,
    tag: "CHROME · EXTENSIONS · AUTOMATION",
  },
  {
    id: 6,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Deploying high-availability web applications and databases with CI/CD pipelines, containerization (Docker), and optimized cloud environments on Vercel, Supabase, and AWS.",
    icon: Cloud,
    tag: "DEVOPS · CI/CD · DOCKER · CLOUD",
  },
  {
    id: 7,
    title: "Database Design & Optimization",
    description:
      "Designing efficient schemas and tuning queries for speed and scale. Indexing, caching, and safe migrations across PostgreSQL, MongoDB, and Redis.",
    icon: Database,
    tag: "POSTGRESQL · MONGODB · REDIS",
  },
];
