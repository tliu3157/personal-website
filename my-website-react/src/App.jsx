import { useEffect, useRef, useState } from "react"
import Nav from "./components/Nav"
import Header from "./components/Header"
import ProjectCard from "./components/ProjectCard"
import Projects from "./components/Projects"

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode)
  }, [darkMode])

  const aboutRef = useFadeIn()
  const projectsRef = useFadeIn()
  const contactRef = useFadeIn()

  return (
    <main>
      <Nav darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
      <Header />

      <section id="about" ref={aboutRef} className="fade-section">
        <h2>About Me</h2>
        <p>Your bio here.</p>
      </section>

      <section id="projects" ref={projectsRef} className="fade-section">
        <h2>Projects</h2>
        <Projects />
      </section>

      <section id="contact" ref={contactRef} className="fade-section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:you@email.com">you@email.com</a></p>
      </section>
    </main>
  )
}

export default App