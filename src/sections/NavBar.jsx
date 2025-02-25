import Nav from "../components/Nav"

const NavBar = () => {
  return (
    <section className='w-full h-16 flex items-center justify-between px-20 text-white bg-[#020706]'>
        <span className='text-4xl font-medium'>DV</span>

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
