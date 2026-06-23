import React, { useState } from 'react'

export default function ServiceComponent({developer,developer1,title,desc,color}) {
    const [first, setfirst] = useState(false)
  return (
    <div className={`bg-[#242323] h-[500px] py-16 px-8 rounded-xl text-white w-[354px] cursor-pointer hover:${color} transition duration-700 ease-in-out hover:text-black `}
       onMouseEnter={()=>{
        setfirst(!first);
      }} onMouseLeave={()=>{
        setfirst(!first)
      }}>
<img src={first===false? developer:developer1} alt={`${title} icon — Point Zero service`} loading="lazy" className='h-26 '/>
<p className=' text-xl font-bold  mt-3 w-[80%]'>{title}</p>
<p className=' font-semibold  mt-3 w-[90%]'>{desc}</p>
<p className={`mt-6 font-bold  ${first===false?"text-[#242323]":"text-red-600"}`}>Read More</p>
      </div>
  )
}
