function ProjectCard({ title, description, link }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 hover:border-gray-400 transition-colors">
      <h3 className="text-base font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <a href={link} className="text-blue-500 text-sm hover:text-blue-700">
        View on GitHub →
      </a>
    </div>
  )
}

export default ProjectCard