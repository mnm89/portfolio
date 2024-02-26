import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa6";
import about_1 from "@/public/about-1.png";
import about_2 from "@/public/about-2.png";
import about_3 from "@/public/about-3.png";
import React from "react";
import { ProfessionalSkills } from "@/ui/sections/professional-skills";
import { GithubCalendar } from "@/ui/components/github-calendar";

export default function About() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="flex flex-col gap-4 my-auto">
          <h1 className="flex flex-nowrap gap-2 text-xl md:text-4xl">
            Know Who
            <strong className="text-fuchsia-400 text-center">I&apos;M</strong>
          </h1>

          <p className="text-lg flex flex-wrap gap-2">
            Hi Everyone, I am
            <span className="text-fuchsia-400">Mohamed Naceur Mabrouk</span>
            from<span className="text-fuchsia-400"> Tunisia</span>
            located in<span className="text-fuchsia-400"> Berlin, Germany</span>
          </p>
          <p className="text-lg">
            Highly skilled and results-driven Full Stack Software Engineer with
            a strong background in developing innovative and efficient software
            solutions. Equipped with a comprehensive understanding of both
            front-end and back-end technologies, I have a proven ability to
            design, develop, and deploy complex web applications that meet the
            needs of clients and end-users.
          </p>
        </div>

        <div className="flex m-auto max-w-[532px]">
          <Image src={about_1} alt="home pic" />
        </div>
      </div>
      <div className="my-10" />

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="flex flex-col gap-8 my-auto">
          <p className="text-yellow-700 text-lg">
            Strive to build things that make a difference and Always open to
            learning new technologies and facing challenges
          </p>
          <p className="text-lg">
            During the previous years I gathered some knowledge about DevOps and
            Continuous Integration/Continuous Deployment so I became familiar
            with building and maintaining CI/CD pipelines to automate testing
            and deployment, also I built a strong analytical and problem-solving
            skills to troubleshoot issues and optimize applications
          </p>
        </div>

        <div className="flex m-auto max-w-[532px]">
          <Image src={about_3} alt="home pic" />
        </div>
      </div>

      <div className="my-10" />

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="flex flex-col gap-8 my-auto">
          <div className="flex flex-col gap-2 text-lg">
            <p className="flex flex-wrap gap-2 text-cyan-400">
              Apart from coding, some other activities that I love to do!
            </p>
            <ul className="flex flex-col gap-2 ml-4">
              <li className="flex gap-2">
                <FaHandPointRight /> <span>Playing Football</span>
              </li>
              <li className="flex gap-2">
                <FaHandPointRight />
                <span>Reading books</span>
              </li>
              <li className="flex gap-2">
                <FaHandPointRight />
                <span>Listening to music</span>
              </li>
            </ul>
          </div>
          <p className="text-lg">
            I used to work with cross-functional teams, including front-end
            developers, testers, and business stakeholders which in fact made my
            communication and collaboration skills more stronger and reliable.
          </p>
        </div>

        <div className="flex m-auto max-w-[532px]">
          <Image src={about_2} alt="home pic" />
        </div>
      </div>

      <ProfessionalSkills />

      <div className="flex justify-center">
        <GithubCalendar />
      </div>
    </section>
  );
}
