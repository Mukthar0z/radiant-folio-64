import { profile } from "@/data/portfolio";
import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
        <div className="text-sm text-muted-foreground">
          © 2026 {profile.name}.
          <span className="ml-2 hidden md:inline">
            Designed and developed with React, TypeScript, Tailwind CSS, and Framer Motion.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-2 transition hover:border-white/30 hover:bg-white/5">
            <Github className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-full border border-white/10 p-2 transition hover:border-white/30 hover:bg-white/5">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mt-3 px-4 text-center text-xs text-muted-foreground md:hidden">
        Built with React, TypeScript, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  );
}
