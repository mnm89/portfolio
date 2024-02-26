"use client";
import { useCycle, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { MenuToggle } from "@/ui/components/nav-bar/menu-toggle";
import { IconType } from "react-icons";
import React from "react";
import { navigation } from "@/ui/helpers";

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function MenuItem({
  path,
  label,
  icon,
}: {
  path: string;
  label: string;
  icon: IconType;
}) {
  const pathname = usePathname();
  const { push: navigate } = useRouter();
  const isActive = path === pathname;
  return (
    <motion.li
      variants={menuItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: isActive ? 1.1 : 0.95 }}
      onClick={() => navigate(path)}
      className={`list-none mb-5 flex items-center cursor-pointer ${
        isActive ? "scale-110" : "scale-100"
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full mr-5 flex flex-wrap content-center justify-center ${
          isActive
            ? "text-blue-gray-900 bg-nav-active shadow-md"
            : "text-white bg-transparent shadow-none border-solid border-2 border-nav-active"
        }`}
      >
        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
      </div>
      <div
        className={`${
          isActive
            ? "text-blue-gray-900 bg-nav-active shadow-md"
            : "text-white bg-transparent shadow-none border-solid border-2 border-nav-active"
        } w-52 h-auto flex-1 text-left p-1 pl-5 rounded-full`}
      >
        {label}
      </div>
    </motion.li>
  );
}

const sidebarVariant = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export function SideBar({ height }: { height: number }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const pathname = usePathname();

  useEffect(() => {
    toggleOpen();
  }, [pathname, toggleOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className="absolute top-0 left-0 z-10"
    >
      <div
        onClick={() => toggleOpen()}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute bg-indigo-100 opacity-40 blur w-screen h-screen`}
      />

      <motion.div
        className="relative shadow-lg top-0 left-0 w-80 h-screen bg-nav-background"
        variants={sidebarVariant}
      >
        <MenuToggle toggle={() => toggleOpen()} />
        <motion.ul
          className="p-6 top-28 w-72 m-0"
          variants={{
            open: {
              transition: { staggerChildren: 0.07, delayChildren: 0.2 },
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
        >
          {navigation.map((link) => (
            <MenuItem
              key={link.path}
              path={link.path}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
}
