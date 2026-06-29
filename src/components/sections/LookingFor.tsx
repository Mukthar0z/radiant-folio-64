import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "../Reveal";
import { lookingFor } from "@/data/portfolio";

export function LookingFor() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Opportunities"
          title="What I'm looking for"
          description="Roles where I can build, learn fast, and ship work that matters."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {lookingFor.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="glass cursor-default rounded-full px-5 py-2.5 text-sm font-medium"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
