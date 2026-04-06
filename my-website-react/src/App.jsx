function Header() {
  return (
    <header>
      <h1>Your Name</h1>
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
      <Header />

      <section>
        <h2>About Me</h2>
        <p>Write your bio here.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ProjectCard
          title="Project One"
          description="A short description of what this does."
          link="https://github.com"
        />
        <ProjectCard
          title="Project Two"
          description="Another project you've worked on."
          link="https://github.com"
        />
      </section>
    </main>
  )
}

export default App