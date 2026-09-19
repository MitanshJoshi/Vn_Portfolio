"use client";

import { motion, useReducedMotion } from "framer-motion";

export function RevealText({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
