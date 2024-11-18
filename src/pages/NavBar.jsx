import React from 'react'

function NavBar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className='navBar'>
        <span>DV</span>

        <div className='containerNav'>
          <a onClick={() => scrollToSection("home")}>Inicio</a>
          <a onClick={() => scrollToSection("projects")}>Proyectos</a>
          <a onClick={() => scrollToSection("skills")}>Habilidades</a>
          <a onClick={() => scrollToSection("experience")}>Experiencia</a>
        </div>
    </section>
  )
}

export default NavBar
