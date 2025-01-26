import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import MenuComponent from '../Shared/SmallComponents/MenuComponent';

const MenuItems = () => {
    const [popularMenu,setPopularMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularCategory = data.filter(item=>item.category ==='popular');
            setPopularMenu(popularCategory);
        })
    },[])
    return (
        <div>
            <SectionTitle
            subHeading={"From Our Menu"}
            heading={"Popular Items"}
            >

            </SectionTitle>
            <div className='grid grid-cols-2 gap-10 w-4/5 mx-auto my-14'>
                {
                    popularMenu.map(item=><MenuComponent key={item._id} item={item}></MenuComponent>)
                }
            </div>
        </div>
    );
};

export default MenuItems;