import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t hairline">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="section-num">01</span>
          <h2 className="eyebrow">{"// About"}</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 space-y-6">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-xl md:text-2xl leading-relaxed font-display text-ink dark:text-paper"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-px bg-mist-200 dark:bg-line-soft border hairline self-start">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="bg-paper dark:bg-ink p-6 flex flex-col gap-2"
              >
                <span className="font-display font-bold text-3xl md:text-4xl">
                  {s.value}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-mist-500 dark:text-mist-400">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
