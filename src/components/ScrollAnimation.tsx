"use client";

import { EasingDefinition, motion } from "framer-motion";
import { ReactNode, useMemo } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const ScrollAnimation = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollAnimationProps) => {
  const initialState = useMemo(
    () => ({
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    }),
    [direction]
  );
  const inViewState = useMemo(
    () => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut" as EasingDefinition,
      },
    }),
    []
  );
  const viewPortState = useMemo(() => ({ once: true, margin: "-100px" }), []);

  return (
    <motion.div
      initial={initialState}
      whileInView={inViewState}
      viewport={viewPortState}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
