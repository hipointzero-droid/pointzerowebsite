import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className='bg-black h-screen w-screen text-[#dbdbdb] flex flex-col items-center justify-center'>
     <h1 className='md:text-8xl text-5xl text-center font-bold'>Pg <br /> Not Found</h1>
     <p className='md:text-2xl text-xl text-center mt-32'>THE PAGE SEEMS TO BE MISSING. <br /> PERHAPS IT'S TIME TO GO BACK <Link to="/"> <span className='underline cursor-pointer'>HOME</span></Link>?</p>
    </section>
  )
}
