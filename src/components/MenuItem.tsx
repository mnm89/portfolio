import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const variants = {
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

export const SideBarMenuItem = ({
  path,
  label,
  icon,
}: {
  path: string;
  label: string;
  icon: JSX.Element;
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isActive = path === pathname;
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: isActive ? 1.1 : 0.95 }}
      onClick={() => navigate(path)}
      className={`list-none mb-5 flex items-center cursor-pointer ${
        isActive ? "scale-110" : "scale-100"
      }`}
    >
      <div
        className={`border-solid border-2 border-primary w-10 h-10 rounded-full mr-5 flex flex-wrap content-center justify-center ${
          isActive
            ? "text-white bg-primary shadow-md shadow-primaryLight"
            : "text-black bg-transparent shadow-none"
        }`}
      >
        {icon}
      </div>
      <div
        className={`${
          isActive
            ? "text-white bg-primary shadow-md shadow-primaryLight"
            : "text-black bg-transparent shadow-none"
        } border-solid border-2 border-primary w-52 h-auto flex-1 text-left pl-2`}
      >
        {label}
      </div>
    </motion.li>
  );
};
export const TopBarMenuItem = ({
  path,
  label,
}: {
  path: string;
  label: string;
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isActive = path === pathname;
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: isActive ? 1.1 : 0.95 }}
      onClick={() => navigate(path)}
      className={`list-none flex items-center cursor-pointer ${
        isActive ? "scale-110" : "scale-100"
      }`}
    >
      <div
        className={`${
          isActive ? "border-solid border-b-2 border-primary" : "border-none"
        } text-black w-52 flex-1 text-center py-2 text-lg`}
      >
        {label}
      </div>
    </motion.li>
  );
};
