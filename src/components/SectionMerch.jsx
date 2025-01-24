import React, { useRef, useEffect } from "react";
import vid from "../assets/Absolute_Cinema.mp4";
import { useNavigate } from "react-router-dom";

const SectionMerch = () => {
  const videoRef = useRef(null);
  const navigate=useNavigate();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-h-full lg:min-w-full lg:min-h-0 max-w-none"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-10">
      <h3 className="text-3xl mt-4 mb-4 max-lg:text-2xl font-mono font-semibold text-white shadow-text uppercase">
          Perception 2K25 Official <br /> <span id="heading" className="font-ethnocentric text-4xl max-lg:text-2xl">Merchandise</span>
        </h3>
        <button
          onClick={() => window.open('https://forms.gle/Qu6kbWWFbeZsnxvM6','_blank')}
          className="bg-white text-[#8a4fe7] font-bold py-3 px-8 mt-[500px] rounded-full text-lg transition duration-300 ease-in-out hover:bg-violet-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Get Yours Now
        </button>
      </div>
    </div>
  );
};

export default SectionMerch;