import { createFileRoute } from "@tanstack/react-router";
import { CursorGlow } from "@/components/CursorGlow";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { LookingFor } from "@/components/sections/LookingFor";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdulraheem Mukthar — Computer Science Graduate & Front-End Developer" },
      {
        name: "description",
        content:
          "Portfolio of Abdulraheem Mukthar — Computer Science graduate, front-end developer, and AI/ML enthusiast building modern web apps and intelligent solutions.",
      },
      { property: "og:title", content: "Abdulraheem Mukthar — Portfolio" },
      {
        property: "og:description",
        content:
          "Front-end developer, AI/ML enthusiast and IT support specialist. Selected projects, experience and contact.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GitHubSection />
      <LookingFor />
      <Contact />
      <Footer />
    </main>
  );
}
