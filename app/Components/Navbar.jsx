import { assets } from '@/next_js_portfolio_assets/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode , setIsDarkMode}) => {
    const [isScroll , setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = () =>{
       sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () =>{
       sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(()=>{
        window.addEventListener ('scroll',()=>{
            if(scrollY > 50){
           setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])
  return (
   
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
<Image src={assets.header_bg_color} alt='bg-header' className='w-full'/>
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-gray300 bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20":''}`}>
        <a href="">
            <Image src={isDarkMode? assets.logo_dark:assets.logo} className='w-16 cursor-pointer mr-14' alt='logo'/>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${
         isScroll ? "": 'bg-white shadow-lg bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
            <li><a className=' font-Ovo text-sm lg:text-xl ' href="#top">Home</a></li>
            <li><a className=' font-Ovo text-sm lg:text-xl' href="#about">About me</a></li>
            <li><a className=' font-Ovo text-sm lg:text-xl' href="#services">Services</a></li>
            <li><a className=' font-Ovo text-sm lg:text-xl' href="#work">My Work</a></li>
            <li><a className=' font-Ovo text-sm lg:text-xl' href="#contact">Contact me</a></li>
        </ul>
        <div className=' flex items-center gap-4'>
            <button onClick={()=> setIsDarkMode(prev => !prev)}><Image src={isDarkMode? assets.sun_icon : assets.moon_icon} alt='moonpic' className='w-6' /></button>
            <a href="contact" className='font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 ml-4 rounded-full dark:border-white/50'>Contact <Image src={isDarkMode? assets.arrow_icon_dark:assets.arrow_icon} className='w-3' alt='arrow'/></a>

            <button className='block md:hidden ml-3' onClick={openMenu}><Image src={isDarkMode? assets.menu_white:assets.menu_black} alt='' className='w-6 '/></button>
        </div>

        {/* mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
            <div className='absolute right-6 top-6' onClick={closeMenu}> <Image src={isDarkMode? assets.close_white: assets.close_black} alt='' className='w-5 cursor-pointer'/></div>
        <li><a className=' font-Ovo ' href="#top">Home</a></li>
            <li><a className=' font-Ovo ' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className=' font-Ovo ' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className=' font-Ovo ' onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className=' font-Ovo ' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar