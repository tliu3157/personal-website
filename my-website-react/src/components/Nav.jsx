function Nav({ darkMode, onToggle }) {
  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-950 border-b border-gray-100 z-10 flex gap-6 px-0 py-4">
      <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 no-underline">About</a>
      <a href="#projects" className="text-sm text-gray-500 hover:text-gray-900 no-underline">Projects</a>
      <a href="#contact" className="text-sm text-gray-500 hover:text-gray-900 no-underline">Contact</a>
      <button
        onClick={onToggle}
        className="ml-auto text-sm border border-gray-200 rounded-md px-3 py-1 text-gray-500 hover:border-gray-400 hover:text-gray-900 cursor-pointer bg-transparent"
      >
        {darkMode ? "Light mode" : "Dark mode"}
      </button>
    </nav>
  )
}

export default Nav