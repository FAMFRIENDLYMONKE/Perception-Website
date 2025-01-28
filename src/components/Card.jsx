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
  const [isHovered, setIsHovered] = useState(false);

  // const toggleFlip = () => {
  //   setIsFlipped(!isFlipped);
  // };

  return (
    <>
    <div
        className="relative w-full mx-auto mt-12 perspective"
        style={{ maxWidth: "350px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative w-full bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out ${
            isHovered ? "transform -translate-y-2" : ""
          }`}
        >
          <div className="relative h-48 w-full">
            <img
              src={event.image || "/placeholder.svg?height=200&width=400"}
              alt={event.eventName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 border-b-2 border-violet-500">
            <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">{event.eventName}</h3>
            <p className="text-gray-600 mb-4">{event.short}</p>
            <div className="relative group">
              <button
                className="w-full py-2 text-violet-600 font-semibold group-hover:text-violet-700 transition-colors duration-200"
                onClick={() => setIsOpen(true)}
              >
                Details ➤
              </button>
              <div
                className="absolute bottom-0 left-0 h-0.5 bg-violet-600 transition-all duration-300 ease-in-out"
                style={{ width: isHovered ? "100%" : "0%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} title={event.eventName} desc={event.description} date={event.date} st={event.startTime} et={event.endTime} cb={event.clubName} logo={event.logo} register={event.reglink}/>
    </>
  );
};

const SpringModal = ({ isOpen, setIsOpen, title, desc, date, st, et, cb, register, logo}) => {
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
              <div className="bg-inherit bg-blend-mask w-20 h-20 mb-2 rounded-xl text-3xl text-indigo-600 grid place-items-center mx-auto">
                <img src={logo} alt="logo" className="w-14 h-14" />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2 font-ethnocentric">
                {title}
              </h3>
              <p className="text-left mb-6 font-mono">{desc}</p>
              <div className="flex justify-between font-sans items-end mt-4 mb-4" id="modalText">
                {/* Bottom-left section */}
                <div className="text-left">
                  <p className="text-base font-medium text-white">
                    <strong>Club:</strong> {cb}
                  </p>
                  <p className="text-base font-medium text-white">
                    <strong>Date:</strong> {date}
                  </p>
                </div>
                
                {/* Bottom-right section */}
                <div className="text-right">
                  <p className="text-base font-medium text-white">
                    <strong>Start Time:</strong> {st}
                  </p>
                  <p className="text-base font-medium text-white">
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
