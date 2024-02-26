import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import {
  HiHome,
  HiUserCircle,
  HiCodeBracketSquare,
  HiDocument,
} from "react-icons/hi2";

export const navigation = [
  {
    label: "Home",
    icon: HiHome,
    path: "/",
  },
  {
    label: "About",
    icon: HiUserCircle,
    path: "/about",
  },
  {
    label: "Projects",
    icon: HiCodeBracketSquare,
    path: "/projects",
  },
  {
    label: "Resume",
    icon: HiDocument,
    path: "/resume",
  },
];

export function debounce(fn: () => void, ms: number) {
  let timer: NodeJS.Timeout | null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      // @ts-ignore
      fn.apply(this, arguments);
    }, ms);
  };
}

export function formatDate(date: Date) {
  const year = `${date.getFullYear()}`;
  const month =
    date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;

  return `${year} ${month}`;
}

export function getScreenBreakpoints(): {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
} {
  const fullConfig = resolveConfig(tailwindConfig);
  const result = {
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
  };
  return Object.keys(result).reduce((acc: any, curr: string) => {
    acc[curr] = Number.parseInt(
      fullConfig.theme["screens"][curr].replace("px", ""),
      10
    );
    return acc;
  }, {});
}
