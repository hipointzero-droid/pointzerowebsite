import React from 'react'
import image from '../../../assets/1.png'
export default function Features() {
  return (
    <section className='flex  lg:flex-row  flex-col-reverse'>
<div className='lg:w-[40%]  lg:h-[650px]'>
<img src={image} alt="" className='object-cover w-[100%] h-[100%]'/>
</div>
<div className='bg-[#0b6380] lg:w-[60%] w-[100%] pt-10 lg:pl-20 p-3 pb-5 text-white'>
<h1 className='lg:text-4xl text-2xl font-medium'>Software Development</h1>
{/* <p className='text-base font-medium mt-3'>Add a one-liner about this product or feature.</p> */}
<p className='text-sm mt-4 lg:w-[70%]'>Crafting tailored software solutions aligned with your vision, driving efficiency and innovation through precise coding.</p>
<h1 className='lg:text-4xl text-2xl font-medium mt-10'>Software Testing & QA</h1>
{/* <p className='text-base font-medium mt-3'>Add a one-liner about this product or feature.</p> */}
<p className='text-sm mt-4 lg:w-[70%]'>Ensuring impeccable software quality through rigorous testing, assuring reliability and user satisfaction with every release.</p>
<h1 className='lg:text-4xl text-2xl font-medium mt-4'>Infrastructure & DevOps</h1>
{/* <p className='text-base font-medium mt-3'>Add a one-liner about this product or feature.</p> */}
<p className='text-sm mt-4 lg:w-[70%]'>Building robust foundations and agile workflows for scalability and security while embracing continuous development methodologies.

</p>
</div>
    </section>
  )
}
