import { profile } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t hairline">
      <div className="overflow-hidden border-b hairline py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-display font-bold text-3xl md:text-5xl mx-6 text-mist-200 dark:text-line-soft"
            >
              {profile.role} —
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-mist-500 dark:text-mist-400">
          © {year} {profile.name}. Built with Next.js.
        </p>
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-mist-500 hover:text-ink dark:hover:text-paper transition-colors"
        >
          Back to top
          <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
