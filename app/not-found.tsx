import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-mist-500 dark:text-mist-400 mb-4">
        {"// 404"}
      </span>
      <h1 className="font-display font-bold text-display-lg mb-4">
        Page not found
      </h1>
      <p className="text-mist-500 dark:text-mist-400 mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </main>
  );
}
