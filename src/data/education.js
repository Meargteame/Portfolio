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
    institution: "Holberton School (ALX)",
    logo: holbertonLogo,
    degree: "Software Engineering Program",
    date: "Graduation: Jan 2026",
    location: "Remote / International",
    tag: "INTENSIVE PROGRAM",
    summary:
      "Comprehensive systems engineering curriculum with an emphasis on low-level programming, memory safety, and infrastructure.",
    highlights: [
      "Low-Level Systems & Ops: Deep dive into C programming, memory management (valgrind, pointers), Unix/Linux kernel concepts, POSIX syscalls, and custom shell implementation.",
      "Infrastructure & DevOps: Web servers (NGINX), automated testing, CI/CD pipelines, SSL/TLS, and load balancing.",
    ],
  },
];
