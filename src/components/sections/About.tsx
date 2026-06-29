import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "../Reveal";
import { timeline } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          eyebrow="My Journey"
          title="A timeline, not a bio."
          description="The path from first line of Python to graduating with a Computer Science degree."
        />

        <div className="relative">
          {/* center line */}
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2"
            aria-hidden
          />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative flex items-start gap-6 md:items-center ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass inline-block rounded-2xl p-5">
                      <div className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.78_0.18_255)]">
                        {item.year}
                      </div>
                      <p className="mt-2 text-sm text-foreground/90 md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  {/* dot */}
                  <div className="absolute left-4 top-3 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    <span className="block h-3 w-3 rounded-full bg-gradient-to-br from-[oklch(0.72_0.2_245)] to-[oklch(0.62_0.25_300)] ring-4 ring-background" />
                  </div>
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-16 text-center">
          <p className="mx-auto max-w-xl text-pretty text-lg italic text-muted-foreground">
            "I enjoy learning new technologies and building software that solves meaningful problems."
          </p>
        </Reveal>
      </div>
    </section>
  );
}
