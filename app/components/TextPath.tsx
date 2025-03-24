"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TextPath() {
  const container = useRef<HTMLDivElement>(null);
  const path = useRef<SVGTextPathElement>();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      if (path.current) {
        path.current.setAttribute("startOffset", `${-40 + e * 80}%`);
      }
    });

    return () => {
      scrollYProgress.clearListeners();
    };
  }, [scrollYProgress]);

  const textPathString = `"Controlling complexity is the essence of computer programming"`;

  return (
    <div className="cursor-auto md:cursor-none" ref={container}>
      <svg className=" w-full mb-40" viewBox="0 0 250 90">
        <path
          className=""
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />

        <text className="text-[8px] uppercase " style={{ fill: "black" }}>
          <textPath
            ref={(ref) => {
              if (!ref) return;
              path.current = ref;
            }}
            href="#curve"
          >
            {textPathString}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
