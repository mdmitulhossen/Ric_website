import React from 'react';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Becomemember from '../PartialsPages/Becomemember';
import CurrentProjects from '../PartialsPages/CurrentProjects';
import Event from '../PartialsPages/Event';
import Committee from '../PartialsPages/Committee';
import ContactPage from '../PartialsPages/ContactPage';
import Footer from '../PartialsPages/Footer';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>

            <div className='bg-bg'>
              <Becomemember/>
              <CurrentProjects/>
              <Event/>
              <Committee/>
              <ContactPage/>
              <Footer/>
            </div>
            
        </div>
    );
};

export default HomePage;