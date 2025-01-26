import React from 'react';
import BGimg from '../../assets/home/featured.jpg'
import './FeaturedItem.css'
import SectionTitle from '../Shared/SectionTitle';
const FeaturedItem = () => {
    return (
        <div className='featured py-16 text-white bg-fixed bg-opacity-60 bg-slate-700'>
            <SectionTitle
            subHeading={"Check it out"}
            heading={"Featured Items"}
            ></SectionTitle>
            <div className=''>
                <div className='flex gap-6 w-3/4 mx-auto justify-center items-center my-24'>
                    <div className='w-1/2'><img  src={BGimg} alt="" /></div>
                    <div className='w-1/2'>
                        <p>November 12, 2025</p>
                        <h3 className='uppercase my-2'>Where Can i get some</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid in sit expedita debitis eveniet sed fugiat, atque accusamus cupiditate harum, quo alias obcaecati. Non labore aspernatur explicabo animi amet!</p>
                        <button className="btn btn-outline btn-secondary border-0 border-b-4 my-3">Secondary</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;