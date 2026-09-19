import { ArrowUpRight } from "lucide-react";
import { contact, ctas, profile, socials } from "@/lib/data";
import { MotionSection, MotionItem } from "./motion-section";
import { SectionHeading } from "./section-heading";
import { SocialIcon } from "./social-icon";
import { MagneticButton } from "./magnetic-button";

export function Contact() {
  return (
    <MotionSection id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
      <SectionHeading eyebrow="06." title="Contact" />

      <MotionItem>
        <h3 className="font-display text-balance text-3xl font-semibold text-foreground sm:text-4xl">
          {contact.heading}
        </h3>
        <p className="text-balance mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {contact.body}
        </p>

        <MagneticButton
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-on-primary shadow-[0_0_40px_-12px_var(--color-primary)] cursor-pointer"
        >
          {ctas.contactCta}
          <ArrowUpRight size={16} aria-hidden="true" />
        </MagneticButton>

        <p className="mt-6 font-mono text-sm text-muted-foreground">
          {profile.phone} · {profile.location}
        </p>

        <ul className="mt-8 flex items-center justify-center gap-5">
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
        </ul>
      </MotionItem>

      <MotionItem className="mt-20 grid gap-6 text-left sm:grid-cols-3">
        {contact.process.map((step, i) => (
          <div key={step.title} className="card-glow rounded-xl border border-border bg-surface p-6">
            <span className="font-display text-2xl font-semibold text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-2 text-sm font-semibold text-foreground">{step.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </MotionItem>
    </MotionSection>
  );
}
