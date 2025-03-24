import { SpringOptions, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function useCustomCursor() {
  const [hovered, setHovered] = useState(false);
  const CURSOR_SIZE = hovered ? 50 : 30;

  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouseOptions: SpringOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };

  const smoothMouse = {
    x: useSpring(mousePosition.x, smoothMouseOptions),
    y: useSpring(mousePosition.y, smoothMouseOptions),
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mousePosition.x.set(clientX - CURSOR_SIZE / 2);
    mousePosition.y.set(clientY - CURSOR_SIZE / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return {
    hovered,
    setHovered,
    CURSOR_SIZE,
    smoothMouse,
  };
}
