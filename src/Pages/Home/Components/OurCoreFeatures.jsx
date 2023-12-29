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
    <p className='text-center text-4xl font-semibold w-[80%]'>Accounting Software</p>
    <p className='text-center  font-semibold w-[80%] mt-3'>Give a detailed description of the service being provided here.</p>
      </div>
      <div className='flex flex-col items-center justify-center w-[300px]'>
    <img src={image3} alt="" className='h-40'/>
    <p className='text-center text-4xl font-semibold w-[80%]'>HR & Payroll System</p>
    <p className='text-center  font-semibold w-[80%] mt-3'>Give a detailed description of the service being provided here.</p>
      </div>
      <div className='flex flex-col items-center justify-center w-[300px]'>
    <img src={image2} alt="" className='h-40'/>
    <p className='text-center text-4xl font-semibold w-[80%]'>Inventory Management</p>
    <p className='text-center  font-semibold w-[80%] mt-3'>Give a detailed description of the service being provided here.</p>
      </div>
</div>
     
    </section>
  )
}
