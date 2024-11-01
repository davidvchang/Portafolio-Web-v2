import React from 'react'

function Technology({logo, name}) {
  return (
    <div className={`technology ${name}`}>
      {logo}
      <span>{name}</span>
    </div>
  )
}

export default Technology
