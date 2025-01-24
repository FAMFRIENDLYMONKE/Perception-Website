import React, { useState } from "react";
import { events28, events29, events30 } from "../events.js";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");

  
  const filterEvents = (events) => {
    return events.filter((event) =>
      event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) || event.clubName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };


  const filteredEvents28 = filterEvents(events28);
  const filteredEvents29 = filterEvents(events29);
  const filteredEvents30 = filterEvents(events30);

  return (
    <>
      <div className="bg-black text-white min-h-screen mt-4">
        <div className="text-center py-10">
          <h1 className="text-6xl mt-4 font-bold font-ethnocentric text-purple-400">EXPLORE EVENTS</h1>
        </div>
        <div className="text-center py-5">
          <input
            type="text"
            placeholder="Search by Event Name or Club Name..."
            className="w-3/4 sm:w-1/2 px-4 py-2 rounded bg-gray-800 text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Wednesday, 28th January */}
        <div className="text-center py-5">
          <br />
          <h2 className="text-5xl font-oswald text-gray-200">
            Tuesday, 28th January
          </h2>
          <br />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents28.map((event, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={event.image}
                  alt={event.eventName}
                  className="w-full h-[22rem] object-cover p-2"
                />
                <div className="p-4">
                  <h2 className="text-xl justify-center font-semibold font-ethnocentric text-center text-purple-400 mb-2">
                    {event.eventName}
                  </h2>
                  <p className="text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>
                  {/* <p className="text-gray-400 text-xs">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="text-gray-400 text-xs">
                    <strong>Time:</strong> {event.startTime} - {event.endTime}
                  </p>
                  <p className="text-gray-400 text-xs">
                    <strong>Club:</strong> {event.clubName}
                  </p>
                  <p className="text-gray-400 text-xs">
                    <strong>Day:</strong> {event.day}
                  </p> */}
                  <div className="mt-4 ">
                    <button onClick={() => window.open(event.reglink,'_blank')}
                    className="bg-purple-500 text-white font-semibold py-2 w-full rounded mt-auto hover:bg-purple-600 transition duration-300">
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thursday, 29th January */}
        <div className="text-center py-5">
          <br />
          <h2 className="text-5xl font-oswald text-gray-200">
          Wednesday, 29th January
          </h2>
          <br />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents29.map((event, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={event.image}
                  alt={event.eventName}
                  className="w-full h-[22rem] object-cover p-2"
                />
                <div className="p-4">
                  <h2 className="text-xl flex justify-center font-semibold font-ethnocentric text-center text-purple-400 mb-2">
                    {event.eventName}
                  </h2>
                  <p className="text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>
                  {/* <p className="text-gray-400 text-xs">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="text-gray-400 text-xs">
                    <strong>Time:</strong> {event.startTime} - {event.endTime}
                  </p>
                  <p className="text-gray-400 text-xs">
                    <strong>Club:</strong> {event.clubName}
                  </p>
                  <p className="text-gray-400 text-xs">
                    <strong>Day:</strong> {event.day}
                  </p> */}
                  <div className="mt-4">
                    <button className="bg-purple-500 text-white font-semibold py-2 w-full rounded hover:bg-purple-600 transition duration-300">
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Friday, 30th January */}
        <div className="text-center py-5">
          <br />
          <h2 className="text-5xl font-oswald text-gray-200">
            Thursday, 30th January
          </h2>
          <br />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents30.map((event, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={event.image}
                  alt={event.eventName}
                  className="w-full h-[22rem] object-cover p-2"
                />
                <div className="p-4">
                  <h2 className="text-xl flex justify-center font-semibold font-ethnocentric text-center text-purple-400 mb-2">
                    {event.eventName}
                  </h2>
                  <p className="text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>
                  {/* <p className="text-gray-400 text-xs">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="text-gray-400 text-xs">
                    <strong>Time:</strong> {event.startTime} - {event.endTime}
                  </p>
                  <p className="text-gray-400 text-xs">
                    <strong>Club:</strong> {event.clubName}
                  </p>
                  <p className="text-gray-400 text-xs">
                    <strong>Day:</strong> {event.day}
                  </p> */}
                  <div className="mt-4">
                    <button className="bg-purple-500 text-white font-semibold py-2 w-full rounded hover:bg-purple-600 transition duration-300">
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
