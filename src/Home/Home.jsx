import React from 'react'
import OurTeam from '../components/OurTeam'
import About from '../components/About'
import Section1 from '../components/Section1'
import SponserMarque from '../components/SponserMarque'
import Navbar from '../components/Navbar'
import Merchandise from '../components/Merchandise'
import StatisticMarque from '../components/StatisticMarque'
import Techsec from '../components/Techsec'
import DeputyTech from '../components/DeputyTech'
import { SpeedInsights } from "@vercel/speed-insights/react"

function Home() {
  return (
    <div>
        {/* <Drawer/> */}
        <SpeedInsights />
        <Navbar/>
        <Section1/>
        <SponserMarque/>
        <About/>
        <Techsec/>
        <DeputyTech/>
        <br />
        <StatisticMarque/>
        <Merchandise/>
        <OurTeam/>
    </div>
  )
}


export default Home