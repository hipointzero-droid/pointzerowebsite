import React from 'react'

export default function OurProjects({title,subtitle,technology,image}) {
  return (
    <div className='flex-shrink-0 flex-grow-0 '>
          <div className='flex flex-col items-start justify-start'>
          <img src={image} alt="" className='mt-8 h-[250px] w-[500px] object-contain '/>
         <div className=' space-y-3 mt-2'>
         <p className='font-bold text-xs text-[#9398A8]'>{title} </p>
          <p className='font-bold text-sm text-white w-[380px]'>{subtitle}</p>
          <p className='font-bold text-xs text-[#9398A8]'>{technology} </p>
         </div>
          </div>
          </div>
  )
}
