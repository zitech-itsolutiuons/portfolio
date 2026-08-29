import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t hairline">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="section-num">02</span>
          <h2 className="eyebrow">{"// Skills"}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-mist-200 dark:bg-line-soft border hairline">
          {skills.map((group) => (
            <div key={group.category} className="bg-paper dark:bg-ink p-6 md:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-mist-500 dark:text-mist-400 mb-5">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-lg flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-ink dark:bg-paper rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
