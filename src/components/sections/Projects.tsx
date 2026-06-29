import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "../Reveal";
import { featuredProject, projects } from "@/data/portfolio";
import cropImg from "@/assets/crop-disease.jpg";

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected Projects"
          description="A mix of AI, full-stack, and security work."
        />

        {/* Featured */}
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-1">
            <div className="rounded-[22px] bg-background/40 p-6 md:p-10">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-[oklch(0.85_0.15_245)]">
                    <Sparkles className="h-3 w-3" /> Featured Project
                  </div>
                  <h3 className="mt-4 text-2xl font-bold md:text-3xl">{featuredProject.title}</h3>
                  <p className="mt-3 text-pretty text-muted-foreground">
                    {featuredProject.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {featuredProject.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 space-y-3">
                    {featuredProject.timeline.map((p, i) => (
                      <motion.div
                        key={p.phase}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[oklch(0.72_0.2_245)] to-[oklch(0.62_0.25_300)]" />
                        <div className="text-sm">
                          <span className="font-semibold text-foreground">{p.phase}.</span>{" "}
                          <span className="text-muted-foreground">{p.text}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/15"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                    {featuredProject.demo && (
                      <a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.22_255)] to-[oklch(0.55_0.25_295)] px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.03]"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                  >
                    <div className="glow-blue overflow-hidden rounded-2xl border border-white/10">
                      <img
                        src={cropImg}
                        alt="Crop disease detection dashboard"
                        width={1280}
                        height={768}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* arch placeholder */}
                    <div className="glass mt-4 rounded-xl p-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
                      Image → MobileNetV2 → Classifier → Flask API → Prediction
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Other projects */}
        <div className="mt-16">
          <Reveal>
            <h3 className="mb-8 text-2xl font-semibold">Other Projects</h3>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group glass relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.2_245)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  <div className="flex gap-2 opacity-70 transition-opacity group-hover:opacity-100">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Demo">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
