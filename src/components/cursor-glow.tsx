"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 110, damping: 24, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 110, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [prefersReducedMotion, x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 hidden h-115 w-115 rounded-full opacity-[0.12] blur-[110px] md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
      }}
    />
  );
}
