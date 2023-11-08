import { useState, useLayoutEffect } from "react";
import { BREAKPOINTS } from "../constants";
import { debounce } from "../helpers";

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [breakpoints, setBreakpoints] = useState({
    xs: window.innerWidth < BREAKPOINTS.sm,
    sm:
      window.innerWidth >= BREAKPOINTS.sm && window.innerWidth < BREAKPOINTS.md,
    md:
      window.innerWidth >= BREAKPOINTS.md && window.innerWidth < BREAKPOINTS.lg,
    lg:
      window.innerWidth >= BREAKPOINTS.lg && window.innerWidth < BREAKPOINTS.xl,
    xl: window.innerWidth >= BREAKPOINTS.xl,
  });

  useLayoutEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({
        height,
        width,
      });
      setBreakpoints({
        xs: width < BREAKPOINTS.sm,
        sm: width >= BREAKPOINTS.sm && width < BREAKPOINTS.md,
        md: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
        lg: width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl,
        xl: width >= BREAKPOINTS.xl,
      });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return { ...dimensions, ...breakpoints };
};
export default useDimensions;
