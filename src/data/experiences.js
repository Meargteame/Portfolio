// Drop real logo images into src/assets/ and update the paths below.
// Until you do, a styled initials fallback will be used.
import leonsLabLogo from "../assets/leons-lab.png";
import ensightLogo from "../assets/ensight.png";
import swenetixLogo from "../assets/swenetix.png";

export const experiences = [
  {
    id: 1,
    company: "Leons Lab",
    logo: leonsLabLogo,
    role: "Product Developer / Builder",
    date: "Apr 2024 — Present",
    description:
      "Founder & Product Developer at Leons Lab, my personal brand and product studio. I build and launch AI-powered tools, SaaS platforms, and automation solutions.",
    tag: "FOUNDER",
  },
  {
    id: 2,
    company: "Ensight Global Consultancy",
    logo: ensightLogo,
    role: "Web Application Developer",
    date: "Jun 2025 — Present",
    description:
      "Rebuilt the company's consultancy website from the ground up using Next.js and WordPress (Headless CMS). Implemented modern, high-performance frontend with server-side rendering (SSR) and optimized SEO structure.",
    tag: "CONTRACT",
  },
  {
    id: 3,
    company: "SWENETIX TECH",
    logo: swenetixLogo,
    role: "Software Engineer Intern",
    date: "Jul 2025 — Sep 2025",
    description:
      "Contributed as a Full Stack Developer to a payroll management system integrated with an enterprise ERP platform. Worked across multiple system modules using the MERN stack (MongoDB, Express.js, React, Node.js).",
    tag: "INTERNSHIP",
  },
];
