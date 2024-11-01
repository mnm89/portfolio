import { GithubProject } from "@/components/projects-list";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import FramerWrapper from "@/components/framer-wrapper";
import { Award } from "lucide-react";

const projects: GithubProject[] = [
  {
    description:
      "This is a simple example of a To-Do List App built with Vue.js. This example demonstrates the basics of Vue.js, including components, data binding, event handling, and dynamic updates.",
    githubUrl: "https://github.com/mnm89/todo-vue",
    image: "/todo-vue.png",
    id: "1",
    liveDemoUrl: "https://mnm89.github.io/todo-vue/",
    technologies: ["vue.js", "javascript", "html", "css"],
    title: "Todo List App",
  },
  {
    description:
      "A fully responsive landing page for a fictitious product called 'SmartFit' a hypothetical fitness app. The code is clean, uses modern design principles, and ensures cross-browser compatibility. The page is built using HTML5, CSS3, and a bit of JavaScript for interactivity.",
    githubUrl: "https://github.com/mnm89/smart-fit",
    image: "/smart-fit.png",
    id: "2",
    liveDemoUrl: "https://mnm89.github.io/smart-fit/",
    technologies: ["javascript", "html", "css"],
    title: "SmartFit",
  },
  {
    description:
      "This project is simple Nestjs application to manage food via Rest API. For the database management we use Prisma. A food can be related to a category, a food can be also related to a meal. Each model is managed by it's own crud.",
    githubUrl: "https://github.com/mnm89/food-api",
    image: "/food-api.png",
    id: "3",
    liveDemoUrl: "https://food-management-api.up.railway.app/",
    technologies: ["typescript", "nestjs", "prisma"],
    title: "Food API",
  },
  {
    description:
      "This project is an example of socket IO client implementation, which allows you to subscribe to IO server events.",
    githubUrl: "https://github.com/mnm89/socket.io-client-testing-tool",
    image: "/socket-io-client.png",
    id: "4",
    liveDemoUrl: "https://mnm89.github.io/socket.io-client-testing-tool/",
    technologies: ["react", "html", "javascript", "css", "socket.io"],
    title: "Socket IO client testing tool",
  },
  {
    description:
      "TaskFlow is a task management app where users can create, update, and delete tasks. The app provides real-time task collaboration features using WebSockets, supports user authentication with JWT, and integrates with an external API for time-tracking. It uses a PostgreSQL database for data persistence and demonstrates best practices with TypeScript, React, Node.js, and Express",
    githubUrl: "https://github.com/mnm89/task-management",
    image: "/task-app.png",
    id: "5",
    liveDemoUrl: "https://task-management-mnm.vercel.app",
    technologies: [
      "react",
      "html",
      "typescript",
      "css",
      "socket.io",
      "typeorm",
      "express",
      "jsonwebtoken",
    ],
    title: "TaskFlow - Task Management App",
  },
  {
    description:
      "This repository is a full-stack e-commerce solution built using Medusa v2 for the backend and the Medusa Next.js Starter for the frontend. The setup includes MinIO for file storage and integrates Stripe and PayPal as payment providers. The project is containerized using Docker Compose to simplify running the entire stack locally or in production environments.",
    githubUrl: "https://github.com/mnm89/e-commerce-store",
    image: "/ecommerce-store.png",
    id: "6",
    liveDemoUrl: "",
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
    title: "Full-Stack E-commerce Project",
  },
  {
    description:
      "a video player using ffmpeg with electron. It took any video format as input convert it to mp4 save it to disk and play it or queue it in the playlist",
    githubUrl: "https://github.com/mnm89/electron-ffmpeg",
    image: "/electron-ffmpeg.png",
    id: "7",
    liveDemoUrl: "",
    technologies: [
      "Electron",
      "Angular",
      "typescript",
      "ngx-videogular",
      "ffmpeg",
    ],
    title: "Electron-ffmpeg Media Player",
  },
];

export default function ProjectsPage() {
  return (
    <section className="flex flex-col items-start">
      <Badge variant="secondary" className="gap-2 mt-2">
        <Award className="h-5 w-5" />
        My Projects
      </Badge>
      <Typography
        as="h1"
        variant="h1"
        className="text-4xl font-bold mb-4"
      ></Typography>
      <Typography as="p" variant="body1" className="text-lg mb-6">
        Here are some of my recent projects hosted on GitHub. Feel free to
        explore the repositories and dive into the code.
      </Typography>
      <Button asChild>
        <Link
          href="https://github.com/mnm89?tab=repositories"
          target="_blank"
          className="mb-10"
        >
          View My GitHub
        </Link>
      </Button>
      <FramerWrapper y={0} x={100} className="flex flex-wrap gap-2">
        {projects.map((p) => (
          <Card className="w-[350px] flex-col flex" key={p.id}>
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={p.image}
                alt={`${p.title} screenshot`}
                width={350}
                height={400}
                className="rounded-t-md"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {p.technologies.map((tech) => (
                  <Badge key={tech} className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <Button asChild>
                <Link href={p.githubUrl} target="_blank">
                  View on GitHub
                </Link>
              </Button>
              {p.liveDemoUrl && (
                <Button asChild variant="outline">
                  <Link href={p.liveDemoUrl} target="_blank">
                    Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </FramerWrapper>
    </section>
  );
}
