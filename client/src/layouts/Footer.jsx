import React from "react";
import Logo from "../utils/Logo";
import LocationIcon from "../assets/locationIcon.png";
import PhoneIcon from "../assets/phoneIcon.png";
import EmailIcon from "../assets/Icon (2).png";

const Footer = () => {
  return (
    <>
      <main className="bg-[#3D9970] wrapper text-white  ">
        {/* section for footer */}
        <section className="lg:flex lg:justify-between ">
          {/* div section for first BH directory */}
          <div className="lg:flex lg:flex-col lg:w-[373px]">
            <Logo />
            <p>
              Discover, rent, and find your ideal home hassle-free with
              BetaHouse. Take control of your rental journey today!
            </p>
            {/* div for icons and context */}
            <div>
              <figure className="flex items-center">
                <img className="p-2" src={LocationIcon} alt="" />
                <figcaption> 95 Tinubu Estate, Lekki, Lagos</figcaption>
              </figure>
              <figure className="flex items-center">
                <img className="p-2" src={PhoneIcon} alt="" />
                <figcaption> +234 675 8935 675</figcaption>
              </figure>
              <figure className="flex items-center">
                <img className="p-2" src={EmailIcon} alt="" />
                <figcaption> support@rentbetahouse.com</figcaption>
              </figure>
            </div>
          </div>
          {/* div section for Footer menu */}
          {/* div section for Footer menu */}
<div className="lg:flex lg:gap-10 py-7 lg:py-0">
  {/* Quick Links */}
  <div className="py-4 lg:py-0">
    <h3 className="font-[600] text-[23px] leading-[120%] tracking-[0%] mb-2">Quick Links</h3>
    <ul className="space-y-1">
      <li><a href="/">Home</a></li>
      <li><a href="/properties">Properties</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact us</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </div>

  {/* More */}
  <div>
    <h3 className="font-[600] text-[23px] leading-[120%] tracking-[0%] mb-2">More</h3>
    <ul className="space-y-1">
      <li><a href="/agents">Agents</a></li>
      <li><a href="/houses">Affordable Houses</a></li>
      <li><a href="/faqs">FAQ’s</a></li>
    </ul>
  </div>

  {/* Popular Search */}
  <div>
    <h3 className="font-[600] text-[23px] leading-[120%] tracking-[0%] mb-2">Popular Search</h3>
    <ul className="space-y-1">
      <li><a href="/apartments">Apartment for sale</a></li>
      <li><a href="/apartments">Apartment for rent</a></li>
      <li><a href="/bedroom">3 bedroom flat</a></li>
      <li><a href="/bungalow">Bungalow</a></li>
    </ul>
  </div>
</div>

        </section>
        <hr />
        <section className="font-Poppins lg:wrapper md:flex md:justify-around p-3">
          <p className="text-[14px] font-[400] leading-[21px] ">Copyright 2023 Betahouse | Designed by Michael.fig</p>
          <p className="leading-[22.5px] font-[500] tracking-[0%] text-[15px] " >Privacy Policy</p>
        </section>
      </main>
    </>
  );
};

export default Footer;
