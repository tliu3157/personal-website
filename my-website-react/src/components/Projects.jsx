import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.github.com/users/tliu3157/repos?sort=updated&per_page=6")
      .then(res => res.json())
      .then(data => {
        setRepos(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading projects...</p>

  return (
    <div>
      {repos.map(repo => (
        <ProjectCard
          key={repo.id}
          title={repo.name}
          description={repo.description || "No description yet."}
          link={repo.html_url}
        />
      ))}
    </div>
  )
}

export default Projects