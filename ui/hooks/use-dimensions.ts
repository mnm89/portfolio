import { useState, useLayoutEffect, useEffect } from "react";
import { debounce, getScreenBreakpoints } from "../helpers";

const BREAKPOINTS = getScreenBreakpoints();

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  const [size, setSize] = useState<"xs" | "sm" | "md" | "lg" | "xl">("sm");

  useLayoutEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({
        height,
        width,
      });
      if (width < BREAKPOINTS.sm) setSize("xs");
      if (width >= BREAKPOINTS.sm && width < BREAKPOINTS.md) setSize("sm");
      if (width >= BREAKPOINTS.md && width < BREAKPOINTS.lg) setSize("md");
      if (width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl) setSize("lg");
      if (width >= BREAKPOINTS.xl) setSize("xl");
    }
    const debouncedHandleResize = debounce(handleResize, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return { ...dimensions, size };
};
export default useDimensions;
