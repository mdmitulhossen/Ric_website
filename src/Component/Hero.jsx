import React from 'react';
import img from "../assets/compressed.gif"
import '../CSS/hero.css'

const Hero = () => {
    return (
        <div className='hero w-full h-[500px] relative'>
            <div className='w-full h-full bg-black/50'></div>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center space-y-4'>
                <p className='font-medium text-2xl'>Welcome to the</p>
                <h2 className='text-4xl font-bold'>FEC</h2>
                <h1 className='text-5xl font-bold'><span className='bg-gradient-to-r from-r1 to-r2 text-transparent bg-clip-text'>Research</span> & Enovation Center</h1>

                <button className='RICbtn'>Become A Member</button>
            </div>
        </div>
    );
};

export default Hero;