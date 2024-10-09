import React from 'react'
import PhotoPerfil from '../assets/img/FotoPerfil.webp'

function Home() {
  return (
    <section className='flex flex-col-reverse 2xl:flex-row w-full h-screen items-center justify-around'>

      {/* CONTAINER PRESENTATION */}
      <div className=' flex gap-8 flex-col items-center xl:items-start'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col lg:flex-row gap-3 '>
            <span className='text-7xl font-semibold text-center'>Hola, soy</span>
            <span className='text-7xl font-semibold text-Blue-Principal text-center'>David Valenzuela</span>

          </div>
          <span className='text-2xl text-slate-600 font-light pl-2 text-center xl:text-left'>Ing. en Sistemas Computacionales | Desarrollador Web</span>
        </div>

        <a href="https://drive.google.com/file/d/1ddlBcf2YW0uaSeU5FJqyc21bL-chScLN/view?usp=sharing" 
          target='_blank'
          className='px-12 py-4 bg-Blue-Principal w-fit text-slate-200 font-semibold rounded-md hover:opacity-80 hover:transition-opacity duration-300 flex gap-2 justify-center items-center'>
            {iconViewCV}
            Ver CV
        </a>
      </div>

      {/* CONTAINER PHOTO */}
      <div className='w-fit h-auto'>
        <div className='bg-Blue-Photo-BG rounded-full relative flex items-center justify-center border-6 border-Blue-Principal z-10 w-80 h-80 mt-20 lg:mt-0 lg:w-90 lg:h-90'>
          <img src={PhotoPerfil} alt="Foto Principal" className='w-90 h-96 rounded-full absolute bottom-0 object-cover'/>

        </div>
      </div>

      {/* CONTAINER ARROW DOWN ANIMATION */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ">
        {iconArrowDown}
      </div>
    </section>
  )
}

const iconViewCV = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>

const iconArrowDown = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-8 h-8">
<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>




export default Home
