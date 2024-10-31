import FramerWrapper from "@/components/framer-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills, tools } from "@/lib/constants";
import { Download, Lightbulb, MailPlus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { JSX, SVGProps } from "react";

function ApertureIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m14.31 8 5.74 9.94" />
      <path d="M9.69 8h11.48" />
      <path d="m7.38 12 5.74-9.94" />
      <path d="M9.69 16 3.95 6.06" />
      <path d="M14.31 16H2.83" />
      <path d="m16.62 12-5.74 9.94" />
    </svg>
  );
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ContactIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function DatabaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function EuroIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12" />
      <path d="M4 14h9" />
      <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
    </svg>
  );
}

function GroupIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function LanguagesIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  );
}

function PuzzleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}

function RulerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  );
}

function ServerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function SwissFrancIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 21V3h8" />
      <path d="M6 16h9" />
      <path d="M10 9.5h7" />
    </svg>
  );
}

function TestTubesIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2" />
      <path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2" />
      <path d="M3 2h7" />
      <path d="M14 2h7" />
      <path d="M9 16H4" />
      <path d="M20 16h-5" />
    </svg>
  );
}

function TypeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}

export default function SkillPage() {
  return (
    <section className="grid gap-2 mt-2">
      <ScrollArea className="w-[360px] md:[400px] lg:w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          <FramerWrapper
            y={0}
            x={200}
            className="flex flex-col gap-3 border p-4 border-secondary-foreground shadow rounded "
          >
            <Badge variant="default" className=" max-w-fit gap-2">
              <Lightbulb className="h-5 w-5" />
              Technical
            </Badge>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-1">
                <CodeIcon className="w-8 h-8" />
                <div>Programming</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <TypeIcon className="w-8 h-8" />
                <div>Design</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ServerIcon className="w-8 h-8" />
                <div>Serverless</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ApertureIcon className="w-8 h-8" />
                <div>APIs</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <DatabaseIcon className="w-8 h-8" />
                <div>Database</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <TestTubesIcon className="w-8 h-8" />
                <div>Testing</div>
              </div>
            </div>
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={200}
            className="flex flex-col gap-3 border p-4 border-secondary-foreground shadow rounded "
          >
            <Badge variant="default" className="max-w-fit gap-2">
              <Lightbulb className="h-5 w-5" />
              Soft
            </Badge>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-1">
                <GroupIcon className="w-8 h-8" />
                <div>Teamwork</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ContactIcon className="w-8 h-8" />
                <div>Communication</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RulerIcon className="w-8 h-8" />
                <div>Leadership</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <PuzzleIcon className="w-8 h-8" />
                <div>Problem Solving</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ClockIcon className="w-8 h-8" />
                <div>Time Management</div>
              </div>
            </div>
          </FramerWrapper>
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <FramerWrapper
        y={0}
        x={100}
        className=" font-poppins text-xl w-full max-sm:text-lg"
      >
        Experienced in building scalable, high-performance web applications
        using modern JavaScript frameworks and libraries. Proficient in
        front-end and back-end development, including expertise in React, Next
        Node.js, and Typescript. Strong understanding of asynchronous
        programming, state management, and UI/UX design principles.
      </FramerWrapper>
      <FramerWrapper y={0} x={-100}>
        <h1 className="font-poppins text-secondary-foreground dark:text-secondary font-bold text-4xl max-sm:text-2xl">
          I am familiar with / worked with
        </h1>
      </FramerWrapper>
      <ScrollArea className="w-[360px] md:[400px] lg:w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          <TooltipProvider>
            {skills.map(({ icon, label }) => (
              <FramerWrapper y={0} x={100} key={label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    {React.createElement(icon, {
                      className: "w-10 h-10 cursor-pointer",
                    })}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              </FramerWrapper>
            ))}
          </TooltipProvider>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="w-[360px] md:[400px] lg:w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          <TooltipProvider>
            {tools.map(({ icon, label }) => (
              <FramerWrapper y={0} x={100} key={label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    {React.createElement(icon, {
                      className: "w-10 h-10 cursor-pointer",
                    })}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              </FramerWrapper>
            ))}
          </TooltipProvider>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <FramerWrapper y={0} x={-100}>
        <h1 className="font-poppins text-secondary-foreground dark:text-secondary font-bold text-4xl max-sm:text-2xl">
          My strongest skills and how I learned them...
        </h1>
      </FramerWrapper>
      <FramerWrapper
        y={0}
        x={100}
        className=" font-poppins text-xl w-full max-sm:text-lg"
      >
        After years of coding, in different environments with different
        startups, I ended up building a strong expertise and comfort working
        with frameworks and tools. I am also adept at collaborating with
        cross-functional teams to deliver clean, maintainable code that meets
        business objectives. Passionate about continuous learning and staying
        updated with the latest industry trends and best practices.
      </FramerWrapper>
      <FramerWrapper y={0} x={-100}>
        <h1 className="font-poppins text-secondary-foreground dark:text-secondary font-bold text-4xl max-sm:text-2xl">
          What I am looking for...
        </h1>
      </FramerWrapper>
      <FramerWrapper
        y={0}
        x={100}
        className=" font-poppins text-xl w-full max-sm:text-lg"
      >
        My ideal position is a Fullstack JavaScript Engineer. Frontend only or
        Backend only position also in my interest. It is a strong belief of mine
        that continuous learning and staying updated with the latest industry
        trends and best practices is the key to success.
      </FramerWrapper>
      <FramerWrapper
        y={0}
        x={100}
        className=" font-poppins text-xl w-full max-sm:text-lg flex gap-2 justify-end"
      >
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="text-base px-5">
            <Download className="mx-1" />
            Download Resume
          </Button>
        </Link>
        <Link href="/contact" prefetch={false}>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-5 border-primary text-primary"
          >
            <MailPlus className="mx-1" />
            Contact
          </Button>
        </Link>
      </FramerWrapper>
    </section>
  );
}
