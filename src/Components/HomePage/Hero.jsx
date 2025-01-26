import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.jpg';
import img3 from '../../assets/home/03.png';
import img4 from '../../assets/home/04.jpg';
import img5 from '../../assets/home/05.png';

// import '/hero.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
       <div className='h-1/4'>
            
      <Swiper 
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide style={{
            'background-position': 'center',
    'background-size': 'cover',
    'width': '100%',
    'height': '300px'
        }}>
          <img  src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5}/>
        </SwiperSlide>
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
           <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
           <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
           <img src={img5} />
        </SwiperSlide>
        
      </Swiper>
    
       </div>
    );
};

export default Hero;