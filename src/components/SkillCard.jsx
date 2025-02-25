import React from 'react'

const SkillCard = ({icon, title, children}) => {
  return (
    <div className='w-60 gap-4 h-full p-5 flex flex-col bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-teal-400/50 transition-colors'>
        <div className='flex items-center gap-3'>
            <div className='p-2 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-lg'>
                {icon}

            </div>
            <span className='text-lg font-semibold'>{title}</span>
        </div>

        <div className='grid grid-cols-1 gap-1'>
            {children}
        </div>
      
    </div>
  )
}

export default SkillCard
