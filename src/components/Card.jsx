import React, { useState } from "react";
import { flagshipevents } from "../events.js";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

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
  // const [isFlipped, setIsFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const toggleFlip = () => {
  //   setIsFlipped(!isFlipped);
  // };

  return (
    <>
    <div
      className="relative w-full mx-auto mt-12 perspective"
      style={{ maxWidth: "350px" }}
    >
      <div
        className="relative w-full h-[550px]"
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-lg"
        >
          <div className="flex mx-auto relative h-[550px]">
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
                {event.short}
              </p>
              <div className="bg-glass px-4 py-2 rounded-tr-2xl rounded-bl-lg">
                <button
                  className="px-16 py-2 bg-black text-white rounded-full hover:bg-gray-800"
                  onClick={() => setIsOpen(true)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} title={event.eventName} desc={event.description} date={event.date} st={event.startTime} et={event.endTime} cb={event.clubName} register={event.reglink}/>
    </>
  );
};

const SpringModal = ({ isOpen, setIsOpen, title, desc, date, st, et, cb, register}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2 font-ethnocentric">
                {title}
              </h3>
              <p className="text-left mb-6 font-mono">{desc}</p>
              <div className="flex justify-between font-sans items-end mt-4 mb-4">
                {/* Bottom-left section */}
                <div className="text-left">
                  <p className="text-lg font-medium text-white">
                    <strong>Club:</strong> {cb}
                  </p>
                  <p className="text-lg font-medium text-white">
                    <strong>Date:</strong> {date}
                  </p>
                </div>
                
                {/* Bottom-right section */}
                <div className="text-right">
                  <p className="text-lg font-medium text-white">
                    <strong>Start Time:</strong> {st}
                  </p>
                  <p className="text-lg font-medium text-white">
                    <strong>End Time:</strong> {et}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors font-mono text-white font-semibold w-full py-2 rounded border border-white"
                >
                  Exit
                </button>
                <button
                  onClick={() => window.open(register, "_blank")}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-mono font-semibold w-full py-2 rounded"
                >
                  Register
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Card;
