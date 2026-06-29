import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Reveal, SectionHeading } from "../Reveal";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [sent, setSent] = useState(false);

  const items = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { Icon: MapPin, label: "Location", value: profile.location },
    { Icon: Github, label: "GitHub", value: `@${profile.githubUser}`, href: profile.github },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      value: profile.linkedin ? "Connect" : "Coming soon",
      href: profile.linkedin || undefined,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Open to roles, freelance, and collaborations."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass h-full rounded-2xl p-7">
              <ul className="space-y-5">
                {items.map(({ Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`group flex items-start gap-4 ${href ? "" : "pointer-events-none"}`}
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.2_245)]/20 to-[oklch(0.62_0.25_300)]/20 ring-1 ring-white/10">
                        <Icon className="h-4 w-4 text-[oklch(0.85_0.15_245)]" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                          {label}
                        </div>
                        <div className="truncate text-sm font-medium transition-colors group-hover:text-[oklch(0.85_0.15_245)]">
                          {value}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Name" required />
                <Field name="email" type="email" label="Email" required />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none ring-0 transition focus:border-[oklch(0.72_0.2_245)]/60 focus:bg-white/10"
                  placeholder="Tell me about the role, project, or idea…"
                />
              </div>
              <button
                type="submit"
                className="glow-blue mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.22_255)] to-[oklch(0.55_0.25_295)] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" /> {sent ? "Opening email…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.72_0.2_245)]/60 focus:bg-white/10"
      />
    </div>
  );
}
