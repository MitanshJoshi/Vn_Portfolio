"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ctas, navLinks, profile } from "@/lib/data";
import { MagneticButton } from "./magnetic-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled || open
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-foreground cursor-pointer"
        >
          {profile.name}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <MagneticButton
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-on-primary lg:inline-flex cursor-pointer"
        >
          {ctas.navCta}
          <ArrowUpRight size={15} aria-hidden="true" />
        </MagneticButton>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-8 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-2 text-4xl font-medium text-foreground transition-colors duration-200 hover:text-primary cursor-pointer"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * navLinks.length, ease: "easeOut" }}
              className="mt-10"
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-primary cursor-pointer"
              >
                {ctas.navCta}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
