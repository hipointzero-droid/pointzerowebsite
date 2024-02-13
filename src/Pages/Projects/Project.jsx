import React from 'react'



// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import ImageSlider from './Imageslider'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png'

import image3 from '../../assets/image3.png'
import porject1 from '../../assets/project1.png'
import porject2 from '../../assets/project2.png'
import porject3 from '../../assets/project3.png'


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
        <div className='lg:w-[98%] w-[98%] px-2 h-[450.1px]  mt-10'>
        <ImageSlider images={images}/>
  
        </div>
        <p className='font-bold text-3xl text-white mt-10 text-center'>Web Development projects</p>
        <div id='container' className='flex lg:p-0 p-5  gap-9 items-center lg:justify-center justify-start mt-10 overflow-x-auto lg:px-20'>
        <div className='flex-shrink-0 flex-grow-0 lg:pl-64'>
          <div className='flex flex-col items-start justify-start'>
          <img src={porject2} alt="" className='mt-8 h-[250px] w-[500px] object-contain '/>
         <div className=' space-y-3 mt-2'>
         <p className='font-bold text-xs text-[#9398A8]'>Ecommerce </p>
          <p className='font-bold text-sm text-white w-[380px]'>STRATIS is a leading provider of Smart and Apartments and Intelligent Buildings solutions.</p>
          <p className='font-bold text-xs text-[#9398A8]'>Tailwind CSS , NextJs  </p>
         </div>
          </div>
          </div>
          <div className='flex-shrink-0 flex-grow-0'>
          <div className='flex flex-col items-start justify-start'>
          <img src={porject3} alt="" className='mt-8 h-[250px] w-[500px] object-contain '/>
         <div className='pl-6 space-y-3 mt-2'>
         <p className='font-bold text-xs text-[#9398A8]'>Ecommerce </p>
          <p className='font-bold text-sm text-white w-[380px]'>STRATIS is a leading provider of Smart and Apartments and Intelligent Buildings solutions.</p>
          <p className='font-bold text-xs text-[#9398A8]'>Tailwind CSS , NextJs  </p>
         </div>
          </div>
          </div>
          <div className='flex-shrink-0 flex-grow-0'>
          <div className='flex flex-col items-start justify-start'>
          <img src={porject2} alt="" className='mt-8 h-[250px] w-[500px] object-contain '/>
         <div className='pl-6 space-y-3 mt-2'>
         <p className='font-bold text-xs text-[#9398A8]'>Ecommerce </p>
          <p className='font-bold text-sm text-white w-[380px]'>STRATIS is a leading provider of Smart and Apartments and Intelligent Buildings solutions.</p>
          <p className='font-bold text-xs text-[#9398A8]'>Tailwind CSS , NextJs  </p>
         </div>
          </div>
          </div>
        </div>
       
        <div className='md:px-20 px-2 mt-32 flex flex-col items-center justify-center'>
        <img src={image1} alt="" className='w-[450px] mt-14'/>
<p className='md:w-[70%] w-[90%] mt-8 mb-10 text-[#8A889C] font-bold'>STRATIS was contracted by multiple property owners to implement intelligent access solutions on their premises. This involved installing smart locks, developing a management app, and providing IoT integration services. To address challenges faced by property staff, STRATIS aimed to streamline the key management process and enhance the residents’ access control experience.</p>

        </div>
        <Footer/>
    </div>
  )
}
