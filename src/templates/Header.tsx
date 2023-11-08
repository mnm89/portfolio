import { useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../hooks/use-dimensions";
import { MenuToggle } from "../components/MenuToggle";
import { SideBarNavigation, TopBarNavigation } from "../molecules/Navigation";
import { useLocation } from "react-router-dom";
import { Logo } from "../components/Logo";

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

const SideBar = ({ height }: { height: number }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { key } = useLocation();

  useEffect(() => {
    toggleOpen();
  }, [key, toggleOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className="absolute top-0 left-0 bottom-0 w-80 z-10"
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-80 bg-background"
        variants={sidebarVariant}
      />
      <SideBarNavigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

const TopBar = () => {
  return (
    <motion.nav
      className={`text-black flex px-4 fixed top-0 left-0 w-screen h-16 bg-background z-10 shadow-lg`}
    >
      <Logo />
      <TopBarNavigation />
    </motion.nav>
  );
};

export const Header = () => {
  const { height, sm, xs } = useDimensions();

  if (sm || xs) return <SideBar height={height} />;

  return <TopBar />;
};
