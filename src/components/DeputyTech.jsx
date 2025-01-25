import React,{useEffect} from "react";
import AOS from 'aos';
import pic from "../assets/photofactory.png";

function DeputyTech() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, [])

  return (
    <div className="w-full mt-10 min-h-[700px] flex flex-col-reverse lg:flex-row items-center justify-around lg:gap-0 gap-6" id="section4">
      <div className="lg:w-[45%] w-[80%] flex justify-around" data-aos="fade-left">
        <img src={pic} alt="pic" className="w-[500px] h-[500px] object-contain" />
      </div>
      <div className="lg:w-[45%] w-[80%] my-auto flex flex-col items-center lg:block" >
        <div className="flex lg:justify-left items-center space-x-6
        ">
        <div className="w-[100px] bg-gray-400 h-[1px] hidden lg:block"  data-aos="fade-right"></div>
        <h3 id="heading" className="text-5xl lg:text-4xl font-semibold font-martian-sunrise">MEDIA PARTNER</h3>
        {/* <h1 id="aboutheading" className="text-5xl max-sm:text-center font-semibold font-martian-sunrise text-violet-600">Perception</h1> */}
        </div>
        <br />
        <div className="text-white" data-aos="fade-right">
        <p className="text-gray-400 text-lg max-w-[500px] text-justify">
        PhotoFactory, the official media partner of Perception Technical Fest, captures every moment of innovation, creativity, and excitement. As the lens behind the scenes, we ensure that each event, project, and achievement is beautifully documented and shared. Join us in celebrating the spirit of technology and artistry through our captivating visuals!
        </p>
        <br />
        <br />
        {/* <button id="shimmer-btn" className="px-14 py-3 rounded font-semibold bg-violet-600">About us</button> */}
        </div>
      </div>
    </div>
  );
}

export default DeputyTech;
