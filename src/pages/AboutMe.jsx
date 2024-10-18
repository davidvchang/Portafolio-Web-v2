import React from 'react'

function AboutMe() {
  return (
    <section className='flex flex-col lg:w-8/12 w-full  items-center justify-around gap-5 ' id='aboutMe'>
      <span className='text-3xl flex gap-2 border-b border-b-slate-500 w-full font-semibold'>{iconTitle} Sobre mi</span>

      <div className='flex flex-col py-3 w-full pb-10 lg:px-0 px-4'>
        <p>Hola, soy David, <strong className='text-Blue-Principal'>Ing. en Sistemas Computacionales</strong> me considero alguien apasionado por el desarrollo web y la programación, con una gran motivación por aprender nuevas tecnologías día con día, me encanta realizar pequeños proyectos que desafíen mi creatividad y habilidades, trato constantemente de mejorar y optimizar tanto el código como la experiencia del usuario.</p>
        <br />
        <p>Mi meta es llegar a convertirme en un gran programador y desarrollador web el cúal pueda desarrollar grandes proyectos de una manera mucho mas rapida y poder desarrollarme profesionalmente en una empresa internacional.</p>
        
      </div>
    </section>
  )
}

const iconTitle = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>

export default AboutMe
