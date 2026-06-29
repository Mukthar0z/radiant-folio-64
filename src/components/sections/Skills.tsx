import { motion } from "framer-motion";
import { Code2, Globe, Brain, Wrench, Server } from "lucide-react";
import { Reveal, SectionHeading } from "../Reveal";
import { skills } from "@/data/portfolio";

const icons = [Code2, Globe, Brain, Wrench, Server];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Stack"
          title="Technical Skills"
          description="The tools and technologies I reach for to ship real software."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group glass relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-[oklch(0.72_0.2_245)]/30 to-[oklch(0.62_0.25_300)]/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.2_245)]/20 to-[oklch(0.62_0.25_300)]/20 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-[oklch(0.85_0.15_245)]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{group.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
