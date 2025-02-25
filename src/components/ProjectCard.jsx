import React from 'react'

const ProjectCard = ({image, title, description, children}) => {
  return (
    < div className='w-[408px] h-full border overflow-hidden border-slate-800 rounded-lg hover:border-emerald-800 hover:transition duration-300'>
        <div className='w-full h-52'>
            <img src={image} alt=""  className='w-full h-full object-cover'/>
        </div>

        <div className='p-5 flex flex-col'>
            <span className='text-2xl text-center'>{title}</span>
            <p className='text-ellipsis line-clamp-3 pt-5'>{description}</p>
        </div>

        <div className='flex flex-wrap gap-2 justify-center pb-5'>
            {children}
        </div>


      
    </div>
  )
}

export default ProjectCard
