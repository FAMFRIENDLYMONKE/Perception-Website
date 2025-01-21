import React from "react";
import Profile from "./Profile";
import { profiles } from "../profiles";

function OurTeam() {
  return (
    <div className="mx-2 mt-10">
      <div className="flex flex-col items-center justify-center">
        <h3 id="heading" className="text-2xl lg:text-xl font-semibold">
          Our team
        </h3>
        <br />
        <div className="w-[80%] max-w-screen-lg flex justify-center">
          <h1 className="max-w-[700px] text-center text-white font-semibold text-4xl sm:text-5xl">
            Meet our <span className="text-violet-600">team</span> and get more experience
          </h1>
        </div>
        <br />
        <br />
      </div>
      <div id="profile" className="flex justify-evenly flex-wrap">
        {profiles.map((profile,idx)=>(<Profile key={idx} role={profile.role} name={profile.name} />))}
      </div>
    </div>
  );
}

export default OurTeam;
