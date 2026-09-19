"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Package, PlayCircle } from "lucide-react";
import type { Project } from "@/lib/data";
import { categoryStyles } from "@/lib/data";
import { MotionItem } from "./motion-section";
import { SocialIcon } from "./social-icon";

export function CaseStudyCard({ project, index }: { project: Project; index: number }) {
  const cs = project.caseStudy;
  if (!cs) return null;

  const reversed = index % 2 === 1;

  return (
    <MotionItem>
      <article
        className={`flex flex-col gap-8 lg:gap-12 ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-stretch`}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium ${categoryStyles[project.categoryColor]}`}
            >
              {project.category}
            </span>
          </div>

          <h3 className="font-display mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
            {project.title}
          </h3>

          <div className="mt-6 space-y-5">
            <div>
              <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-secondary">
                The Problem
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {cs.problem}
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-secondary">
                The Approach
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {cs.solution}
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-secondary">
                My Role
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {cs.contribution}
              </p>
            </div>
          </div>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {cs.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-foreground/85">
                <Check size={15} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary cursor-pointer"
              >
                <SocialIcon name="github" size={16} />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-on-primary cursor-pointer"
              >
                Live Demo
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-on-primary cursor-pointer"
              >
                <PlayCircle size={16} aria-hidden="true" />
                Watch Demo
              </a>
            )}
            {project.npmUrl && (
              <a
                href={project.npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-secondary hover:text-secondary cursor-pointer"
              >
                <Package size={16} aria-hidden="true" />
                View on npm
              </a>
            )}
          </div>
        </div>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="relative flex w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface p-10 lg:w-85"
        >
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            className={`pointer-events-none absolute h-56 w-56 rounded-full blur-[90px] ${
              project.categoryColor === "primary"
                ? "bg-primary/25"
                : project.categoryColor === "secondary"
                  ? "bg-secondary/25"
                  : "bg-tag-rose/25"
            }`}
            aria-hidden="true"
          />
          {cs.impact ? (
            <div className="relative text-center">
              <p className="font-display text-gradient-primary text-5xl font-bold sm:text-6xl">
                {cs.impact.value}
              </p>
              <p className="mx-auto mt-3 max-w-56 text-sm text-muted-foreground">
                {cs.impact.label}
              </p>
            </div>
          ) : (
            <p className="relative text-center font-display text-lg text-muted-foreground">
              {project.title}
            </p>
          )}
        </motion.div>
      </article>
    </MotionItem>
  );
}
