import React, { useState } from "react";
// 1.

// 2.

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png'

import image3 from '../../assets/image3.png'
const ImageSlider = () => {
	
 
  return <div>
     <Swiper pagination={true} modules={[Pagination]} className="lg:h-[600px] flex items-center justify-center lg:w-[100%]">
  
        <SwiperSlide className="flex items-center justify-center"><img src={image1} alt="" className="lg:h-[600px] w-full flex items-center justify-center"/></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center"><img src={image2} alt="" className="lg:h-[600px] w-full flex items-center justify-center"/></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center"><img src={image3} alt="" className="lg:h-[600px] w-full flex items-center justify-center"/></SwiperSlide>
     </Swiper>
  </div>
};
export default ImageSlider;