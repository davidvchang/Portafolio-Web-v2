import React, { useState } from 'react'

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <section className='navBar'>
        <span>DV</span>

        <button className={`btnMenu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {menuOpen ? iconCloseMenu : iconMenu}
        </button>

        <div className={`containerNav ${menuOpen ? 'active' : ''}`} id='toggleMenu'>
          <a onClick={() => handleMenuClick("home")}>Inicio</a>
          <a onClick={() => handleMenuClick("projects")}>Proyectos</a>
          <a onClick={() => handleMenuClick("skills")}>Habilidades</a>
          <a onClick={() => handleMenuClick("experience")}>Experiencia</a>
          <a onClick={() => handleMenuClick("experience")}>Contactame</a>
        </div>
    </section>
  )
}

const iconMenu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={42} height={42} strokeWidth={2} stroke="currentColor" className="size-6 btn">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

const iconCloseMenu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={42} height={42} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>



export default NavBar
