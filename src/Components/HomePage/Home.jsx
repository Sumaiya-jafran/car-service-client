import React from 'react';
import Hero from './Hero';
import About from './About';
import FeaturedItems from './FeaturedItems';

const Home = () => {
    return (
        <div>
         <Hero/>
         <About/>
         <FeaturedItems/>
        </div>
    );
};

export default Home;