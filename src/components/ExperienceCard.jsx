import React from 'react'

function ExperienceCard({position, ShowOrHiden, iconCompany, company, iconCalendar, time, children, idDescription}) {


  const toggleDescription = () => {
    const description = document.getElementById(`${idDescription}`);
    if (description.style.opacity === "0") {
      description.style.visibility = "visible";
      description.style.maxHeight = "130px";
      description.style.opacity = "1";
      description.style.paddingTop = "20px";
    } else {
        description.style.visibility = "hidden";
        description.style.maxHeight = "0"; 
        description.style.opacity = "0";
        description.style.paddingTop = "0";
    }
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

        <div className='descriptionContainer' id={`${idDescription}`}>
            {children}
        </div>
    </div>
  )
}

export default ExperienceCard
