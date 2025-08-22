import React from "react";
import { popularproperties } from "../properties.js";
import LocateIcon from "../assets/Icon-5.png";


const Discover = () => {
  return (
    <main className="wrapper">
      <section>
        <header>
          <h1 className="font-[600] md:text-[50px] leading-[54px] tracking-[0%] uppercase text-[#0F1A1E] flex flex-col items-center">
            Discover Our Popular Properties
          </h1>
        </header>

        {/* Carousel section */}
        <div className="carousel relative carousel-center text-white bg-white rounded-box max-w-full space-x-4 p-4 overflow-x-auto">
          {popularproperties.map((property) => (
            <div
              key={property.id}
              className="carousel-item flex flex-col bg-white rounded-box shadow-lg overflow-hidden w-80"
            >
              <img
                src={property.image}
                alt={property.title}
                className="rounded-t-box w-full h-60 object-cover"
              />
              {/* property details */}
              <div className="p-4 text-left font-medium text-[16px] text-white bg-[#4A4A4C33]">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-xl font-bold">{property.price}</p>
                <p className="text-sm ">
                  {property.bed} &nbsp; | &nbsp;
                  {property.bath} &nbsp; | &nbsp;
                  {property.Size}
                </p>
                <p className="text-sm  mt-1">
                  <img src={LocateIcon} alt="" />{property.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Discover;
