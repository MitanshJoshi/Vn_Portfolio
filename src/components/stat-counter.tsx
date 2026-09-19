"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, useReducedMotion, motion } from "framer-motion";

export function StatCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();

  const match = value.match(/^-?[\d.]+/);
  const numeric = match ? parseFloat(match[0]) : null;
  const suffix = match ? value.slice(match[0].length) : "";
  const decimals = match?.[0].includes(".") ? match[0].split(".")[1].length : 0;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: prefersReducedMotion ? 1000 : 55,
    damping: prefersReducedMotion ? 100 : 16,
    mass: 1,
  });
  const rounded = useTransform(springValue, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (isInView && numeric !== null) {
      motionValue.set(numeric);
    }
  }, [isInView, numeric, motionValue]);

  if (numeric === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
