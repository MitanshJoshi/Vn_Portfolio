"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  strength?: number;
};

export function MagneticButton({
  href,
  onClick,
  className,
  children,
  target,
  rel,
  strength = 12,
  ...rest
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * strength);
    y.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const motionProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { x: springX, y: springY },
    whileTap: { scale: 0.96 },
    className,
    ...rest,
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
