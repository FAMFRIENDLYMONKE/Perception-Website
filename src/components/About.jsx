import React,{useEffect, useRef} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import carImage from "../assets/21526.jpg";
import vid from "../assets/aboutus.mp4";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, [])
    const videoRef = useRef(null);
    useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, [])

  return (
    <div className="w-full mt-10 min-h-[700px] flex flex-col-reverse lg:flex-row items-center justify-around lg:gap-0 gap-6" id="section4">
      <div className="lg:w-[45%] w-[80%] flex justify-around" data-aos="fade-left">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-[500px] h-[500px] object-cover"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="lg:w-[45%] w-[80%] my-auto flex flex-col items-center lg:block" >
        <div className="flex lg:justify-left items-center space-x-6">
          <div className="w-[100px] bg-gray-400 h-[1px] hidden lg:block"  data-aos="fade-right"></div>
          <h3 id="heading" className="text-3xl lg:text-3xl font-semibold font-martian-sunrise tracking-wide">PERCEPTION</h3>
          {/* <h1 id="aboutheading" className="text-5xl max-sm:text-center font-semibold font-martian-sunrise text-violet-600">Perception</h1> */}
        </div>
        <br />
        <div className="text-white" data-aos="fade-right">
          <p className="text-gray-400 text-md max-w-[500px] text-justify">
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
    </div>
  );
}

export default About;
