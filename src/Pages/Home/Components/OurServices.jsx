import React from 'react'
import image from '../../../assets/12.png'
import image1 from '../../../assets/11.png'
import image2 from '../../../assets/13.png'
import image3 from '../../../assets/14.png'
import image4 from '../../../assets/13.png'

export default function OurServices() {
    const items=[1,2,3,4,5];
  return (
    <section className='bg-[#242323] text-white lg:p-14'>
    <h1 className='text-center mt-3 lg:text-5xl text-xl font-semibold'>
      Streamline your processes <br /> with Schematiq solutions
    </h1>
    <div className='flex gap-4 items-center lg:justify-center justify-start mt-7 overflow-x-auto p-4'>
      {items.map((e, i) => (
        <div key={i} className='flex flex-col items-center p-4 min-w-[200px]'>
          <img src={i === 0 ? image1 : i === 2 ? image2 : i === 3 ? image3 : image} alt="" className='lg:w-48 lg:h-60 w-60' />
          <p className='font-bold text-center'>Inventory Management</p>
        </div>
      ))}
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
