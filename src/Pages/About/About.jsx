import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../Home/Components/Footer'
import img1 from '../../assets/about1.png'
import img2 from '../../assets/about2.png'

export default function About() {
  return (
    <div className='bg-black'>
        <Navbar/>
        <section className='text-white  flex flex-col items-center  mt-32'>
          <p className='font-light lg:text-xl text-base'> Software Development Company Since 2022</p>
            <div className='h-[0.02rem]  bg-white md:w-[28%] w-[80%] my-3'></div>
            <h1 className='md:w-[50%] w-[80%] font-bold lg:text-5xl text-xl text-center md:mt-10 mt-6'>Our Treasure Comprises Our People, Vision & Values</h1>
            <p className='font-light text-sm md:mt-10 mt-6 text-center md:w-[40%] w-[60%]'>Pointzeroo is not only a globally recognized IT company but also a family filled with talented experts that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.</p>
        </section>
        <section className='text-white  md:px-28 px-8 mt-40'>
        <div className='flex gap-6 items-start  justify-start mt-10 overflow-x-auto'>
      <div className='flex-shrink-0 flex-grow-0'>
      <div className='border-2 border-black h-[230px] rounded-3xl bg-white p-5 w-[160px] '>
          
          </div>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <div className='border-2 border-black h-[230px] rounded-3xl bg-white p-5 w-[160px] '>
          
          </div>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <div className='border-2 border-black h-[230px] rounded-3xl bg-white p-5 w-[160px] '>
          
          </div>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <div className='border-2 border-black h-[230px] rounded-3xl bg-white p-5 w-[160px] '>
          
          </div>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <div className='border-2 border-black h-[230px] rounded-3xl bg-white p-5 w-[160px] '>
          
          </div>
      </div>
      
     
      {/* Repeat the above structure for other boxes */}
    </div>
            <div className='flex lg:flex-row flex-col'>
   <div className='flex flex-col items-start  lg:w-[40%] w-[100%] mt-10'>
<p className='font-bold text-xl'>Who We Are</p>
<p className='font-thin text-sm md:w-[68%] w-[95%] mt-4'>Pointzeroo is not an entity, it’s a family that represents togetherness for over two decades of a successful journey. For us, the definition of success is to transcend innovative ideas of people to reality with the help of our tech expertise, this is what we, as a Team, want to be remembered for!</p>
<p className='font-thin text-sm md:w-[68%] w-[95%] mt-4'>The goal is to empower clients and businesses by creating new possibilities leveraging the technologies of today and tomorrow with the utmost quality, satisfaction, and transparency.</p>

   </div>
   <div className='flex flex-col items-start lg:w-[40%] w-[100%] mt-10'>
<p className='font-bold text-xl'>What We Do</p>
<p className='font-thin text-sm md:w-[68%] w-[95%] mt-4'>Our enthusiasm has led us to become a top IT company in Nepal for delivering various industry-led mobility solutions in web and mobile application development domains leveraging futuristic technologies like Internet of Things (IoT), AI-ML, AR-VR,  DevOps & Cloud computing, etc.</p>
<p className='font-thin text-sm md:w-[68%] w-[95%] mt-4'>We feel empowered with our certified tech experts and our R&D team who have always challenged themselves to help global clientele with a plethora of IT services and solutions.</p>

   </div>
            </div>
        </section>
        <section className='text-white mt-40 w-[100%] flex flex-col items-center justify-center'>
   <p className='font-bold md:text-3xl text-xl text-center'>Belief of Every Pointzeroian</p>
   <div className='flex items-center md:flex-row flex-col justify-between w-[100%] md:px-32 px-8 mt-10'>
<div className='md:w-[45%] w-[100%] flex flex-col  items-start justify-start'>
<img src={img1} alt="" className='-ml-7'/>
<p className='font-bold text-xl mt-4'>Client-centric Approach</p>
<p className='mt-4 font-thin w-[90%]'>For any business, customers are always at the center. Being a leading web and mobile app development company, our definition goes beyond our direct customers. We always start from where you are with your ideas and we think from YOUR end customers' perspectives, their pain areas and devise a solution that solves core problems to benefit your business.</p>
</div>
<div className='md:w-[45%] w-[100%] flex flex-col  items-start justify-start'>
<img src={img2} alt="" className='-ml-3'/>
<p className='font-bold text-xl mt-4'>Quality Delivered in Time</p>
<p className='mt-4 font-thin w-[90%]'>With over two decades of experience in the offshore IT software development industry, we have a great set of internal frameworks with best-in-class infrastructure that enables us to deliver solutions with superior quality, at all times. All these years, we have learned how to prevent failures and replicate success. We don't just brag about quality. We define and deliver it in time.</p>
</div>
   </div>
        </section>
        <section className='text-white mt-40 w-[100%] flex flex-col items-center justify-center'>
          <p className='md:text-2xl text-base font-normal md:w-[38%] text-center p-8'>We've helped businesses increase their revenue on an average by 90% in their first year with us!</p>
          <p className='md:mt-20 mt-10 text-5xl font-bold'>300+</p>
          <p className='md:text-2xl text-sm mt-4'>Satisfied Clients Across the Globe</p>
          <p className='md:mt-20 mt-10 text-5xl font-bold'>700+</p>
          <p className='md:text-2xl text-sm mt-4'>  Projects Delivered  Successfully</p>
          <p className='md:mt-20 mt-10 text-5xl font-bold'>100+</p>
          <p className='md:text-2xl text-sm mt-4'>  Experts Under the Same Roof</p>
        </section>
        <section className='text-white mt-40  '>
        <p className='font-bold md:text-3xl text-xl text-center'>Our Team </p>
        <div className='flex gap-6 items-start px-8  md:justify-center justify-start mt-10 overflow-x-auto'>
      <div className='flex-shrink-0 flex-grow-0'>
      <div className='border-2 border-black h-[250px] rounded-xl bg-white p-5 w-[200px] '>
          
          </div>
          <p className='font-bold text-xl mt-2'>CEO</p>
          <p className='font-semibold text-base text-[#8A889C]'>kripas khatiwada</p>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <div className='border-2 border-black h-[250px] rounded-xl bg-white p-5 w-[200px] '>
          
          </div>
          <p className='font-bold text-xl mt-2'>MD</p>
          <p className='font-semibold text-base text-[#8A889C]'>Sagun khatiwada</p>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <div className='border-2 border-black h-[250px] rounded-xl bg-white p-5 w-[200px] '>
          
          </div>
          <p className='font-bold text-xl mt-2'>Project manager</p>
          <p className='font-semibold text-base text-[#8A889C]'> kripas khatiwada</p>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <div className='border-2 border-black h-[250px] rounded-xl bg-white p-5 w-[200px] '>
          
          </div>
          <p className='font-bold text-xl mt-2'>Developer</p>
          <p className='font-semibold text-base text-[#8A889C]'>kripas khatiwada</p>
      </div>
      
     
      
     
      {/* Repeat the above structure for other boxes */}
    </div>
    <div className='md:bg-[#091348] bg-black py-10 md:px-20 px-8 mt-20 w-full flex md:flex-row flex-col md:gap-0 gap-6 items-center justify-center '>

<div className='flex gap-3 bg-[#091348] md:p-0 p-3 rounded-xl'>
<div className='h-14 w-14 bg-gray-300 rounded-full'>

</div>
<p className='w-[45%] text-sm font-light'>For any business, customers are always at the center. Being a leading </p>
</div>

<div className='flex gap-3 bg-[#091348] md:p-0 p-3 rounded-xl'>
<div className='h-14 w-14 bg-gray-300 rounded-full'>

</div>
<p className='w-[45%] text-sm font-light'>For any business, customers are always at the center. Being a leading </p>
</div>
<div className='flex gap-3 bg-[#091348] md:p-0 p-3 rounded-xl'>
<div className='h-14 w-14 bg-gray-300 rounded-full'>

</div>
<p className='w-[45%] text-sm font-light'>For any business, customers are always at the center. Being a leading </p>
</div>
        </div>
        </section>
        
<Footer/>
    </div>
  )
}
