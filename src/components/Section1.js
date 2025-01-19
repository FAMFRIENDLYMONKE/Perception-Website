import React from "react";
import robo from "../assets/robot.png";

const Section1 = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://cdn.prod.website-files.com/65b71fcb4e38b0b131977ef6/65c05dccab3fd8f47cfed8d5_banner%20image.webp"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <p className="tracking-tighter text-white">
              <span className="font-sans font-normal text-7xl">Get Ready For</span>
              <br />
              <span className="font-serif font-normal text-8xl">PERCEPTION</span>
            </p>
            <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                Perception is the Annual Tech Fest of Odisha University of Technology and Research, Bhubaneswar. This is a three day long festival for technocrats with a bunch of technical and fun filled events. This premier inter college event of our esteemed University allows students from different corners of the state to challenge, compete and show their technical abundance.
            </p>
            <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
              <a
                href="#"
                title=""
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2
                  mb-2
                  font-sans
                  text-base
                  font-semibold
                  transition-all
                  duration-200
                  border-2 border-transparent
                  rounded-full
                  sm:leading-8
                  bg-white
                  sm:text-lg
                  text-black
                  hover:bg-opacity-90
                  no-underline
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                "
                role="button"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
