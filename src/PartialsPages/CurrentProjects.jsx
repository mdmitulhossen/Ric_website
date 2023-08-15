import React from 'react';
import ProjectsCard from '../Component/ProjectsCard';

const CurrentProjects = () => {
    return (
        <div className='RICcontainer mt-32'>
            <h1 className='text-4xl text-r1 text-center font-bold mb-8'>
                Current Projects
            </h1>

            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-12'>
                <ProjectsCard/>
                </div>
                <div className='col-span-12'>
                <ProjectsCard/>
                </div>
                <div className='col-span-12 md:col-span-6'>
                <ProjectsCard/>
                </div>
                <div className='col-span-12 md:col-span-6'>
                <ProjectsCard/>
                </div>
        
            </div>
        </div>
    );
};

export default CurrentProjects;