import React from 'react'

function TechnologyUsed({icon, name, colorBG}) {
    console.log('TechnologyUsed está renderizando:', name);
  return (
    <div className={`px-2 flex items-center border rounded-full border-black gap-1 ${colorBG}`}>
        {icon}
        <span className='text-xs font-medium text-white'>{name}</span>
      
    </div>
  )
}

export default TechnologyUsed
