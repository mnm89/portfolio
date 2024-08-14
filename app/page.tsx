import FramerWrapper from "@/components/framer-wrapper";
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
import Image from "next/image";
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
    <>
      <FramerWrapper
        className=" h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
        <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
          Mohamed Naceur <br /> Mabrouk .
        </h1>
        <div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
          <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
            I am a Software Engineer &
            <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide">
                <li className="text-[#2f7df4]">Freelancer</li>
                <li className="text-[#2f7df4]">Blogger</li>
                <li className="text-[#2f7df4]">Gamer</li>
                <li className="text-[#2f7df4]">Creator</li>
                <li className="text-[#2f7df4]">Developer</li>
                <li className="text-[#2f7df4]">Contributor</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
        <div className="h-fit w-full mt-2 py-2 px-4">
          <Button size={"lg"} className="text-base px-5 py-6">
            <Download className="mx-1" />
            Download Resume
          </Button>
        </div>
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper
        className="h-full w-[47%] relative block max-lg:hidden"
        y={0}
        x={100}
      >
        {/* IMAGE  */}
        <Image
          src="/logo.png"
          alt="logo"
          loading="eager"
          priority
          height={1000}
          width={1000}
        />
      </FramerWrapper>

      <Link
        href={"https://github.com/mnm89"}
        target="blank"
        className=" animate-pulse absolute left-0 bottom-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md  border-y border-r  border-black hover:bg-primary hover:text-white hover:animate-none "
      >
        <Github />
        <span className="font-rubik text-2xl max-sm:text-xl">Github</span>
      </Link>
    </>
  );
}
