"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { educationSectionText, education } from "@/app/data";
import { DotIcon } from "lucide-react";
import Badge from "@/app/components/ui/Badge";
import { headerLeftVariants, headerRightVariants } from "@/app/components/Experience/variants";

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

export const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section id="education" className="py-8 px-10">
      {/* Animated Section Header */}
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
              <SplitText text="Education" />
            </h1>
          </motion.div>
          <motion.p
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={headerLeftVariants}
            className="uppercase font-bold tracking-widest text-lg sm:text-xl md:text-2xl lg:text-3xl mt-5 break-words text-left font-serif mb-10"
          >
            <SplitText text="My Learning Journey" />
          </motion.p>
        </div>
        <motion.p
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={headerRightVariants}
          className="text-sm font-sans w-[300px]"
        >
          <SplitText text={educationSectionText} />
        </motion.p>
      </div>

      {/* Education Entries */}
      {education.map(({ institution, degree, duration, id, tags }) => (
        <div key={id} className="border-b-[1px] border-secondary p-6">
          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row sm:justify-between text-white mix-blend-difference">
            <div className="flex-grow">
              <h2 className="tracking-widest text-lg break-words font-sans">
                {institution}
              </h2>
              <div className="flex justify-center sm:justify-start items-center mt-2">
                <DotIcon size={30} />
                <p className="tracking-widest break-words text-sm font-serif">
                  {duration}
                </p>
              </div>
            </div>
            <p className="tracking-widest break-words text-sm font-sans sm:basis-1/5">
              {degree}
            </p>
            <div className="flex items-center flex-wrap gap-2 sm:basis-1/5">
              {tags.map((tag, i) => (
                <Badge className="bg-secondary" key={i} title={tag} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
