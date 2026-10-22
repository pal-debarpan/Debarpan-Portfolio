// contains all constants to be used throughout the project
// dont' remove anything from here if not sure

import {
  car,
  css,
  estate,
  expo,
  git,
  github,
  globe,
  html,
  javascript,
  ml,
  mongodb,
  nextjs,
  nodejs,
  python,
  react,
  summiz,
  tailwindcss,
  threads,
  web,
  youtube,
  snappy,
  typescript,
} from "../assets/icons";

// sidebar links
export const SIDEBAR_LINKS = [
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

// skills
export const SKILLS = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: ml,
    name: "Machine Learning",
    type: "AI/ML",
  },
  {
    imageUrl: expo,
    name: "Expo",
    type: "Mobile",
  },
];

// site name
export const SITE_NAME = "Debarpan Pal";

// extra links
export const EXTRA_LINKS = {
  source_code: "https://github.com/pal-debarpan",
  linkedin: "https://www.linkedin.com/in/debarpan-pal-488998414",
};

// experiences
export const EXPERIENCES = [
  {
    title: "Secondary Education",
    date: "April 2023 – May 2024",
    company_name: "Kendriya Vidyalaya Sangathan",
    icon: web,
    iconBg: "#e0f2fe",
    points: [
      "Completed my Secondary Education from Kendriya Vidyalaya Sangathan, Jalpaiguri, West Bengal.",
      "Learned how to implement practical applications of Science, Math, Social Studies, Computer Science, English.",
      "Worked with Python, NumPy, Pandas, and scikit-learn for data processing, analysis, and model development.",
      "Explored supervised and unsupervised learning techniques.",
      "Made AI/ML Titanic Prediction Model Project as the final project for Computer Science.",
      "Secured 95.2%.",
    ],
  },
  {
    title: "Higher Secondary Education",
    date: "May 2024 – May 2026",
    company_name: "Kendriya Vidyalaya Sangathan",
    icon: ml,
    iconBg: "#ffedd5",
    points: [
      "Completed my Higher Secondary Education from Kendriya Vidyalaya Sangathan, Ranikhet, West Bengal.",
      "Learned how to implement practical applications of Physics, Chemistry, Mathematics and Computer Science.",
      "English and Yoga helped in learning new skills and public speaking.",
      "Learned and Practiced Python in Computer Science till Intermediate level.",
      "Learned Database Management Systems (DMBS)",
      "Secured 92%.",
    ],
  },
  {
    title: "Vellore Institute of Technology",
    company_name: "B.Tech CSE Core",
    icon: react,
    iconBg: "#fbc3bc",
    date: "July 2026 – Present",
    points: [
      "Got Admission in VIT Vellore after securing good rank in VITEEE 2026.",
      "Currently studying in 1st Semester",
      "Got selected in Code2Create, a reputated hackathon during GraVITas.",
      "Attended AWS Hands-on workshop, learning about Cloud Computation and DevOPs.",
    ],
  },
  {
    title: "Things I Learned",
    company_name: "Skills",
    icon: react,
    iconBg: "#b7e4c7",
    date: "July 2026 – Present",
    points: [
      "StudySync - Made my First Full-Stack Website including CRUD operations, with Python, Flask, HTML, CSS, JS, including secured JWT Authentication.",
      "URLShawtie - Made an API for shortening an URL, using FastAPI, Python, HTML, CSS, with secured JWT Authentication.",
      "RepoLens - A doctor for softwares, made during Code2Create, a renound hackathon in VIT.",
      "Making more projects for Clubs and Chapter Recruitments",
    ],
  },
];

// projects
export const PROJECTS = [
  {
    iconUrl: youtube,
    theme: "btn-back-red",
    name: "StudySync Study App",
    description:
      "A study management web application built using Python and Flask.",
    link: "https://study-sync-seven-alpha.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "URLShawtie",
    description:
      'A production-ready URL shortener built with FastAPI, React, JavaScript, and PostgreSQL.',
    link: "https://urlshawtie.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "RepoLens",
    description:
      "A developer tool that analyzes repository dependencies to identify affected files, calculate change risk, and recommend targeted testing.",
    link: "https://github.com/pal-debarpan/RepoLens",
  },
  {
    iconUrl: snappy,
    theme: "btn-back-pink",
    name: "Event Ticketing System",
    description:
      "Campus event ticketing system with automated email tickets and QR check-in.",
    link: "https://github.com/pal-debarpan/event_ticketing_system",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Spotify Ad Controller",
    description:
      "Spotify advertisement detection and automation.",
    link: "https://github.com/pal-debarpan/spotify-ad-controller",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "SpinChore",
    description:
      "SpinChore helps roommates organize household chores, distribute responsibilities fairly, track completion, and maintain a history of completed tasks. It combines a simple interactive interface with a backend-driven assignment system designed to keep household chores organized and transparent.",
    link: "https://spinchore-rose.vercel.app/",
  },
];

// testimonials
export const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Engineering Lead",
    organization: "Horizon Tech",
    category: "Full Stack & Architecture",
    project: "Modern UI/UX Platform",
    quote:
      "Ritesh consistently delivered high-performance frontend solutions with outstanding attention to detail, smooth user workflows, and robust responsive implementations.",
    impact: "Boosted user retention by 28% and cut interactive load latency in half.",
  },
  {
    name: "Sophia Chen",
    role: "Product Manager",
    organization: "Nexura Labs",
    category: "AI & Machine Learning",
    project: "Predictive Analytics Pipeline",
    quote:
      "A proactive engineer who bridges complex ML pipelines and intuitive interfaces seamlessly. The data preprocessing and model evaluation were thorough and production-ready.",
    impact: "Delivered accurate predictive scoring with sub-100ms inference API responses.",
  },
  {
    name: "David Miller",
    role: "Mobile Architect",
    organization: "Pulse Mobility",
    category: "React Native & Mobile",
    project: "Cross-Platform Mobile App",
    quote:
      "Ritesh built clean, reusable component hierarchies that worked flawlessly across iOS and Android with smooth 60fps animations and resilient state management.",
    impact: "Achieved seamless multi-platform parity with zero major crash reports post-launch.",
  },
];
