import { about } from "@/lib/data";
import { MotionSection, MotionItem } from "./motion-section";
import { SectionHeading } from "./section-heading";
import { StatCounter } from "./stat-counter";

export function About() {
  return (
    <MotionSection id="about" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="01." title={about.heading} />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <MotionItem className="space-y-5">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {p}
            </p>
          ))}

          <ul className="flex flex-wrap gap-2 pt-2">
            {about.credentials.map((credential) => (
              <li
                key={credential}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-foreground/90"
              >
                {credential}
              </li>
            ))}
          </ul>
        </MotionItem>

        <MotionItem className="grid grid-cols-2 gap-4 md:grid-cols-1">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="card-glow rounded-xl border border-border bg-surface p-5 text-center md:text-left"
            >
              <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                <StatCounter value={stat.value} />
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </MotionItem>
      </div>
    </MotionSection>
  );
}
