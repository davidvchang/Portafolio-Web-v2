import React from 'react'

function SocialNetwork({ link, icon }) {
  return (
    <a href={link} target='_blank' className='socialNetwork'>
        {icon}
    </a>
  )
}

export default SocialNetwork
