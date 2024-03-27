import React from 'react'
import image from '../../../assets/1.png'
export default function Features() {
  return (
    <section className='flex  lg:flex-row  flex-col-reverse'>
<div className='lg:w-[40%]  lg:h-[750px]'>
<img src={image} alt="" className='object-cover w-[100%] h-[100%]'/>
</div>
<div className='bg-[#0b6380] lg:w-[60%] w-[100%] pt-10 lg:pl-20 p-3 pb-5 text-white'>
<h1 className='lg:text-4xl text-2xl font-medium'>Web Development</h1>
{/* <p className='text-base font-medium mt-3'>Add a one-liner about this product or feature.</p> */}
<p className='text-sm mt-4 lg:w-[70%]'>&quot;From sleek designs to seamless functionality, we bring your online
presence to life with precision and style.&quot;</p>
<h1 className='lg:text-4xl text-2xl font-medium mt-4'>App Development</h1>
{/* <p className='text-base font-medium mt-3'>Add a one-liner about this product or feature.</p> */}
<p className='text-sm mt-4 lg:w-[70%]'>&quot;Transforming ideas into intuitive mobile experiences that captivate and
engage users.&quot;</p>
<h1 className='lg:text-4xl text-2xl font-medium mt-4'>Software Development</h1>
<p className='text-sm mt-4 lg:w-[70%]'>&quot;Building robust, scalable software solutions tailored to your unique
business needs and goals.&quot;

</p>
<h1 className='lg:text-4xl text-2xl font-medium mt-4'>Software Testing &amp; QA</h1>
<p className='text-sm mt-4 lg:w-[70%]'>&quot;Guaranteeing perfection in every line of code, ensuring your software
runs flawlessly every time.&quot;

</p>
<h1 className='lg:text-4xl text-2xl font-medium mt-4'>Infrastructure &amp; DevOps:</h1>
<p className='text-sm mt-4 lg:w-[70%]'>&quot;Architecting resilient infrastructure and implementing DevOps
practices for unmatched efficiency and reliability.&quot;

</p>
<h1 className='lg:text-4xl text-2xl font-medium mt-4'>Hire Dedicated Developers</h1>
<p className='text-sm mt-4 lg:w-[70%]'>&quot;Expand your team with seasoned professionals dedicated to
bringing your projects to fruition, on time and on budget.&quot;

</p>
</div>
    </section>
  )
}
