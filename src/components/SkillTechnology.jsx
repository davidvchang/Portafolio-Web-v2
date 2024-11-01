import React from 'react'

function SkillTechnology({icon, text}) {
  return (
    <div className='skillTechnology'>
        {icon}
        <div className='tooltipContainer'>
            <span>{text}</span>
        </div>
    </div>
  )
}

export default SkillTechnology
