import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import {
  JavaScriptIcon,
  HTML5Icon,
  CSS3Icon,
  ExpressIcon,
  SQLiteIcon,
  RustIcon,
  CppIcon,
  GitIcon,
  LinuxIcon,
  VSCodeIcon,
  PostmanIcon,
  CanvaIcon,
  SolidityIcon,
  AutoCADIcon,
  RESTAPIsIcon,
  SorobanIcon,
  CompactIcon,
  SOLIDWORKSIcon,
  Fusion360Icon,
  AutodeskInventorIcon,
} from "@/components/ui/svgs/skills-icons";


export const DATA = {
  name: "Samcodes | Portfolio",
  initials: "SD",
  url: "https://samintech.xyz",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  description:
    "Sampurna Datta is a Computer Science Engineering student at IEM Kolkata, interested in software development, AI/ML, cybersecurity, and building practical technology projects.",
  summary:
    "I'm Sam, a Computer Science Engineering student at IEM Kolkata. I'm interested in software development, artificial intelligence, machine learning, cybersecurity, and building useful products. I enjoy working on projects, participating in hackathons, exploring emerging technologies, and learning by building.",
  avatarUrl: "/sampurna.jpg",

  
skills: {
  "Programming Languages": [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "C", icon: Csharp },
    { name: "C++", icon: CppIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
  ],
  "Web Development": [
    { name: "HTML5", icon: HTML5Icon },
    { name: "CSS3", icon: CSS3Icon },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "REST APIs", icon: RESTAPIsIcon },
  ],
  "AI & Machine Learning": [
    { name: "Python", icon: Python },
  ],
  "Databases & Core CS": [
    { name: "PostgreSQL", icon: Postgresql },
    { name: "SQLite", icon: SQLiteIcon },
  ],
  "Cybersecurity & Tools": [
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: Icons.github },
    { name: "Linux", icon: LinuxIcon },
    { name: "VS Code", icon: VSCodeIcon },
    { name: "Postman", icon: PostmanIcon },
  ],
},

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  
contact: {
  email: "dattasam290@gmail.com",
  tel: "+919831439293",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/Samziii",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sampurna-datta-31109331a/",
      icon: Icons.linkedin,
      navbar: true,
    },
    email: {
      name: "Send Email",
      url: "mailto:dattasam290@gmail.com",
      icon: Icons.email,
      navbar: false,
    },
  },
},

  
work: [
  {
    company: "Chrysalis, IEMRF",
    href: "",
    badges: [],
    location: "Kolkata, India",
    title: "Startup Intern",
    logoUrl: "/chrysalis.png",
    start: "May 2026",
    end: "Present",
    description:
      "Contributing to the development of innovative products for different industries as part of a startup internship.",
  },
  {
    company: "Indian Institute of Internship",
    href: "",
    badges: [],
    location: "India",
    title: "Campus Ambassador",
    logoUrl: "/internship.png",
    start: "Jan 2025",
    end: "Oct 2025",
    description:
      "Supported outreach and campus engagement initiatives, helping promote internship opportunities and connect students with programs.",
  },
],

  
education: [
  {
    school: "Institute of Engineering & Management (IEM), Kolkata",
    href: "https://iem.edu.in/",
    degree: "B.Tech in Computer Science & Engineering",
    logoUrl: "/iem-logo.png",
    start: "2024",
    end: "2028",
    description:
      "Undergraduate student focusing on computer science, programming, data structures, databases, AI/ML, and cybersecurity.",
  },
  {
    school: "Mahadevi Birla World Academy",
    href: "",
    degree: "CBSE Class XII — PCM, Computer Science, English, Physical Education",
    logoUrl: "/school.png",
    start: "",
    end: "",
    description: "Higher secondary education.",
  },
],

  
projects: [
  {
    title: "Rahee — Smart Navigation App",
    href: "",
    dates: "Navigation & Route Planning",
    active: true,
    description:
      "A navigation app designed to help users compare commute routes based on cost, travel time, and convenience, with a focus on tourists, teenagers, and elderly travellers.",
    technologies: [
      "Python",
      "Route Planning",
      "Application Development",
    ],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Emotion-Aware Live Captions",
    href: "",
    dates: "AI/ML Project",
    active: true,
    description:
      "An assistive captioning project exploring emotion recognition alongside live speech transcription to provide additional conversational context for deaf and hard-of-hearing users.",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "Speech Recognition",
      "FastAPI",
    ],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Multilingual AI Assistant",
    href: "",
    dates: "Generative AI",
    active: true,
    description:
      "An AI assistant project focused on supporting multilingual interactions and making information more accessible across languages.",
    technologies: [
      "Python",
      "AI/ML",
      "Natural Language Processing",
    ],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Billaboost Time Tracker AI",
    href: "https://billaboost-time-tracker-ai.lovable.app/",
    dates: "AI-Powered Productivity App",
    active: true,
    description:
      "An AI-focused time-tracking and productivity application built to help users organise and manage their work.",
    technologies: [
      "AI",
      "Productivity",
      "Web Development",
    ],
    links: [
      {
        type: "Website",
        href: "https://billaboost-time-tracker-ai.lovable.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },

  
{
  title: "NCRYPT — Post-Quantum Migration Analysis Tool",
  href: "",
  dates: "SIH 2026 · Enterprise Cryptographic Discovery & Analysis",
  active: true,
  description:
    "A tool concept for discovering cryptographic assets, assessing quantum-related risks, and recommending post-quantum cryptography migration strategies.",
  technologies: [
    "Python",
    "Cybersecurity",
    "Cryptography",
    "Post-Quantum Cryptography",
    "Static Analysis",
  ],
  links: [],
  image: "",
  video: "",
},
{
  title: "SurakshChain",
  href: "",
  dates: "Blockchain-Based Micro-Insurance",
  active: true,
  description:
    "A blockchain-based micro-insurance solution concept exploring parametric disaster triggers using weather and satellite data, with digital access through UPI, WhatsApp, SMS, and IVR.",
  technologies: [
    "Blockchain",
    "Smart Contracts",
    "Parametric Insurance",
    "Weather Data",
  ],
  links: [],
  image: "",
  video: "",
},
],

  
hackathons: [
  {
    title: "IEEE CS Converge",
    dates: "2026",
    location: "Kolkata, India",
    win: "2nd Place",
    description:
      "Secured 2nd place for the Rahee navigation app at IEEE Computer Society Converge.",
    image: "",
    links: [],
  },
  {
    title: "Google Summer of Code / Open-Source Contributions",
    dates: "2026",
    location: "Online",
    win: "Contributor",
    description:
      "Exploring open-source contribution opportunities and building practical software development skills.",
    image: "",
    links: [],
  },
],

} as const;
