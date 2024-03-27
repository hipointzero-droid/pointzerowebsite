import React, { useState } from 'react'

import developer from '../../../assets/developer.png'
import developer1 from '../../../assets/developer1.png'
import ServiceComponent from '../../../components/ServiceComponent';
import website from '../../../assets/website.png';
import website1 from '../../../assets/website1.png';
import ui from '../../../assets/ux.png';
import ui1 from '../../../assets/ux1.png';
import mobile from '../../../assets/mobile.png';
import mboile1 from '../../../assets/mobile1.png';
import './scroll.css'
export default function OurServices() {
  const [first, setfirst] = useState(false);
  const [first1, setfirst1] = useState(false);
  const [first2, setfirst2] = useState(false);
  const [first3, setfirst3] = useState(false)
    const items=[1,2,3,4,5];
  return (
    <section   className='bg-black text-white lg:p-14 pb-20'>
    <h1 className='text-center pt-4  lg:text-5xl text-xl font-semibold'>
      Our Core Services
    </h1>
    <div id='container'  className='flex gap-9 items-start lg:p-0 p-5  justify-start mt-10 overflow-x-auto'>
     
     
      {/* developer */}
      <div className='flex-shrink-0 flex-grow-0'>
      <div className={`bg-[#242323] h-[500px] py-16 px-8 rounded-xl text-white w-[354px] cursor-pointer hover:bg-yellow-200 transition duration-700 ease-in-out hover:text-black `}
       onMouseEnter={()=>{
        setfirst1(!first1);
      }} onMouseLeave={()=>{
        setfirst1(!first1)
      }}>
<img src={first1===false? developer:developer1} alt="" className='h-26 '/>
<p className=' text-xl font-bold  mt-3 w-[100%]'>Hire Dedicated Developers</p>
<p className=' font-semibold text-sm mt-1 w-[95%]'>Augment your team with our Hire Dedicated Developers service,
where you gain access to seasoned professionals fully committed to bringing your projects to
fruition. Whether you need additional expertise for a specific project or ongoing support for your
development needs, our dedicated developers become an extension of your team, working
closely with you to deliver high-quality solutions on time and within budget.</p>
<p className={`mt-6 font-bold  ${first1===false?"text-[#242323]":"text-red-600"}`}>Read More</p>
      </div>
      </div>
      {/* App */}
      <div className='flex-shrink-0 flex-grow-0'>
      <div className={`bg-[#242323] h-[500px] py-16 px-8 rounded-xl text-white w-[354px] cursor-pointer hover:bg-orange-200 transition duration-700 ease-in-out hover:text-black `}
       onMouseEnter={()=>{
        setfirst3(!first3);
      }} onMouseLeave={()=>{
        setfirst3(!first3)
      }}>
<img src={first3===false? mobile:mboile1} alt="" className='h-26 '/>
<p className=' text-xl font-bold  mt-3 w-[80%]'>Mobile Apps</p>
<p className=' font-semibold text-sm mt-3 w-[95%]'>Our mission at Point Zero is simple: to empower businesses with the tools and technologies
they need to thrive in the digital age. We are driven by a relentless pursuit of excellence and a
commitment to delivering innovative solutions that exceed expectations. With a focus on quality,
creativity, and customer satisfaction, we strive to be the go-to partner for businesses looking to
harness the power of technology to achieve their goals and make a lasting impact in their
industries.</p>
<p className={`mt-6 font-bold  ${first3===false?"text-[#242323]":"text-red-600"}`}>Read More</p>
      </div>
      </div>
      {/* website */}
      <div className='flex-shrink-0 flex-grow-0'>
      <div className={`bg-[#242323] h-[500px] py-12 px-8 rounded-xl text-white w-[354px] cursor-pointer hover:bg-red-200 transition duration-700 ease-in-out hover:text-black `}
       onMouseEnter={()=>{
        setfirst2(!first2);
      }} onMouseLeave={()=>{
        setfirst2(!first2)
      }}>
<img src={first2===false? website:website1} alt="" className='h-26 '/>
<p className=' text-xl font-bold  mt-3 w-[80%]'>Web Development</p>
<p className=' font-semibold text-sm  mt-3 w-[95%]'>Our mission at Point Zero is simple: to empower businesses with the tools and technologies
they need to thrive in the digital age. We are driven by a relentless pursuit of excellence and a
commitment to delivering innovative solutions that exceed expectations. With a focus on quality,
creativity, and customer satisfaction, we strive to be the go-to partner for businesses looking to
harness the power of technology to achieve their goals and make a lasting impact in their
industries.</p>
<p className={`mt-6 font-bold  ${first2===false?"text-[#242323]":"text-red-600"}`}>Read More</p>
      </div>
      </div>
      {/* ui */}
      <div className='flex-shrink-0 flex-grow-0'>
       <div className={`bg-[#242323] h-[500px] py-16 px-8 rounded-xl text-white w-[354px] cursor-pointer hover:bg-blue-200 transition duration-700 ease-in-out hover:text-black `}
       onMouseEnter={()=>{
        setfirst(!first);
      }} onMouseLeave={()=>{
        setfirst(!first)
      }}>
<img src={first===false? ui:ui1} alt="" className='h-26 '/>
<p className=' text-xl font-bold  mt-3 w-[80%]'>Infrastructure &amp; DevOps</p>
<p className=' font-semibold text-sm  mt-3 w-[95%]'>In today&#39;s fast-paced digital landscape, having a reliable and efficient
infrastructure is essential for success. Our Infrastructure &amp; DevOps service is geared towards
architecting resilient infrastructure and implementing DevOps practices that enhance agility,
scalability, and reliability. From cloud migration to continuous integration and deployment, we
optimize your infrastructure to support your evolving business needs and drive innovation.</p>
<p className={`mt-6 font-bold  ${first===false?"text-[#242323]":"text-red-600"}`}>Read More</p>
      </div>
      </div>
    </div>
  </section>
  
  

  )
}
