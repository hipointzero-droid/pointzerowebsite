import React from 'react'
import Navbar from '../../components/Navbar'
import image1 from '../../assets/image 5.png';
import image2 from '../../assets/image 6.png'

import image3 from '../../assets/image 7.png'
import image4 from '../../assets/image 4.png'
import image5 from '../../assets/image 8.png'
import image6 from '../../assets/Capture 1.png'
import image7 from '../../assets/Capture2 1.png'
import image8 from '../../assets/image 9.png'
import image9 from '../../assets/image 10.png'
import Footer from '../Home/Components/Footer';

export default function Services() {
  return (
    <div className='bg-black'>
        <Navbar/>
        <div className='text-white flex flex-col items-center justify-center mt-12  w-[100%] '>
        <h1 className='font-bold lg:text-6xl text-xl text-center md:mt-10 mt-6'>Hire Specialised Web & Mobile <br /> Software Development Company
       

</h1>
<p className='font-light text-sm md:mt-16 mt-6 mb-10 md:px-0 px-2 text-center md:w-[550px] w-full'>Since 2021, we have been a reliable offshore partner for software application development. We provide a comprehensive spectrum of IT services and  solutions worldwide, including mobile and desktop app development.</p>
        </div>
        <div className='flex flex-wrap md:px-20 px-3 mt-40 text-white justify-evenly items-center'>
    <div>
      <p className='font-bold text-4xl'>Mobile Apps Development</p>
      <p className='font-light text-sm  mt-6 mb-10 text-start md:w-[550px] '>Our specialty is developing powerful mobile applications for all sizes of businesses. Our top-notch mobile app development services are intended to produce outcomes. We have a reputation for leveraging cutting edge technology to create apps for iOS, Android, hybrid, and cross-platform platforms. Top mobile app development firm pointzeroo has a track record of creating captivating mobile applications.</p>
<div className='flex gap-4 my-3 w-[50%] md:mx-0 mx-3 justify-evenly '>
<img src={image1} alt="" className='w-[54px] '/>
<img src={image2} alt="" className='w-[54px] '/>
<img src={image3} alt="" className='w-[54px] '/>
</div>
<div className='flex justify-between mt-10'>
<div>
  <ul className='text-white marker:text-white list-outside list-disc mt-8'>
    <li className='font-bold text-sm'>Native iOS App Development</li>
    <li className='font-bold text-sm'>Native Android App Development</li>
    <li className='font-bold text-sm'>Cross-platform App Development</li>
  </ul>
</div>
<div>
  <ul className='text-white marker:text-white list-outside list-disc mt-8'>
    <li className='font-bold text-sm'>Native iOS App Development</li>
    <li className='font-bold text-sm'>Native Android App Development</li>
    <li className='font-bold text-sm'>Cross-platform App Development</li>
  </ul>
</div>
</div>
<div className='flex items-start justify-start'>
<div className='w-[250px] font-bold h-[40px] rounded-xl text-base mt-10 bg-[#0b6380] flex items-center justify-center text-white'>
Mobile Apps Developers
</div>
</div>
    </div>
    <div>
      <img src={image4} alt="" className='h-[400px] md:mt-0 mt-4'/>
    </div>
        </div>
        <div className='flex flex-wrap-reverse md:px-20 px-3 mt-40 text-white justify-evenly items-center'>
        <div>
      <img src={image5} alt="" className='h-[400px] md:mt-0 mt-4'/>
    </div>
    <div>
      <p className='font-bold text-4xl'>Web Development</p>
      <p className='font-light text-sm  mt-6 mb-10 text-start md:w-[550px] '>We are a top online and application development company. Our certified developers are masters at building unique online solutions with the newest web technology. pointzeroo can assist you if you require a website to showcase your company, a central information hub for your enterprise, or robust backend technology to enhance your apps and Internet of Things devices. To suit your demands, we provide a large selection of web solutions and frameworks.</p>
<div className='flex gap-4 my-3 w-[50%] md:mx-0 mx-3 justify-evenly '>
<img src={image6} alt="" className=' '/>

</div>
<div className='flex justify-between md:w-[80%]'>
<div>
  <ul className='text-white marker:text-white list-outside list-disc mt-8'>
    <li className='font-bold text-sm'>Custom Website Development</li>
    <li className='font-bold text-sm'>Web Application Development</li>
    <li className='font-bold text-sm'>eCommerce Store Development</li>
    <li className='font-bold text-sm'>Custom CRM/ERP Software Apps</li>

  </ul>
</div>
<div>
  <ul className='text-white marker:text-white list-outside list-disc mt-8'>
    <li className='font-bold text-sm'>Full-Stack Development</li>
    <li className='font-bold text-sm'>Responsive Web Apps</li>
    <li className='font-bold text-sm'>Progressive Web Apps</li>
    <li className='font-bold text-sm'>Bespoke CMS Developm</li>
  </ul>
</div>
</div>
<div className='flex items-center justify-start'>
<div className='w-[250px] font-bold h-[40px] rounded-xl text-base mt-10 bg-[#0b6380] flex items-center justify-center text-white'>
Hire Web Developers
</div>
</div>
    </div>
    
        </div>
        <div className='flex flex-wrap md:px-20 px-3 mt-40 text-white justify-evenly items-center'>
    <div>
      <p className='font-bold text-4xl'>UI/UX Design Service</p>
      <p className='font-light text-sm  mt-6 mb-10 text-start md:w-[550px] '>We are a top online and application development company. Our certified developers are masters at building unique online solutions with the newest web technology. pointzeroo can assist you if you require a website to showcase your company, a central information hub for your enterprise, or robust backend technology to enhance your apps and Internet of Things devices. To suit your demands, we provide a large selection of web solutions and frameworks.</p>

<div className='flex gap-4 my-3 w-[50%] md:mx-0 mx-3 justify-evenly '>
<img src={image7} alt="" className=' '/>

</div>

<div className='flex items-center justify-start'>
<div className='w-[250px] font-bold h-[40px] rounded-xl text-base mt-10 bg-[#0b6380] flex items-center justify-center text-white'>
Hire UI/UX Designers
</div>
</div>
    </div>
    <div>
      <img src={image8} alt="" className='h-[400px] md:mt-0 mt-4'/>
    </div>
        </div>
        <div className='flex flex-wrap-reverse md:px-20 px-3 mt-40 text-white justify-evenly items-center mb-10'>
        <div>
      <img src={image9} alt="" className='h-[400px] md:mt-0 mt-4'/>
    </div>
    <div>
      <p className='font-bold text-4xl'>Quality Assurance (QA)</p>
      <p className='font-light text-sm  mt-6 mb-10 text-start md:w-[550px] '>Quality Assurance (QA) and software testing services are fundamental elements of our ecosystem. At pointzeroo, our proficient testers contribute to expedited releases without compromising quality. We conduct both manual and automated testing for various products and services, encompassing Functional, GUI, Usability, Security, Database testing, Cross-platform, Cross-browser, Accessibility, and more. Our QA specialists leverage DevOps tools and automated build testing methods to accelerate the delivery process.</p>

<div className='flex justify-between md:w-[80%]'>
<div>
  <ul className='text-white marker:text-white list-outside list-disc mt-8'>
    <li className='font-bold text-sm'>QA Documentation</li>
    <li className='font-bold text-sm'>Manual QA Testing</li>
    <li className='font-bold text-sm'>Web Testing Automation</li>
    <li className='font-bold text-sm'>Mobile App Testing</li>

  </ul>
</div>
<div>
  <ul className='text-white marker:text-white list-outside list-disc mt-8'>
    <li className='font-bold text-sm'>Mobile Testing Automation</li>
    <li className='font-bold text-sm'>Performance Testing</li>
    <li className='font-bold text-sm'>API Testing Automation</li>
    <li className='font-bold text-sm'>Expert QA Consultation</li>
  </ul>
</div>
</div>
<div className='flex items-center justify-start'>
<div className='w-[250px] font-bold h-[40px] rounded-xl text-base mt-10 bg-[#0b6380] flex items-center justify-center text-white'>
Hire QA Experts
</div>
</div>
    </div>
    
        </div>
        <Footer/>
    </div>
  )
}
