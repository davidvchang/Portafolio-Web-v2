import React from 'react'

function BtnAction({link, icon, text}) {
  return (
    <a href={link} target='_blank' className='btnAction'>
        {icon}
        <span>{text}</span>
    </a>
  )
}

export default BtnAction
