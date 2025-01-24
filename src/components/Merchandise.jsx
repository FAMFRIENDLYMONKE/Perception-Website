import React, { useRef, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import vid from "../assets/chokha.mp4";

function Merchandise() {
    const videoRef = useRef(null);
    useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, [])

  return (
    <div className="w-full mt-10 min-h-[700px] flex flex-col-reverse lg:flex-row items-center justify-around lg:gap-0 gap-6">
      <div className="lg:w-[45%] w-[80%] my-auto flex flex-col items-center lg:block">
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
        Perception is the Annual Tech Fest of Odisha University of
        Technology and Research, Bhubaneswar. This is a three day long festival
        for technocrats with a bunch of technical and fun filled events. This
        premier inter college event of our esteemed University allows students
        from different corners of the state to challenge, compete and show their
        technical abundance.
        </p>
        <br />
        <br />
        {/* <button id="shimmer-btn" className="px-14 py-3 rounded font-semibold bg-violet-600">About us</button> */}
        </div>
      </div>
      <div className="lg:w-[45%] w-[80%] flex justify-around"  data-aos="fade-right">
        {/* <img src="https://img.freepik.com/premium-photo/cyberpunk-hacker-wearing-hoodie-with-face-drawn-it_1059430-95471.jpg" alt="car" className="md:w-[500px] object-contain" /> */}
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
