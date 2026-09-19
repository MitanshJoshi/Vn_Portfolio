"use client";

import { motion } from "framer-motion";
import { Cloud, Layers, Sparkles, Terminal, type LucideIcon } from "lucide-react";
import { services } from "@/lib/data";
import { MotionSection, MotionItem } from "./motion-section";
import { SectionHeading } from "./section-heading";

const ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  layers: Layers,
  cloud: Cloud,
  terminal: Terminal,
};

export function Services() {
  return (
    <MotionSection id="services" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="02." title="What I Do" />

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = ICONS[service.icon];
          const tint = i % 2 === 0 ? "primary" : "secondary";
          return (
            <MotionItem key={service.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card-glow group h-full rounded-2xl border border-border bg-surface p-7"
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    tint === "primary" ? "bg-primary/12 text-primary" : "bg-secondary/12 text-secondary"
                  }`}
                >
                  <Icon size={20} aria-hidden="true" />
                </span>

                <p className="mt-5 text-sm italic leading-relaxed text-muted-foreground">
                  &ldquo;{service.problem}&rdquo;
                </p>

                <h3 className="font-display mt-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            </MotionItem>
          );
        })}
      </div>
    </MotionSection>
  );
}
