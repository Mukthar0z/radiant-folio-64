import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "../Reveal";
import { experience, education } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="Background" title="Experience & Education" />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-2xl p-7">
              <div className="flex items-center gap-3 text-[oklch(0.85_0.15_245)]">
                <Briefcase className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-widest">Work</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{experience.role}</h3>
              <div className="mt-1 text-sm text-muted-foreground">{experience.org}</div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {experience.location}
              </div>
              <ul className="mt-5 space-y-2.5">
                {experience.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-foreground/85">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[oklch(0.72_0.2_245)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full rounded-2xl p-7">
              <div className="flex items-center gap-3 text-[oklch(0.78_0.2_295)]">
                <GraduationCap className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-widest">Education</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{education.degree}</h3>
              <div className="mt-1 text-sm text-muted-foreground">{education.school}</div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    Graduated
                  </div>
                  <div className="mt-1 text-lg font-semibold">{education.graduated}</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    CGPA
                  </div>
                  <div className="mt-1 text-lg font-semibold">{education.cgpa}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
