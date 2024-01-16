import React, { useState } from 'react'

import developer from '../../../assets/developer.png'
import developer1 from '../../../assets/developer1.png'
import ServiceComponent from '../../../components/ServiceComponent';
import website from '../../../assets/website.png';
import website1 from '../../../assets/website1.png';

export default function OurServices() {
  const [first, setfirst] = useState(false)
    const items=[1,2,3,4,5];
  return (
    <section className='bg-black text-white lg:p-14'>
    <h1 className='text-center mt-3 lg:text-5xl text-xl font-semibold'>
      Our Core Services
    </h1>
    <div className='flex gap-4 items-center lg:justify-center justify-start mt-7  overflow-x-auto p-4'>
      <ServiceComponent developer={developer} developer1={developer1} color="bg-blue-200" desc="Create your own team of developers for your software development project on short term, long term or permanent basis with guaranteed project delivery at affordable prices."
      title="Hire Dedicated Developers"
      />
      <ServiceComponent developer={website} developer1={website1} color="bg-orange-100" desc="We build intuitive and engaging Android, iOS and cross-platform apps for businesses, consumers and enterprises that end users love and adapt to them very quickly."
      title="Mobile Apps"
      />
      {/* {items.map((e, i) => (
        <div key={i} className='flex flex-col items-center p-4 min-w-[200px]'>
          <img src={i === 0 ? image1 : i === 2 ? image2 : i === 3 ? image3 : image} alt="" className='lg:w-48 lg:h-60 w-60' />
          <p className='font-bold text-center'>Inventory Management</p>
        </div>
      ))} */}
    </div>
  </section>
  
  

//     <section className='bg-[#242323] text-white lg:p-14 '>
//      <h1 className='text-center mt-3 lg:text-5xl text-xl font-semibold '>Streamline your processes <br /> with Schematiq solutions</h1>
//      <div className='flex gap-4 items-center justify-center mt-7 overflow-x-auto '>
//      {items.map((e,i)=>{
//     return <div className='flex flex-col items-center p-4'>
//     <img src={i===0?image1:i===2?image2:i===3?image3: image} alt="" className='lg:w-48 lg:h-60 w-60'/>
//     <p className='font-bold items-center lg:w-[50%] text-center'>Inventory Management
// </p>
//     </div>
// })} 
//      </div>

//     </section>
  )
}
