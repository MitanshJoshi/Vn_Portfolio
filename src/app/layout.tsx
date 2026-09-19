import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { profile, socials } from "@/lib/data";
import { CursorGlow } from "@/components/cursor-glow";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const title = `${profile.name} — ${profile.role}`;
const description = `${profile.tagline} AI products, full-stack apps, and deep learning systems, built to production standard.`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "AI full-stack developer",
    "full-stack developer",
    "machine learning engineer",
    "deep learning",
    "React developer",
    "Next.js developer",
    profile.name,
  ],
  authors: [{ name: profile.name, url: socials.find((s) => s.icon === "linkedin")?.href }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    address: profile.location,
    sameAs: socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
  };

  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${jetbrainsMono.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
