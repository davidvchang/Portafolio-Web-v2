import Nav from "../components/Nav"

const NavBar = () => {
  return (
    <section className='w-full h-16 flex items-center justify-between px-20 text-white bg-black/50 backdrop-blur-xl fixed z-99'>
        <span className='text-4xl font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>DV</span>

        <div className='w-fit flex gap-10'>
            <Nav link="#" text="Inicio"/>
            <Nav link="#" text="Proyectos"/>
            <Nav link="#" text="Habilidades"/>
            <Nav link="#" text="Experiencia"/>
            <Nav link="#" text="Contactame"/>
        </div>
    </section>
  )
}

export default NavBar
