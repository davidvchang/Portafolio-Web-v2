import React from 'react'

function BtnActionProject({link, icon, text}) {
  return (
    <a href={link} className='w-fit flex gap-2 px-3 py-1 rounded-lg border items-center border-slate-500 hover:bg-Blue-Principal hover:text-white hover:transition-all duration-300' target='_blank'>
        {icon}
        <span className='text-sm'>{text}</span>
    </a>
  )
}

export default BtnActionProject
