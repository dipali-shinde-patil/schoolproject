import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade,Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (


    <>


      <Swiper
        // spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade ,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="public/images/slide-1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/images/slide-3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/images/slide-4.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public\images\slide1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
