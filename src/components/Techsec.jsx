import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic from "../assets/college.png";

function Techsec() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, [])

  return (
    <div className="w-full mt-10 min-h-[500px] flex flex-col-reverse lg:flex-row items-center justify-around lg:gap-0 gap-6">
          <div className="lg:w-[45%] w-[80%] xl:ml-32 my-auto flex flex-col items-center lg:block">
            <div className="flex lg:justify-left items-center space-x-6
            ">
            <div className="w-[100px] bg-gray-400 h-[1px] hidden lg:block" data-aos="fade-left"></div>
            <h3 id="heading" className="text-3xl lg:text-3xl font-semibold font-martian-sunrise tracking-wide">TECHNICAL SOCIETY </h3>
            </div>
            <br />
            <div className="text-white"  data-aos="fade-left">
            {/* <h1 id="aboutheading" className="text-5xl max-lg:text-center font-semibold font-martian-sunrise text-violet-600">Perception</h1> */}
            {/* <br /> */}
            <p className="text-gray-400 text-md max-w-[500px] text-justify">
            It gives us immense pleasure to organize Perception, our flagship college technical fest that showcases innovation, creativity, and technical prowess. This fest is a testament to our students' dedication and brilliance, providing a platform to learn, collaborate, and excel. From cutting-edge workshops to thrilling competitions, Perception reflects our collective spirit of pushing boundaries and embracing new challenges. We heartfelt gratitude to the organizing team, participants, and faculty for their unwavering support in making this event a grand success. Together, let’s continue fostering a culture of excellence and innovation.
            </p>
            <br />
            <br />
            {/* <button id="shimmer-btn" onClick={() => navigate("/merch")}
            className="px-14 py-3 rounded font-bold font-mono bg-violet-600">Merch</button> */}
            </div>
          </div>
          <div className="lg:w-[45%] w-[80%] flex justify-around"  data-aos="fade-right">
            <img src={pic} alt="college pic" className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-auto object-cover" />
          </div>
        </div>
  );
}

export default Techsec;
