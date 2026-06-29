import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Particles } from "./Particles";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-50" aria-hidden />
      <div className="absolute inset-0">
        <Particles density={80} />
      </div>
      <div
        className="absolute top-1/3 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-3xl animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.25 295 / 0.5), transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute top-20 right-10 -z-10 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.2 245 / 0.6), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]"
        >
          <span className="block">{profile.name.split(" ")[0]}</span>
          <span className="block text-gradient animate-gradient">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground md:text-base"
        >
          {profile.roles.map((r, i) => (
            <span key={r} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-white/30" />}
              {r}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group glow-blue inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.22_255)] to-[oklch(0.55_0.25_295)] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-muted-foreground transition hover:border-white/25 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* floating orbs */}
      <motion.div
        className="absolute bottom-10 left-10 hidden h-3 w-3 rounded-full bg-[oklch(0.72_0.2_245)] md:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-16 hidden h-2 w-2 rounded-full bg-[oklch(0.62_0.25_300)] md:block"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
    </section>
  );
}
