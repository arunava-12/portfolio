import { useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data";
import Card from "./Card";

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const Cards = () => (
    <>
      {projects.map((data, i) => {
        const startRange = 100 / projects.length / 100;
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            index={i}
            key={i}
            data={data}
            range={[startRange, 1]}
            targetScale={targetScale}
            globalProgress={scrollYProgress}
          />
        );
      })}
    </>
  );

  return (
    <div
      ref={container}
      id="projects"
      className="cursor-auto md:cursor-none px-6 pt-20 pb-10 mt-[50vh]"
    >
      <h1 className="uppercase font-bold tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-5 break-words text-center font-serif mb-10 text-white mix-blend-difference">
        Projects
      </h1>
      <div className="flex flex-col items-center">
        <Cards />
      </div>
    </div>
  );
}
