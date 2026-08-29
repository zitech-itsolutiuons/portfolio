"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import NetworkCanvas from "./NetworkCanvas";

const LINES = [
  `whoami`,
  `${profile.name.toLowerCase().replace(" ", ".")}`,
  `status --check`,
  `${profile.availability}`,
];

export default function Hero() {
  const [typed, setTyped] = useState<string[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setTyped(LINES);
      setLineIdx(LINES.length);
      return;
    }
    if (lineIdx >= LINES.length) return;

    const current = LINES[lineIdx];
    if (charIdx <= current.length) {
      const t = setTimeout(() => {
        setTyped((prev) => {
          const copy = [...prev];
          copy[lineIdx] = current.slice(0, charIdx);
          return copy;
        });
        setCharIdx((c) => c + 1);
      }, 28 + Math.random() * 40);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx]);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid-light dark:bg-grid-dark bg-[size:48px_48px]"
    >
      <NetworkCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper dark:to-ink pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full pt-24 pb-16">
        <div className="font-mono text-xs md:text-sm border hairline inline-block px-4 py-3 mb-10 bg-paper/70 dark:bg-ink/70 backdrop-blur">
          <p className="text-mist-400 mb-1">visitor@portfolio:~$</p>
          {LINES.map((_, i) => (
            <p key={i} className="min-h-[1.25em]">
              {i % 2 === 0 && <span className="text-mist-400">$ </span>}
              {typed[i]}
              {i === lineIdx && (
                <span className="inline-block w-[7px] h-[1em] bg-ink dark:bg-paper ml-0.5 align-middle animate-blink" />
              )}
            </p>
          ))}
        </div>

        <h1 className="font-display font-bold text-hero">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl text-mist-500 dark:text-mist-400">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#work" className="btn-primary">
            View work
          </a>
          <a href={profile.resumeUrl} className="btn-ghost" download>
            Download resume
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-mist-400 font-mono text-[10px] uppercase tracking-[0.2em]"
      >
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
