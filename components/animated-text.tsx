"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};
export function CursorBlinker() {
  return (
    <motion.span
      variants={cursorVariants}
      animate="blinking"
      className="h-5 w-[1px] relative translate-y-px bg-slate-900 -z-10 block"
    >
      |
    </motion.span>
  );
}

export function RedoAnimText({ texts }: { texts: String[] }) {
  const textIndex = useMotionValue(0);
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 120, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, [count, textIndex, texts.length, updatedThisRound]);

  return <motion.span className="inline">{displayText}</motion.span>;
}

export function AnimText({ text }: { text: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [count, text.length]);

  return <motion.span>{displayText}</motion.span>;
}

export default AnimText;
