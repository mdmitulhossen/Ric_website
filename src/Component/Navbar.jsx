import React, { useState } from 'react';
import logo from "../assets/logo.svg"
import { Link } from 'react-scroll';
import '../CSS/navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-[#00233F] py-4 sticky top-0 z-50'>
            <div className='RICcontainer relative z-50'>
                <div className='grid grid-cols-12 items-center '>
                    {/* logo */}
                    <div className='flex gap-2 lg:col-span-3 col-span-6'>
                        <img className='w-10' src={logo} alt="" />
                        <h1 className='text-3xl font-bold text-white'><span className='bg-gradient-to-r from-r1 to-r2 text-transparent bg-clip-text'>FEC</span> RIC </h1>
                    </div>

                    {/* nav items */}
                    <div className='hidden lg:block col-span-7 w-full'>
                        <ul className='navItems flex justify-around gap-4 w-full text-lg font-medium text-white'>
                            <a href="/">
                                <li className='hover:text-r1 duration-200 cursor-pointer'>
                                    <Link spy={true} smooth={true} offset={-100} duration={500} to="hero">Home</Link>
                                </li>
                            </a>
                            
                            <li className='hover:text-r1 duration-200 cursor-pointer'>
                                <Link spy={true} smooth={true} offset={-100} duration={500} to="projects">Projects</Link>
                            </li>
                            
                            <li className='hover:text-r1 duration-200 cursor-pointer'>
                                <Link spy={true} smooth={true} offset={-100} duration={500} to="event">Event</Link>
                            </li>
                            <li className='hover:text-r1 duration-200 cursor-pointer'>
                                <Link spy={true} smooth={true} offset={-100} duration={500} to="about">About</Link>
                            </li>
                            <li className='hover:text-r1 duration-200 cursor-pointer'>
                                <Link spy={true} smooth={true} offset={-100} duration={500} to="contact">Contact</Link>
                            </li>
                            {/* 
                            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}><li className='hover:text-r1 duration-200 cursor-pointer'>Projects</li></Link>
                            <Link to="event" spy={true} smooth={true} offset={-100} duration={500}><li className='hover:text-r1 duration-200 cursor-pointer'>Event</li></Link>
                            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}><li className='hover:text-r1 duration-200 cursor-pointer'>About</li></Link>
                            <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}><li className='hover:text-r1 duration-200 cursor-pointer'>Contact</li></Link> */}
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div className='hidden lg:block col-span-2 space-x-4 justify-self-end text-3xl text-white'>
                        <span className='hover:text-r1 duration-200 cursor-pointer'> <ion-icon name="logo-facebook"></ion-icon></span>
                        <span className='hover:text-r1 duration-200 cursor-pointer'><ion-icon name="logo-instagram"></ion-icon></span>
                        <span className='hover:text-r1 duration-200 cursor-pointer'><ion-icon name="logo-linkedin"></ion-icon></span>
                    </div>

                    {/* Mobile Menu */}
                    <div className='col-span-6 justify-self-end lg:hidden z-50'>
                        <span onClick={() => setOpen(!open)} className='text-white text-3xl p-2 cursor-pointer'>
                            <ion-icon name={`${open ? 'close' : 'menu'}-outline`}></ion-icon>
                        </span>
                    </div>

                </div>

                {/* Mobile view */}

                <div className={`p-5 absolute w-full bg-[#00233F] transition-all duration-500 left-0 ${open ? 'top-[50px]' : "top-[-999px]"}`}>
                    <ul className='flex flex-col w-full justify-center items-center gap-5 text-lg font-medium text-white'>
                        <a href="/"><li className='hover:text-r1 duration-200'>
                            <Link spy={true} smooth={true} offset={-100} duration={500} to="hero">Home</Link>
                        </li></a>
                        <a href="/"><li className='hover:text-r1 duration-200'>Projects</li></a>
                        <a href="/"><li className='hover:text-r1 duration-200'>Event</li></a>
                        <a href="/"><li className='hover:text-r1 duration-200'>About</li></a>
                        <a href="/"><li className='hover:text-r1 duration-200'>Contact</li></a>
                    </ul>
                    <div className='text-3xl text-white flex justify-center gap-10 mt-10'>
                        <span className='hover:text-r1 duration-200 cursor-pointer'> <ion-icon name="logo-facebook"></ion-icon></span>
                        <span className='hover:text-r1 duration-200 cursor-pointer'><ion-icon name="logo-instagram"></ion-icon></span>
                        <span className='hover:text-r1 duration-200 cursor-pointer'><ion-icon name="logo-linkedin"></ion-icon></span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;