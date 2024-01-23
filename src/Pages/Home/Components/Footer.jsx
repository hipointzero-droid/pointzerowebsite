import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Mail, Phone } from '@mui/icons-material';
import buttons from '../../../assets/buttons.png'
export default function Footer() {
  return (
    <div className='flex flex-col w-[100%] pt-10 lg:px-32 px-3 py-5 bg-black '>
    <div className='flex lg:flex-row gap-5 flex-col text-[#dbdbdb]  justify-between '>
    <div className='flex flex-col'>
<div className='flex flex-col'>
<p className='font-bold text-xl text-white'>Get Free Estimation</p>
<div className='flex gap-1 mt-2'>
<Mail className='text-white text-sm'/>
<p className='font-xs text-gray-400'>hi.pointzero@gmail.com</p>
</div>
</div>
<div className='flex flex-col mt-10'>
<p className='font-bold text-xl text-white'>Contact</p>
<div className='flex gap-1 mt-2'>
<Phone className='text-white text-sm'/>
<p className='font-xs text-gray-400'>+977 986-0486269</p>
</div>
</div>
    </div>
    <div className='flex flex-col space-y-2'>
    <p className='font-bold text-xl text-white'>Services </p>
    <p className='font-light text-sm '>Android App Development</p>
    <p className='font-light text-sm '>Native App Development</p>
    <p className='font-light text-sm '>Web Development</p>
    <p className='font-light text-sm '>UI/UX Design Service</p>
    <p className='font-light text-sm '>Quality Assurance (QA)</p>
    </div>
    <div className='flex flex-col space-y-2'>
    <p className='font-bold text-xl text-white'>Hire Developer Team </p>
    <p className='font-light text-sm '>Mobile Apps Developers</p>
    <p className='font-light text-sm '>Web Developers</p>
    <p className='font-light text-sm '>Hire UI/UX Designers</p>
    <p className='font-light text-sm '>Hire QA Experts</p>
 
    </div>
    </div>
    <div className='h-[2px] bg-white w-full my-6'></div>
    <div className='flex lg:flex-row flex-col justify-between items-center'>
<p className='font-thin text-white text-xs lg:w-[50%] w-[100%]'>(C) 2024, IndiaNIC Infotech Limited. Protected by Google reCAPTCHA. Read our Terms and Policies. 
IndiaNIC logo, brandmark and name are a registered trademark of IndiaNIC Infotech Limited.</p>
<img src={buttons} alt="" className='w-[30%]'/>
    </div>
    </div>
  )
}
