import React, { useEffect, useState } from 'react'
import TopSection from './Components/TopSection'
import InnovateSection from './Components/InnovateSection'
import Features from './Components/Features'
import OurServices from './Components/OurServices'
import PlanSection from './Components/PlanSection'
import OurCoreFeatures from './Components/OurCoreFeatures'
import DetailSection from './Components/DetailSection'
import Footer from './Components/Footer'
import Navbar from '../../components/Navbar'
import HomeTechnologies from './Components/HomeTechnologies/HomeTechnologies'
import TopBanner from './Components/TopBanner'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
export default function Home() {
  const [open, setopen] = useState(false);
  const handleClose=()=>{
setopen(false)
  }
  useEffect(() => {
   setopen(true)
  }, [])
  
  return (
    <div>
      <div className='relative'>
      {/* <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: '2%', padding: '20px', height:"603px", width:"640px"} }}>
  
  <DialogContent>
    <div className="flex flex-row items-center justify-start mt-7">
<div className='w-[50%] '>
  <div className='h-[30px] flex font-bold justify-center rounded-md  text-white items-center w-[100%] bg-gradient-to-r from-blue-500 via-red-500 to-green-500'>
    HAPPY NEW YEAR
  </div>
<p className='font-bold text-2xl mt-3'>Celebrate Nepali New Year with Incredible Offers!
</p>
</div>
    </div>
   
  </DialogContent>
 
</Dialog> */}
{/* {open==true?
<div className='absolute top-[10px] right-[27%] z-30 text-white text-7xl'>
<CloseIcon/>
</div>:<></>} */}
      </div>
   
      <TopBanner/>
      <Navbar/>
      <TopSection/>
      <InnovateSection/>
      <Features/>
      <OurServices/>
      <HomeTechnologies/>
      {/* <PlanSection/> */}
      <OurCoreFeatures/>
      <DetailSection/>
      <Footer/>
    </div>
  )
}
