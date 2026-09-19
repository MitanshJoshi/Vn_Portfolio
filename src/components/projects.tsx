import { ArrowUpRight } from "lucide-react";
import { ctas, projects } from "@/lib/data";
import { MotionSection, MotionItem } from "./motion-section";
import { SectionHeading } from "./section-heading";
import { CaseStudyCard } from "./case-study-card";
import { ProjectCard } from "./project-card";
import { MagneticButton } from "./magnetic-button";

export function Projects() {
  const featured = projects.filter((p) => p.caseStudy);
  const rest = projects.filter((p) => !p.caseStudy);

  return (
    <MotionSection id="projects" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="05." title="Selected Work" />

      <div className="space-y-20 sm:space-y-28">
        {featured.map((project, i) => (
          <CaseStudyCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-24">
          <MotionItem className="mb-8">
            <h3 className="font-mono text-sm text-muted-foreground">More Projects</h3>
          </MotionItem>
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}

      <MotionItem className="mt-20 flex flex-col items-center gap-5 rounded-2xl border border-border bg-surface px-8 py-14 text-center">
        <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          {ctas.projectsHeading}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          {ctas.projectsBody}
        </p>
        <MagneticButton
          href="#contact"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-on-primary cursor-pointer"
        >
          {ctas.projectsCta}
          <ArrowUpRight size={16} aria-hidden="true" />
        </MagneticButton>
      </MotionItem>
    </MotionSection>
  );
}
