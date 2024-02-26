"use client";
import React from "react";
import {
  Navbar as MTNavbar,
  Typography,
  MenuItem as MTMenuItem,
  Avatar,
} from "@material-tailwind/react";
import Link from "next/link";
import me from "@/public/me.jpeg";
import { navigation } from "@/ui/helpers";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

function MenuItem({
  path,
  icon,
  label,
}: {
  path: string;
  label: string;
  icon: IconType;
}) {
  const pathname = usePathname();
  const isActive = path === pathname;
  const className = isActive
    ? "text-nav-background bg-nav-active shadow-md"
    : "text-nav-active bg-transparent shadow-none";
  return (
    <Link href={path}>
      <Typography
        variant="small"
        color="gray"
        className="font-medium text-nav-active"
      >
        <MTMenuItem
          className={className + " flex items-center gap-2 rounded-full"}
        >
          {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
          <span>{label}</span>
        </MTMenuItem>
      </Typography>
    </Link>
  );
}

export function TopBar() {
  return (
    <MTNavbar className="sticky top-2 mx-auto max-w-screen-xl p-2 rounded-full pr-6 bg-nav-background border-nav-active border border-solid">
      <div className="relative mx-auto flex items-center justify-between">
        <Avatar variant="circular" size="sm" alt="tania andrew" src={me.src} />
        <div className="block">
          <ul className="flex  gap-2 mb-0 mt-0 flex-row items-center">
            {navigation.map(({ label, icon, path }, key) => (
              <MenuItem
                label={label}
                icon={icon}
                path={path}
                key={`nav-link-${key}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </MTNavbar>
  );
}
