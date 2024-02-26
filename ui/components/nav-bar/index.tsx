"use client";
import React from "react";
import useDimensions from "@/ui/hooks/use-dimensions";
import { SideBar } from "@/ui/components/nav-bar/side-bar";
import { TopBar } from "@/ui/components/nav-bar/top-bar";

export function Navbar() {
  const { height, size } = useDimensions();

  if (size === "sm" || size === "xs" || size === "md")
    return <SideBar height={height} />;
  return <TopBar />;
}
export default Navbar;
