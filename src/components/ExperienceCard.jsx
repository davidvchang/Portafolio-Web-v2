import React, { useState } from 'react'

function ExperienceCard({position, ShowOrHiden, iconCompany, company, iconCalendar, time, children, idDescription}) {

  const [isVisible, setIsVisible] = useState(false);

  const toggleDescription = () => {

    setIsVisible(!isVisible);
  }


  return (
    <div className='experienceCard'>
        <div className='containerTop'>
          <div className='positionShowBtnContainer'>
            <span className='position'>{position}</span>
            <button onClick={toggleDescription}>{ShowOrHiden}</button>
          </div>

          <div className='companyContainer'>
              {iconCompany}
              <span className='company'>{company}</span>
          </div>

          <div className='timeContainer'>
              {iconCalendar}
              <span className='time'>{time}</span>
          </div>

        </div>

        <div className={`descriptionContainer ${isVisible ? 'visible' : ''}`} id={`${idDescription}`}>
            {children}
        </div>
    </div>
  )
}

export default ExperienceCard
