import { Server, Cpu, Code, Zap, Cloud, Chrome, Smartphone } from "lucide-react";

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
    title: "Progressive Web Apps (PWA)",
    description:
      "Building progressive web apps that work offline, load fast, and provide native-like experiences across all devices.",
    icon: Smartphone,
    tag: "PWA · OFFLINE · MOBILE-FIRST",
  },
];
