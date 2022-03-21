import React from 'react';
import Contact from '../Contact/Contact';
import Abouthm from './Abouthm/Abouthm';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Departmenthm from './Departmenthm/Departmenthm';
import OurTeam from './OurTeam/OurTeam';
import Pricing from './Pricing/Pricing';
import Review from './Review/Review';
import Serviceshm from './Servicehm/Serviceshm';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Serviceshm></Serviceshm>
            <Abouthm></Abouthm>
            <Departmenthm></Departmenthm>
            <OurTeam></OurTeam>
            <Review></Review>
            <Pricing/>
            <Blog/>
            <Contact></Contact>
        </div>
    );
};

export default Home;