import React from "react";
import Marquee from "react-fast-marquee";
import Sponser from "./Sponser";
import { stat } from "../stat";

function SponserMarque() {
  return (
    <>
      <div
        className="absolute z-10 left-0"
        style={{
          borderColor: "#808088",
        }}
      >
        <div id="fade-left" className="w-36 h-[116px] bg-gradient-to-r from-black"></div>
      </div>

      <div
        className="absolute z-10 right-0"
        style={{
          borderColor: "#808088",
        }}
      >
        <div
          id="fade-right"
          className="w-36 h-[116px] bg-gradient-to-l from-black"
        ></div>
      </div>

      <div>
        <div
          className="flex border-t-2 border-b relative"
          style={{
            color: "#808088",
            borderColor: "#808088",
            background: "#000212",
          }}
        >
          <Marquee speed={100} loop={0} direction="right">
            {stat.map((stat, index) => (
              <Sponser key={index} logo={""} name={stat.name} />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default SponserMarque;
