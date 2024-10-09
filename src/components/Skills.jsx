import React from 'react'

function Skills( { logo, name } ) {
  return (
    <div className='flex gap-2 border w-fit border-slate-600 shadow-lg rounded-md px-5 py-[10px] justify-center items-center select-none hover:scale-105 hover:transition duration-300'>
        {logo}
        <span className='text-base'>{name}</span>
    </div>
  )
}

export default Skills
