import React from 'react'

const Home = () => {
  return (
    <section className='flex justify-between items-center w-full'>
        {/* PRESENTATION */}
        <div className='flex flex-col text-white'>
            <div className='flex flex-col'>
                <span className='text-5xl font-light'>Hola, mi nombre es</span>
                <span className='text-7xl font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>David Valenzuela</span>
                <span className='text-2xl font-light text-slate-300'>Ing. en Sistemas Computacionales</span>

                <div className='flex'>
                    <a href="" className='w-fit h-fit px-10 py-3 rounded-full font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-white'>Ver CV</a>
                    
                </div>
            </div>
        </div>

        {/* PHOTO */}
        <div className='w-[32rem] h-[32rem] bg-slate-100 rounded-2xl'>

        </div>
      
    </section>
  )
}

export default Home
