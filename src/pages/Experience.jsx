import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import DescriptionJob from '../components/DescriptionJob'

function Experience() {
  return (
    <section className='experience' id='experience'>
        <span>Experiencia Profesional</span>

        {/* EXPERIENCES CONTAINER */}
        <div className='experiencesContainer'>
            <ExperienceCard position='Desarrollador Web' ShowOrHiden={iconDownArrow} iconCompany={iconCompany} company='Clever Cloud' iconCalendar={iconCalendar} time='Julio 2024 - Diciembre 2024' idDescription={"descriptionCleverCloud"}
                children={
                    <>
                        <DescriptionJob icon={iconRightArrow} description='Desarrollo de aplicaciones web utilizando Vue.js, PHP, JavaScript, CSS y Bootstrap.'/>
                        <DescriptionJob icon={iconRightArrow} description='Mantenimiento y mejoras en las aplicaciones web según los requisitos de los clientes.'/>
                        <DescriptionJob icon={iconRightArrow} description='Implementación de nuevas funcionalidades y corrección de errores en respuesta a feedback recibido.'/>
                        <DescriptionJob icon={iconRightArrow} description='Colaboración en equipo para asegurar la correcta entrega y actualización del proyecto.'/>
                    </>
                }
            />

        </div>
    </section>
  )
}

const iconCompany = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconCompany" width={22} height={22}>
<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>

const iconCalendar = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconCalendar" width={22} height={22}>
<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

const iconRightArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 iconRightArrow" width={22} height={22}>
<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

const iconDownArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" width={22} height={22} className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>





export default Experience
