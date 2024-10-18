import React, { Children } from 'react'

function Project({image, title, description, children, childrenbtnAction}) {
  return (
    <div className="flex py-5 min-h-[150px] gap-5 xl:flex-row flex-col px-4 xl:px-0">
        {/* PORTADA IMAGEN */}
        <div className='min-w-full md:min-w-[400px] md:max-w-[400px] md:self-center h-[220px] rounded-2xl overflow-hidden border border-black hover:scale-105 hover:transition duration-300'>
            <img src={image} alt="" className='w-full h-full'/>
        </div>

        {/* TITLE AND DESCRIPTION */}
        <div className='flex flex-col gap-3'>
            <span className='text-[27px] font-semibold text-center xl:text-left'>{title}</span>
            <p>{description}</p>

            {/* TECHNOLOGIES USED */}
            <div className='flex gap-2 justify-center lg:justify-start'>
                {children}
            </div>

            {/* ACTIONS BTN PROJECT */}
            <div className='flex gap-5 justify-around lg:justify-normal'>
                {childrenbtnAction}
            </div>
        </div>
      
    </div>
  )
}

export default Project
