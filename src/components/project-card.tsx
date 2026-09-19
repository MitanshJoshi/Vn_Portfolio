"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";
import { categoryStyles } from "@/lib/data";
import { MotionItem } from "./motion-section";
import { SocialIcon } from "./social-icon";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <MotionItem>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="card-glow group flex h-full flex-col rounded-xl border border-border bg-surface p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium ${categoryStyles[project.categoryColor]}`}
          >
            {project.category}
          </span>
          <div className="flex items-center gap-3 text-muted-foreground">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code`}
                className="transition-colors duration-200 hover:text-primary cursor-pointer"
              >
                <SocialIcon name="github" size={17} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live site`}
                className="transition-colors duration-200 hover:text-primary cursor-pointer"
              >
                <ExternalLink size={17} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-display mt-4 text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </motion.article>
    </MotionItem>
  );
}
