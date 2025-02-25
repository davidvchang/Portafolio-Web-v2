import React from 'react'

const ExperienceCard = ({position, company, time}) => {
  return (
    <div className='flex flex-col w-[70%] bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:border-teal-400/50 transition-colors'>
        <span className='text-xl font-semibold mb-1'>{position}</span>

        <div className='flex gap-2'>
            <span className='text-teal-400'>{company}</span>
            <span>•</span>
            <span className='text-gray-300'>{time}</span>

        </div>
    </div>
  )
}

export default ExperienceCard
