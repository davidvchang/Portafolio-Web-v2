import Nav from "../components/Nav"

const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <section className='w-full h-16 flex items-center justify-between px-20 text-white bg-black/50 backdrop-blur-xl fixed z-99'>
        <span className='text-4xl font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>DV</span>

        <div className='w-fit flex gap-10'>
            <Nav onClick={() => scrollToSection("home")} text="Inicio"/>
            <Nav onClick={() => scrollToSection("projects")} text="Proyectos"/>
            <Nav onClick={() => scrollToSection("skills")} text="Habilidades"/>
            <Nav onClick={() => scrollToSection("experience")} text="Experiencia"/>
            <Nav onClick={() => scrollToSection("contactme")} text="Contactame"/>
        </div>
    </section>
  )
}

export default NavBar
