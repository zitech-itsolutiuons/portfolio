import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t hairline">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="section-num">04</span>
          <h2 className="eyebrow">{"// Experience"}</h2>
        </div>

        <div className="border-t hairline">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-b hairline"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-mist-500 dark:text-mist-400">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-1">
                  {exp.role}
                </h3>
                <p className="font-mono text-sm text-mist-500 dark:text-mist-400 mb-4">
                  {exp.org}
                </p>
                <p className="text-lg text-mist-500 dark:text-mist-400 leading-relaxed mb-4 max-w-2xl">
                  {exp.summary}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm md:text-base">
                      <span className="text-mist-400 font-mono shrink-0">
                        →
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
