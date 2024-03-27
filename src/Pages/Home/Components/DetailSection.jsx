import React from 'react'
import image from '../../../assets/8.png'
export default function DetailSection() {
  return (
    <section className='bg-white p-14 flex gap-6 lg:flex-row flex-col justify-evenly items-start'>
<div className='lg:w-[40%] w-[100%]'>
<h1 className='lg:text-7xl text-3xl w-[100%] font-medium'>
Powering Your Sales Success
     </h1>
     <p className='mt-4 font-semibold w-[80%] text-xl'>with Point Zero&#39;s Impactful Solutions</p>
     <img src={image} alt="" />
</div>
<div className='lg:w-[35%] w-[100%] flex-col justify-between gap-9'>
<div>
<h1 className='lg:text-3xl text-3xl w-[100%] font-bold'>
Tailored Solutions
     </h1>
     <p className='mt-2 font-semibold w-[100%] text-lg'>Customized strategies designed to skyrocket your sales, meticulously
crafted to fit your unique business needs and accelerate your revenue growth.</p>
<hr className='bg-black h-[3px] mt-4'/>
</div>
<div className='mt-8'>
<h1 className='lg:text-3xl text-3xl w-[100%] font-bold'>
Expertise and Innovation
     </h1>
     <p className='mt-2 font-semibold w-[100%] text-lg'>Innovative approaches fueled by cutting-edge technology and a
wealth of industry expertise, driving your sales performance to unprecedented heights.</p>
<hr className='bg-black h-[3px] mt-4'/>
</div>
<div className='mt-8'>
<h1 className='lg:text-3xl text-3xl w-[100%] font-bold'>
Collaborative Partnership

     </h1>
     <p className='mt-2 font-semibold w-[100%] text-lg'>Together, we co-create winning sales strategies, fostering a
collaborative partnership that ensures your objectives are not just met, but exceeded, every step
of the way.</p>
<hr className='bg-black h-[3px] mt-4'/>
</div>
</div>
    </section>
  )
}
