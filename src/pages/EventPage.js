import { events } from "../JsonFile/jsonfile";
import React from "react";
const EventPage = () => {
    return (
      <div className="bg-black text-white min-h-screen mt-4">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold text-purple-400">Explore Events</h1>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={event.image}
                  alt={event.eventName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-purple-400 mb-2">
                    {event.eventName}
                  </h2>
                  <p className="text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>
                  <p className="text-gray-400 text-xs">
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
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default EventPage;