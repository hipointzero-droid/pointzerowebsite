import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../Home/Components/Footer'
import img1 from '../../assets/about1.png'
import img2 from '../../assets/about2.png'
import SmoothCounter from './SmoothCount'
import rectang1 from '../../assets/about/Rectangle 7.png'
import rectang2 from '../../assets/about/rectangle.png'
import rectang3 from '../../assets/about/Rectangle 5.png'
import rectang4 from '../../assets/about/Rectangle 3.png'
import rectang5 from '../../assets/about/Rectangle 6.png'
import kripas from '../../assets/about/kirpas.png'
import sagun from '../../assets/about/sagun.png'
import yunish from '../../assets/about/yunish.png'

export default function About() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount3] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);

  const startCounting = () => {
    let currentCount = 0;
    let currentCount1 = 0;
    let currentCount2= 0;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        currentCount = prevCount + 1;
        if (currentCount === 200) {
          clearInterval(interval);
        }
        return currentCount;
      });
      setCount1((prevCount) => {
        currentCount1 = prevCount + 1;
        if (currentCount1 === 700) {
          clearInterval(interval);
        }
        return currentCount1;
      });
      setCount3((prevCount) => {
        currentCount2 = prevCount + 1;
        if (currentCount2 === 100) {
          clearInterval(interval);
        }
        return currentCount2;
      });
    }, 5); // Adjust the interval as needed
  };
  return (
    <div className='bg-black'>
        <Navbar/>
        <section className='text-white  flex flex-col items-center  mt-32'>
          <p className='font-light lg:text-xl text-base'> Software Development Company Since 2022</p>
            <div className='h-[0.02rem]  bg-white md:w-[28%] w-[80%] my-3'></div>
            <h1 className='md:w-[70%] w-[80%] font-bold lg:text-7xl text-xl text-center md:mt-10 mt-6'>Our Treasure Comprises Our People, Vision & Values</h1>
            <p className='font-light text-sm md:mt-10 mt-6 text-center md:w-[70%] w-[60%]'>Point Zero is more than just a software development company; we are the architects of digital
transformation. With a relentless commitment to innovation and excellence, we specialize in
crafting tailored solutions that empower businesses to thrive in the digital age. Our team of
dedicated professionals brings together expertise from diverse backgrounds, united by a shared
passion for pushing boundaries and delivering results that exceed expectations. At Point Zero,
we believe that success is built on a foundation of collaboration and transparency. We work
closely with our clients, listening to their needs, understanding their challenges, and co-creating
solutions that drive tangible impact and value. Whether it&#39;s web development, app development,
software solutions, or beyond, Point Zero is your trusted partner on the journey to digital
success.</p>
        </section>
        <section className='text-white  md:px-28 px-8 mt-40'>
        <div className='flex gap-6 lg:items-center items-start justify-start  lg:justify-center mt-10 overflow-x-auto'>
      <div className='flex-shrink-0 flex-grow-0'>
      <img src={rectang1} alt="" className='object-fill border-2 border-black h-[160px] rounded-3xl   w-[160px]'/>
      
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <img src={rectang2} alt="" className='object-fill border-2 border-black h-[160px] rounded-3xl   w-[160px]'/>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <img src={rectang3} alt="" className='object-fill border-2 border-black h-[160px] rounded-3xl   w-[160px]'/>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <img src={rectang4} alt="" className='object-fill border-2 border-black h-[160px] rounded-3xl   w-[160px]'/>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <img src={rectang5} alt="" className='object-fill border-2 border-black h-[160px] rounded-3xl   w-[160px]'/>
      </div>
      
     
      {/* Repeat the above structure for other boxes */}
    </div>
            <div className='flex lg:flex-row flex-col lg:items-center lg:justify-center items-center w-[100%] '>
   <div className='flex flex-col items-start  lg:w-[450px] w-[100%] mt-10'>
<p className='font-bold text-xl'>Who We Are</p>
<p className='font-thin text-sm md:w-[68%] w-[95%] mt-4'>Point Zero is a forward-thinking software development company with a passion for innovation
and excellence. We pride ourselves on our dynamic team of professionals who bring diverse

expertise and a shared commitment to pushing the boundaries of what&#39;s possible in the digital
realm. At Point Zero, creativity, collaboration, and integrity are at the core of everything we do.</p>
{/* <p className='font-thin text-sm md:w-[68%] w-[95%] mt-4'>The goal is to empower clients and businesses by creating new possibilities leveraging the technologies of today and tomorrow with the utmost quality, satisfaction, and transparency.</p> */}

   </div>
   <div className='flex flex-col items-start lg:w-[450px] w-[100%] mt-10'>
<p className='font-bold text-xl'>What We Do</p>
<p className='font-thin text-sm md:w-[68%] w-[95%] mt-4'>At Point Zero, we specialize in a range of digital services aimed at empowering businesses to
thrive in today&#39;s competitive landscape. From captivating web development to groundbreaking
app solutions, our services encompass everything needed to establish and elevate your digital
presence. We offer tailored software solutions, cutting-edge technology integration, and expert
consultation to ensure that our clients achieve their goals with confidence.</p>
{/* <p className='font-thin text-sm md:w-[68%] w-[95%] mt-4'>We feel empowered with our certified tech experts and our R&D team who have always challenged themselves to help global clientele with a plethora of IT services and solutions.</p> */}

   </div>
            </div>
        </section>
        <section className='text-white mt-40 w-[100%] flex flex-col items-center justify-center'>
   <p className='font-bold md:text-3xl text-xl text-center'>Belief of Every Pointzeroian</p>
   <div className='flex items-center md:flex-row flex-col justify-between w-[100%] md:px-32 px-8 mt-10'>
<div className='md:w-[45%] w-[100%] flex flex-col  items-start justify-start'>
<img src={img1} alt="" className='-ml-7'/>
<p className='font-bold text-xl mt-4'>Client-centric Approach</p>
<p className='mt-4 font-thin w-[90%]'>Our approach is rooted in collaboration and transparency. We believe in working closely with
our clients to understand their unique needs, challenges, and goals. By fostering open
communication and a deep understanding of our clients&#39; businesses, we are able to develop
customized solutions that address their specific requirements and deliver measurable results. At
Point Zero, we see ourselves as partners in our clients&#39; success, dedicated to providing
unparalleled support and expertise every step of the way.</p>
</div>
<div className='md:w-[45%] w-[100%] flex flex-col  items-start justify-start'>
<img src={img2} alt="" className='-ml-3'/>
<p className='font-bold text-xl mt-4'>Quality Delivered in Time</p>
<p className='mt-4 font-thin w-[90%]'>Our mission at Point Zero is simple: to empower businesses with the tools and technologies
they need to thrive in the digital age. We are driven by a relentless pursuit of excellence and a
commitment to delivering innovative solutions that exceed expectations. With a focus on quality,
creativity, and customer satisfaction, we strive to be the go-to partner for businesses looking to
harness the power of technology to achieve their goals and make a lasting impact in their
industries.</p>
</div>
   </div>
        </section>
        <section className='text-white mt-40 w-[100%] flex flex-col items-center justify-center'>
          <p className='md:text-2xl text-base font-normal md:w-[38%] text-center p-8'>We've helped businesses increase their revenue on an average by 90% in their first year with us!</p>
          <SmoothCounter endValue={200} startValue={0}/>
                    <p className='md:text-2xl text-sm mt-4'>Satisfied Clients Across the Globe</p>
                    <SmoothCounter endValue={700} startValue={0}/>
          <p className='md:text-2xl text-sm mt-4'>  Projects Delivered  Successfully</p>
         < SmoothCounter endValue={100} startValue={0}/>
          <p className='md:text-2xl text-sm mt-4'>  Experts Under the Same Roof</p>
        </section>
        <section className='text-white mt-40  '>
        <p className='font-bold md:text-3xl text-xl text-center'>Our Team </p>
        <div className='flex gap-6 items-start px-8  md:justify-center justify-start mt-10 overflow-x-auto'>
      <div className='flex-shrink-0 flex-grow-0'>
        <img src={kripas} alt="" className='border-2 border-black h-[250px] rounded-xl bg-white w-[200px] '/>
      
          <p className='font-bold text-xl mt-2'>CEO</p>
          <p className='font-semibold text-base text-[#8A889C]'>kripas khatiwada</p>
      </div>
      <div className='flex-shrink-0 flex-grow-0'>
      <img src={sagun} alt="" className='border-2 border-black h-[250px] rounded-xl bg-white w-[200px] '/>
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
      <img src={yunish} alt="" className='border-2 border-black h-[250px] rounded-xl bg-white w-[200px] '/>
          <p className='font-bold text-xl mt-2'>Full Stack Developer</p>
          <p className='font-semibold text-base text-[#8A889C]'>Yunish Pandit</p>
      </div>
      
     
      
     
      {/* Repeat the above structure for other boxes */}
    </div>
    {/* <div className='md:bg-[#0b6380] bg-black py-10 mb-8 md:px-20 px-8 mt-20 w-full flex md:flex-row flex-col md:gap-0 gap-6 items-center justify-center '>

<div className='flex gap-3 bg-[#0b6380] md:p-0 p-3 rounded-xl'>
<div className='h-14 w-14 bg-gray-300 rounded-full'>

</div>
<p className='w-[45%] text-sm font-light'>For any business, customers are always at the center. Being a leading </p>
</div>

<div className='flex gap-3 bg-[#0b6380] md:p-0 p-3 rounded-xl'>
<div className='h-14 w-14 bg-gray-300 rounded-full'>

</div>
<p className='w-[45%] text-sm font-light'>For any business, customers are always at the center. Being a leading </p>
</div>
<div className='flex gap-3 bg-[#0b6380] md:p-0 p-3 rounded-xl'>
<div className='h-14 w-14 bg-gray-300 rounded-full'>

</div>
<p className='w-[45%] text-sm font-light'>For any business, customers are always at the center. Being a leading </p>
</div>
        </div> */}
        <div className='mb-20'>

        </div>
        </section>
        
<Footer/>
    </div>
  )
}
