import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
  return (
    <div className='w-[100%] flex lg:flex-row gap-5 flex-col text-[#dbdbdb] bg-[#242323] justify-between p-14'>
    <div className='lg:w-[30%] w-[100%]'>
    <p className=' font-bold text-xl'>PointZero</p>
    <p className='text-4xl mt-4 font-serif'>We're giving the site a little makeover.</p>
    </div>
    <div className='lg:w-[40%] w-[100%]'>
    <p className=' font-normal text-2xl'>Come back later for our big reveal.
We promise, it'll be worth it.</p>
<p className='font-bold text-white mt-4'>In the meantime, reach us at:</p>
<p>hello@poinzero.com</p>
    </div>
    <div className='w-[10%]  flex-col gap-5 items-end justify-end'>
    <div className='flex gap-3'>
    <FacebookIcon className='cursor-pointer'/>
             <TwitterIcon className='cursor-pointer'/>
             <InstagramIcon className='cursor-pointer'/>
    </div>
    </div>
    </div>
  )
}
