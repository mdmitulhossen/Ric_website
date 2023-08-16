import Aos from 'aos';
import React, { useEffect } from 'react';
import { useModal } from '../Context/ModalContext';

const Becomemember = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    const {isModalOpen, showModal, hideModal } = useModal();

      console.log(isModalOpen,showModal,hideModal)
    return (
        <div data-aos="zoom-in-down"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
            className='RICcontainer pt-16'>
            <h1 className='text-4xl text-r1 text-center font-bold mb-8'>Become a Member</h1>

            <div className='bg-white rounded-xl w-full lg:px-20 md:px-12 px-10 py-10 grid md:grid-cols-2  md:gap-16 gap-10'>
                <div>
                    <h2 className='text-3xl font-bold '>Join RIC Today!</h2>
                    <p className='text-sm font-semibold mt-2'>Membership is only 100TK</p>
                    <p className='text-black/80 font-medium mt-3'>Please Use Your valid information</p>
                    <p className='text-black/80 font-medium mt-1'>(Your membership will remain active until the end of 2023)</p>
                    <button onClick={showModal} className='RICbtn w-full mt-6 '>Register</button>



                </div>
                <div>
                    <h2 className='text-3xl font-bold'>185</h2>
                    <p className='text-sm font-medium'>Total members</p>
                    <p className='font-medium text-black/70 text-lg mt-2'>Join the Research & Enovation Club (RIC) for all the amazing projects, awesome workshops and cool events. You will even get an Altronics discount through us.</p>
                </div>
            </div>

         
        </div>
    );
};

export default Becomemember;