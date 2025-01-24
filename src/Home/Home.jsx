import React from 'react'
import OurTeam from '../components/OurTeam'
import About from '../components/About'
import Section1 from '../components/Section1'
import SponserMarque from '../components/SponserMarque'
import Navbar from '../components/Navbar'
import Merchandise from '../components/Merchandise'
import StatisticMarque from '../components/StatisticMarque'
// import Drawer from '../components/drawer'
import Techsec from '../components/Techsec'

function Home() {
  return (
    <div>
        {/* <Drawer/> */}
        <Navbar/>
        <Section1/>
        <SponserMarque/>
        <About/>
        <Techsec/>
        <br />
        <StatisticMarque/>
        <Merchandise/>
        <OurTeam/>
    </div>
  )
}


export default Home