import React , {useEffect} from "react";
import Profile from "./Profile";
import { profiles } from "../profiles";
import AOS from 'aos';
import 'aos/dist/aos.css';


function OurTeam() {

      useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
      }, [])

  return (
    <div className="mx-2 mt-10">
      <div className="flex flex-col items-center justify-center">
        <h3 id="heading" className="text-6xl max-lg:text-5xl font-semibold font-martian-sunrise">
          Our team
        </h3>
        <br />
        <div className="w-[80%] max-w-screen-lg flex justify-center">
          {/* <h1 className="max-w-[700px] text-center text-white font-semibold text-4xl sm:text-5xl">
            Meet our <span className="text-violet-600">team</span> and get more experience
          </h1> */}
        </div>
        {/* <br />
        <br /> */}
      </div>
      <div id="profile" className="flex justify-evenly flex-wrap" data-aos="fade-right">
        {profiles.map((profile,idx)=>(<Profile key={idx} imag={profile.imag} role={profile.role} name={profile.name} insta={profile.insta} twit={profile.twit} lin={profile.lin} git={profile.git} clubsite={profile.clubsite} logo={profile.logo}/>))}
      </div>
    </div>
  );
}

export default OurTeam;
