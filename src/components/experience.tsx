import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { MotionSection, MotionItem } from "./motion-section";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <MotionSection id="experience" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="03." title="Experience" />

      <div className="relative space-y-8 border-l border-border pl-8 sm:pl-10">
        {experience.map((item) => (
          <MotionItem key={item.company} className="relative">
            <span
              className="absolute -left-[calc(2rem+5px)] top-1.5 flex h-2.5 w-2.5 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background sm:-left-[calc(2.5rem+5px)]"
              style={{ boxShadow: "0 0 12px -2px var(--color-primary)" }}
            />

            <div className="card-glow rounded-xl border border-border bg-surface p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.role}</h3>
                  <p className="mt-0.5 flex items-center gap-1.5 font-mono text-sm text-primary">
                    <Briefcase size={14} aria-hidden="true" />
                    {item.company}
                  </p>
                </div>
                <div className="text-right text-xs text-muted-foreground sm:text-sm">
                  <p className="font-mono">{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
