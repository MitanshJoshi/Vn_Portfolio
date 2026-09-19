"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export function MotionSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={prefersReducedMotion ? undefined : staggerContainer}
    >
      {children}
    </motion.section>
  );
}

export function MotionItem({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={prefersReducedMotion ? undefined : fadeInUp}
    >
      {children}
    </motion.div>
  );
}
