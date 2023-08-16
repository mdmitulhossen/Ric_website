import React, { useEffect } from 'react';
import event1 from "../assets/Events/Computer_vision.png"
import Aos from 'aos';


const Event = () => {
   useEffect(()=>{
     Aos.init()
   },[])
    return (
        <div  data-aos="fade-down-right"

        data-aos-duration="1500"
             id='event' className='RICcontainer mt-24'>
            <h1 className='text-4xl text-r1 text-center font-bold mb-8'> Event Schedule</h1>

            <div className='rounded-xl bg-white'>
                <div className='w-full h-[350px]'>
                    <img className='w-full h-full rounded-t-xl object-fill' src={event1} alt="" />
                </div>
                <div className='p-8 text-center space-y-5'>
                    <h1 className='text-3xl font-bold'>Computer Vision Workshop</h1>
                    <p className='text-black/50 '>Upcoming Event - Monday 3rd of April, 12:00pm - 2:00pm</p>
                    <p>Welcome to our first software oriented workshop of the year!</p>
                    <p>Computer vision is an ever-expanding topic in the field of robotics, and an important gateway to building more advanced and innovative technology. This workshop is a must if you are interested in robotics or software development, and want to get a headstart!</p>
                    <p>
                        We will cover basic image processing, teaching you how to apply simple python algorithms to extract information from images.
                    </p>
                    <p>Tickets are $5, or free for members!</p>
                    <button  className='RICbtn'>Booking</button>
                </div>

            </div>
        </div>
    );
};

export default Event;