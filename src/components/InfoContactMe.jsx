import React from 'react'

function InfoContactMe({link, icon, text}) {
  return (
    <a href={link} target='_blank' className='containerInfo'>
        {icon}
        <span>{text}</span>
    </a>
  )
}

export default InfoContactMe
