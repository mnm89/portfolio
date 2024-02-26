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

export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 760,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const PALETTE = {
  primary: "#437C90",
  primaryLight: "#74aabe",
  secondary: "#823329",
  secondaryLight: "#d37f73",
  accent: "#A98743",
  accentLight: "#F7C548",
  background: "#EEEBD3",
};
