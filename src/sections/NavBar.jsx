import { useState } from "react";
import Nav from "../components/Nav"
import { AlignJustify, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'

const NavBar = () => {

  const [visibilityMenu, setVisibilityMenu] = useState(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({behavior: "smooth"})
      setVisibilityMenu(!visibilityMenu)
    }
  }

  const toggleVisibilityMenu = () => {
    setVisibilityMenu(!visibilityMenu)
  }

  return (
    <section className='w-full h-16 text-white bg-black/50 backdrop-blur-xl fixed z-99'>
      <div className=" w-full h-full px-5 lg:px-20 flex items-center justify-between">
        <span className='text-4xl font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>DV</span>

        <div className='w-fit hidden lg:flex gap-10'>
            <Nav onClick={() => scrollToSection("home")} text="Inicio"/>
            <Nav onClick={() => scrollToSection("projects")} text="Proyectos"/>
            <Nav onClick={() => scrollToSection("skills")} text="Habilidades"/>
            <Nav onClick={() => scrollToSection("experience")} text="Experiencia"/>
            <Nav onClick={() => scrollToSection("contactme")} text="Contactame"/>
        </div>

        {/* NAVBAR MOVIL */}
        <button onClick={toggleVisibilityMenu} className="hover:text-teal-500 lg:hidden"> 
          {visibilityMenu === false ?  (
            <AlignJustify className="w-8 h-8 hover:text-teal-500"/> 

          ) : (
            <X className="w-8 h-8 hover:text-teal-500"/> 
          )}
        </button>

      </div>
        <AnimatePresence>

        </AnimatePresence>
        {visibilityMenu && (
          <motion.div
          initial={{ opacity: 0, height: 0 }}
          exit={{ opacity: 0, height: 0 }}
          animate={{ opacity: visibilityMenu ? 1 : 0, height: visibilityMenu ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
          >
            <div className="absolute top-16 z-50 bg-black/90 backdrop-blur-xl w-full">
              <div className='flex flex-col items-center w-full gap-10 py-10'>
                  <Nav onClick={() => scrollToSection("home")} text="Inicio"/>
                  <Nav onClick={() => scrollToSection("projects")} text="Proyectos"/>
                  <Nav onClick={() => scrollToSection("skills")} text="Habilidades"/>
                  <Nav onClick={() => scrollToSection("experience")} text="Experiencia"/>
                  <Nav onClick={() => scrollToSection("contactme")} text="Contactame"/>
              </div>
            </div>

          </motion.div>
        )}
    </section>
  )
}

export default NavBar
