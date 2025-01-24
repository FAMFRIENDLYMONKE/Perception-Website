import React,{useEffect} from "react";
import AOS from 'aos';
import pic from "../assets/aryan.jpg";

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
        <h3 id="heading" className="text-5xl lg:text-4xl font-semibold font-martian-sunrise">DEPUTY TECHNICAL SECRETARY</h3>
        {/* <h1 id="aboutheading" className="text-5xl max-sm:text-center font-semibold font-martian-sunrise text-violet-600">Perception</h1> */}
        </div>
        <br />
        <div className="text-white" data-aos="fade-right">
        <p className="text-gray-400 text-lg max-w-[500px] text-justify">
        Perception, our much-anticipated technical fest, is a celebration of innovation, learning, and collaboration. It’s a platform where ideas come to life, talents shine, and knowledge thrives. As the Deputy Technical Secretary, I am proud to witness the passion and hard work of our students and organizers who have made this event a success. From engaging workshops to exciting competitions, Perception embodies the true spirit of technical excellence. A heartfelt thank you to everyone who contributed to this remarkable journey. Let’s continue to innovate and inspire!
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
