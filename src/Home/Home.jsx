import React from 'react'
import OurTeam from '../components/OurTeam'
import About from '../components/About'
import Section1 from '../components/Section1'
import SponserMarque from '../components/SponserMarque'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        <Section1/>
        <SponserMarque/>
        <About/>
        <OurTeam/>
    </div>
  )
}

export default Home