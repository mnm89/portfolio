import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "M.Naceur Mabrouk",
  initials: "MNM",
  url: "https://www.mnmabrouk.com",
  location: "Berlin, DE",
  locationLink: "https://www.google.com/maps/place/Berlin",
  description:
    "Full-stack software engineer and co-founder with eight years of experience building web and mobile products. Skilled in React, Next.js, Node.js, and React Native, with a track record in microservices, payments, and end-to-end technical delivery.",
  summary:
    "Innovative and results-driven Senior Full Stack Software Engineer with extensive experience in developing scalable, high-performance web and mobile solutions. Proficient in both front-end and back-end technologies, with expertise in JavaScript (Node.js, React.js, TypeScript), C# .NET, PHP, and cloud infrastructure. Proven ability to lead technical teams, optimize system performance, and deliver impactful digital solutions. Passionate about mentoring, DevOps, and cutting-edge software architectures.",
  avatarUrl: "/me.jpeg",
  highlights:[
    'Strong problem-solving skills, able to overcome complex technical challenges efficiently.',
    'Proficient in building scalable web applications using React, Next.js, and React Native.',
    'Experienced in designing and maintaining microservices with Node.js, NestJS, and Moleculer.js.',
    'Able to work closely with cross-functional teams to deliver exceptional results on deadline.',
    'Experienced in CI/CD, Docker, monitoring (Prometheus, Grafana), and operational alerting.',
    'Provides technical leadership in onboarding, project management, and customer issue resolution.',
    'Experienced in payment integrations (Stripe, PayPal) and secure authentication (OAuth, Keycloak , Ory).',
    'Adaptive and eager to learn new technologies, thriving in startup and fast-paced environments.'
  ],
  skills: [
    "React",
    "Next.js",
    "ReactNative",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mednaceur.elmabrouk@gmail.com",
    tel: "+49 176 61498284",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mnm89",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohamed-naceur-mabrouk-727714124/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Next Vision Consulting",
      href: "https://nvisionconsulting.de",
      badges: [],
      location: "Remote",
      title: "Co-Founder & IT Responsible",
      logoUrl: "/nv.png",
      start: "Dec 2023",
      end: "Present",
      description:
        "Developed a comprehensive consultancy platform for students applying to study in Germany. Designed and deployed a full-stack system using Next.js (frontend & admin dashboard), React Native (mobile apps), and Supabase (backend infrastructure). Integrated Calendly for appointment scheduling, enhancing agent-student interaction efficiency. Led CI/CD implementation, ensuring seamless deployment for web and mobile applications. Impact: Delivered an intuitive platform that improved application submission efficiency and user engagement.",
    },
    {
      company: "Flexperto",
      badges: [],
      href: "https://flexperto.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/flexperto.svg",
      start: "Apr 2021",
      end: "Aug 2023",
      description:
        "Developed and optimized microservices for archiving & document management using Moleculer.js. Led the development of microfrontends using React.js, significantly improving modularity and reusability. Enhanced system monitoring by integrating Prometheus and Grafana dashboards. Improved business intelligence capabilities by implementing advanced MongoDB aggregation queries. Impact: Improved system performance, monitoring, and operational awareness for key Flexperto products.",
    },
    {
      company: "Ryde GmbH (KODAKOne)",
      href: "https://www.kodak.com/en/company/press-release/blockchain-initiative",
      badges: [],
      location: "Berlin",
      title: "Software Engineer",
      logoUrl: "/kodak.svg",
      start: "Dec 2018",
      end: "Mar 2021",
      description:
        "Built microservices & APIs using Node.js, Spring Boot, and OAuth (Keycloak). Developed React-based front-end applications, utilizing route-based code splitting. Designed a reusable React component library for UI consistency across applications. Impact: Improved system scalability and security, enhancing developer efficiency and code maintainability",
    },
    {
      company: "FlyCom",
      href: "#",
      badges: [],
      location: "Tunis, Tunisia",
      title: "Software Engineer",
      logoUrl: "",
      start: "Jun 2017",
      end: "Oct 2018",
      description:
        "Led the development of BibDoctor, a healthcare appointment scheduling platform using Angular & Symfony. Built a desktop application with Electron and real-time chat using Sails.js & Socket.IO. Implemented web scraping solutions for healthcare data aggregation. Impact: Delivered a fully operational telemedicine solution, improving patient-doctor accessibility",
    },
  ],
  education: [
    {
      school: "ESPRIT, Tunisia",
      href: "",
      degree: "Software Engineering",
      logoUrl: "",
      start: "2014",
      end: "2017",
    },
    {
      school: "ESTI, Tunisia",
      href: "",
      degree: "Computer Science Bachelor",
      logoUrl: "",
      start: "2011",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Digital Agency Client",
      description:
        "Built a marketing website for a digital agency. Their team can add and edit pages, images, and campaign content on their own without needing a developer for every change.",
      technologies: [
        "Payload CMS",
        "Nodejs",
        "typescript",
        "Nextjs",
        "MongoDB",
        "Vercel"
      ],
      links: [
      ],
      image: "",
      video: "",
    },
    {
      title: "Service Business Client",
      description:
        "Built a mobile app for a company that sends technicians to customer locations. Staff use the app to see their daily visits, update job progress, and stay in sync with the office team.",
      technologies: [
        "React Native",
        "Expo",
        "typescript",
        "Nextjs",
        "Supabase"
      ],
      links: [
      ],
      image: "",
      video: "",
    },
    {
      title: "SaaS Startup Client",
      description:
        "Built a help center and customer portal for a software startup. Users can read guides and FAQs online, while the startup team updates all content from a simple admin panel—no code required.",
      technologies: [
        "Payload CMS",
        "React Native",
        "Expo",
        "typescript",
        "Nextjs",
        "PostgreSQL"
      ],
      links: [
      ],
      image: "",
      video: "",
    },
  ],
} as const;
