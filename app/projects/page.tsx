import ProjectsList, { GithubProject } from "@/components/projects-list";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

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
    id: "2",
    liveDemoUrl: "https://food-management-api.up.railway.app/",
    technologies: ["typescript", "nestjs", "prisma"],
    title: "Food API",
  },
  {
    description:
      "This project is an example of socket IO client implementation, which allows you to subscribe to IO server events.",
    githubUrl: "https://github.com/mnm89/socket.io-client-testing-tool",
    image: "/socket-io-client.png",
    id: "3",
    liveDemoUrl: "https://mnm89.github.io/socket.io-client-testing-tool/",
    technologies: ["react", "html", "javascript", "css", "socket.io"],
    title: "Socket IO client testing tool",
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto my-8">
      <Typography as="h1" variant="h1" className="text-4xl font-bold mb-4">
        My Projects
      </Typography>
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

      <ProjectsList projects={projects} />
    </section>
  );
}
