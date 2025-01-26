import React, { useEffect, useState,useRef } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Reviews = () => {
    
    const [review,setReview] = useState([]);
    useEffect(()=>{
        fetch('../../../public/reviews.json')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div>
            <SectionTitle
            subHeading={"What Our Client Say!!"}
            heading={"Testimonials"}
            ></SectionTitle>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
       <div className=''>
        {
        review.map(rvw=><SwiperSlide>

            <div className='w-1/2 mx-auto text-center'>
            <Rating
      style={{ maxWidth: 180 }}
      value={rvw.rating}
      readOnly
    />
                <p>{rvw.details}</p>
                <h2 className="text-2xl text-orange-600 my-4">{rvw.name}</h2>
            </div>
        </SwiperSlide>)
       }
       </div>
      </Swiper>
        </div>
    );
};

export default Reviews;