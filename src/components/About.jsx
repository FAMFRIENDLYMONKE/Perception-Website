import React from "react";
import carImage from "../assets/21526.jpg";

function About() {
  return (
    <div className="w-full mt-10 min-h-[700px] flex flex-col-reverse lg:flex-row items-center justify-around lg:gap-0 gap-6" id="section4">
      <div className="lg:w-[45%] w-[80%] flex justify-around">
        <img src={carImage} alt="car" className="md:w-[500px] object-contain" />
      </div>
      <div className="lg:w-[45%] w-[80%] my-auto flex flex-col items-center lg:block">
        <div className="flex lg:justify-left items-center space-x-6
        ">
        <div className="w-[100px] bg-gray-400 h-[1px] hidden lg:block"></div>
        <h3 id="heading" className="text-5xl lg:text-4xl font-semibold font-martian-sunrise">PERCEPTION</h3>
        {/* <h1 id="aboutheading" className="text-5xl max-sm:text-center font-semibold font-martian-sunrise text-violet-600">Perception</h1> */}
        </div>
        <br />
        <div className="text-white">
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
    </div>
  );
}

export default About;
