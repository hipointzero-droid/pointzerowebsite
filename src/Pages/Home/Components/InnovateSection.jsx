import React from 'react'
import image from "../../../assets/2.png"
export default function InnovateSection() {
  return (
    <section className='bg-white lg:px-20 px-5 pt-14 pb-10  w-[100%] items-center flex lg:flex-row flex-col justify-between'>
      <div className='lg:w-[40%] w-[100%]'>
      <h1 className='lg:text-6xl text-3xl w-[100%] font-medium'>
      Ignite Your Digital Journey with Point Zero!
     </h1>
     <p className='w-[100%] mt-10 font-medium'>
     With Point Zero by your side, the possibilities are endless. Whether you need software testing
and QA services to ensure flawless performance or DevOps solutions to streamline your
operations, we&#39;ve got you covered. Let&#39;s ignite your digital journey together and unlock the full
potential of your business!
     </p>
     <p className='w-[100%] mt-8 font-medium'>
     We&#39;re not just another software development company – we&#39;re your partners in innovation,
dedicated to propelling your business forward in the digital age. From captivating web designs
to groundbreaking mobile apps, our team of experts is here to turn your ideas into reality.
     </p>
      </div>
     <div className='lg:w-[30%] lg:pt-0 pt-5'>
<img src={image} alt="" />
     </div>
    </section>
  )
}
