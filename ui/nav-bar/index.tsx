"use client";
import React from "react";
import useDimensions from "@/ui/hooks/use-dimensions";
import { SideBar } from "@/ui/nav-bar/side-bar";
import { TopBar } from "@/ui/nav-bar/top-bar";

export function Navbar() {
  const { md, sm, xs, height, lg, xl } = useDimensions();

  if (sm || xs || md) return <SideBar height={height} />;
  if (lg || xl) return <TopBar />;
  return <></>;
}
export default Navbar;
