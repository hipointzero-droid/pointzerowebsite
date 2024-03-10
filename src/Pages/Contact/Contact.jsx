import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../Home/Components/Footer'
import EarthCanvas from '../../components/Earth'

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <div className='flex lg:flex-row flex-col justify-between h-full md:px-16 bg-black pt-4'>

       
        <div className='  flex-col lg:w-[56%] xl:w-[67%] w-full  flex lg:gap-10 overflow-hidden pt-4 bg-black items-center justify-center'>
  <div 
  className='flex flex-col  p-8 rounded-2xl bg-white w-[90%]  lg:w-[70%] mb-16'
  >
  <p className='font-semibold text-2xl'>Get in touch</p>
  <h3 className='font-bold text-5xl'>Contact.</h3>
  <form action="" className='mt-12 flex flex-col gap-8'>
    <label className='flex flex-col'>
      <span className='text-black font-medium mb-4'>Your Name</span>
      <input type="text" name='name'  placeholder="What's your name?"
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border font-medium'
      
      />
    </label>
    <label className='flex flex-col'>
      <span className='text-black font-medium mb-4'>Your Email</span>
      <input type="email" name='email' 
      placeholder="What's your email?"
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border font-medium'
      
      />
    </label>
    <label className='flex flex-col'>
      <span className='text-back font-medium mb-4'>Your Mobile Number</span>
      <input type="number" name='number' 
      placeholder="What's your mobile number?"
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border font-medium'
      
      />
    </label>
    <label className='flex flex-col'>
      <span className='text-back font-medium mb-4'>Brief about the project</span>
      <textarea rows="7"  name='Message' placeholder="Brief about the project"
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border font-medium'
      
      />
    </label>
    <button type='submit' className='bg-tertiary py-3 px-8 outline-none font-bold text-white bg-[#0b6380] shadow-md shadow-primary rounded-xl'>
    {"Send"}
    </button>
  </form>
  </div>
 
    </div>
    <div className='xl:flex-1 xl:w-[20%] lg:w-[40%] lg:h-[550px] w-full h-[350px] '>
    <EarthCanvas/>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
