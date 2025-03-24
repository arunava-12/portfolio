import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

export const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
