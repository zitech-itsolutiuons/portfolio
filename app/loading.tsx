import { loader } from "@/data/loader";

// The static twin of components/Preloader.tsx — same treatment, no JS.
// Next renders this during route-level suspense.
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-paper dark:bg-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
        <p className="font-display font-bold text-display-lg">
          {loader.text}
          <span className="inline-block w-[0.055em] h-[0.78em] ml-[0.04em] align-baseline bg-ink dark:bg-paper animate-blink" />
        </p>
        <div className="mt-8 h-px w-full bg-mist-200 dark:bg-line-soft" />
        {loader.subtitle && <p className="eyebrow mt-5">{loader.subtitle}</p>}
      </div>
    </div>
  );
}
