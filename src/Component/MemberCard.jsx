import React, { useEffect } from 'react';
import member1 from '../assets/team/Agnibho.png'
import member2 from '../assets/team/Bridget.jpg'
import member3 from '../assets/team/Fraser.png'
import member4 from '../assets/team/Ivan.png'
import member5 from '../assets/team/Travis.png'
import member6 from '../assets/team/Trung.jpg'
import member7 from '../assets/team/Travis.png'
import member8 from '../assets/team/Trung.jpg'
import member9 from '../assets/team/Fraser.png'
import member10 from '../assets/team/Travis.png'
import member11 from '../assets/team/Bridget.jpg'
import member12 from '../assets/team/Kieran.png'
import Aos from 'aos';

const MemberCard = ({name,post,imageNo}) => {
    const image = [member1,member2,member3,member4,member5,member6,member7,member8,member9,member10,member11,member12];

    useEffect(()=>{
        Aos.init()
      },[])
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className='bg-white rounded-xl relative group cursor-pointer'>
            <div className='w-full h-[350px]'>
                <img className='w-full h-full rounded-t-xl object-fill' src={image[imageNo-1]} alt="" />
            </div>
            <div className='p-4 text-center'>
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className='bg-r1 text-xs py-1 inline-block px-8 text-white font-medium rounded-full '>{post}</p>
            </div>

            <div className='bg-r1 absolute w-full bottom-10 opacity-0 group-hover:opacity-100 group-hover:bottom-0 rounded-b-xl p-4 text-white  transition-all duration-300 '>
                 <p className='text-md font-semibold text-center'>
                    <span className='mr-2'><ion-icon name="call-outline"></ion-icon></span>
                    +880175555555
                 </p>
                 <p className='text-md font-semibold text-center'>
                    <span className='mr-2'><ion-icon name="mail-open-outline"></ion-icon></span>
                    nobi@hotmail.com
                 </p>
            </div>
        </div>
    );
};

export default MemberCard;