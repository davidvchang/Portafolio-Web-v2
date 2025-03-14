import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialNetworkButton from '../components/SocialNetworkButton';
import ProfilePhoto from '../assets/img/FotoPerfil.webp'


const Home = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row lg:justify-around items-center w-full lg:px-5 xl:px-0 mt-16 gap-7 lg:gap-0' style={{height: "calc(100vh - 64px)"}} id='home'>
        {/* PRESENTATION */}
        <div className='flex flex-col text-white'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2 lg:gap-5'>
                    <div className='flex w-full justify-center lg:justify-start'>
                        <span className='border text-sm text-center select-none w-fit h-fit px-2 border-emerald-700 text-emerald-400 font-light rounded-full'>Disponible para trabajar</span>
                    </div>
                    
                    <div className='flex flex-col w-full items-center lg:items-start'>
                        <span className='text-4xl lg:text-5xl font-light'>Hola, mi nombre es</span>
                        <span className='text-7xl text-center lg:text-start font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>David Valenzuela</span>
                        <span className='text-2xl font-light text-slate-300'>Ing. en Sistemas Computacionales</span>

                    </div>
                </div>

                <div className='flex items-center md:justify-center lg:justify-start gap-7'>
                    <a href="https://drive.google.com/file/d/1YAkwZtXxrJ_fO1OVyi9_shz-eEe8-XJK/view?usp=sharing" target='_blank' className='w-fit h-fit px-12 py-3 rounded-full font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:brightness-90 hover:transition duration-300'>Ver CV</a>
                    
                    <div className='flex gap-4'>
                        <SocialNetworkButton link="https://github.com/davidvchang" icon={<Github className='w-5 h-5'/>}/>
                        <SocialNetworkButton link="https://www.linkedin.com/in/davidvalenzuelac/" icon={<Linkedin className='w-5 h-5'/>}/>
                        <SocialNetworkButton link="mailto:dvalenzuelachang@gmail.com" icon={<Mail className='w-5 h-5'/>}/>

                    </div>
                </div>
            </div>
        </div>

        {/* PHOTO */}
        <div className='min-w-80 min-h-80 lg:min-w-[26rem] lg:min-h-[26rem] bg-slate-100 rounded-full overflow-hidden relative'>
            <img src={ProfilePhoto} alt="" className='w-[336px] h-[336px] lg:w-[27rem] lg:h-[27rem] object-contain absolute -bottom-5 -left-2'/>
        </div>
      
    </section>
  )
}

export default Home
