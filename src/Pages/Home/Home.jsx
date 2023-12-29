import React from 'react'
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

export default function Home() {
  return (
    <div>
      <Navbar/>
      <TopSection/>
      <InnovateSection/>
      <Features/>
      <OurServices/>
      <HomeTechnologies/>
      <PlanSection/>
      <OurCoreFeatures/>
      <DetailSection/>
      <Footer/>
    </div>
  )
}
