import React from 'react'
import ExperienceCard from '../components/ExperienceCard'

const Experience = () => {
  return (
    <sextioin className='flex flex-col w-full text-white gap-16 pt-10' id="experience">
        <span className='text-4xl text-center'>Experiencia</span>

        <div className='flex flex-col gap-5 items-center pb-10'>
            <ExperienceCard position="Desarrollador Web" company="Clever Cloud" time="Julio 2024 - Enero 2025"/>
        </div>
      
    </sextioin>
  )
}

export default Experience
