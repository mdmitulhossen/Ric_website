import React, { useEffect } from 'react';
import ProjectsCard from '../Component/ProjectsCard';
import Aos from 'aos';

const CurrentProjects = () => {
    useEffect(()=>{
        Aos.init()
      },[])
    return (
        <div id='projects' className='RICcontainer mt-32'>
            <h1 className='text-4xl text-r1 text-center font-bold mb-8'>
                Current Projects
            </h1>

            <div className='grid grid-cols-12 gap-8'>
                <div data-aos="zoom-in-up" data-aos-duration="2000" className='col-span-12'>
                <ProjectsCard name="Spyder Bot" img={1}/>
                </div>
                <div data-aos="zoom-out-up" data-aos-duration="2000" className='col-span-12'>
                <ProjectsCard name="Robot" img={2}/>
                </div>
                <div data-aos="zoom-in-down" data-aos-duration="2000" className='col-span-12 md:col-span-6'>
                <ProjectsCard name="Robot Car" img={3}/>
                </div>
                <div data-aos="zoom-out-up" data-aos-duration="2000" className='col-span-12 md:col-span-6'>
                <ProjectsCard name="Spyder Robot" img={4}/>
                </div>
        
            </div>
        </div>
    );
};

export default CurrentProjects;