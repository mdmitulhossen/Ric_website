import React from 'react';
import img1 from '../assets/projects/robot_coffee.jpg'
import img2 from '../assets/projects/self_balance.jpg'
import img3 from '../assets/projects/self_driving_car.jpg'
import img4 from '../assets/projects/drone.jpg'
// import img4 from '../assets/projects/self_watering_plant.JPG'

const ProjectsCard = ({img,name}) => {
    const images = [img1,img2,img3,img4]
    return (
        <div className='bg-white rounded-xl w-full'>
            <div className='w-full h-[275px]'>
                <img className='w-full h-full object-cover rounded-t-xl' src={images[img-1]} alt="" />
            </div>
            <div className='p-5'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-sm font-medium text-black/80 mt-1'> Intermediate Development Project</p>
                <p className='text-black/70 mt-3'>Our coffee robot works by using a UR5 robot arm to produce a coffee shot. A wide variety of areas to improve, including mechanical, software and barista oriented work. People are urgently needed, so sign up if you want to work on a project that is currently in deployement and helping grow the club!</p>
            </div>
        </div>
    );
};

export default ProjectsCard;