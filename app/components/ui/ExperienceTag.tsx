import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ExperienceTag({ value }: { value: string }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const hoverProps = {
    scale: 1.1,
    translateY: -10,
    //skewX: 5,
    opacity: 0.8,
    //boxShadow: "0 2px 0 0",
  };

  const hoverText = "huh! ";

  const variants = {
    initial: { opacity: 0, translateX: -10 },
    enter: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      translateX: -10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={hoverProps}
      transition={{
        type: "spring",
        duration: 0.5,
        bounce: 0.2,
      }}
      className="border-2 border-primary py-2 px-4 rounded-2xl"
    >
      <div className="relative font-semibold uppercase tracking-widest">
        <p>{hovered ? "Senior" : value}</p>
        <AnimatePresence>
          {hovered ? (
            <motion.p
              initial="initial"
              animate="enter"
              exit="exit"
              variants={variants}
              className="absolute font-serif -top-2 left-24"
            >
              {hoverText}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
