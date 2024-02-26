"use client";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  icon: IconType;
}
export function IconCard(props: Props) {
  const { label, icon } = props;
  return (
    <Tooltip content={label} className="bg-nav-background text-nav-active">
      <div
        key={label}
        className="border border-solid border-fuchsia-900 hover:border-fuchsia-400 bg-nav-background text-nav-active lg:px-12 px-6 lg:py-4 py-2 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-fuchsia-400"
      >
        {React.createElement(icon, {
          className: "h-[50px] w-[50px] lg:h-[80px] lg:w-[80px]",
        })}
      </div>
    </Tooltip>
  );
}
