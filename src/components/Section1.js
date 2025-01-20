import React, { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import vid from "../videos/perceptionhero.mp4"

const Section1 = () => {
  const navigate = useNavigate()
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const handleGetStarted = () => {
    navigate("/events")
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-4 ">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-oswald font-semibold text-white mb-2 shadow-text">Get Ready For</h3>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-ethnocentric font-bold text-[#8a4fe7] mb-6 shadow-text">Perception 2K25</h2>
        {/* <p className="mt-5 text-4xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
          Get Ready For<br />
          <span className="relative inline-flex sm:inline"> 
            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0">
            </span>
            <span className="relative"> Perception 2K25 </span>
          </span>
        </p> */}
        {/* <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto shadow-text">
        Perception is the Annual Tech Fest of Odisha University of Technology and Research, Bhubaneswar. This is a three day long festival for technocrats with a bunch of technical and fun filled events. This premier inter college event of our esteemed University allows students from different corners of the state to challenge, compete and show their technical abundance.
        </p> */}
        <button
          onClick={handleGetStarted}
          className="bg-white text-[#8a4fe7] font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Events
        </button>
      </div>
    </div>
  )
}

export default Section1