import React from 'react'

export default function MobileProject({image,title,subtitle}) {
  return (
    <div className='flex-shrink-0 flex-grow-0 '>
          <div className='flex flex-col items-start justify-start'>
          <img src={image} alt={`${title} — mobile app case study by Point Zero`} loading="lazy" width="350" height="300" className='mt-8 h-[300px] w-[350px] object-contain '/>
         <div className=' space-y-4 -mt-4'>
         <p className='font-normal  text-white w-[300px] text-2xl'>{title}</p>
          <p className='font-normal text-sm text-white w-[350px]'>{subtitle}</p>
         </div>
          </div>
          </div>
  )
}
