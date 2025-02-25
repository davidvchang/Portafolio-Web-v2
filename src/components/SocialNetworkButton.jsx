import React from 'react'

const SocialNetworkButton = ({icon}) => {
  return (
    <div className='flex justify-center items-center border border-slate-700 w-fit h-fit rounded-full p-2 hover:border-emerald-600 hover:transition duration-300 cursor-pointer'>
        {icon}
      
    </div>
  )
}

export default SocialNetworkButton
