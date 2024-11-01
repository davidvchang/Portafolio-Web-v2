import React from 'react'

function DescriptionJob({icon, description}) {
  return (
    <div className='descriptionJob'>
        {icon}
        <p>{description}</p>
    </div>
  )
}

export default DescriptionJob
