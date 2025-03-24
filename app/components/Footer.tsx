"use client";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { socials } from "../data";

const EMAIL = "arunavacr7@gmail.com";
export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const words = EMAIL.split("");

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#333",
      transition: { duration: 0.3, type: "spring", stiffness: 200 },
    },
    tap: {
      scale: 0.95,
      backgroundColor: "#222",
      transition: { duration: 0.2 },
    },
  };

  const MotionLink = motion(Link);

  return (
    <footer className="cursor-auto md:cursor-none bg-white mix-blend-difference text-black h-[40vh] flex flex-col justify-center items-end p-2">
      <motion.div
        ref={ref}
        className="tracking-widest text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-5 break-words text-center font-serif flex gap-1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordVariants}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-6 mt-5 justify-center items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={iconVariants}
      >
        <MotionLink
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover={{ scale: 1.2, color: "#0e76a8" }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin size={30} />
        </MotionLink>
        <MotionLink
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover={{ scale: 1.2, color: "#333" }}
          whileTap={{ scale: 0.9 }}
        >
          <Github size={30} />
        </MotionLink>
        <MotionLink
          className=""
          href="/assets/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
        >
          <motion.button
            className="bg-black text-white p-2 rounded-xl font-serif"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Resume
          </motion.button>
        </MotionLink>
      </motion.div>
    </footer>
  );
}
