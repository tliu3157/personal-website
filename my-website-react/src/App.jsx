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
  return (
    <main>
      <nav/>
      <Header />

      <section>
        <h2>About Me</h2>
        <p>Write your bio here.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ProjectCard
          title="Fitbit Project"
          description="Non-invasive glucose monitoring using a fitbit"
          link="https://github.com/tliu3157/NoninvasiveGlucosePrediction"
        />
        <ProjectCard
          title="AP Research Project"
          description="NHANES Diabetes ML and DL prediction study"
          link="https://github.com/tliu3157/LifestyleDiabetesDetection"
        />
      </section>
    </main>
  )
}

export default App