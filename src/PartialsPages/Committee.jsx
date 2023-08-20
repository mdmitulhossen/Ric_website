import React from 'react';
import MemberCard from '../Component/MemberCard';



const Committee = () => {
    return (
        <div id='about' className='mt-32 RICcontainer'>
             <h1 className='text-4xl text-r1 text-center font-bold '> Committee Members</h1>
             <p className='text-white/40 font-semibold text-center mb-8'>September 1, 2023</p>

             <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                <MemberCard name='Nabi' post='President' imageNo={1}/>
                <MemberCard name='Nabi' post='General Secratary' imageNo={2}/>
                <MemberCard name='Nabi' post='Vice President' imageNo={3}/>
                <MemberCard name='Nabi' post='Joint Secratary' imageNo={4}/>
                <MemberCard name='Nabi' post='Organizer Secratary' imageNo={5}/>
                <MemberCard name='Nabi' post='Joint Organizer Secatary' imageNo={6}/>
                <MemberCard name='Nabi' post='Tresurer' imageNo={7}/>
                <MemberCard name='Nabi' post='Joint Tresurer' imageNo={8}/>
                <MemberCard name='Nabi' post='Office Secratary' imageNo={9}/>
                <MemberCard name='Nabi' post='Joint Office Secratary' imageNo={10}/>
                <MemberCard name='Nabi' post='Senior Executive' imageNo={11}/>
                <MemberCard name='Nabi' post='Junior Executive' imageNo={12}/>
             </div>
        </div>
    );
};

export default Committee;