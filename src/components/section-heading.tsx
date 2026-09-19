import { MotionItem } from "./motion-section";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <MotionItem className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{eyebrow}</span>
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </MotionItem>
  );
}
