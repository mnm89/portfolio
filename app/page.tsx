import Image from "next/image";
import { RedoAnimText, CursorBlinker } from "@/ui/components/animated-text";
import home from "@/public/home.svg";
import avatar from "@/public/avatar.svg";
import { FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="flex flex-col gap-8 my-auto">
          <h1 className="flex flex-nowrap gap-2 text-xl md:text-4xl">
            Hi There!
            <span className="inline-block origin-[70%_70%] animate-wave">
              👋🏻
            </span>
          </h1>

          <h1 className="flex flex-nowrap gap-2 text-xl md:text-4xl">
            I&apos;m
            <strong className="text-fuchsia-400 text-center">
              Mohamed Mabrouk
            </strong>
          </h1>

          <div className="text-xl md:text-3xl h-3 text-fuchsia-400 font-semibold flex gap-2">
            <RedoAnimText
              texts={[
                "Software engineer",
                "Full Stack javascript engineer",
                "MERN Stack Developer",
              ]}
            />
            <CursorBlinker />
          </div>
        </div>

        <div className="flex max-w-[532px]">
          <Image src={home} alt="home pic" className="m-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h1 className="justify-center flex flex-nowrap gap-2 text-xl md:text-4xl">
            <span className="whitespace-nowrap">LET ME</span>
            <span className="text-fuchsia-400">INTRODUCE</span>
            <span>MYSELF</span>
          </h1>
          <p className="text-lg flex flex-wrap gap-2">
            A software engineer graduated on 2017, Eager to always learn and
            discover new technologies in order to be up to date
          </p>
          <p className="text-lg flex flex-wrap gap-2">
            I am fluent in classics like
            <i>
              <b className="text-fuchsia-400">
                C#, PHP , Java and (Javascript/Typescript).
              </b>
            </i>
          </p>
          <p className="text-lg flex flex-wrap gap-2">
            My current focus is on &nbsp;
            <i>
              <b className="text-fuchsia-400">Full Stack javascript engineer</b>
            </i>
          </p>
          <p className="text-lg flex flex-wrap gap-2">
            Whenever possible, I also apply my passion for developing products
            with
            <i>
              <b className="text-fuchsia-400">Modern Javascript Frameworks</b>
            </i>
            like
            <i>
              <b className="text-fuchsia-400">
                Nest.js - Next.js - React.js - Express.js
              </b>
            </i>
            also deploying and monitoring apps using
            <i>
              <b className="text-fuchsia-400">DevOps tools</b>
            </i>
            like
            <i>
              <b className="text-fuchsia-400">
                Docker - CI/CD - AWS - k8s - Ansible - Terraform - Prometheus
              </b>
            </i>
          </p>
        </div>
        <div className="my-auto flex">
          <Image src={avatar} className="m-auto" alt="avatar" />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="text-center">
          <h1 className="text-xl md:text-4xl">FIND ME ON</h1>
          <p className="flex flex-nowrap gap-2 text-lg">
            Feel free to <span className="text-fuchsia-400">connect</span>with
            me
          </p>
          <ul className="mt-2 flex flex-row justify-center gap-4">
            <li className="flex justify-center">
              <a
                href="https://github.com/mnm89"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-fuchsia-900 text-2xl p-2 rounded-full hover:shadow-fuchsia-900 hover:shadow-lg hover:scale-125"
              >
                <FaGithub />
              </a>
            </li>
            <li className="flex justify-center">
              <a
                href="https://www.facebook.com/mednacer.mabrouk/"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-fuchsia-900 text-2xl p-2 rounded-full hover:shadow-fuchsia-900 hover:shadow-lg hover:scale-125"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/mohamed-naceur-mabrouk-727714124/"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-fuchsia-900 text-2xl p-2 rounded-full hover:shadow-fuchsia-900 hover:shadow-lg hover:scale-125"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
