"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { nav, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur bg-paper/80 dark:bg-ink/80 border-b hairline"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          {profile.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
          <span className="text-mist-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.15em]">
          {nav.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-mist-500 hover:text-ink dark:hover:text-paper transition-colors"
              >
                <span className="text-mist-400">0{i + 1}_</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 flex items-center justify-center border hairline hover:border-ink dark:hover:border-paper transition-colors"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a href="#contact" className="hidden md:inline-flex btn-primary">
            Let&apos;s talk
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex items-center justify-center border hairline"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t hairline bg-paper dark:bg-ink">
          <ul className="flex flex-col px-6 py-4 gap-4 font-mono text-sm uppercase tracking-[0.1em]">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1"
                >
                  <span className="text-mist-400">0{i + 1}_</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center mt-2"
              >
                Let&apos;s talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
