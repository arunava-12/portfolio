import { useState, useEffect } from "react";

const titles = [
  "Full Stack Developer",
  "Machine Learning Enthusiast",
  "UI/UX Developer",
  "Coder",
];

export const TypingText: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenWords = 1000;

  useEffect(() => {
    const currentTitle = titles[index];

    if (!deleting && charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentTitle[charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIndex === currentTitle.length) {
      setTimeout(() => setDeleting(true), pauseBetweenWords);
    }

    if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }
  }, [charIndex, deleting, index]);

  return (
    <span className="tracking-wide">
      {text}
      <span className="inline-block animate-blink">_</span>
    </span>
  );
};
