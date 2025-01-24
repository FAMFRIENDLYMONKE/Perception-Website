import React from "react";
import { flagshipevents } from "../events.js";

const Card = () => {
  return (
    <div className="flex flex-col items-center">
      {flagshipevents.map((event, index) => (
        <div
          key={index}
          className="mt-24 flex flex-col md:flex-row items-center bg-none p-8 rounded-xl shadow-lg max-w-[80%] lg:max-w-[1000px] mx-auto"
        >
          <div className="flex mx-auto relative max-h-[530px]">
            <img
              src={event.image}
              alt="Skincare Model"
              className="rounded-lg max-w-[100%]"
            />
            <div className="absolute bottom-0 rounded-lg w-fit leading-tight">
              <h1 className="text-5xl font-bold text-white relative top-4">
                <p className="bg-glass px-6 py-1 rounded-tr-2xl rounded-br-lg inline-block">
                  {event.eventName}
                </p>
              </h1>
              <p className="mt-4 text-xs text-gray-300 max-w-[300px] bg-glass py-2 px-6">
                {event.description}
              </p>
              <div className="bg-glass px-6 py-4 rounded-tr-2xl rounded-bl-lg">
                <button className="px-28 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                  Register
                </button>
              </div>
            </div>

            <div className="absolute top-8 left-8 bg-glass p-2 rounded shadow-lg">
              <p className="text-lg font-medium text-gray-300">
                {event.clubName}
              </p>
            </div>
            <div className="absolute bottom-8 right-8 bg-glass p-4 rounded shadow-lg">
              <p className="text-sm font-bold text-gray-300">
                {event.startTime}
              </p>
              <p className="text-sm font-bold text-gray-300">{event.endTime}</p>
              <p className="text-lg font-bold text-green-600">{event.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
