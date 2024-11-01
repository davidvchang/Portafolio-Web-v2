import React from 'react'
import FotoPerfil from '../assets/img/FotoPerfil.webp'

function Home() {
  return (
    <section className='home'>
        {/* IMAGE CONTAINER */}
        <div className='imageContainer'>
            <img src={FotoPerfil} alt="Foto de perfil" className='photoPrincipal'/>
        </div>

        {/* CONTAINER PRESENTATION */}
        <div className='presentationContainer'>
            <div className='containerNameInfo'>
                <span className='Hi'>Hola, mi nombre es</span>
                <h1>David Valenzuela</h1>
                <span className='Profession'>Ing. en Sistemas Computacionales</span>
            </div>

            <a href="https://drive.google.com/file/d/1ddlBcf2YW0uaSeU5FJqyc21bL-chScLN/view?usp=sharing" target='_blank' className='btnCV'>
                Ver CV
            </a>
        </div>
      
    </section>
  )
}

export default Home
