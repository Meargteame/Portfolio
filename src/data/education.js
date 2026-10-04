import bduLogo from "../assets/bahir_dar_university_logo.jpg";
import holbertonLogo from "../assets/holberton_school_logo.jpg";
import a2svLogo from "../assets/1691678724367.jpg";

export const educations = [
  {
    id: 1,
    institution: "Bahir Dar University (BDU)",
    logo: bduLogo,
    degree: "B.Sc. in Information Technology",
    date: "Graduation: Jun 2026",
    location: "Bahir Dar, Ethiopia",
    tag: "DEGREE",
    summary:
      "Rigorous foundations in distributed systems, database architecture, network security, and OS fundamentals. Active leader in student engineering communities.",
    highlights: [
      "Core Coursework: Distributed Systems, Enterprise Database Design, Operating Systems, Network Security Protocols, and Software Architecture.",
      "Leadership: Core Leader in Computer Science & Engineering Community (CSEC BDU), organizing campus tech workshops, algorithmic bootcamps, and hackathons.",
    ],
  },
  {
    id: 2,
    institution: "A2SV (Africa to Silicon Valley)",
    logo: a2svLogo,
    degree: "Competitive Programming Fellow",
    date: "Graduation: Jan 2026",
    location: "Remote / Silicon Valley Program",
    tag: "FELLOWSHIP",
    summary:
      "Elite competitive programming and algorithmic training program with a rigorous selection process (top 1% across African universities).",
    highlights: [
      "Algorithmic Problem Solving: Intensive training in data structures, graph theory, dynamic programming, tree traversals, and system optimization.",
      "Proof of Work: Solved 300+ competitive programming problems across LeetCode & Codeforces under strict time and space complexity constraints.",
    ],
  },
  {
    id: 3,
    institution: "ALX / Holberton School",
    logo: holbertonLogo,
    degree: "Software Engineering Programme (Back-end Specialization)",
    date: "Completed: Feb 2025",
    location: "Remote / International",
    tag: "CERTIFIED",
    certificateUrl: "https://intranet.alxswe.com/certificates/BHMz2Y9C38",
    certificateImg: "/alx-certificate.png",
    summary:
      "Rigorous 12-month software engineering programme with a specialization in back-end engineering, systems architecture, databases, and low-level programming.",
    highlights: [
      "Back-End Specialization: Advanced Python, Node.js, REST APIs, database modeling, and server architecture.",
      "Systems Engineering: Deep dive into C, memory management, POSIX syscalls, and custom Unix shell.",
      "DevOps: NGINX configuration, CI/CD, SSL/TLS, and web infrastructure.",
    ],
  },
];
