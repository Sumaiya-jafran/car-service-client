import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedItems = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        const url = 'http://localhost:5000/items'
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setItems(data);
        })
    },[])
    return (
        <div>
            <h2 className='text-center text-5xl font-bold my-10 '>Featured Products</h2>
            <div className='grid md:grid-cols-3'>
                {
              items.map(item=> <FeaturedCard item={item}></FeaturedCard>)  
            }
            </div>
        </div>
    );
};

export default FeaturedItems;