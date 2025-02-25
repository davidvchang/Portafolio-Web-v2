import React, { useState } from 'react'
import BtnActionsProjects from './BtnActionsProjects'

const ProjectCard = ({image, title, description, children, children2}) => {
  
  const [visibility, setVisibility] = useState(false)

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    < div className='w-[408px] h-full border overflow-hidden bg-white/5 backdrop-blur-xl rounded-lg border-white/10 hover:border-teal-400/50 hover:transition duration-300'>
        <div className='w-full h-52 overflow-hidden relative' onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
            <img src={image} alt=""  className='w-full h-full object-cover'/>

            {visibility && (
              <div className='absolute top-0 w-full h-full backdrop-blur-xs flex items-end p-5 justify-between'>
                {children2}
              </div>

            )}
        </div>

        <div className='p-5 flex flex-col'>
            <span className='text-2xl text-center'>{title}</span>
            <p className='text-ellipsis line-clamp-3 pt-5 text-gray-300'>{description}</p>
        </div>

        <div className='flex flex-wrap gap-2 justify-center pb-5'>
            {children}
        </div>


      
    </div>
  )
}

export default ProjectCard
