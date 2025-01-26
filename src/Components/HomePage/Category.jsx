import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import './category.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import SectionTitle from '../Shared/SectionTitle';
const Category = () => {
    return (
        <div>
            <SectionTitle
            subHeading={"From 11.00am to 10pm"}
            heading={"Order Online"}
            >

            </SectionTitle>
          <Swiper style={{
             'width': '100%',
    'padding-top': '50px',
    'padding-bottom': '50px'
          }}
         
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{
            'background-position': 'center',
    'background-size': 'cover',
    'width': '300px',
    'height': '300px'
        }}>
           <img style={{
            'display': 'block',
    'width': '100%'
          }}  src={img1} />
        </SwiperSlide>
        <SwiperSlide style={{
            'background-position': 'center',
    'background-size': 'cover',
    'width': '300px',
    'height': '300px'
        }}>
           <img style={{
            'display': 'block',
    'width': '100%'
          }} src={img2} />
        </SwiperSlide>
        <SwiperSlide style={{
            'background-position': 'center',
    'background-size': 'cover',
    'width': '300px',
    'height': '300px'
        }}>
          <img style={{
            'display': 'block',
    'width': '100%'
          }} src={img3} />
        </SwiperSlide>
        <SwiperSlide style={{
            'background-position': 'center',
    'background-size': 'cover',
    'width': '300px',
    'height': '300px'
        }}>
          <img style={{
            'display': 'block',
    'width': '100%'
          }}  src={img4} />
        </SwiperSlide>
        <SwiperSlide style={{
            'background-position': 'center',
    'background-size': 'cover',
    'width': '300px',
    'height': '300px'
        }}>
          <img style={{
            'display': 'block',
    'width': '100%'
          }}  src={img5} />
        </SwiperSlide>
        
        
      </Swiper>  
        </div>
    );
};

export default Category;