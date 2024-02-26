import React from 'react'
import image from "../../../assets/2.png"
export default function InnovateSection() {
  return (
    <section className='bg-white lg:px-20 px-5 pt-14 pb-10  w-[100%] items-center flex lg:flex-row flex-col justify-between'>
      <div className='lg:w-[40%] w-[100%]'>
      <h1 className='lg:text-6xl text-3xl w-[100%] font-medium'>
     Innovate with ease using our all-in-one platform
     </h1>
     <p className='w-[100%] mt-10 font-medium'>
     Highlight specific services or products that are unique to
your business here. It can be your flagship product, or a
service that you've pioneered. Give it room to shine here
     </p>
     <p className='w-[100%] mt-8 font-medium'>
     Highlight specific services or products that are unique to
     your business here. It can be your flagship product, or a
service that you've pioneered. Give it room to shine here
     </p>
      </div>
     <div className='lg:w-[30%] lg:pt-0 pt-5'>
<img src={image} alt="" />
     </div>
    </section>
  )
}
