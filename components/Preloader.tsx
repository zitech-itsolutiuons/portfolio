"use client";

import { useEffect, useRef, useState } from "react";
import { loader } from "@/data/loader";

type Phase = "typing" | "complete" | "leaving" | "done";

export default function Preloader() {
  // Derived from static config, so server and client agree on first render
  // and a disabled loader never flashes.
  const [phase, setPhase] = useState<Phase>(() =>
    loader.enabled ? "typing" : "done"
  );
  const [count, setCount] = useState(0);
  const timers = useRef<number[]>([]);

  const chars = [...loader.text];
  const total = chars.length;

  useEffect(() => {
    if (!loader.enabled) return;

    const after = (ms: number, fn: () => void) => {
      timers.current.push(window.setTimeout(fn, ms));
    };

    // Already played this session — step aside without a flash.
    let seen = false;
    try {
      seen =
        loader.oncePerSession &&
        sessionStorage.getItem(loader.storageKey) === "1";
    } catch {}
    if (seen) {
      setPhase("done");
      return;
    }

    try {
      if (loader.oncePerSession) {
        sessionStorage.setItem(loader.storageKey, "1");
      }
    } catch {}

    let settled = false;
    const leave = () => {
      if (settled) return;
      settled = true;
      setPhase("leaving");
      after(loader.exitDuration, () => setPhase("done"));
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    if (reduced) {
      setCount(total);
      setPhase("complete");
      after(loader.holdAfter, leave);
    } else {
      let i = 0;
      const typeNext = () => {
        i += 1;
        setCount(i);
        if (i < total) {
          after(loader.charDelay + Math.random() * loader.charJitter, typeNext);
        } else {
          setPhase("complete");
          after(loader.holdAfter, leave);
        }
      };
      after(loader.startDelay, typeNext);
      after(loader.maxDuration, leave);
    }

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [total]);

  // Hold the page still only while the panel actually covers it; scrolling
  // resumes the moment it starts fading, when the content is already usable.
  const blocking = phase === "typing" || phase === "complete";
  useEffect(() => {
    if (!blocking) return;
    // The inline script already hid the panel for this session — don't touch
    // the scrollbar for a frame on the way to unmounting.
    if (document.documentElement.classList.contains("preloader-seen")) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [blocking]);

  if (phase === "done") return null;

  const leaving = phase === "leaving";
  const progress = total === 0 ? 1 : count / total;

  return (
    <div
      id="preloader"
      role="status"
      aria-label={loader.text}
      className={`fixed inset-0 z-[100] flex flex-col justify-center bg-paper dark:bg-ink transition-opacity ease-out ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transitionDuration: `${loader.exitDuration}ms` }}
    >
      {/* Same container and gutters as the hero, so the wordmark's left edge
          lands on the text column the headline will occupy. */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
        <p className="font-display font-bold text-display-lg" aria-hidden="true">
          {chars.slice(0, count).join("")}
          <span
            className={`inline-block w-[0.055em] h-[0.78em] ml-[0.04em] align-baseline bg-ink dark:bg-paper ${
              phase === "typing" ? "animate-blink" : ""
            }`}
          />
        </p>

        {/* Progress is the character count, not a guess at network time. */}
        <div className="mt-8 h-px w-full bg-mist-200 dark:bg-line-soft">
          <div
            className="h-px bg-ink dark:bg-paper origin-left transition-transform duration-200 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        {loader.subtitle && (
          <p
            className={`eyebrow mt-5 ${
              phase === "typing" ? "opacity-0" : "animate-fade-up"
            }`}
            aria-hidden="true"
          >
            {loader.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
