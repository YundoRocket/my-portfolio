"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <About />
      <Skills />
    </main>
  );
}
