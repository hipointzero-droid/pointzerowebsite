import React from 'react'



// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import ImageSlider from './Imageslider'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png'

import image3 from '../../assets/image3.png'
import porject2 from '../../assets/project2.png'
import tunesevern from '../../assets/project/tuneseven.png'
import bidesh from '../../assets/project/bidesh.png'
import chatmandu from '../../assets/project/chatmandu.png'
import epass from '../../assets/project/epass.png'
import gigabion from '../../assets/project/Gigabion.png'
import mcq from '../../assets/project/mcq.png'
import nepaldental from '../../assets/project/Nepaldentalhome.png'
import technery from '../../assets/project/Technergy.png'
import medicity from '../../assets/project/2.png'
import bideshapp from '../../assets/project/bideshapp.png'
import gabionbox from '../../assets/project/5.png'
import chatmanduapp from '../../assets/project/6.png'
import epassapp from '../../assets/project/3.png'
import ecommerceapp from '../../assets/project/4.png'
import newsapp from '../../assets/project/1.png'

import image4 from '../../assets/image4.png'
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import OurProjects from './components/OurProjects';
import MobileProject from './components/MobileProject';

export default function Project() {
    const images=[
      {
        id: 1,
        src: image1,
        alt: "Placeholder image",
      },
      {
        id: 2,
        src:image2,
        alt: "Placeholder image",
      },
      {
        id: 3,
        src:image3,
        alt: "Placeholder image",
      },
      {
        id: 4,
        src: image4,
        alt: "Placeholder image",
      },
          
    ]
  return (
    <div className='bg-black text-white'>
        <Navbar/>
        <div className='lg:w-[98%] w-[98%] px-2 h-[450.1px]  mt-10'>
        <ImageSlider images={images}/>
  
        </div>
        <p className='font-bold text-3xl text-white mt-10 text-center'>Web Development projects</p>

        <div className='lg:px-10 px-2'>

       
        <div id='container'  className='flex gap-10  items-start lg:p-0 p-5  justify-start mt-10 overflow-x-auto'>
        <OurProjects image={porject2} subtitle="Welcome to Rozai Traders - Your Premier Destination for Quality Goods in Nepal!"
        title="Rozai.com.np" technology="React js  , Django "
        />
         <OurProjects image={tunesevern} subtitle="Our mission is to provide creators with a platform to share their art and to give everyone else the opportunity to experience it."
        title="Neptunes.app" technology="React js  , Node js "
        />
        <OurProjects image={bidesh} subtitle="At Bidesh, we envision a world where individuals working abroad have the resources to thrive and succeed in their chosen paths."
        title="Bidesh.online" technology="Tailwind CSS, React js , NextJs ,Flutter"
        />
         <OurProjects image={gigabion} subtitle="Our skilled and technical team are focused to provide GI wire production plant "
        title="Gigabion.com" technology="React js , Django "
        />
         <OurProjects image={technery} subtitle="We bring innovation to life through impactful design. Our team specializes in creating dynamic websites. "
        title="Technergy.com.np" technology="Tailwind CSS , GSAP "
        />
         <OurProjects image={nepaldental} subtitle="At Nepal Dental Home, we help you celebrate the joy of a happy smile. We started our practice in 2016 with the goal of reimagining the dental "
        title="Nepaldentalhome.com.np" technology="Tailwind CSS , NextJs "
        />
         <OurProjects image={chatmandu} subtitle="Chatmandu is an innovative communication platform that revolutionizes the way people connect and interact online.
 "
        title="Chatmandu" technology="Tailwind CSS , NextJs "
        />
         <OurProjects image={epass} subtitle="The ePass system is a digital platform designed to facilitate the electronic passes for various purposes, including travel, permits, and permissions. "
        title="Epass.com.np" technology="React , Django  "
        />
        <OurProjects image={mcq} subtitle="At UbttopikExam, we understand the importance of effective learning tools in mastering multiple-choice questions (MCQs) across various subjects. "
        title="ubttopikexam.com" technology="React , Django  "
        />
        </div>
        </div>
        <div className='lg:px-10 px-1'>
        <div id='container'  className='flex gap-10  items-start lg:p-0 p-5  justify-start mt-10 overflow-x-auto'>
          <MobileProject image={medicity} title="Medicity" subtitle="Fast money is the running Fintech app in Nepal it is a Fully functional Fintech money transaction with advance admin panel and data base , full customizable by admin ."/>
          <MobileProject image={newsapp} title="News House Nepal" subtitle="News House Nepal trusted news portal dedicated to bringing you up-to-the-minute updates on all things Nepal"/>
          <MobileProject image={ecommerceapp} title="E-Commerce" subtitle="E-commerce typically features functionalities such as product categorization, search capabilities, secure payment gateways, order tracking, and customer support."/>
          <MobileProject image={epassapp} title="E-pass" subtitle='This service is provided by Epass. To use and receive the Service (including access to this websiteand/or any mobile application, collectively "Site"), you must first accept and comply.'/>
          <MobileProject image={chatmanduapp} title="Chatmandu" subtitle='With Chatmandu, users can engage in real-time conversations with friends, family, and colleagues, regardless of their geographical location.'/>
          <MobileProject image={gabionbox} title="Gabion Box Nepal" subtitle='Gabion Box Nepal supplies gabions and geotextile fabrics related to the construction projects, especially the construction of bridges along road approaches and earthworks.'/>
          <MobileProject image={bideshapp} title="Bidesh App" subtitle='At Bidesh, we envision a world where individuals working abroad have the resources to thrive and succeed in their chosen paths. Navigating the challenges and opportunities of working in a foreign country.'/>

          </div>
        </div>
       
        <div className='md:px-20 px-2 mt-32 flex flex-col items-center justify-center'>
        <img src={image1} alt="" className='w-[450px] mt-14'/>
<p className='md:w-[70%] w-[90%] mt-8 mb-10 text-[#8A889C] font-bold'>STRATIS was contracted by multiple property owners to implement intelligent access solutions on their premises. This involved installing smart locks, developing a management app, and providing IoT integration services. To address challenges faced by property staff, STRATIS aimed to streamline the key management process and enhance the residents’ access control experience.</p>

        </div>
        <Footer/>
    </div>
  )
}
