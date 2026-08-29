// ────────────────────────────────────────────────────────────
// Edit everything about your portfolio from this one file.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: "Jordan Cole",
  role: "Software & Systems Engineer",
  tagline: "I build and run the systems most people never see.",
  location: "Remote / Available worldwide",
  email: "zitechurityitsolutions@gmail.com",
  resumeUrl: "/resume.pdf",
  // TODO: replace before launch — drives metadataBase, sitemap.xml and robots.txt
  siteUrl: "https://your-domain.com",
  social: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },
  availability: "Open to new opportunities",
};

export const about = {
  paragraphs: [
    "I'm a software and systems engineer who works at the intersection of infrastructure and application development — comfortable managing a fleet of machines before breakfast and shipping a production feature by lunch.",
    "My background spans network administration, remote systems management, and full-stack development. I care about things that stay up, scale cleanly, and are boring in the best possible way.",
    "Outside of work I'm usually deep in a personal project, reading changelogs, or automating something that didn't strictly need automating.",
  ],
  stats: [
    { label: "Years experience", value: "5+" },
    { label: "Endpoints managed", value: "250+" },
    { label: "Projects shipped", value: "30+" },
    { label: "Uptime target", value: "99.9%" },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "PowerShell", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Redis"],
  },
  {
    category: "Infrastructure",
    items: ["Windows Server", "Active Directory", "Docker", "CI/CD", "Networking"],
  },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "fleet-ops",
    title: "Fleet Ops Console",
    year: "2026",
    description:
      "An internal dashboard for orchestrating parallel PowerShell remoting jobs across 250+ endpoints — deployment status, live logs, and rollback in one view.",
    tags: ["Next.js", "PowerShell", "WebSockets"],
    repo: "https://github.com/yourhandle/fleet-ops",
    featured: true,
  },
  {
    id: "grid",
    title: "Grid",
    year: "2025",
    description:
      "A minimal project & task tracker built to learn the App Router, server actions, and optimistic UI patterns end to end.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "#",
    repo: "https://github.com/yourhandle/grid",
    featured: true,
  },
  {
    id: "netwatch",
    title: "NetWatch",
    year: "2025",
    description:
      "A lightweight subnet monitor that pings a defined range, flags dropped hosts, and posts alerts to a webhook.",
    tags: ["Python", "Networking", "Automation"],
    repo: "https://github.com/yourhandle/netwatch",
    featured: true,
  },
  {
    id: "gradecalc",
    title: "Grade Calculator",
    year: "2024",
    description:
      "A small browser-based tool for computing weighted grades — my first real project after learning JavaScript fundamentals.",
    tags: ["JavaScript", "HTML/CSS"],
    repo: "https://github.com/yourhandle/grade-calculator",
  },
];

export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "IT Systems Administrator",
    org: "Company Name",
    period: "2023 — Present",
    summary:
      "Own network infrastructure and endpoint management for a 250+ machine Windows domain environment.",
    highlights: [
      "Built parallelized PowerShell remoting scripts for fleet-wide app deployment",
      "Reduced average deployment time across the fleet significantly",
      "Maintain remote support tooling used daily by the support team",
    ],
  },
  {
    id: "exp-2",
    role: "Junior Developer",
    org: "Previous Company",
    period: "2021 — 2023",
    summary: "Worked across small internal tools and support automation.",
    highlights: [
      "Shipped internal tools used by multiple teams",
      "Learned modern JavaScript and browser-based tooling from the ground up",
    ],
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
