import React, { useState } from 'react'
import  { Countdown } from './TimerComponent';
import { useNavigate } from 'react-router-dom';
export default function TopBanner() {
  const navigate=useNavigate();
    const THREE_DAYS_IN_MS = 2 * 15 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
 
  return (
    <div className='w-full md:h-12 h-16 lg:px-20 flex justify-between flex-row items-center px-1 bg-gradient-to-r from-blue-500 via-red-500 to-green-500'>
<div className='flex md:flex-row flex-col  gap-1 justify-between md:w-[80%] '>
<p className='font-normal text-white flex lg:text-xs xl:text-base'><span className='font-bold'>Happy new year 2081:</span> <span className='md:inline hidden'>Get 30% off on every service we offer for a limited time</span></p>

<Countdown/>
</div>
     <div className='font-bold text-white h-[30px] flex text-center justify-center items-center text-sm w-[100px] cursor-pointer rounded-lg bg-[#0b6380]' onClick={()=>{
navigate("/contact")
     }}>
        Hire Now
     </div>
    </div>
  )
}
