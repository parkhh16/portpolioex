import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import ParallaxContainer from "@/components/parallax-container"

export default function Home() {
  return (
    <ParallaxContainer>
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </ParallaxContainer>
  )
}
