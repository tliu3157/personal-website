import { useEffect, useRef } from "react"

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

function Nav() {
  return (
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

function Header() {
  return (
    <header>
      <h1>Thomas Liu</h1>
      <p>Software Developer · Based in San Ramon, CA</p>
    </header>
  )
}

function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>View on GitHub</a>
    </div>
  )
}

function App() {
  const aboutRef = useFadeIn()
  const projectsRef = useFadeIn()
  const contactRef = useFadeIn()

  return (
    <main>
      <Nav />
      <Header />

      <section id="about" ref={aboutRef} className="fade-section">
        <h2>About Me</h2>
        <p>Your bio here.</p>
      </section>

      <section id="projects" ref={projectsRef} className="fade-section">
        <h2>Projects</h2>
        <ProjectCard
          title="Project One"
          description="A short description."
          link="https://github.com"
        />
        <ProjectCard
          title="Project Two"
          description="Another short description."
          link="https://github.com"
        />
      </section>

      <section id="contact" ref={contactRef} className="fade-section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:you@email.com">you@email.com</a></p>
      </section>
    </main>
  )
}

export default App