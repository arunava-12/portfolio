import { Variants } from "framer-motion";

export const headerLeftVariants: Variants = {
  initial: {
    opacity: 0,
    translateX: -20,
    transition: {
      type: "spring",
      damping: 30,
    },
  },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: {
      type: "spring",
      damping: 30,
    },
  },
};

export const headerRightVariants: Variants = {
  initial: {
    opacity: 0,
    translateX: 20,
    transition: {
      type: "spring",
      damping: 30,
    },
  },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: {
      type: "spring",
      damping: 30,
    },
  },
};
