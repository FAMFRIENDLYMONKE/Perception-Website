import React, { useState } from "react";
import { flagshipevents } from "../events.js";

const Card = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 mt-10 lg:grid-cols-3 md:grid-cols-2">
      {flagshipevents.map((event, index) => (
        <FlippableCard key={index} event={event} />
      ))}
    </div>
  );
};

const FlippableCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-full mx-auto mt-12 perspective"
      style={{ maxWidth: "350px" }}
    >
      <div
        className={`relative w-full h-[550px] transform transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <div className="flex mx-auto relative max-h-[530px]">
            <img
              src={event.image}
              alt={event.eventName}
              className="rounded-lg max-w-[100%]"
            />
            <div className="absolute bottom-0 rounded-lg w-fit leading-tight">
              <h1 className="text-2xl font-bold text-white relative top-4">
                <p className="bg-glass px-4 py-1 rounded-tr-2xl rounded-br-lg inline-block">
                  {event.eventName}
                </p>
              </h1>
              <p className="mt-4 text-xs text-gray-300 max-w-[300px] bg-glass py-2 px-4">
                {event.description}
              </p>
              <div className="bg-glass px-4 py-2 rounded-tr-2xl rounded-bl-lg">
                <button
                  className="px-16 py-2 bg-black text-white rounded-full hover:bg-gray-800"
                  onClick={toggleFlip}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute w-full h-full bg-gray-800 text-white rounded-xl shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full px-8">
            <h2 className="text-3xl font-bold mb-4">{event.eventName}</h2>
            <p className="text-lg mb-8">{event.fullDescription}</p>
            <button
              className="px-10 py-3 bg-green-500 text-white rounded-full hover:bg-green-700"
              onClick={toggleFlip}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
