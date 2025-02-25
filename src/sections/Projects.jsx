import React from 'react'
import ProjectCard from '../components/ProjectCard'
import PelisDev from '../assets/img/covers/PelisDev.webp'
import Biblioteca from '../assets/img/covers/Sistema-Para-biblioteca.webp'
import Desarrollo from '../assets/img/covers/En-desarrollo-portada.webp'
import Ecommerce from '../assets/img/covers/Ecommerce.webp'

import TechnologyUsed from '../components/TechnologyUsed'
import BtnActionsProjects from '../components/BtnActionsProjects'

import { Github, Link } from 'lucide-react';

const Projects = () => {
  return (
    <section className='flex flex-col w-full text-white gap-16 pt-10' id='projects'>
        <span className='text-4xl text-center'>Proyectos</span>

        <div className='grid grid-cols-3 gap-y-6 pb-10'>
            <ProjectCard image={PelisDev} title="PelisDev" description="Página web de pelicula inspirada en Cuevana, está hecha en React y estilada con Tailwind, se realizó solo la parte Front - End, se puede buscar peliculas por nombre o por categoría, así como cambiar de página." 
                children={
                    <>
                        <TechnologyUsed name="React"/>
                        <TechnologyUsed name="JavaScript"/>
                        <TechnologyUsed name="Tailwind"/>
                    </>
                }

                children2={
                    <>
                        <BtnActionsProjects link="https://github.com/davidvchang/PelisDev" icon={<Github className='text-white w-5 h-5'/>} text="Ver repositorio"/>
                        <BtnActionsProjects link="https://pelis-dev.netlify.app/" icon={<Link className='text-white w-5 h-5'/>} text="Live Demo"/>
                    </>
                }
            />
            <ProjectCard image={Biblioteca} title="Sistema para biblioteca" description="Sistema fullstack para una biblioteca en la cual permita prestar libros, así como agregar nuevos libros, poder editar, eliminar cada libro, de la misma forma para los clientes."
                children={
                    <>
                        <TechnologyUsed name="React"/>
                        <TechnologyUsed name="TypeScript"/>
                        <TechnologyUsed name="Tailwind"/>
                        <TechnologyUsed name="Express.js"/>
                        <TechnologyUsed name="PostgreSQL"/>
                    </>
                }

                children2={
                    <>
                        <BtnActionsProjects link="https://github.com/davidvchang/Sistema-para-biblioteca" icon={<Github className='text-white w-5 h-5'/>} text="Ver repositorio"/>
                        {/* <BtnActionsProjects link="https://pelis-dev.netlify.app/" icon={<Link className='text-white w-5 h-5'/>} text="Live Demo"/> */}
                    </>
                }
            />
            <ProjectCard image={Desarrollo} title="BarberShop" description="Sistema para una barberia en el cual le permite a los clientes agendar una cita y cancelarla, y al administrador le permite administrar las citas, los clientes, servicios, etc."
                children={
                    <>
                        <TechnologyUsed name="Vue.js"/>
                        <TechnologyUsed name="TypeScript"/>
                        <TechnologyUsed name="Tailwind"/>
                        <TechnologyUsed name="Express.js"/>
                        <TechnologyUsed name="MongoDB"/>
                    </>
                }

                children2={
                    <>
                        <BtnActionsProjects link="https://github.com/davidvchang/BarberShop" icon={<Github className='text-white w-5 h-5'/>} text="Ver repositorio"/>
                        {/* <BtnActionsProjects link="https://pelis-dev.netlify.app/" icon={<Link className='text-white w-5 h-5'/>} text="Live Demo"/> */}
                    </>
                }
            />
            <ProjectCard image={Ecommerce} title="TechQuality Ecommerce" description="Ecommerce para una tienda ficticia de tecnologia. Permite registrarse, iniciar sesón, agregar productos al carrito y comprar por medio de mercadopago."
                children={
                    <>
                        <TechnologyUsed name="React"/>
                        <TechnologyUsed name="TypeScript"/>
                        <TechnologyUsed name="Tailwind"/>
                        <TechnologyUsed name="Express.js"/>
                        <TechnologyUsed name="PostgreSQL"/>
                    </>
                }

                children2={
                    <>
                        <BtnActionsProjects link="https://github.com/davidvchang/TechQuality---Ecommerce" icon={<Github className='text-white w-5 h-5'/>} text="Ver repositorio"/>
                        {/* <BtnActionsProjects link="https://pelis-dev.netlify.app/" icon={<Link className='text-white w-5 h-5'/>} text="Live Demo"/> */}
                    </>
                }
            />

        </div>
      
    </section>
  )
}

export default Projects
