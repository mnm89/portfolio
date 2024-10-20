import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export interface GithubProject {
  id: string;
  image: string;
  title: String;
  description: string;
  githubUrl: string;
  liveDemoUrl: string;
  technologies: string[];
}

export function ProjectCard({ project }: { project: GithubProject }) {
  return (
    <Card className="flex flex-col">
      {/* Project Image */}
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={600}
        height={400}
        className="rounded-t-md"
      />

      <CardContent className="p-4">
        {/* Project Title */}
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} className="text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Footer with GitHub/Live Demo Buttons */}
      <CardFooter className="space-x-4">
        <Button asChild>
          <Link href={project.githubUrl} target="_blank">
            View on GitHub
          </Link>
        </Button>
        {project.liveDemoUrl && (
          <Button asChild variant="outline">
            <Link href={project.liveDemoUrl} target="_blank">
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function ProjectsList({
  projects,
}: {
  projects: GithubProject[];
}) {
  return (
    <section className="container mx-auto my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
