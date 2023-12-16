import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  recro,
  flam,
  habbit,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Javascript Developer",
    icon: web,
  },
  {
    title: "Startup Enthusiast",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "Hobby Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer (UI Engineer)",
    company_name: "Recrosoft (Flipkart)",
    icon: recro,
    iconBg: "#000",
    date: "May 2023 - Present",
    points: [
      "Worked for Flipkart's Shopsy UI Team through Contract - shopsy.in",
      "Contributed in Project migration from React16 to Next13 to utilize SSG & SSR functionalities resulting in 20%+ Faster Page Loads & 30%+ Bundle size reduction",
      "Built core components like Carousels, Toasts, BottomSheet, Modal, Native Share & Sticky component.",
      "Enabled important pages like Product, Cart & Browse page by migrating & optimizing existing React16 code.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Flam",
    icon: flam,
    iconBg: "#000",
    date: "May 2022 - May 2023",
    points: [
      "Worked on an iframe based SaaS SDK with Image & Video Editing features which can be integrated by clients using CDN or npm package & managed multiple End-to-End client onboarding on same. ",
      "Created Multiple Creative User Facing websites - flamapp.com, smartphotos.xyz, zingcam.tech",
      "Built Web UI Interfaces and App logic with Cross Window Communication for Unity Apps - Flam App (10k+ Downloads) & SmartPhotos (500K+ Downloads)",
      "Created an Internal portal for Sales & Marketing & Designed UI Component library using StoryBook.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Habbit",
    icon: habbit,
    iconBg: "#000",
    date: "July 2021 - Apr 2022",
    points: [
      "Worked on a User Facing Web App and Dashboard for mentors.",
      "Implemented Image optimisation, which resulted in gaining 4x faster page loading across all the pages.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
