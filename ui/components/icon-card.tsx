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
        className="border border-solid border-fuchsia-900 hover:border-fuchsia-400 bg-nav-background text-nav-active px-12 py-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-fuchsia-400"
      >
        {React.createElement(icon, { className: "h-[80px] w-[80px]" })}
      </div>
    </Tooltip>
  );
}
