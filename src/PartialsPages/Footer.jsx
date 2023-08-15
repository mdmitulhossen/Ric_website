import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black z-20 py-12 mt-28'>
            <div className='RICcontainer grid sm:grid-cols-2 gap-10 justify-between items-center'>
                  <div className='text-white text-center font-semibold text-lg'>
                      <p >Copyright © 2023 - <span className='text-r2'>FEC Robotics Club</span></p>
                      <p>
                        <span className='mr-2 text-xl'><ion-icon name="mail-outline"></ion-icon></span>
                        <span className='text-r2'>fec.ric@edu.bd</span>
                      </p>
                  </div>
                  <div className='text-white text-center font-semibold text-lg'>
                    <p>Designed by <span className='text-r2'>Md Mitul Hossain</span></p>
                    <p>Maintained by <span className='text-r2'>Md Mitul Hossain</span></p>
                  </div>
            </div>
        </div>
    );
};

export default Footer;