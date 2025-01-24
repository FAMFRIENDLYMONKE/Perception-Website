import React, { useRef, useEffect } from "react";
import AOS from 'aos';
import { NavLink, useNavigate, useLocation,Link } from "react-router-dom"; 
import 'aos/dist/aos.css';
import vid from "../assets/chokha.mp4";

function Merchandise() {
    const videoRef = useRef(null);
    useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, [])
    const navigate = useNavigate();
  return (
    <div className="w-full mt-10 min-h-[700px] flex flex-col-reverse lg:flex-row items-center justify-around lg:gap-0 gap-6">
      <div className="lg:w-[45%] w-[80%] xl:ml-32 my-auto flex flex-col items-center lg:block">
        <div className="flex lg:justify-left items-center space-x-6
        ">
        <div className="w-[100px] bg-gray-400 h-[1px] hidden lg:block" data-aos="fade-left"></div>
        <h3 id="heading" className="text-4xl lg:text-4xl font-semibold font-martian-sunrise">MERCHANDISE</h3>
        </div>
        <br />
        <div className="text-white"  data-aos="fade-left">
        {/* <h1 id="aboutheading" className="text-5xl max-lg:text-center font-semibold font-martian-sunrise text-violet-600">Perception</h1> */}
        {/* <br /> */}
        <p className="text-gray-400 text-lg max-w-[500px] text-justify">
        The trendiest merchandise in town! Grab your Perception merchandise now!
        </p>
        <br />
        <br />
        <button id="shimmer-btn" onClick={() => navigate("/merch")}
        className="px-14 py-3 rounded font-bold font-mono bg-violet-600">Merch</button>
        </div>
      </div>
      <div className="lg:w-[45%] w-[80%] flex justify-around"  data-aos="fade-right">
        <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="md:w-[500px] h-[500px] object-contain"
              >
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
      </div>
    </div>
  );
}

export default Merchandise;
