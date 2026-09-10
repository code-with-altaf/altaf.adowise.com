import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Altaf",
  initials: "MA",
  url: "https://mohammadaltaf.dev",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Software Engineer and Builder focused on turning ideas into real products, businesses, and AI-powered tools.\n\nFounder of Adowise. Building in public.",
  summary:
    "I like [turning ideas into real products](#). After starting out [freelancing and building for clients](#), I shifted my focus to [building products of my own](#). This led me to build [Adowise](#) — a platform helping creators [turn their knowledge into a business](#). I enjoy working across [product, design, and growth](#) to take ideas from a blank page to [learning from real users](#). I'm particularly passionate about [AI, automation, and startups](#). I also believe in [building in public](#) by sharing my lessons and failures along the way. Currently building [Adowise](#) and documenting the journey.",
  avatarUrl: "https://avatars.githubusercontent.com/u/178491093?s=400&u=54809017fc5993a4448a1a1ecb1eb4dda2c315fa&v=4",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Tailwind CSS", icon: "/skills/tailwindcss.png" },
    { name: "Shadcn UI", icon: "/skills/shadcn.png" },
    { name: "Redux", icon: undefined },
    { name: "TanStack Query", icon: "/skills/tanstack.png" },
    { name: "Framer Motion", icon: undefined },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: "/skills/express.png" },
    { name: "REST APIs", icon: "/skills/resapis.png" },
    { name: "GraphQL", icon: "/skills/graphql.png" },
    { name: "WebSockets", icon: undefined },
    { name: "Zod", icon: "/skills/zod.png" },
    { name: "MongoDB", icon: "/skills/mongo.png" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Prisma", icon: "/skills/prisma.png" },
    { name: "Redis", icon: "/skills/redis.png" },
    { name: "OpenAI API", icon: undefined },
    { name: "Cloudinary", icon: "/skills/cloudinary.png" },
    { name: "Stripe", icon: "/skills/stripe.png" },
    { name: "Razorpay", icon: "/skills/razorpay.png" },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: "/skills/aws.png" },
    { name: "CI/CD", icon: "/skills/cicd.png" },
    { name: "CDN", icon: "/skills/cdnlogo.png" },
    { name: "API Design", icon: undefined },
    { name: "Database Design", icon: undefined },
    { name: "Query Optimization", icon: undefined },
    { name: "Architecture Design", icon: undefined },
    { name: "JWT/OAuth", icon: undefined },
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
      email: {
        name: "Contact",
        url: "https://calendly.com/reachmohdaltaf/30min",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Adowise",
      href: "http://adowise.com/",
      badges: ["Founder"],
      location: "India",
      title: "Founder & Full-Stack Developer",
      logoUrl: "/adowiselogo.jpg",
      start: "January 2025",
      end: "Present",
      description:
        "Building Adowise, a full-stack mentorship and services platform using React, Redux, Express.js, and MongoDB with secure authentication and booking workflows.",
    },
    {
      company: "Tradylytics",
      href: "https://tradylytics.in/",
      badges: ["Intern"],
      location: "Remote",
      title: "Full-Stack Developer Intern",
      logoUrl: "/tradylitics.png",
      start: "January 2025",
      end: "July 2026",
      description:
        "Designed modern UI components, implemented responsive layouts, integrated charts, and improved UX using Shadcn UI.",
    },
    {
      company: "Explorin",
      href: "https://www.youtube.com/channel/UCBRtnWdffqujfIcpuZlyWkg",
      badges: ["Intern"],
      location: "Roorkee, India",
      title: "MERN Stack Developer",
      logoUrl: "/explorin.png",
      start: "June 2024",
      end: "August 2024",
      description:
        "Worked on MERN applications, optimized database queries, improved API performance, and helped scale backend systems.",
    },
    {
      company: "Scaptor",
      href: "https://in.linkedin.com/company/scaptor",
      badges: ["First Internship"],
      location: "Remote",
      title: "UI/UX Designer",
      logoUrl: "/scaptor.png",
      start: "2022",
      end: "2023",
      description:
        "Designed user-centric interfaces and improved user experience for the Scaptor platform. Focused on clean aesthetics and intuitive navigation.",
    },
  ],

  education: [
    {
      school: "Chandigarh University",
      href: "#",
      degree: "Dropped out to build Adowise",
      logoUrl: "/chadigarhuniversity.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "SGGSJ Govt. College",
      href: "#",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/sggsj.jpg",
      start: "2021",
      end: "2024",
    },
    {
      school: "Bibi Jeet Kaur College",
      href: "#",
      degree: "Higher Secondary Education (11th–12th)",
      logoUrl: "/bibi-jeet.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "The Scholars Home, Paonta Sahib",
      href: "#",
      degree: "Primary & Secondary Education (Grades 1–10)",
      logoUrl: "/scholars-home.png",
      start: "2009",
      end: "2019",
      video: "/workflow.mp4",
    },
  ],

  projects: [
    {
      title: "Adowise",
      href: "http://adowise.com/",
      dates: "2025",
      active: true,
      image: "",
      video: "/newvideos/adowise.mp4",
      description:
        "Adowise is a platform helping creators and experts turn their knowledge and audience into a business.\n\nIt brings tools for 1:1 mentorship, digital products, courses, paid webinars, memberships, priority queries, funnels, promotions, and audience monetization into one platform.",
      technologies: ["React", "Express.js", "MongoDB", "Redux", "Tailwind", "Shadcn"],
      links: [
        {
          type: "Website",
          href: "http://adowise.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "TradyLytics",
      href: "https://tradylytics.in/",
      dates: "2026",
      active: true,
      image: "",
      video: "/newvideos/tradylytics.mp4",
      description:
        "TradyLytics is an AI-powered trading journal and analytics platform designed for professional traders to track performance and gain deeper insights into their strategies.\n\nIt offers advanced features like automated trade imports, risk management calculators, visual performance charts, and AI-driven recommendations to help traders optimize their portfolios and minimize losses.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind", "TanStack Query"],
      links: [
        {
          type: "Website",
          href: "https://tradylytics.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Adowise Labs",
      href: "https://lab.mohammadaltaf.dev",
      dates: "2026",
      active: true,
      image: "",
      video: "/newvideos/adowiselabs.mp4",
      description:
        "An AI agent for your sales pipeline. Adowise Labs sources high-intent prospects across 12+ platforms, crafts personalized outreach, qualifies leads, and auto-books meetings directly to your calendar.\n\nIt features live scraping tools, advanced sales funnel optimizations, and custom AI agents designed to handle your entire pipeline on autopilot—so you can focus on closing deals.",
      technologies: ["Next.js", "React", "AI Agents", "Web Scraping", "Tailwind"],
      links: [
        {
          type: "Website",
          href: "https://lab.mohammadaltaf.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "UP Forest Department",
      href: "https://up-gov.vercel.app/",
      dates: "2026",
      active: true,
      image: "",
      video: "/newvideos/up-gov.mp4",
      description:
        "A specialized Forest Crime Management Portal built exclusively for the UP Government to streamline the tracking, management, and reporting of forest-related crimes across the state.\n\nIt features real-time geospatial tracking, secure evidence management, automated alert systems, and comprehensive reporting dashboards to empower forest officers in protecting wildlife and natural resources.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind", "TanStack Query"],
      links: [
        {
          type: "Website",
          href: "https://up-gov.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Applyoo",
      href: "https://applyoo.vercel.app/",
      dates: "2026",
      active: true,
      image: "",
      video: "/newvideos/applyoo.mp4",
      description:
        "Applyoo is an advanced AI-powered recruitment platform designed to completely streamline complex hiring workflows and connect top-tier talent with the right opportunities faster.\n\nIt includes smart resume parsing, automated candidate scoring, interview scheduling, and collaborative team evaluation tools, reducing the time-to-hire for modern businesses.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind", "TanStack Query"],
      links: [
        {
          type: "Website",
          href: "https://applyoo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },

    {
      title: "SFDA Hall Booking & Management",
      href: "#",
      dates: "2026",
      active: true,
      image: "/SFDA.gif",
      video: "",
      description:
        "A comprehensive government booking and facility management system developed for SFDA halls, facilitating seamless scheduling and operations at scale.\n\nIt features an intuitive public booking interface, administrative approval workflows, payment gateway integration, and real-time availability calendars to ensure zero booking conflicts.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind", "TanStack Query"],
      links: [],
    },
    {
      title: "Briefly.ai",
      href: "#",
      dates: "2025",
      active: true,
      image: "/briefly.gif",
      video: "",
      description:
        "Briefly.ai is an intelligent document processing platform that leverages the OpenAI API to instantly turn long, complex PDFs into concise, highly useful summaries.\n\nIt supports multi-document analysis, custom formatting preferences, and secure file handling, making it an essential tool for researchers and professionals dealing with heavy reading loads.",
      technologies: ["Next.js", "OpenAI API", "Tailwind", "Shadcn", "React Hook Form"],
      links: [],
    },
    {
      title: "Invozo",
      href: "https://invozo-pges.vercel.app/generate",
      dates: "2025",
      active: true,
      image: "/invozo.gif",
      video: "",
      description:
        "Invozo is a professional invoice generator built with a clean, lightning-fast UI that allows freelancers and small businesses to create, manage, and send invoices in minutes.\n\nIt supports multiple currencies, customizable tax rates, PDF exports, and client management, drastically simplifying the billing process and helping users get paid faster.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Shadcn", "Prisma"],
      links: [
        {
          type: "Website",
          href: "https://invozo-pges.vercel.app/generate",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Carelytics",
      href: "https://carelytics-three.vercel.app/",
      dates: "2025",
      active: true,
      image: "/carelytics.gif",
      video: "",
      description:
        "Carelytics is a smart clinic performance dashboard designed to give healthcare providers instant visibility into their patient insights, visit trends, and overall revenue analytics.\n\nBy aggregating data into beautiful, interactive charts using Recharts, it helps clinic managers identify operational bottlenecks and optimize their daily scheduling workflows.",
      technologies: ["Next.js", "React", "MongoDB", "Tailwind", "Shadcn", "Recharts"],
      links: [
        {
          type: "Website",
          href: "https://carelytics-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Indrakamal",
      href: "#",
      dates: "2026",
      active: true,
      image: "",
      video: "/newvideos/indrakamal.mp4",
      description:
        "Build Market Instinct. Think Like Finance. Get Career Ready. Building finance talent for the roles that matter.\n\nAccelerate your finance career with diverse placement paths, global projects access, and comprehensive training programs that have already trained over 50K+ students.",
      technologies: ["Next.js", "React", "Tailwind", "Framer Motion", "MongoDB"],
      links: [],
    },

    {
      title: "Foxtale",
      href: "https://foxtale-eta.vercel.app/",
      dates: "2026",
      active: true,
      image: "",
      video: "/newvideos/foxtale.mp4",
      description:
        "Foxtale is a premium organic skincare brand focused on everyday protection, offering products like the Water Gel Sunscreen SPF 50 PA++++.\n\nThe platform showcases a lightweight, non-greasy product line free from mineral oils, while featuring engaging customer testimonials, a skincare blog, and an intuitive e-commerce experience.",
      technologies: ["Next.js", "React", "Tailwind", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://foxtale-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },

    {
      title: "WryTit",
      href: "https://wrytit.vercel.app",
      dates: "2025",
      active: true,
      image: "/wrytit.gif",
      video: "",
      description:
        "WryTit is a beautifully crafted storytelling and blogging platform designed specifically to provide a clean, distraction-free, and reader-first experience.\n\nIt empowers writers to explore ideas and express thoughts through a minimalist interface, featuring stunning typography and ultra-fast page loads powered by Next.js.",
      technologies: ["Next.js", "Tailwind", "Shadcn", "React", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://wrytit.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  hackathons: [] as any[],
} as const;
