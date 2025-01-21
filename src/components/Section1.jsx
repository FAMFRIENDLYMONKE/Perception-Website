import React, { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import vid from "../assets/lv_0_20250120231235.mp4";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  //   const navigate = useNavigate()
  const videoRef = useRef(null);
  const navigate=useNavigate();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  //   const handleGetStarted = () => {
  //     navigate("/events")
  //   }

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
        <h3 className="text-xl sm:text-2xl md:text-3xl font-oswald font-semibold text-white mb-2 shadow-text">
          Get Ready For
        </h3>
        <div className="wrapper w-full">
          <svg
            className="mx-auto"
            viewBox="0 0 800 200"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Perception 2K25"
          >
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              className=" text-5xl lg:text-6xl font-bold"
            >
              Perception 2K25
            </text>
          </svg>
        </div>

        <button
          onClick={()=>navigate("/events")}
          className="bg-white text-[#8a4fe7] font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-violet-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Events
        </button>
      </div>
    </div>
  );
};

export default Section1;
