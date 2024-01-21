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
    <div  className='flex gap-9 items-center lg:p-0 p-5 lg:justify-center justify-start mt-10 overflow-x-auto'>
     
     
      {/* developer */}
      {/* <div className='flex-shrink-0 flex-grow-0'>
      <div className={`bg-[#242323] h-[500px] py-16 px-8 rounded-xl text-white w-[354px] cursor-pointer hover:bg-orange-200 transition duration-700 ease-in-out hover:text-black `}
       onMouseEnter={()=>{
        setfirst1(!first1);
      }} onMouseLeave={()=>{
        setfirst1(!first1)
      }}>
<img src={first1===false? developer:developer1} alt="" className='h-26 '/>
<p className=' text-xl font-bold  mt-3 w-[80%]'>Hire Dedicated Developers</p>
<p className=' font-semibold  mt-3 w-[90%]'>Create your own team of developers for your software development project on short term, long term or permanent basis with guaranteed project delivery at affordable prices.</p>
<p className={`mt-6 font-bold  ${first1===false?"text-[#242323]":"text-red-600"}`}>Read More</p>
      </div>
      </div> */}
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
<p className=' font-semibold  mt-3 w-[90%]'>We build intuitive and engaging Android, iOS and cross-platform apps for businesses, consumers and enterprises that end users love and adapt to them very quickly.</p>
<p className={`mt-6 font-bold  ${first3===false?"text-[#242323]":"text-red-600"}`}>Read More</p>
      </div>
      </div>
      {/* website */}
      <div className='flex-shrink-0 flex-grow-0'>
      <div className={`bg-[#242323] h-[500px] py-16 px-8 rounded-xl text-white w-[354px] cursor-pointer hover:bg-red-200 transition duration-700 ease-in-out hover:text-black `}
       onMouseEnter={()=>{
        setfirst2(!first2);
      }} onMouseLeave={()=>{
        setfirst2(!first2)
      }}>
<img src={first2===false? website:website1} alt="" className='h-26 '/>
<p className=' text-xl font-bold  mt-3 w-[80%]'>Web Development</p>
<p className=' font-semibold  mt-3 w-[90%]'>Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.</p>
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
<p className=' text-xl font-bold  mt-3 w-[80%]'>UI/UX Design</p>
<p className=' font-semibold  mt-3 w-[90%]'>Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement.</p>
<p className={`mt-6 font-bold  ${first===false?"text-[#242323]":"text-red-600"}`}>Read More</p>
      </div>
      </div>
    </div>
  </section>
  
  

  )
}
