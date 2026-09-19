import { profile, socials } from "@/lib/data";
import { SocialIcon } from "./social-icon";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="inline-flex items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-primary cursor-pointer"
              >
                <SocialIcon name={social.icon} size={16} />
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-muted-foreground">Built with Next.js &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
