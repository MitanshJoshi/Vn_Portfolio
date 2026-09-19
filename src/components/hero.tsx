"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { about, ctas, profile, socials } from "@/lib/data";
import { SocialIcon } from "./social-icon";
import { RevealText } from "./reveal-text";
import { MagneticButton } from "./magnetic-button";
import { StatCounter } from "./stat-counter";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fade = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <motion.div
        className="pointer-events-none absolute left-[12%] top-[18%] h-95 w-95 rounded-full bg-primary/25 blur-[130px]"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 30, -10, 0], y: [0, -20, 15, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[10%] bottom-[15%] h-105 w-105 rounded-full bg-secondary/20 blur-[140px]"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -25, 15, 0], y: [0, 20, -15, 0] }
        }
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          {...fade(0)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          {profile.statusLabel}
        </motion.div>

        <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-secondary">
          {profile.role}
        </p>

        <h1 className="font-display text-balance mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          <RevealText text="I build software that" delay={0.1} />
          <br />
          <RevealText text="solves real problems." delay={0.4} wordClassName="text-gradient-primary italic" />
        </h1>

        <motion.p
          {...fade(0.75)}
          className="text-balance mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.p {...fade(0.82)} className="mt-3 font-mono text-sm text-muted-foreground">
          — {profile.name}, based in {profile.location}
        </motion.p>

        <motion.div {...fade(0.9)} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-on-primary shadow-[0_0_40px_-12px_var(--color-primary)] cursor-pointer"
          >
            {ctas.heroPrimary}
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </MagneticButton>
          <MagneticButton
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-secondary hover:text-secondary cursor-pointer"
          >
            {ctas.heroSecondary}
          </MagneticButton>
        </motion.div>

        <motion.div
          {...fade(1)}
          className="mt-14 flex items-center gap-8 rounded-2xl border border-border bg-surface/60 px-8 py-5 sm:gap-12"
        >
          {about.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
              {i > 0 && <span className="h-8 w-px bg-border" aria-hidden="true" />}
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  <StatCounter value={stat.value} />
                </p>
                <p className="mt-1 max-w-36 text-[0.7rem] leading-tight text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.ul {...fade(1.1)} className="mt-8 flex items-center gap-5">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="inline-flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors duration-200 hover:text-primary cursor-pointer"
              >
                <SocialIcon name={social.icon} />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-6 inline-flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
      >
        <span className="text-xs">Scroll</span>
        <motion.span
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
