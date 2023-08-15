import React from 'react';

const ContactPage = () => {
    return (
        <div className='mt-28 RICcontainer'>
            <h1 className='text-4xl text-r1 text-center font-bold mb-12'> Contact Us</h1>


            <div className='bg-white grid md:grid-cols-2 p-8 md:p-12 gap-20 md:gap-12  rounded-xl'>

                <div className=' space-y-4'>
                    <h1 className='text-4xl  font-bold '>
                        <span className='mr-2'><ion-icon name="mail"></ion-icon></span>
                        Email Us
                    </h1>
                    <h3 className='text-xl font-semibold text-black/70'>fec.ric@edu.bd</h3>
                    <p className='text-3xl  font-bold'>Ask us anything</p>


                    <div className=''>
                        <form className='space-y-4'>
                            <input className='w-full p-2 focus:ring-r2 rounded-md focus:border-r2' type="text" name="" id="" placeholder='Name..'/>
                            <input className='w-full p-2 focus:ring-r2 rounded-md focus:border-r2' type="email" name="" id="" placeholder='Email..'/>
                            <select className='w-full p-2 focus:ring-r2 rounded-md focus:border-r2' name="" id="">
                                <option value="" disabled>Topics</option>
                                <option value="Memberships" selected>Memberships</option>
                                <option value="Workshops">Workshops</option>
                                <option value="Event">Event</option>
                                <option value="Projects">Projects</option>
                                <option value="Others">Others</option>
                            </select>
                            <textarea className='w-full p-2 focus:ring-r2 rounded-md focus:border-r2' name="" id="" cols="30" rows="4" placeholder='Message'></textarea>
                            <button className='bg-r2 px-5 py-2 rounded-md cursor-pointer text-white font-semibold hover:bg-r1 duration-200 w-full'>Send Message</button>
                        </form>
                    </div>
                </div>



                <div className='flex flex-col gap-10 justify-between h-full'>
                    <h1 className='text-4xl  font-bold '>
                        <span className='mr-2'><ion-icon name="location"></ion-icon></span>
                        Find Us
                    </h1>
                    <p className='text-xl font-medium text-black/70'>
                        Clough Engineering Lab,
                        Crawley WA 6009
                    </p>
                    <button className='bg-r2 px-5 py-2 rounded-md cursor-pointer text-white font-semibold hover:bg-r1 duration-200 '>Find us on Maps</button>
                    <div className=' h-[250px]'>
                    <iframe className="gmap_iframe rounded-md h-full" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=350&amp;hl=en&amp;q=faridpur engineering college,bangladesh&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                       
                    </div>
                </div>



            </div>

        </div>
    );
};

export default ContactPage;