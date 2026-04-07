function Nav({ darkMode, onToggle }) {
  return (
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button onClick={onToggle}>
        {darkMode ? "Light mode" : "Dark mode"}
      </button>
    </nav>
  )
}

export default Nav