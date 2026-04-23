import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Altaf",
  initials: "MA",

  url: "https://mohammadaltaf.dev",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",

  description:
    "Full-stack  developer and founder of Adowise. Passionate about building scalable products, clean UI, and high-performance web apps.",

  summary:
    "I'm a MERN/Next.js developer and the founder of Adowise. Previously worked with Tradylytics and Explorin, where I built responsive UIs, REST APIs, optimized databases, and shipped full-stack features. I’ve built platforms like WordFlow, JobGo, Briefly.ai, and Connectify.",

  avatarUrl:
    "https://avatars.githubusercontent.com/u/178491093?s=400&u=54809017fc5993a4448a1a1ecb1eb4dda2c315fa&v=4",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Shadcn UI",
    "Redux",
    "GraphQL",
    "Zod",
    "WebSockets",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "reachmohdaltaf@gmail.com",
    tel: "+91 7876637551",
   social: {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/code-with-altaf",
    icon: Icons.github,
    navbar: true,
  },
  LinkedIn: {
    name: "LinkedIn",
    url: "https://linkedin.com/in/codewithaltaf",
    icon: Icons.linkedin,
    navbar: true,
  },
  X: {
    name: "X",
    url: "https://x.com/codewithaltaf",
    icon: Icons.x,
    navbar: true,
  },
  YouTube: {
    name: "YouTube",
    url: "https://www.youtube.com/@codewithaltaf",
    icon: Icons.youtube,
    navbar: true,
  },
  Portfolio: {
    name: "Portfolio",
    url: "https://adowise.in",
    icon: Icons.globe,
    navbar: true,
  },
  email: {
    name: "Send Email",
    url: "mailto:reachmohdaltaf@gmail.com",
    icon: Icons.email,
    navbar: false,
  },
},

  },

  // ---------------------------------------------------
  //                    EXPERIENCE
  // ---------------------------------------------------
  work: [
    {
      company: "Adowise",
      href: "#", // SAMPLE
      badges: ["Founder"],
      location: "India",
      title: "Founder & Full-Stack Developer",
      logoUrl: "/adowise.png", // You will replace
      start: "January 2025",
      end: "Present",
      description:
        "Building Adowise, a full-stack mentorship and services platform using React, Redux, Express.js, and MongoDB with secure authentication and booking workflows.",
    },
    {
      company: "Tradylytics",
      href: "#", // SAMPLE
      badges: ["Intern"],
      location: "Remote",
      title: "Full-Stack Developer Intern",
      logoUrl: "/tradylitics.png", // You will replace
      start: "January 2025",
      end: "December 2025",
      description:
        "Designed modern UI components, implemented responsive layouts, integrated charts, and improved UX using Shadcn UI.",
    },
    {
      company: "Explorin",
      href: "#", // SAMPLE
      badges: ["Intern"],
      location: "Roorkee, India",
      title: "MERN Stack Developer",
      logoUrl: "/explorin.png", // You will replace
      start: "September 2024",
      end: "November 2024",
      description:
        "Worked on MERN applications, optimized database queries, improved API performance, and helped scale backend systems.",
    },
  ],

  // ---------------------------------------------------
  //                    EDUCATION
  // ---------------------------------------------------
  education: [
    {
      school: "SGGSJ Govt. College",
      href: "#", // SAMPLE
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/sggsj.jpg", // SAMPLE
      start: "2021",
      end: "2024",
    },
    {
      school: "Bibi Jeet Kaur College",
      href: "#", // SAMPLE
      degree: "Higher Secondary Education (11th–12th)",
      logoUrl: "/bibi-jeet.png", // SAMPLE
      start: "2019",
      end: "2021",
    },
    {
      school: "The Scholars Home, Paonta Sahib",
      href: "#", // SAMPLE
      degree: "Primary & Secondary Education (Grades 1–10)",
      logoUrl: "/scholars-home.png", // SAMPLE
      start: "2009",
      end: "2019",
      video: "/workflow.mp4", 
    },
  ],

  // ---------------------------------------------------
  //                    PROJECTS
  // ---------------------------------------------------
projects: [
  {
    title: "TradyLytics",
    href: "#",
    dates: "2026",
    active: true,
    image: "/tradylitics.png",
    video: "/tradylytics.gif",
    description:
      "AI-powered trading journal and analytics platform designed to help traders track their performance and gain deep insights into their trading strategies.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "TanStack Query",
    ],
  },
  {
    title: "UP Forest Department",
    href: "#",
    dates: "2026",
    active: true,
    video: "/up-gov.gif",
    description:
      "A specialized Forest Crime Management Portal built for the UP Government to streamline tracking and reporting of forest-related crimes.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "TanStack Query",
    ],
  },
  {
    title: "Applyoo",
    href: "#",
    dates: "2026",
    active: true,
    video: "/applyoo.gif",
    description:
      "Advanced AI-based job recruitment platform that automates hiring workflows and connects high-quality talent with the right opportunities efficiently.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "TanStack Query",
    ],
  },
  {
    title: "Zafaroo News Scrapper",
    href: "#",
    dates: "2026",
    active: true,
    video: "/zafaroo.gif",
    description:
      "A robust automated news scraping and aggregation tool built to collect and categorize real-time news data from multiple global sources.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "TanStack Query",
    ],
  },
  {
    title: "SFDA Hall Booking & Management",
    href: "#",
    dates: "2026",
    active: true,
    video: "/SFDA.gif",
    description:
      "A comprehensive government booking and management system for SFDA halls, facilitating seamless scheduling and facility management.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "TanStack Query",
    ],
  },
  {
    title: "Briefly.ai",
    href: "#",
    dates: "2025",
    active: true,
    video: "/briefly.gif",
    description:
      "AI-powered PDF summarizer built using OpenAI API with modern UI and optimized file processing.",
    technologies: ["Next.js", "OpenAI API", "Tailwind", "Shadcn", "React Hook Form"],
   
  },

  {
    title: "Adowise",
    href: "#",
    dates: "2025",
    active: true,
    video: "/adowise.gif",
    description:
      "Mentorship platform offering services, bookings, priority DMs, and secure role-based workflows.",
    technologies: ["React", "Express.js", "MongoDB", "Redux", "Tailwind", "Shadcn"],
  
  },
  {
  title: "Invozo",
  href: "https://invozo-pges.vercel.app/generate",
  dates: "2025",
  active: true,
  video: "/invozo.gif", // add your video if available
  description:
    "Create invoices in minutes, not hours. Simple, fast, and professional invoice generator built with clean UI and smooth workflows.",
  technologies: ["Next.js", "TypeScript", "Tailwind", "Shadcn", "Prisma"],

},
{
  title: "Carelytics",
  href: "https://carelytics-three.vercel.app/",
  dates: "2025",
  active: true,
  video: "/carelytics.gif", // add your demo if available
  description:
    "Smart clinic performance dashboard showing patient insights, visit trends, revenue stats, and powerful analytics in one place.",
  technologies: [
    "Next.js",
    "React",
    "MongoDB",
    "Tailwind",
    "Shadcn",
    "Recharts"
  ],
  
}
,

  {
    title: "WordFlow",
    href: "#",
    dates: "2025",
    active: true,
    video: "/workflow.gif",
    description:
      "Full-stack blogging platform with GraphQL, Prisma, PostgreSQL, advanced filters and authentication.",
    technologies: [
      "Next.js",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "Tailwind",
      "TanStack Query",
    ],
   
  },

  {
    title: "Connectify",
    href: "#",
    dates: "2024",
    active: true,
    video: "/connectify.gif",
    description:
      "Social platform with posts, notifications, real-time updates, image uploads, and user profiles.",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "TanStack Query",
      "Tailwind",
      "Cloudinary",
    ],
   
  },

  {
    title: "JobGo",
    href: "#",
    dates: "2025",
    active: true,
    video: "/jobgo.gif",
    description:
      "Job platform with smart search, company dashboards, role-based auth, and clean UI workflows.",
    technologies: ["Next.js", "MongoDB", "Prisma", "Redux", "Tailwind", "Shadcn"],
    
  },
  {
  title: "WryTit",
  href: "https://wrytit.vercel.app",
  dates: "2025",
  active: true,
  video: "/wrytit.gif", // optional if you add later
  description:
    "A modern storytelling and blogging platform with a beautifully crafted UI. A space to explore ideas, express thoughts, and read meaningful stories with a clean, reader-focused experience.",
  technologies: ["Next.js", "Tailwind", "Shadcn", "React", "TypeScript"],
  
}

],



  // ---------------------------------------------------
  //                   HACKATHONS (EMPTY)
  // ---------------------------------------------------
  hackathons: [],


} as const;
