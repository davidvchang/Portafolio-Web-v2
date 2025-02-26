import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'
import DescriptionExperience from './DescriptionExperience'

const ExperienceCard = ({position, company, time}) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
}

  return (
    <div className='flex flex-col w-full md:w-[90%] lg:w-[90%] xl:w-[70%] bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 hover:border-teal-400/50 transition-colors'>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-semibold mb-1'>{position}</span>
          <button className='bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-lg p-2 border border-slate-700 hover:bg-teal-700 hover:transition duration-300 cursor-pointer' onClick={toggleVisibility}><ChevronDown className={`w-6 h-6 text-white transition-transform duration-300 ${
                                isVisible ? "rotate-180" : ""
                            }`}/></button>
        </div>

        <div className='flex gap-2'>
            <span className='text-teal-400'>{company}</span>
            <span>•</span>
            <span className='text-gray-300'>{time}</span>
        </div>

        {/* DESCRIPTION */}
        <AnimatePresence> 
                {isVisible === true && (
                    <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0, height: isVisible ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className='flex flex-col pt-5 gap-2'>
                        <DescriptionExperience description='Desarrollo de aplicaciones web utilizando Vue.js, PHP, JavaScript, CSS y Bootstrap.'/>
                        <DescriptionExperience description='Mantenimiento y mejoras en las aplicaciones web según los requisitos de los clientes.'/>
                        <DescriptionExperience description='Implementación de nuevas funcionalidades y corrección de errores en respuesta a feedback recibido.'/>
                        <DescriptionExperience description='Colaboración en equipo para asegurar la correcta entrega y actualización del proyecto.'/>
                    </div>

                </motion.div>
                )}

            </AnimatePresence>
    </div>
  )
}

export default ExperienceCard
