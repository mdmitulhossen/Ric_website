import React from 'react';

const Modal = ({ visible, hide }) => {
    if(!visible){
        return;
    }
    return (
        <div className='fixed inset-0 bg-gray-500 bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center'>
            <div className='w-3/4 lg:w-2/4 h-[600px] bg-bg shadow-lg rounded-xl overflow-y-scroll   p-10'>
                <div className='flex justify-between'>
                    <h1 className='text-white sm:text-4xl text-2xl font-bold'>Register Form</h1>
                    <button onClick={hide} className='text-3xl text-white bg-r1 pt-2 px-2 rounded-md'><ion-icon name="close-outline"></ion-icon></button>
                </div>

                <div className='mt-10'>
                    <form className='grid grid-cols-12 gap-5'>

                        <input className='col-span-12 rounded-md' type="text" id='name' placeholder='Enter your full Name' />
                        <input className='col-span-12 rounded-md' type="email" id='name' placeholder='Enter your email' />
                        <input className='sm:col-span-6 col-span-12 rounded-md' type="number" name="" id="" placeholder='Enter your contact nummber' />
                        <input className='sm:col-span-6 col-span-12 rounded-md' type="number" name="" id="" placeholder='Enter your Age' />
                        <div className='col-span-12 text-white'>
                            <label className='block text-white' for="gender">Gender:</label>
                            <input type="radio" id='gender' name='gender' /><span>male</span> <br />
                            <input type="radio" id='gender' name='gender' /><span>Female</span> <br />
                            <input type="radio" id='gender' name='gender' /><span>Other</span> <br />
                        </div>
                        <select className='col-span-6 py-2 px-2 rounded-md' name="department" id="department">
                            <option value="" disabled selected>Department</option>
                            <option value="cse" >CSE</option>
                            <option value="eee" >EEE</option>
                            <option value="ce" >CE</option>
                        </select>
                        <select className='col-span-6 py-2 px-2 rounded-md' name="batch" id="batch">
                            <option value="" disabled selected>batch</option>
                            <option value="4" >04</option>
                            <option value="5" >05</option>
                            <option value="6" >06</option>
                            <option value="7" >07</option>
                            <option value="8" >08</option>
                            <option value="9" >09</option>
                            <option value="10" >10</option>
                        </select>

                        <input className='col-span-6 rounded-md' type="number" placeholder='Enter Class Roll' />
                        <input className='col-span-6 rounded-md' type="number" placeholder='Enter Reg. No' />

                        <textarea className='col-span-12 rounded-md'   name="" id="" cols="30" rows="5" placeholder='Your Short Bio'></textarea>
                        
                        <input className='col-span-6 text-white' type="file" />
                    </form>
                </div>
                <div className='mt-8 flex justify-center'>
                  <button className='RICbtn rounded-md w-1/2'>Submit</button>
                </div>
                
            </div>
        </div>
    );
};

export default Modal;