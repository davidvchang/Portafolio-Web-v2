import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

function NavBar() {

  const [menuOpened, setMenuOpened] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpened(true)
  }

  const handleCloseMenu = () => {
    setMenuOpened(false)
  }

   // Alternar el tema oscuro/claro
   const handleThemeChange = () => {
    setDarkMode(!darkMode); 
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <section className='flex flex-row justify-between items-center px-5 py-2 w-full dark:text-white text-black'>
        {/* TITLE OR LOGO SECTION*/}
        <div className='hidden sm:flex sm:flex-row gap-2'>
            <span className='text-4xl font-bold '>David</span>
            <span className='text-4xl font-bold text-Blue-Principal'>Valenzuela</span>
        </div>

        {/*  MOVIL - TITLE OR LOGO SECTION*/}
        <div className='flex flex-row sm:hidden'>
            <span className='text-6xl font-bold dark:bg-slate-900'>D</span>
            <span className='text-6xl font-bold text-Blue-Principal'>V</span>
        </div>

        <div className='hidden lg:flex lg:gap-10'>
          {/* CONTAINER NAV */}
          <div className='flex flex-row items-center gap-5 w-96 justify-around text-lg'>
              <a href="#aboutMe" className='hover:text-Blue-Principal hover:transition-colors duration-300'>Sobre mi</a>
              <a href="#projects" className='hover:text-Blue-Principal hover:transition-colors duration-300'>Proyectos</a>
              <a href="#" className='hover:text-Blue-Principal hover:transition-colors duration-300'>Contactame</a>

          </div>

          {/* ENABLE OR DISABLE DARK MODE */}
          <div>
            <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} checked={darkMode} onChange={handleThemeChange}/>} />
          </div>
          
        </div>


        {/* MOVIL - CONTAINER OPEN MENU */}
        <button className='w-fit pr-2 lg:hidden' onClick={handleOpenMenu}>
          {iconOpenMenu}
        </button>

        
        {/* MOVIL - CONTAINER NAVBAR OPENED MENU */}
        {menuOpened &&  (

        <div className='flex flex-col absolute z-50 top-0 left-0 w-full bg-slate-300 dark:bg-slate-800 lg:hidden lg:gap-10 transition-all duration-300'>
          {/* CONTAINER NAV */}
          <div className='flex justify-between px-5 py-2 border-b'>
            <div className='flex flex-row lg:hidden'>
              <span className='text-6xl font-bold md:text-5xl'>D</span>
              <span className='text-6xl font-bold text-Blue-Principal md:text-5xl'>V</span>
            </div>

            <button className='w-fit pr-2 lg:hidden' onClick={handleCloseMenu}>
              {iconCloseMenu}
            </button>

          </div>

          <div className='flex flex-col items-center gap-5 justify-around text-lg py-4'>
              <a href="#" className='py-2 hover:text-Blue-Principal hover:transition-colors duration-300'>Sobre mi</a>
              <a href="#" className='py-2 hover:text-Blue-Principal hover:transition-colors duration-300'>Proyectos</a>
              <a href="#" className='py-2 hover:text-Blue-Principal hover:transition-colors duration-300'>Contactame</a>

          </div>

          {/* ENABLE OR DISABLE DARK MODE */}
          <div className='w-full flex justify-end pb-5'>
            <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} checked={darkMode} onChange={handleThemeChange}/>} />
          </div>
          
        </div>
        )}
      
    </section>
  )
}


const iconOpenMenu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 min-w-12 min-h-12">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

const iconCloseMenu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 min-w-12 min-h-12">
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>



export default NavBar
