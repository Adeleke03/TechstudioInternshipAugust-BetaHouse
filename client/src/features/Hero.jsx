import React, { useState } from "react";

const Hero = () => {
  const [bedroom, setBedroom] = useState(0);

  const incrementBedroom = () => setBedroom((prev) => prev + 1);
  const decrementBedroom = () => {
    if (bedroom > 0) setBedroom((prev) => prev - 1);
  };

  return (
    <main className="wrapper px-4 py-10">
      {/* Hero text */}
      <section className="text-center mb-10">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-[68px] leading-tight tracking-wide">
          Browse Our Properties
        </h1>
        <p className="text-base md:text-xl lg:text-[26px] leading-relaxed mt-4">
          Find your perfect home among our curated properties. Start browsing now!
        </p>
      </section>

      {/* Hero Input Section */}
        <section className="p-5 bg-white/15">

      <div className="flex flex-wrap md:flex-nowrap bg-white  rounded-lg shadow-md overflow-hidden max-w-6xl mx-auto">
        {/* Location */}
        <div className="flex flex-col justify-center p-4 border-b md:border-b-0 md:border-r w-full md:w-1/3">
          <label className="text-xs font-semibold text-gray-500 mb-1">LOCATION</label>
          <input
            type="text"
            placeholder="eg. Gbagada"
            className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
            />
        </div>

        {/* Property Type */}
        <div className="flex flex-col justify-center p-4 border-b md:border-b-0 md:border-r w-full md:w-1/3">
          <label className="text-xs font-semibold text-gray-500 mb-1">PROPERTY TYPE</label>
          <input
            type="text"
            placeholder="eg. Duplex, Bedroom Flat"
            className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
            />
        </div>

        {/* Bedroom */}
        <div className="flex flex-col justify-center p-4 border-b md:border-b-0 md:border-r w-full md:w-1/3">
          <label className="text-xs font-semibold text-gray-500 mb-1">BEDROOM</label>
          <div className="flex items-center space-x-4 mt-1">
            <button
              onClick={decrementBedroom}
              className="text-lg font-bold w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full"
              >
              -
            </button>
            <span className="text-black">{bedroom}</span>
            <button
              onClick={incrementBedroom}
              className="text-lg font-bold w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full"
              >
              +
            </button>
          </div>
        </div>

        {/* Button */}
        
          <button className="bg-[#3D9970] text-white font-[400] px-8 py-2 text-sm rounded-md hover:bg-green-700 transition w-full md:w-auto ">
            Find Property
          </button>
        
      </div>
              </section>
    </main>
  );
};

export default Hero;
