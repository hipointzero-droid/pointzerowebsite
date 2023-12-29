import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../Home/Components/Footer'

export default function About() {
  return (
    <div className='bg-black'>
        <Navbar/>
        <div className='text-white h-screen flex  justify-center'>
        <h1 className='font-semibold lg:text-7xl md:text-5xl text-3xl mt-8'>About</h1>

        </div>
<Footer/>
    </div>
  )
}
