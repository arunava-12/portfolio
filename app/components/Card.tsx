import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Badge from "./ui/Badge";

type Project = {
  id: number;
  name: string;
  technologies: string[];
  description: string;
  githubLink?: string;
  liveAppLink?: string;
  imagePath: string;
};

type Props = {
  data: Project;
  index: number;
  range: [number, number];
  targetScale: number;
  globalProgress: MotionValue<number>;
};

const Card: React.FC<Props> = ({
  data,
  range,
  index,
  targetScale,
  globalProgress,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const variants = {
    initial: { translateY: 30, opacity: 0 },
    enter: { translateY: 0, opacity: 1 },
  };

  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const cardScale = useTransform(globalProgress, range, [1, targetScale]);

  const {
    id,
    description,
    githubLink,
    imagePath,
    liveAppLink,
    name,
    technologies,
  } = data;

  return (
    <motion.div
      ref={containerRef}
      style={{
        top: `calc(10% + ${index * 25}px)`,
      }}
      className="h-[100vh] sticky font-sans cursor-auto"
      key={id}
      variants={variants}
      initial="initial"
      animate="enter"
    >
      <motion.div
        style={{
          background: index % 2 === 0 ? "#cdcbcb" : "#232121",
          color: index % 2 === 0 ? "black" : "white",
          scale: cardScale,
        }}
        className="w-[300px] sm:w-[500px] md:w-[1000px] h-auto rounded-xl p-10 overflow-hidden md:flex md:justify-between gap-4"
      >
        <motion.div
          style={{ opacity: imageOpacity, scale: imageScale }}
          className="flex-grow overflow-hidden"
        >
          <Image
            className="rounded-xl object-cover w-[500px] min-w-[200px] h-auto"
            width={0}
            height={0}
            src={imagePath}
            alt="project-1"
            sizes="100vw"
          />
        </motion.div>
        <div className="md:w-[500px]">
          <h1 className="uppercase font-bold tracking-widest text-2xl md:text-4xl mt-2">
            {name}
          </h1>
          <p className="my-2 tracking-widest text-xl">Technologies</p>
          <div className="mb-1 flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <Badge key={i} title={tech} />
            ))}
          </div>
          <p>{description}</p>

          <div className="flex justify-between mt-2">
            {githubLink ? (
              <div className="flex gap-1">
                <LinkIcon />
                <Link target="_blank" href={githubLink}>
                  Github
                </Link>
              </div>
            ) : null}
            {liveAppLink ? (
              <div className="flex gap-1">
                <LinkIcon />
                <Link target="_blank" href={liveAppLink}>
                  Live App
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
