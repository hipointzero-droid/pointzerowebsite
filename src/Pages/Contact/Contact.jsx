import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../Home/Components/Footer'

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <div className='  flex-col w-[100%] flex lg:gap-10 overflow-hidden pt-4 bg-black items-center justify-center'>
  <div 
  className='flex flex-col bg-black-100 p-8 rounded-2xl bg-gray-500 w-[90%]  lg:w-[50%] mb-16'
  >
  <p className='font-semibold text-2xl'>Get in touch</p>
  <h3 className='font-bold text-5xl'>Contact.</h3>
  <form action="" className='mt-12 flex flex-col gap-8'>
    <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Your Name</span>
      <input type="text" name='name'  placeholder="What's your name?"
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      
      />
    </label>
    <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Your Email</span>
      <input type="email" name='email' 
      placeholder="What's your email?"
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      
      />
    </label>
    <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Your Mobile Number</span>
      <input type="email" name='email' 
      placeholder="What's your mobile number?"
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      
      />
    </label>
    <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Brief about the project</span>
      <textarea rows="7"  name='Message' placeholder="Brief about the project"
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      
      />
    </label>
    <button type='submit' className='bg-tertiary py-3 px-8 outline-none font-bold text-white shadow-md shadow-primary rounded-xl'>
    {"Send"}
    </button>
  </form>
  </div>
 
    </div>
    <Footer/>
    </div>
  )
}
