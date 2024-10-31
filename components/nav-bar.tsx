"use client";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Home,
  Layers,
  Lightbulb,
  PackagePlus,
  Phone,
  User2,
} from "lucide-react";
import { buttonVariants } from "./ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const items = [
    { name: "Home", icon: <Home />, link: "/" },
    { name: "about", icon: <User2 />, link: "/about" },
    { name: "skills", icon: <Lightbulb />, link: "/skills" },
    { name: "projects", icon: <Layers />, link: "/projects" },
    // { name: "work", icon: <Briefcase />, link: "/education" },
    // { name: "more", icon: <PackagePlus />, link: "/more" },
    { name: "contact", icon: <Phone />, link: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <div
      className={`h-fit w-fit mt-4 px-5 z-50 m-auto border border-foreground rounded-full p-2 bg-background flex-row gap-3 transition ease-in-out delay-150  hover:scale-100 max-sm:gap-1`}
    >
      <TooltipProvider>
        {items.map((itm) => {
          return (
            <Tooltip key={itm.name}>
              <TooltipTrigger asChild>
                <Link
                  href={itm.link}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    pathname === itm.link && "dark:text-secondary text-primary"
                  )}
                >
                  {itm.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{itm.name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
        <ModeToggle />
      </TooltipProvider>
    </div>
  );
};

export default Navbar;
