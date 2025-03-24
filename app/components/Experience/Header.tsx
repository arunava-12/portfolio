"use client";
import { experienceSectionText } from "@/app/data";
import { motion, useInView } from "framer-motion";
import { DotIcon } from "lucide-react";
import { useRef } from "react";
import { headerLeftVariants, headerRightVariants } from "./variants";

const wordRevealVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SplitText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <motion.span key={index} variants={wordRevealVariants} custom={index}>
          {word}{" "}
        </motion.span>
      ))}
    </>
  );
};

export const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="flex flex-col sm:flex-row sm:justify-between items-center mb-20 text-white mix-blend-difference"
    >
      <div className="flex-1">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={headerLeftVariants}
          className="flex items-center"
        >
          <DotIcon />
          <h1 className="uppercase font-bold tracking-widest text-md break-words text-center font-serif">
            <SplitText text="Experience" />
          </h1>
        </motion.div>
        <motion.p
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={headerLeftVariants}
          className="
            uppercase font-bold tracking-widest text-lg sm:text-xl md:text-2xl lg:text-3xl mt-5 break-words text-left font-serif mb-10 
          "
        >
          <SplitText text="Explore my journey" />
        </motion.p>
      </div>
      <motion.p
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={headerRightVariants}
        className="text-sm font-sans w-[300px]"
      >
        <SplitText text={experienceSectionText} />
      </motion.p>
    </div>
  );
};
