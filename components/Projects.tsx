"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="work" className="py-24 md:py-32 border-t hairline">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-3 mb-8">
          <span className="section-num">03</span>
          <h2 className="eyebrow">{"// Selected work"}</h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`font-mono text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors ${
                active === tag
                  ? "bg-ink text-paper border-ink dark:bg-paper dark:text-ink dark:border-paper"
                  : "border-mist-300 dark:border-line-soft text-mist-500 hover:border-ink dark:hover:border-paper"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-mist-200 dark:bg-line-soft border hairline">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group bg-paper dark:bg-ink p-6 md:p-8 flex flex-col justify-between min-h-[260px] transition-colors hover:bg-mist-100 dark:hover:bg-[#111111]"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display font-bold text-2xl md:text-3xl">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-mist-400 shrink-0 pt-1">
                    {project.year}
                  </span>
                </div>
                <p className="text-mist-500 dark:text-mist-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-[0.1em] text-mist-500 dark:text-mist-400 border hairline px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} repository`}
                      className="w-9 h-9 flex items-center justify-center border hairline hover:border-ink dark:hover:border-paper transition-colors"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live link`}
                      className="w-9 h-9 flex items-center justify-center border hairline hover:border-ink dark:hover:border-paper transition-colors"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
