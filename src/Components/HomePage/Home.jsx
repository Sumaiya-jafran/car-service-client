import React from 'react';
import Hero from './Hero';


import Category from './Category';

import MenuItems from './MenuItems';
import FeaturedItem from './FeaturedItem';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
         <Hero/>
         
         <Category/>
         <MenuItems/>
         <FeaturedItem></FeaturedItem>
         <Reviews></Reviews>
        </div>
    );
};

export default Home;