import React from 'react'
import image1 from '../../../assets/6.png';
import image3 from '../../../assets/7.png'
import image2 from '../../../assets/9.png'

export default function OurCoreFeatures() {
  return (
    <section className='bg-[#242323] text-white p-14 '>
             <h1 className='text-center mt-3 lg:text-5xl text-xl font-semibold '>Our Core Features</h1>
<div className='flex gap-6 items-center justify-center lg:mt-20 mt-10 flex-wrap'>
<div className='flex flex-col items-center justify-center w-[300px]'>
    <img src={image1} alt="" className='h-40'/>
    <p className='text-center text-4xl font-semibold w-[80%]'>Tailored Solutions</p>
    <p className='text-center  font-semibold w-[90%] mt-3'>Crafting bespoke digital solutions precisely tailored to your unique
business needs and objectives.</p>
      </div>
      <div className='flex flex-col items-center justify-center w-[300px]'>
    <img src={image3} alt="" className='h-40'/>
    <p className='text-center text-4xl font-semibold w-[80%]'>Expertise and Innovation</p>
    <p className='text-center  font-semibold w-[90%] mt-3'>Harnessing cutting-edge technologies and a passion for
innovation to deliver groundbreaking digital experiences.</p>
      </div>
      <div className='flex flex-col items-center justify-center w-[300px]'>
    <img src={image2} alt="" className='h-40'/>
    <p className='text-center text-4xl font-semibold w-[80%]'>Collaborative Partnership</p>
    <p className='text-center  font-semibold w-[90%] mt-3'>Fostering transparent and collaborative relationships, we work
hand-in-hand with our clients to transform visions into reality.</p>
      </div>
</div>
     
    </section>
  )
}
