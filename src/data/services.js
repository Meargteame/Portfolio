import { Server, Cpu, Code, Zap, Cloud, Chrome, Smartphone, Database, Bot } from "lucide-react";

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
    title: "AI-Powered Application Development",
    description:
      "Integrating AI capabilities into applications using Google Gemini, OpenAI, and other AI services. Building intelligent features that enhance user experience.",
    icon: Cpu,
    tag: "GEMINI · OPENAI · AI INTEGRATION",
  },
  {
    id: 3,
    title: "Custom API Development & Integration",
    description:
      "Designing and building robust RESTful APIs with proper authentication, validation, and documentation. Integrating third-party APIs seamlessly.",
    icon: Server,
    tag: "REST · GRAPHQL · FASTAPI",
  },
  {
    id: 4,
    title: "Real-Time Application Development",
    description:
      "Building real-time features using WebSockets, WebRTC, and event-driven architectures. Perfect for chat apps, collaborative tools, and live dashboards.",
    icon: Zap,
    tag: "WEBSOCKETS · WEBRTC · REAL-TIME",
  },
  {
    id: 5,
    title: "SaaS Product Development",
    description:
      "Developing scalable SaaS platforms from concept to launch. Including authentication, subscription management, analytics, and multi-tenancy.",
    icon: Cloud,
    tag: "SAAS · MULTI-TENANT · SCALABLE",
  },
  {
    id: 6,
    title: "Chrome Extension Development",
    description:
      "Creating powerful Chrome extensions that enhance browser functionality. From productivity tools to content scrapers and automation.",
    icon: Chrome,
    tag: "CHROME · EXTENSIONS · AUTOMATION",
  },
  {
    id: 7,
    title: "Cross-Platform Mobile Apps (Flutter)",
    description:
      "Developing cross-platform mobile apps for iOS and Android with Flutter & Dart. Clean state management, native device capabilities, offline caching, and responsive UI.",
    icon: Smartphone,
    tag: "FLUTTER · DART · IOS · ANDROID",
  },
  {
    id: 8,
    title: "Database Design & Optimization",
    description:
      "Designing efficient schemas and tuning queries for speed and scale. Indexing, caching, and safe migrations across PostgreSQL, MongoDB, and Redis.",
    icon: Database,
    tag: "POSTGRESQL · MONGODB · REDIS",
  },
  {
    id: 9,
    title: "AI Agents & Automation",
    description:
      "Building autonomous AI agents and workflow automations that connect LLMs to real tools, APIs, and data — removing repetitive manual work.",
    icon: Bot,
    tag: "LLM · AGENTS · AUTOMATION",
  },
];
