"use client";

import { useState, FormEvent } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, string>) => {
    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = "Name is required.";
    if (!data.email?.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "Enter a valid email.";
    if (!data.message?.trim()) next.message = "Message is required.";
    return next;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t hairline">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="section-num">05</span>
          <h2 className="eyebrow">{"// Contact"}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-display font-bold text-display-lg mb-6">
              Let&apos;s build
              <br />
              something.
            </h3>
            <p className="text-lg text-mist-500 dark:text-mist-400 max-w-sm mb-10">
              {profile.availability}. Reach out directly or send a message —
              I read every one.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 font-mono text-sm md:text-base mb-8 w-fit"
            >
              <Mail size={16} />
              {profile.email}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <div className="flex items-center gap-3">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center border hairline hover:border-ink dark:hover:border-paper transition-colors"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center border hairline hover:border-ink dark:hover:border-paper transition-colors"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-11 h-11 flex items-center justify-center border hairline hover:border-ink dark:hover:border-paper transition-colors"
              >
                <Twitter size={17} />
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs uppercase tracking-[0.1em] text-mist-500 dark:text-mist-400 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border hairline px-4 py-3 focus:border-ink dark:focus:border-paper outline-none transition-colors"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs uppercase tracking-[0.1em] text-mist-500 dark:text-mist-400 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent border hairline px-4 py-3 focus:border-ink dark:focus:border-paper outline-none transition-colors"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs uppercase tracking-[0.1em] text-mist-500 dark:text-mist-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What are you working on?"
                className="w-full bg-transparent border hairline px-4 py-3 focus:border-ink dark:focus:border-paper outline-none transition-colors resize-none"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full justify-center disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <p className="font-mono text-xs text-mist-500 dark:text-mist-400">
                Message sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-red-600 dark:text-red-400">
                Something went wrong. Try emailing me directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
