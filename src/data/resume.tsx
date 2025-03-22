import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "M.Naceur Mabrouk",
  initials: "MNM",
  url: "https://www.mnmabrouk.com",
  location: "Berlin, DE",
  locationLink: "https://www.google.com/maps/place/Berlin",
  description:
    "I am a dedicated software engineer with a passion for web development and a keen eye for creating efficient, user-friendly applications.",
  summary:
    "Innovative and results-driven Senior Full Stack Software Engineer with extensive experience in developing scalable, high-performance web and mobile solutions. Proficient in both front-end and back-end technologies, with expertise in JavaScript (Node.js, React.js, TypeScript), C# .NET, PHP, and cloud infrastructure. Proven ability to lead technical teams, optimize system performance, and deliver impactful digital solutions. Passionate about mentoring, DevOps, and cutting-edge software architectures.",
  avatarUrl: "/me.png",
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
      title: "Technical Lead & Software Engineer",
      logoUrl: "/nv.png",
      start: "Oct 2023",
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
      title: "Supabase Webhooks & Resend Emails",
      href: "#",
      dates: "Feb 2025 - Feb 2025",
      active: true,
      description:
        "A code sample + demo to show a use case of supabase auth hook and database hook and sending custom react email templates via Resend api or smtp configuration (nodemailer)",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Supabase",
        "Resend",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mnm89/supabase-resend-emails",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Next Vision Consulting",
      href: "#",
      dates: "Oct 2024 - Feb 2025",
      active: true,
      description:
        "A consultancy platform for students applying to study in Germany. A full-stack system using Next.js (frontend & admin dashboard), React Native (mobile apps), and Supabase (backend infrastructure). Integrated Calendly for appointment scheduling",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nvisionconsulting.de",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Full-Stack E-commerce",
      href: "#",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Setup for a Medusa V2 application including MinIO for file storage, Paypal and Stripe as payment providers, with a docker-compose stack",
      technologies: [
        "Medusa V2",
        "Nodejs",
        "typescript",
        "Nextjs",
        "React",
        "Minio",
        "Stripe",
        "Paypal",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mnm89/e-commerce-store",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ZForm",
      href: "#",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "ZForm is a dynamic form generation library based on shadcn components that utilizes Zod schemas to automatically create and manage forms. Built on react-hook-form, it allows for extensive customization of form fields, layouts, and behaviors",
      technologies: [
        "Next.js",
        "Typescript",
        "zod",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mnm89/zform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "StepWizard",
      href: "#",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "The StepWizard component is a flexible and customizable stepper component designed to guide users through a multi-step process, such as onboarding, surveys, or forms. It simplifies the implementation of complex workflows by managing steps and transitions seamlessly.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mnm89/step-wizard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SoltanOptic",
      href: "#",
      dates: "Jul 2023 - May 2024",
      active: true,
      description:
        "A full stack e-commerce project (MarketPlace) with it's store admin based on Medusa V1 and a search engine based on Meilisearch.",
      technologies: [
        "Medusa.js",
        "Typescript",
        "Docker",
        "Ant Design",
        "React",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://soltanoptic.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Electron ffmpeg",
      href: "#",
      dates: "Sep 2018 - Nov 2018",
      active: true,
      description: "A video player using ffmpeg with electron",
      technologies: [
        "Electron",
        "Angular",
        "typescript",
        "ngx-videogular",
        "ffmpeg",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mnm89/electron-ffmpeg",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
