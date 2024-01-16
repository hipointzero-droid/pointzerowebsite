import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import backimage from "../../../assets/3.1.png";
import frontimage from "../../../assets/10.png";
import { useNavigate } from 'react-router-dom';
export default function TopSection() {
  const navigate=useNavigate();
  return (
    <section className=' bg-black lg:px-20 px-5 lg:pt-14 pt-5 pb-7 flex justify-between'>
        <div className='lg:w-[40%] w-[100%] text-white'>
        {/* <p className=' font-bold text-xl'>PointZero</p> */}
        <h1 className='font-semibold lg:text-7xl md:text-5xl text-3xl mt-8'>Your Trusted </h1>
        <h1 className='font-semibold lg:text-7xl md:text-5xl text-3xl lg:-mt-2 -mt-1'>Development</h1>
        <h1 className='font-semibold lg:text-7xl md:text-5xl text-3xl lg:-mt-2 -mt-1'>Partner</h1>
        <p className='mt-10 font-serif'>Point Zero understands that the web/app is all about user experience, and that's why we're a team of designers, developers, and technologists who love what we do. We believe that a successful and happy customer is our most important asset.</p>
        <button className=' rounded-3xl lg:block hidden text-white bg-[#000838]  p-2  font-bold  px-7 mt-10'
        onClick={()=>{
          navigate("/contact")
        }}
        >CONTACT US</button>
        <div className='flex gap-5 items-center mt-14'>
            <p className='font-semibold text-sm'>GET SOCIAL</p>
            <div className='h-[1px] w-20 bg-white'>
          
            </div>
            <div className='flex gap-2 text-yellow-300'>
             <FacebookIcon className='cursor-pointer'/>
             <TwitterIcon className='cursor-pointer'/>
             <InstagramIcon className='cursor-pointer'/>

           </div>
        </div>
        </div>
           <div className=' lg:flex hidden items-center justify-center w-[50%] '>
            <img src={backimage} alt="" className='relative h-[500px]'/>

            <img src={frontimage} alt="" className='absolute top-[390px] left-[70%] transform -translate-x-1/2 -translate-y-1/2 h-80 rounded-full'/>
           </div>

    </section>
  )
}
