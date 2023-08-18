import React, { useEffect, useRef } from 'react';
import img from "../assets/compressed.gif"
import '../CSS/hero.css'

import Aos from 'aos';

const Hero = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    // typing effect
    // type js plugin



    return (
        <div id='hero' className='hero w-full h-[500px] md:h-[650px] relative'>
            <div className='w-full h-full bg-black/50'></div>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center space-y-4'>
            <p
                    // ref={typewriterRef} // Set the ref for the typewriter element
                    data-aos='zoom-in-down'
                    data-aos-duration='3000'
                    className='font-medium md:text-4xl text-2xl '
                > Welcome to the</p>
                {/* 
                <h2 data-aos="zoom-in-down" data-aos-duration="3000" className='md:text-[40px] text-4xl font-bold'>FEC</h2> */}


                <h1 data-aos="zoom-in-down" data-aos-duration="3000" className='md:text-[50px] text-5xl font-bold'>
                    Research  And  <span> </span>

                    <span className='bg-gradient-to-r from-r1 to-r2 text-transparent bg-clip-text'>
                    Innovation Centre
                        {/* <ReactTyped
                            strings={[
                                'Innovation Centre',
                               ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop >
                        </ReactTyped> */}
                    </span>
                </h1>

                <h1 class="typeJsText" data-typetext="I can hack Nasa! Ask me how?"></h1>

                <button className='RICbtn'>Become A Member</button>
            </div>
        </div>
    );
};

export default Hero;