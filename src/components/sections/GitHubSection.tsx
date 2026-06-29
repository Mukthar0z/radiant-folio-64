import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Reveal, SectionHeading } from "../Reveal";
import { profile } from "@/data/portfolio";

// Static placeholder stats — replace with real numbers any time, or wire up the
// GitHub API later. Keeping it static avoids client-side rate limit issues.
const stats = [
  { label: "Public Repos", value: "12+" },
  { label: "Contributions", value: "300+" },
  { label: "Top Language", value: "Python" },
  { label: "Active Since", value: "2022" },
];

const repos = [
  { name: "crop-disease-detection", desc: "MobileNetV2 + Flask app for plant disease classification.", lang: "Python" },
  { name: "studygenie-ai", desc: "AI study assistant with summaries, flashcards & quizzes.", lang: "TypeScript" },
  { name: "hustlespark", desc: "AI content idea generator for creators.", lang: "TypeScript" },
  { name: "password-strength-checker", desc: "Evaluates passwords & demos encryption.", lang: "Python" },
];

const languages = [
  { name: "Python", pct: 55, color: "from-[oklch(0.72_0.2_245)] to-[oklch(0.62_0.25_300)]" },
  { name: "TypeScript", pct: 25, color: "from-[oklch(0.7_0.18_220)] to-[oklch(0.72_0.2_245)]" },
  { name: "HTML/CSS", pct: 15, color: "from-[oklch(0.7_0.18_30)] to-[oklch(0.75_0.18_50)]" },
  { name: "SQL", pct: 5, color: "from-[oklch(0.7_0.2_160)] to-[oklch(0.75_0.2_190)]" },
];

export function GitHubSection() {
  return (
    <section id="github" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Open Source"
          title="On GitHub"
          description={`Follow my work at @${profile.githubUser}`}
        />

        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-2xl p-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Contribution Activity
              </h3>
              {/* Contribution graph placeholder */}
              <div className="grid grid-cols-[repeat(28,minmax(0,1fr))] gap-1">
                {Array.from({ length: 28 * 7 }).map((_, i) => {
                  const level = Math.random();
                  const opacity =
                    level > 0.85 ? 1 : level > 0.65 ? 0.7 : level > 0.4 ? 0.4 : level > 0.2 ? 0.2 : 0.07;
                  return (
                    <div
                      key={i}
                      className="aspect-square rounded-[3px] bg-[oklch(0.72_0.2_245)]"
                      style={{ opacity }}
                    />
                  );
                })}
              </div>
              <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0.07, 0.2, 0.4, 0.7, 1].map((o) => (
                    <div key={o} className="h-2.5 w-2.5 rounded-[2px] bg-[oklch(0.72_0.2_245)]" style={{ opacity: o }} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Top Languages
              </h3>
              <div className="space-y-4">
                {languages.map((l) => (
                  <div key={l.name}>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span>{l.name}</span>
                      <span className="text-muted-foreground">{l.pct}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${l.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {repos.map((r, i) => (
            <motion.a
              key={r.name}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass group flex items-start gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5"
            >
              <Github className="mt-0.5 h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              <div className="flex-1">
                <div className="font-semibold">{r.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-[oklch(0.72_0.2_245)]" />
                  {r.lang}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
