import { Cloud, Code2, Database, Terminal, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { MotionSection, MotionItem } from "./motion-section";
import { SectionHeading } from "./section-heading";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Languages: Code2,
  Frontend: Terminal,
  Backend: Database,
  "Cloud & DevOps": Cloud,
  Tools: Wrench,
};

export function Skills() {
  return (
    <MotionSection id="skills" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="04." title="Skills & Tools" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = CATEGORY_ICONS[group.category] ?? Code2;
          return (
            <MotionItem
              key={group.category}
              className="card-glow rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Icon size={16} aria-hidden="true" />
                </span>
                <h3 className="font-mono text-sm font-medium text-foreground">{group.category}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-foreground/90"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </MotionItem>
          );
        })}
      </div>
    </MotionSection>
  );
}
