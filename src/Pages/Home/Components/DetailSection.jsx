import React from 'react'
import image from '../../../assets/8.png'
export default function DetailSection() {
  return (
    <section className='bg-white p-14 flex gap-6 lg:flex-row flex-col justify-evenly items-start'>
<div className='lg:w-[40%] w-[100%]'>
<h1 className='lg:text-7xl text-3xl w-[100%] font-medium'>
We innovate for better lives
     </h1>
     <p className='mt-4 font-semibold w-[80%] text-xl'>Schematiq invests in the future with our sustainability andeducation initiatives.</p>
     <img src={image} alt="" />
</div>
<div className='lg:w-[35%] w-[100%] flex-col justify-between gap-9'>
<div>
<h1 className='lg:text-3xl text-3xl w-[100%] font-bold'>
Providing education for future innovators
     </h1>
     <p className='mt-2 font-semibold w-[80%] text-xl'>Talk about your company's
CSR initiatives here.</p>
<hr className='bg-black h-[3px] mt-4'/>
</div>
<div className='mt-8'>
<h1 className='lg:text-3xl text-3xl w-[100%] font-bold'>
Reducing our carbon
footprint
     </h1>
     <p className='mt-2 font-semibold w-[80%] text-xl'>Talk about your company's
CSR initiatives here.</p>
<hr className='bg-black h-[3px] mt-4'/>
</div>
<div className='mt-8'>
<h1 className='lg:text-3xl text-3xl w-[100%] font-bold'>
Building inclusive
communities

     </h1>
     <p className='mt-2 font-semibold w-[80%] text-xl'>Talk about your company's
CSR initiatives here.</p>
<hr className='bg-black h-[3px] mt-4'/>
</div>
</div>
    </section>
  )
}
