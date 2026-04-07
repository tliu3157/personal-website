function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>View on GitHub</a>
    </div>
  )
}

export default ProjectCard