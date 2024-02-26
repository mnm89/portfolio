"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear", delay: 1.2 }}
      className="w-screen z-10 min-h-screen px-2 py-20 lg:py-10 md:px-5 lg:px-10 xl:px-20 "
    >
      {children}
    </motion.main>
  );
}
