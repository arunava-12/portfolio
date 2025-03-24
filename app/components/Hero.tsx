import { AnimatedText } from "./AnimatedText";
import { TypingText } from "./TypingText"; // New component for typing effect

export default function Hero() {
  const data = {
    
    infoOne: `Hi, I'm Arunava Mondal, a full-stack web developer with a keen interest in Machine Learning. I specialize in creating modern, responsive web applications that solve real-world problems. With expertise in both frontend and backend technologies.`,
    infoTwo: `I've developed scalable and efficient solutions for various challenges, including finance tracking web apps. I'm always looking for new opportunities to contribute to open-source projects and collaborate with the developer community.`,
  };

  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
      }}
      className="cursor-auto md:cursor-none flex justify-center items-center py-20 px-4 font-sans mix-blend-difference text-white"
    >
      <div className="flex flex-col justify-center items-center text-center">
        

        {/* Apply Typing Effect Only on the Title */}
        <h1 className="uppercase font-bold tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-5 break-words">
          <TypingText />
        </h1>

        <div className="mt-6 flex flex-col sm:flex-row sm:gap-6 justify-center items-center text-sm">
          <p className="max-w-lg text-justify mb-3 sm:mb-0">
            <AnimatedText text={data.infoOne} />
          </p>
          <p className="max-w-lg text-justify">
            <AnimatedText text={data.infoTwo} />
          </p>
        </div>
      </div>
    </div>
  );
}
