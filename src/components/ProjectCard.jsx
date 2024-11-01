import React from 'react'

function ProjectCard({image, title, description, children, children2}) {
  return (
    <div className='projectCard'>
        <div className='imgContainer'>
            <img src={image} alt="" />
        </div>
        <div className='titleDescriptionContainer'>
          <span>{title}</span>
          <p>{description}</p>
        </div>
        
        <div className='technologiesContainer'>
          {children}
        </div>

        <div className='btnsContainer'>
          {children2}
        </div>
    </div>
  )
}

export default ProjectCard
