import React from 'react'

function ExperienceCard({position, iconCompany, company, iconCalendar, time, children}) {
  return (
    <div className='experienceCard'>
        <span className='position'>{position}</span>

        <div className='companyContainer'>
            {iconCompany}
            <span className='company'>{company}</span>
        </div>

        <div className='timeContainer'>
            {iconCalendar}
            <span className='time'>{time}</span>
        </div>

        <div className='descriptionContainer'>
            {children}
        </div>
    </div>
  )
}

export default ExperienceCard
