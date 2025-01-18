"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
