import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Muhammed Ghaleb",
  description:
    "Professional portfolio of Muhammed Ghaleb, SOC Analyst specializing in security monitoring, incident detection, and threat analysis. Passionate about safeguarding organizational systems and strengthening cybersecurity defenses..",
};

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative">
        <div className="fixed top-5 right-5 z-50">
          <ThemeToggle />
        </div>
        <main className="min-h-screen">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
