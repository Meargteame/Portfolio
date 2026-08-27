import leonsLabLogo from "../assets/leons_lab_logo.jpg";
import ensightLogo from "../assets/ensight_global_consultancy.jpg";
import addisSoftwareLogo from "../assets/addis_software_logo.jpg";

export const experiences = [
  {
    id: 1,
    company: "Leons Lab",
    website: "https://leonslab.tech",
    logo: leonsLabLogo,
    role: "Founding Engineer & Tech Lead",
    date: "Apr 2024 — Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Founder & Tech Lead at Leons Lab (leonslab.tech), my software development studio. Built and launched production-grade SaaS products including Create4Me (creator marketplace & booking SaaS) and TrustGrid (trust verification platform). Architected full-stack applications 0-to-1 with high-speed UI development and scalable APIs.",
    tech: ["Python", "FastAPI", "Go", "Next.js", "PostgreSQL", "Docker", "Redis", "Gemini API"],
    tag: "FOUNDING ENGINEER",
  },
  {
    id: 2,
    company: "Ensight Global Consultancy",
    website: "https://senior-homecare-consultancy.vercel.app",
    logo: ensightLogo,
    role: "Web Application Developer",
    date: "Jun 2025 — Present",
    location: "Contract / Remote",
    description:
      "Rebuilt the company's consultancy portal from the ground up using Next.js App Router and Headless WordPress. Implemented server-side rendering (SSR), optimized SEO hierarchy, and reduced page load by over 50%.",
    tech: ["Next.js", "Headless WordPress", "TypeScript", "SSR", "Tailwind CSS"],
    tag: "CONTRACT",
  },
  {
    id: 3,
    company: "SWENETIX TECH (formerly Addis Software)",
    website: "https://swenetix.com/",
    logo: addisSoftwareLogo,
    role: "Software Engineer Intern",
    date: "Jul 2025 — Sep 2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "Engineered fine-grained Role-Based Access Control (RBAC) middleware for enterprise payroll systems integrated with ERP platforms. Audited query paths against privilege escalation and optimized complex aggregation pipelines.",
    tech: ["Node.js", "MongoDB", "Express", "Access Control (RBAC)", "Security Auditing"],
    tag: "INTERNSHIP",
  },
];
