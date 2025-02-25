import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialNetworkButton from '../components/SocialNetworkButton';
import ProfilePhoto from '../assets/img/FotoPerfil.webp'


const Home = () => {
  return (
    <section className='flex justify-between items-center w-full mt-16' style={{height: "calc(100vh - 64px)"}}>
        {/* PRESENTATION */}
        <div className='flex flex-col text-white'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                    <span className='border text-sm select-none w-fit h-fit px-2 border-emerald-700 text-emerald-400 font-light rounded-full'>Disponible para trabajar</span>
                    
                    <div className='flex flex-col'>
                        <span className='text-5xl font-light'>Hola, mi nombre es</span>
                        <span className='text-7xl font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>David Valenzuela</span>
                        <span className='text-2xl font-light text-slate-300'>Ing. en Sistemas Computacionales</span>

                    </div>
                </div>

                <div className='flex items-center gap-7'>
                    <a href="https://drive.google.com/file/d/1DLXqgBfYsYIHuVxSn637PdtTKHWkh2IZ/view?usp=sharing" target='_blank' className='w-fit h-fit px-12 py-3 rounded-full font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:brightness-90 hover:transition duration-300'>Ver CV</a>
                    
                    <div className='flex gap-4'>
                        <SocialNetworkButton link="https://github.com/davidvchang" icon={<Github className='w-5 h-5'/>}/>
                        <SocialNetworkButton link="https://www.linkedin.com/in/davidvalenzuelac/" icon={<Linkedin className='w-5 h-5'/>}/>
                        <SocialNetworkButton link="mailto:dvalenzuelachang@gmail.com" icon={<Mail className='w-5 h-5'/>}/>

                    </div>
                </div>
            </div>
        </div>

        {/* PHOTO */}
        <div className='w-[26rem] h-[26rem] bg-slate-100 rounded-full overflow-hidden relative'>
            <img src={ProfilePhoto} alt="" className='w-[27rem] h-[27rem] object-contain absolute -bottom-5 -left-2'/>
        </div>
      
    </section>
  )
}

export default Home
