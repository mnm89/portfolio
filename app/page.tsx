import { CursorBlinker, RedoAnimText } from "@/components/animated-text";
import FramerWrapper from "@/components/framer-wrapper";
import { GithubCalendar } from "@/components/github-calendar";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Download,
  ExternalLink,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

import Link from "next/link";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/mednacer.mabrouk",
      icon: <Facebook />,
    },
    {
      name: "Twitter",
      link: "https://x.com/med_naceur89",
      icon: <Twitter />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/mohamed-naceur-mabrouk-727714124",
      icon: <Linkedin />,
    },
    {
      name: "External",
      link: "https://www.xing.com/profile/MohamedNaceur_Mabrouk",
      icon: <ExternalLink />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-2 justify-start items-center h-[80vh]">
      <FramerWrapper
        className="flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <h1 className="font-rubik text-6xl text-primary max-sm:text-2xl">
          Mohamed Naceur Mabrouk
        </h1>
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-base px-5">
              <Download className="mx-1" />
              Download Resume
            </Button>
          </Link>
        </div>
      </FramerWrapper>
      <FramerWrapper
        className="flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <h3 className="font-poppins text-2xl max-sm:text-xl">
          I am a Software Engineer &
        </h3>

        <div className="text-6xl text-secondary-foreground dark:text-secondary max-sm:text-2xl flex gap-2 h-20">
          <RedoAnimText
            texts={[
              "Freelancer",
              "Programmer",
              "Creator",
              "Developer",
              "Contributor",
            ]}
          />
          <CursorBlinker />
        </div>

        <GithubCalendar />
      </FramerWrapper>
      <Link
        href={"https://github.com/mnm89"}
        target="blank"
        className=" animate-pulse flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md  border-y border-r border-primary text-primary  dark:border-secondary dark:text-secondary hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground"
      >
        <Github />
        <span className="font-rubik text-2xl max-sm:text-xl">Github</span>
      </Link>
    </section>
  );
}
