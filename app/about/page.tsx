import FramerWrapper from "@/components/framer-wrapper";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Circle,
  Dna,
  Globe2,
  Heart,
  Languages,
  User2,
  Pin,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return <></>;
};

export default function About() {
  const items = [
    { hobby: "Playing games" },
    { hobby: "Watching anim" },
    { hobby: "Tech blog reading" },
    { hobby: "Trying new technologies" },
  ];
  const languages = ["Arabic", "English", "French", "German"];
  const details = [
    { name: "Gender", answer: "Male", icon: <Dna className="h-8 w-8" /> },
    {
      name: "Nationality",
      answer: "Tunisia",
      icon: <Globe2 className="h-8 w-8" />,
    },
    {
      name: "Location",
      answer: "Berlin, Germany",
      icon: <Pin className="h-8 w-8" />,
    },
  ];

  return (
    <section className="flex flex-col items-start gap-5">
      <Badge variant="secondary" className="gap-2 mt-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <FramerWrapper
        className="w-full flex flex-row flex-wrap gap-2 justify-center lg:justify-between"
        y={100}
        delay={0.3}
      >
        {details.map((val, indx) => {
          return (
            <div className="w-fit rounded-md border p-4" key={indx}>
              <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">
                {val.icon}
                {val.name}
              </h1>
              <div className="flex gap-2 justify-start flex-row text-xl pt-3 max-lg:justify-start">
                {val.answer}
              </div>
            </div>
          );
        })}
      </FramerWrapper>
      <div className="flex flex-col gap-3">
        <FramerWrapper y={0} x={-100}>
          <h1 className="font-poppins text-secondary-foreground dark:text-secondary font-bold text-4xl max-sm:text-2xl">
            Software Engineer And Web <br /> Developer, Based In Germany.
          </h1>
        </FramerWrapper>
        <FramerWrapper
          y={0}
          x={100}
          className=" font-poppins text-xl w-full max-sm:text-lg"
        >
          I am a dedicated software engineer with a passion for web development
          and a keen eye for creating efficient, user-friendly applications.
          With a strong foundation in both front-end and back-end technologies,
          I had spent years honing the skills necessary to build robust,
          scalable web applications that meet the ever-evolving needs of users.
        </FramerWrapper>
        <FramerWrapper
          y={0}
          x={100}
          className=" font-poppins text-xl w-full max-sm:text-lg"
        >
          My journey into the world of software engineering began with a
          fascination for how the web works and a desire to contribute to the
          digital experiences that shape our everyday lives. This passion led to
          the pursuit of a bachelor degree in computer science from ENICarthage
          (Tunisia), followed by a degree of a software engineer from ESPRIT
          (Tunisia) , where I developed a deep understanding of computer science
          principles, algorithms, data structures and programming languages.
        </FramerWrapper>
        <FramerWrapper
          y={0}
          x={100}
          className=" font-poppins text-xl w-full max-sm:text-lg"
        >
          Over the course of my career, I had worked on a diverse range of
          projects, from building responsive, interactive websites to developing
          complex web applications that drive business success. My expertise
          spans across various programming languages and frameworks, including
          HTML, CSS, JavaScript, React, Node.js, and more, making me a versatile
          developer who can adapt to the needs of any project.
        </FramerWrapper>
        <FramerWrapper
          y={0}
          x={100}
          className=" font-poppins text-xl w-full max-sm:text-lg"
        >
          What sets me apart is not just technical proficiency but a commitment
          to continuous learning and staying ahead of industry trends. Whether
          it’s exploring the latest web technologies, optimizing performance, or
          enhancing user experience, I am always looking for ways to push the
          boundaries of what’s possible on the web.
        </FramerWrapper>
        <FramerWrapper
          y={0}
          x={100}
          className=" font-poppins text-xl w-full max-sm:text-lg"
        >
          In addition to technical skills, I am a strong collaborator who
          thrives in team environments. I understand the importance of clear
          communication and effective teamwork in delivering successful
          projects, and my ability to work closely with designers, product
          managers, and other developers has consistently resulted in the timely
          delivery of high-quality software.
        </FramerWrapper>
        <FramerWrapper
          y={0}
          x={100}
          className=" font-poppins text-xl w-full max-sm:text-lg"
        >
          When not coding, I enjoys reading & watching conferences about new
          technologies, which helps maintain a well-rounded perspective and
          inspires creativity in my work. With a deep love for technology and a
          relentless drive for excellence, I am always ready to take on new
          challenges and contribute to projects that make a difference.
        </FramerWrapper>
      </div>

      <FramerWrapper className="grid grid-cols-2 gap-2 " y={100} delay={0.3}>
        <div className="rounded-md border p-4">
          <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
            <Languages className="h-8 w-8" /> Languages
          </h1>
          <div className="py-2 flex justify-between max-lg:flex-col">
            {languages.map((val, indx) => {
              return (
                <React.Fragment key={indx}>
                  <span>{val}</span>

                  {indx < items.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="mx-1 bg-primary h-auto"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="rounded-md border p-4">
          <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
            <Heart className="h-8 w-8" /> Hobbies
          </h1>
          <div className="flex gap-1 py-2 justify-between max-lg:flex-col">
            {items.map((val, indx) => {
              return (
                <React.Fragment key={indx}>
                  <span>{val.hobby}</span>
                  {indx < items.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="mx-1 bg-primary h-auto"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </FramerWrapper>
    </section>
  );
}
