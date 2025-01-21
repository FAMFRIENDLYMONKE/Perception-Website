import React from "react";
import { FaGithub, FaInstagram,FaLinkedin,FaTwitter } from "react-icons/fa6";


function Profile({ role, name }) {
  return (
    <>
      <div className=" max-w-[340px] h-[500px] relative group overflow-hidden">
        <div className="avatar relative">
          <div className="w-full rounded">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="  bg-violet-700 h-[40px] min-w-[160px] absolute bottom-0 left-0 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-none rounded-tr-[5px] rounded-bl-none rounded-br-none">
            <div className="flex justify-evenly text-gray-300">
            <FaInstagram className="z-10 h-10 w-6"/>
            <FaTwitter className="z-10 h-10 w-6"/>
            <FaLinkedin className="z-10 h-10 w-6"/>
            <FaGithub className="z-10 h-10 w-6"/>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg pt-8 text-gray-400">{role}</h2>
        </div>
        <div>
          <h1 className="text-2xl text-white font-semibold">{name}</h1>
        </div>
      </div>
    </>
  );
}

export default Profile;
