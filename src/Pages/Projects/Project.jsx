import React from 'react'



// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import ImageSlider from './Imageslider'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png'

import image3 from '../../assets/image3.png'

import image4 from '../../assets/image4.png'
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';

export default function Project() {
    const images=[
        {
            id: 1,
            src: image1,
            alt: "Placeholder image",
          },
          {
            id: 2,
            src:image2,
            alt: "Placeholder image",
          },
          {
            id: 3,
            src:image3,
            alt: "Placeholder image",
          },
          {
            id: 4,
            src: image4,
            alt: "Placeholder image",
          },
          
    ]
  return (
    <div className='bg-black text-white'>
        <Navbar/>
        <p className='font-bold text-3xl text-white mt-10 text-center'>Our works</p>
        <div className='lg:w-[98%] w-[98%] px-2 h-[450.1px]  mt-10'>
        <ImageSlider images={images}/>
  
        </div>
        <div className='md:px-20 px-2 flex flex-col md:mt-3 items-center justify-center'>
<p className='font-bold md:text-4xl text-xl text-center'>RealPage StratisIOT
</p>
<p className='md:w-[70%] w-[90%] mt-14'>STRATIS is a leading provider of Smart Apartments and Intelligent Buildings solutions. With installations on over 1300 properties across the U.S. and expansion into international markets, STRATIS serves multifamily and student housing, hospitality, retail, and small to mid-size commercial sectors. Recognized as one of the fastest-growing companies in America, STRATIS offers a comprehensive platform for managing smart locks, IoT devices, and access control.</p>
<img src={image2} alt="" className='mt-8 w-[450px]'/>
        </div>
        <div className='md:px-20 px-2 mt-32 flex flex-col items-center justify-center'>
<p className='font-bold md:text-4xl text-xl text-center'>Project Brief
</p>
<p className='md:w-[70%] w-[90%] mt-14'>STRATIS was contracted by multiple property owners to implement intelligent access solutions on their premises. This involved installing smart locks, developing a management app, and providing IoT integration services. To address challenges faced by property staff, STRATIS aimed to streamline the key management process and enhance the residents’ access control experience.</p>
<img src={image1} alt="" className='mt-8 w-[450px] mb-10'/>
        </div>
        <Footer/>
    </div>
  )
}
